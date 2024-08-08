import fs from "fs";
import path from "path";
import { Express } from "express-serve-static-core";

export const routerLoader = (app: Express) => {
    const modulesPath = path.join(__dirname, "modules");

    fs.readdirSync(modulesPath).forEach(async (dir) => {
        const modulePath = path.join(modulesPath, dir);

        if (fs.statSync(modulesPath).isDirectory()) {
            const controllerPath = path.join(modulePath, `${dir}Controller.ts`);
            
            if (fs.existsSync(controllerPath)) {
                const controller = await import(controllerPath);

                if (
                    controller.default &&
                    typeof controller.default === "function"
                ) {
                    app.use(controller.default);
                }
            }
        }
    });
};

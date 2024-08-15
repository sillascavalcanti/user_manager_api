export const converteToInteger = async (query: string) => {
    const [, , id] = query.split("/");

    const convertId = +id;

    return convertId;
};

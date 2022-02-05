export const returnUniqueArray = (lists: any[]) =>
    Array.from(new Set([...lists]));

export const sum = (a,b) => a+b;
export const mul = (a,b) => a*b;

export const PI = 3.14;
export const g = 9.8;
// export is the keyword

/*
see here only the last export is not considered as like in case of module.exports where object items
gets overwrote. So from this we can import whatever piece we want(marked export) when importing
*/
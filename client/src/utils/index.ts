// get Year
export const year = new Date().getFullYear();

// regex trasform string en lowercase
export const lowercase = (str: string) => str.replace(' ', '-').toLowerCase();

// convert price from products
export const convertPrice = (price: number) => price / 100;

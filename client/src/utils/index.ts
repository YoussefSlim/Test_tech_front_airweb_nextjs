// get Year
export const year = new Date().getFullYear();

// regex trasform string en lowercase
export const lowercase = (str: string) => str.replace(' ', '-').toLowerCase();

// convert price from products
export const convertPrice = (price: number) => price / 100;

// sort Categories by index
export const sortIndex = (a: { index: number }, b: { index: number }) => b.index - a.index;

// sort Product by label
export const sortLabel = (a: { label: string }, b: { label: string }) =>
  `${a.label}`.replace(/([^\D])\s\x\s/g, '').localeCompare(b.label.replace(/([^\D])\s\x\s/g, ''));

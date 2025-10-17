export const isEmail = (value: string) =>
  /^[\w.!#$%&'*+/=?^`{|}~-]+@[\w-]+(?:\.[\w-]+)+$/.test(value);

export const isWhatsapp = (value: string) =>
  /^\+?\d{10,15}$/.test(value.replace(/\s|-/g, ''));

export const isRequired = (value: string) => value.trim().length > 0;

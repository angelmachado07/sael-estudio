export const CONTACT_EMAIL = "saelestudiouy@gmail.com";
export const WHATSAPP_NUMBER = "";

export const createWhatsAppUrl = (message: string) => {
  const number = WHATSAPP_NUMBER.replace(/\D/g, "");

  return number
    ? `https://wa.me/${number}?text=${encodeURIComponent(message)}`
    : null;
};

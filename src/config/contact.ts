export const CONTACT_EMAIL = "saelestudiouy@gmail.com";
export const WHATSAPP_NUMBER = "+59892934906";
export const INSTAGRAM_URL = "https://www.instagram.com/saelestudio/";

export const GENERAL_WHATSAPP_MESSAGE =
  "Hola, quiero saber más sobre los servicios de Sael Estudio.";
export const PROJECT_WHATSAPP_MESSAGE =
  "Hola, quiero conversar sobre un proyecto y conocer cómo podrían ayudarme.";

export const createWhatsAppUrl = (message: string) => {
  const number = WHATSAPP_NUMBER.replace(/\D/g, "");

  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
};

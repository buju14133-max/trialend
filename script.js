/*
  ==========================================
  DIGITAL SALES BOOK CONFIGURATION
  ==========================================

  Replace WHATSAPP_LINK below with your
  actual WhatsApp DM link.

  Example:
  https://wa.me/2348012345678?text=Hello%20DSB

  ==========================================
*/

const WHATSAPP_LINK = "WHATSAPP_LINK";

const whatsappButton = document.getElementById("whatsappButton");

if (WHATSAPP_LINK && WHATSAPP_LINK !== "WHATSAPP_LINK") {
  whatsappButton.href = WHATSAPP_LINK;
}

/*
  ==========================================
  DIGITAL SALES BOOK CONFIGURATION
  ==========================================

  Replace WHATSAPP_LINK below with your
  actual WhatsApp DM link.

  Example:
  https://wa.me/2348180112699?text=Hello%20DSB

  ==========================================
*/

const WHATSAPP_LINK =
  "https://wa.me/2348180112699?text=Hello%20DSB";

const whatsappButton =
  document.getElementById("whatsappButton");

if (whatsappButton) {
  whatsappButton.href = WHATSAPP_LINK;
}

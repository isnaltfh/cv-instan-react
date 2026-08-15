import html2pdf from "html2pdf.js";

export function exportAsPDF(selector, filename = "cv-document.pdf") {
  const element = document.querySelector(selector);
  if (!element) return;

  const opt = {
    margin: [12, 10, 14, 10], // top, left, bottom, right (mm)
    filename,
    image: { type: "jpeg", quality: 0.98 },
    html2canvas: {
      scale: 2,
      useCORS: true,
      scrollX: 0,
      scrollY: 0,
    },
    jsPDF: {
      unit: "mm",
      format: "a4",
      orientation: "portrait",
    },
    pagebreak: {
      mode: ["css", "legacy"],
      avoid: [
        ".cv-section",
        ".cv-entry",
        ".cv-group",
        ".cv-subentry",
        ".cv-section-title",
      ],
    },
  };

  html2pdf().set(opt).from(element).save();
}
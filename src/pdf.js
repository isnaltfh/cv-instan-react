import html2pdf from "html2pdf.js";

export function exportAsPDF(el, filename = "CV.pdf") {
  if (!el) return;
  const opt = {
    margin: [10, 10, 10, 10],
    filename,
    image: { type: "jpeg", quality: 0.96 },
    html2canvas: { scale: 2, useCORS: true },
    jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
  };
  return html2pdf().set(opt).from(el).save();
}

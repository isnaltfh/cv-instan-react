// src/pdf.js
export async function exportAsPDF(selector, filename = "CV.pdf") {
  // lazy import supaya tidak mengganggu saat first load
  const html2pdf = (await import("html2pdf.js")).default;

  const el = typeof selector === "string" ? document.querySelector(selector) : selector;
  if (!el) throw new Error("Target element for PDF not found.");

  const opt = {
    filename,
    margin:       [10, 10],
    image:        { type: "jpeg", quality: 0.98 },
    html2canvas:  { scale: 2, useCORS: true },
    jsPDF:        { unit: "mm", format: "a4", orientation: "portrait" },
    pagebreak:    { mode: ["css", "legacy"] },
  };

  await html2pdf().set(opt).from(el).save();
}

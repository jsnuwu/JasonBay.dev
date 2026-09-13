import { jsPDF } from "jspdf";
import type { Lang, Translations } from "../i18n/translations";
import { EMAIL } from "./content";

export function downloadCv(lang: Lang, t: Translations) {
  const de = lang === "de";
  const doc = new jsPDF({ unit: "pt", format: "a4" });
  const marginX = 48;
  const pageHeight = doc.internal.pageSize.getHeight();
  const pageWidth = doc.internal.pageSize.getWidth();
  const maxWidth = pageWidth - marginX * 2;
  let y = 56;

  const ensureSpace = (needed: number) => {
    if (y + needed > pageHeight - 48) {
      doc.addPage();
      y = 56;
    }
  };

  const heading = (text: string) => {
    ensureSpace(30);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(12);
    doc.text(text.toUpperCase(), marginX, y);
    y += 6;
    doc.setDrawColor(20);
    doc.line(marginX, y, pageWidth - marginX, y);
    y += 18;
  };

  const paragraph = (text: string, size = 10, lineHeight = 14) => {
    doc.setFont("helvetica", "normal");
    doc.setFontSize(size);
    const lines = doc.splitTextToSize(text, maxWidth) as string[];
    for (const line of lines) {
      ensureSpace(lineHeight);
      doc.text(line, marginX, y);
      y += lineHeight;
    }
  };

  doc.setFont("helvetica", "bold");
  doc.setFontSize(22);
  doc.text("JASON BAY", marginX, y);
  y += 22;
  doc.setFont("helvetica", "normal");
  doc.setFontSize(11);
  doc.text("Junior Software Engineer · Vaihingen an der Enz", marginX, y);
  y += 16;
  doc.setFontSize(9.5);
  doc.setTextColor(90);
  doc.text(`${EMAIL}   ·   jasonbay.dev`, marginX, y);
  doc.setTextColor(0);
  y += 26;

  paragraph(
    de
      ? "Jahrgang 2005 · Führerschein Klasse B & A2 · Deutsch (Muttersprache)"
      : "Born 2005 · Driver's license class B & A2 · German (native)",
    9.5,
    13,
  );
  y += 8;

  paragraph(t.about.lead, 10.5, 15);
  y += 6;

  heading(t.experience.heading);
  t.experience.entries.forEach((entry, i) => {
    ensureSpace(30);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(10.5);
    doc.text(entry.org, marginX, y);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(9.5);
    doc.setTextColor(90);
    doc.text(entry.period, pageWidth - marginX, y, { align: "right" });
    doc.setTextColor(0);
    y += 13;
    doc.setFont("helvetica", "italic");
    doc.setFontSize(9.5);
    doc.text(entry.role, marginX, y);
    y += 14;
    doc.setFont("helvetica", "normal");
    entry.bullets.forEach((b) => {
      const lines = doc.splitTextToSize(`•  ${b}`, maxWidth - 10) as string[];
      lines.forEach((line) => {
        ensureSpace(13);
        doc.setFontSize(9.5);
        doc.text(line, marginX + 10, y);
        y += 13;
      });
    });
    if (i < t.experience.entries.length - 1) y += 10;
  });
  y += 10;

  heading(t.skills.heading);
  t.skills.groups.forEach((g) => {
    ensureSpace(16);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(9.5);
    doc.text(`${g.title}:`, marginX, y);
    const labelWidth = doc.getTextWidth(`${g.title}: `);
    doc.setFont("helvetica", "normal");
    const lines = doc.splitTextToSize(
      g.items,
      maxWidth - labelWidth,
    ) as string[];
    doc.text(lines[0] ?? "", marginX + labelWidth, y);
    y += 13;
    for (let i = 1; i < lines.length; i++) {
      ensureSpace(13);
      doc.text(lines[i], marginX + labelWidth, y);
      y += 13;
    }
  });
  y += 10;

  heading(de ? "Sprachen" : "Languages");
  const langLine = t.skills.languages
    .map((l) => `${l.name} (${l.level})`)
    .join("   ·   ");
  paragraph(langLine, 9.5, 14);

  doc.save(de ? "Jason_Bay_Lebenslauf.pdf" : "Jason_Bay_CV.pdf");
}

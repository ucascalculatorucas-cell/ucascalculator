const fs = require("fs");
const path = require("path");
const PDFParser = require("pdf2json");

const parser = new PDFParser(null, 1);
const src = path.resolve(__dirname, "..", "temp", "UCAS-2026-Tariff-Tables.pdf");
const outDir = path.resolve(__dirname, "..", "temp");

parser.on("pdfParser_dataError", (errData) => {
  console.error("Parser ERROR:", errData.parserError);
  process.exit(1);
});
parser.on("pdfParser_dataReady", (pdfData) => {
  // Extract all text runs ordered by page, y, x
  const pages = (pdfData && pdfData.Pages) || [];
  console.log("Pages:", pages.length);
  const allLines = [];
  let allText = "";
  pages.forEach((p, pidx) => {
    const texts = (p.Texts || []).map((t) => ({
      x: t.x,
      y: t.y,
      w: t.w,
      text: decodeURIComponent((t.R || []).map((r) => r.T || "").join("")),
    }));
    // sort by y desc then x asc (top-down, left-right)
    texts.sort((a, b) => a.y - b.y || a.x - b.x);
    // group by y band
    const bands = new Map();
    texts.forEach((t) => {
      const key = Math.round(t.y * 2) / 2;
      if (!bands.has(key)) bands.set(key, []);
      bands.get(key).push(t);
    });
    const lines = Array.from(bands.entries())
      .sort((a, b) => a[0] - b[0])
      .map(([, arr]) => arr.map((t) => t.text).join(" "));
    lines.forEach((ln) => {
      allLines.push(ln);
      allText += ln + "\n";
    });
    allText += `\n--- PAGE ${pidx + 1} END ---\n`;
  });
  fs.writeFileSync(path.join(outDir, "UCAS-2026-Tariff.lines.txt"), allLines.join("\n"), "utf8");
  fs.writeFileSync(path.join(outDir, "UCAS-2026-Tariff.txt"), allText, "utf8");
  fs.writeFileSync(
    path.join(outDir, "UCAS-2026-Tariff.json"),
    JSON.stringify(pdfData, null, 0)
  );
  console.log("LINES:", allLines.length, "CHARS:", allText.length);
  console.log("========== FIRST 40 LINES ==========");
  allLines.slice(0, 80).forEach((l) => console.log(l));
  // Search for qualification keywords in next 2000 lines
  console.log("\n========== QUALIFICATION HEADING CANDIDATES ==========");
  const matches = [];
  allLines.forEach((line, i) => {
    if (
      /\b(A level|AS level|Extended Project|T Level|BTEC|Access to HE|Scottish|Higher|IB|International Bacc|Welsh|Irish Leaving|Cambridge Pre|Pre-U|Core Maths|Mathematical Studies|Quantitative|Award|Certificate|Diploma|Extended|Foundation|Scottish National|Welsh Bacc|Advanced Higher|NI Access|Cambridge Technical|Music|LAMDA|Speech|Dance|Drama)\b/i.test(
        line
      )
    ) {
      matches.push(`${i + 1}: ${line}`.slice(0, 300));
    }
  });
  console.log(matches.slice(0, 300).join("\n"));
});
parser.loadPDF(src);

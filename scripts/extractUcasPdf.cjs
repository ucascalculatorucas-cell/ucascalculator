const fs = require("fs");
const path = require("path");
const pdfparseLib = require("pdf-parse");
const pdfparse = pdfparseLib.default ?? pdfparseLib;

(async () => {
  const buf = fs.readFileSync(
    path.resolve(__dirname, "..", "temp", "UCAS-2026-Tariff-Tables.pdf")
  );
  const { text, numpages, info, metadata } = await pdfparse(buf, { max: 0 });
  const out = {
    numpages,
    info: info || null,
    metadata: metadata || null,
    text
  };
  // Write full raw text to disk so we can grep/review
  const tempDir = path.resolve(__dirname, "..", "temp");
  fs.writeFileSync(path.join(tempDir, "UCAS-2026-Tariff.raw.txt"), text, "utf8");
  fs.writeFileSync(
    path.join(tempDir, "UCAS-2026-Tariff.meta.json"),
    JSON.stringify({ numpages, info, metadata }, null, 2)
  );
  console.log("PAGES:", numpages);
  console.log("CHARS:", text.length);
  console.log("FIRST 4000 CHARS:");
  console.log(text.slice(0, 4000));
  console.log("--- EXTRACT QUAL HEADINGS (lines with 'Tariff points' or 'Points' after qual title) ---");
  const qualLines = [];
  text.split(/\r?\n/).forEach((line, i) => {
    if (
      /\b(A level|AS|Extended Project|T level|BTEC|Access to HE|Scottish|IB|International|Welsh|Irish|Cambridge|Core Maths|Mathematical Studies|Quantitative|Advanced Higher|Higher|Pre-U|Diploma|Certificate|Award|Scottish National|Welsh Baccalaureate|Irish Leaving|OCR|AQA|Pearson|CIE|iGCSE|Music|LAMDA|Speech|Drama|Dance)\b/i.test(
        line
      )
    ) {
      qualLines.push(`L${i + 1}: ${line.trim()}`.slice(0, 250));
    }
  });
  fs.writeFileSync(
    path.join(tempDir, "UCAS-2026-QualHeadings.txt"),
    qualLines.join("\n"),
    "utf8"
  );
  console.log("WROTE", qualLines.length, "qual heading candidate lines");
})();

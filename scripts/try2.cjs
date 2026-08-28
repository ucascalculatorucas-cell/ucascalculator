const fs = require("fs");
const path = require("path");
const P = require("pdf-parse");
(async () => {
  const buf = fs.readFileSync(path.resolve(__dirname, "..", "temp", "UCAS-2026-Tariff-Tables.pdf"));
  // New pdf-parse library exposes class
  let text = "";
  let numpages = 0;
  try {
    const inst = new P.PDFParse(buf);
    const result = await inst.parse();
    console.log("result keys:", Object.keys(result || {}));
    text = (result && result.text) || "";
    numpages = (result && result.numpages) || 0;
  } catch (e) {
    console.error("Parse failed:", e.message);
  }
  const outDir = path.resolve(__dirname, "..", "temp");
  fs.writeFileSync(path.join(outDir, "UCAS-2026-Tariff.raw.txt"), text, "utf8");
  console.log("numpages=", numpages, "textlen=", text.length);
  console.log("FIRST 8000:");
  console.log(text.slice(0, 8000));
})();

const fs = require("fs");
const path = require("path");
const P = require("pdf-parse");
console.log("pdf-parse module keys:", Object.keys(P));
console.log("typeof exports.default=", typeof P.default);
console.log("typeof exports=", typeof P);
// Try every possible callable shape
const buf = fs.readFileSync(path.resolve(__dirname, "..", "temp", "UCAS-2026-Tariff-Tables.pdf"));
(async () => {
  const callables = [
    ["P.default(buf)", () => P.default(buf)],
    ["P(buf)", () => P(buf)],
    ["P.default(buf,{})", () => P.default(buf, {})],
    ["P(buf,{})", () => P(buf, {})],
  ];
  for (const [label, fn] of callables) {
    try {
      const r = await fn();
      console.log(label, "→ numpages:", r.numpages, "textlen:", (r.text||"").length);
      if (r.numpages) {
        fs.writeFileSync(path.join(__dirname, "..", "temp", "UCAS-2026-Tariff.raw.txt"), r.text || "", "utf8");
        console.log("WROTE RAW TEXT. First 5000 chars:");
        console.log((r.text || "").slice(0, 5000));
        process.exit(0);
      }
    } catch (e) {
      console.log(label, "ERROR:", e.message || String(e).slice(0, 200));
    }
  }
})();

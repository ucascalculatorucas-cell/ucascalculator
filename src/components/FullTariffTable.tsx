"use client";

import { useMemo, useState } from "react";
import { QUALIFICATIONS, QualificationKey } from "@/lib/ucasTariff";
import { IconSearch, QualIcon } from "@/components/icons";

type Row = {
  qual: string;
  qualShort: string;
  icon: string;
  grade: string;
  points: number;
  qualKey: QualificationKey;
};

function buildRows(): Row[] {
  const rows: Row[] = [];
  (Object.values(QUALIFICATIONS) as typeof QUALIFICATIONS[QualificationKey][]).forEach((q) => {
    if (!q.available) return;
    q.grades.forEach((g) => {
      rows.push({
        qual: q.name,
        qualShort: q.shortName,
        icon: q.icon,
        grade: g.label,
        points: g.points,
        qualKey: q.key,
      });
    });
  });
  return rows;
}

const FILTERS: { key: "all" | QualificationKey; label: string }[] = [
  { key: "all", label: "All qualifications" },
  { key: "a-level", label: "A-Level" },
  { key: "a-level-double", label: "A-Level Double Award" },
  { key: "a-level-with-as", label: "A-Level + AS add." },
  { key: "as-level", label: "AS-Level" },
  { key: "as-level-double", label: "AS Double" },
  { key: "epq", label: "EPQ (Extended Project)" },
  { key: "t-level-full", label: "Full T-Level" },
  { key: "t-level-component", label: "T-Level Core partial" },
  { key: "t-level", label: "T-Level (old key)" },
  { key: "btec-national-extdiploma", label: "BTEC Nat Ext. Dip (RQF)" },
  { key: "btec-national-diploma", label: "BTEC Nat Dip (RQF)" },
  { key: "btec-national-extcert", label: "BTEC Nat ExtCert (RQF)" },
  { key: "btec-national-founddiploma", label: "BTEC Found Dip (RQF)" },
  { key: "btec-qcf-extended-diploma", label: "BTEC Ext Dip (QCF)" },
  { key: "btec-extended", label: "BTEC Ext. Dip." },
  { key: "btec-diploma", label: "BTEC Diploma" },
  { key: "btec-subsidiary", label: "BTEC Sub. Dip." },
  { key: "btec-certificate", label: "BTEC Certificate" },
  { key: "core-maths", label: "Core Maths" },
  { key: "ib", label: "IB (HL/SL)" },
  { key: "scottish-higher", label: "Scottish Higher" },
  { key: "scottish-advanced-higher", label: "Scottish Adv. Higher" },
  { key: "access-to-he", label: "Access to HE" },
  { key: "access-to-he-ni", label: "NI Access" },
  { key: "cambridge-pre-u", label: "Pre-U Diploma" },
  { key: "cambridge-pre-u-principal", label: "Pre-U Principal Subj" },
  { key: "irish-leaving-cert", label: "Irish Leaving Cert" },
  { key: "welsh-bacc-advanced-diploma", label: "Welsh Bacc Adv Dip" },
];

type SortKey = "qual" | "grade" | "points";
type SortDir = "asc" | "desc";

export function FullTariffTable() {
  const allRows = useMemo(() => buildRows(), []);
  const [filter, setFilter] = useState<(typeof FILTERS)[number]["key"]>("all");
  const [query, setQuery] = useState("");
  const [sortKey, setSortKey] = useState<SortKey>("points");
  const [sortDir, setSortDir] = useState<SortDir>("desc");

  const rows = useMemo(() => {
    let r = allRows;
    if (filter !== "all") r = r.filter((x) => x.qualKey === filter);
    if (query.trim()) {
      const q = query.trim().toLowerCase();
      r = r.filter(
        (x) =>
          x.qual.toLowerCase().includes(q) ||
          x.qualShort.toLowerCase().includes(q) ||
          x.grade.toLowerCase().includes(q) ||
          String(x.points).includes(q)
      );
    }
    const sorted = [...r].sort((a, b) => {
      let cmp = 0;
      if (sortKey === "points") cmp = a.points - b.points;
      else if (sortKey === "qual") cmp = a.qual.localeCompare(b.qual);
      else cmp = a.grade.localeCompare(b.grade, "en-GB", { numeric: true });
      return sortDir === "asc" ? cmp : -cmp;
    });
    return sorted;
  }, [allRows, filter, query, sortKey, sortDir]);

  function toggleSort(key: SortKey) {
    if (sortKey === key) {
      setSortDir(sortDir === "asc" ? "desc" : "asc");
    } else {
      setSortKey(key);
      setSortDir(key === "points" ? "desc" : "asc");
    }
  }

  return (
    <section id="table" aria-labelledby="table-heading">
      <h2
        id="table-heading"
        className="text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl dark:text-zinc-50"
      >
        Full UCAS Tariff Points Table 2025/2026
      </h2>
      <p className="mt-4 text-base leading-7 text-zinc-700 dark:text-zinc-300">
        The complete, structured Tariff table for every major Level 3 qualification used in the
        2025–2026 cycle and beyond. Filter by qualification type, search by grade or exact points
        number, and click any column header to sort ascending or descending.
      </p>

      <div className="mt-6 rounded-2xl border border-zinc-200 bg-white p-4 shadow-sm sm:p-5 dark:border-zinc-800 dark:bg-zinc-900">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap gap-2">
            {FILTERS.map((f) => (
              <button
                type="button"
                key={f.key}
                onClick={() => setFilter(f.key)}
                aria-pressed={filter === f.key}
                className={`rounded-full px-3 py-1.5 text-xs font-medium transition-colors ${
                  filter === f.key
                    ? "bg-indigo-600 text-white shadow-sm"
                    : "bg-zinc-100 text-zinc-700 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-200 dark:hover:bg-zinc-700"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
          <label className="relative w-full sm:w-64">
            <span className="sr-only">Search table</span>
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search grade or points…"
              className="w-full rounded-lg border border-zinc-300 bg-white pl-9 pr-3 py-2 text-sm text-zinc-900 placeholder:text-zinc-500 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/30 dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-50 dark:placeholder:text-zinc-500"
            />
            <span aria-hidden className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400">
              <IconSearch size={16} />
            </span>
          </label>
        </div>

        <div className="mt-4 overflow-hidden rounded-xl border border-zinc-200 dark:border-zinc-800">
          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse text-sm">
              <caption className="sr-only">
                Complete UCAS Tariff Points Table 2025/2026 — sorted by{" "}
                {sortKey === "points"
                  ? "points"
                  : sortKey === "qual"
                  ? "qualification name"
                  : "grade"}
              </caption>
              <thead className="bg-zinc-100 text-zinc-900 dark:bg-zinc-800 dark:text-zinc-50">
                <tr>
                  <th
                    scope="col"
                    aria-sort={
                      sortKey === "qual"
                        ? sortDir === "asc"
                          ? "ascending"
                          : "descending"
                        : "none"
                    }
                    className="w-1/2 px-4 py-3 text-left"
                  >
                    <button
                      type="button"
                      onClick={() => toggleSort("qual")}
                      className="inline-flex items-center gap-1 font-semibold"
                    >
                      Qualification
                      {sortKey === "qual" ? (sortDir === "asc" ? " ↑" : " ↓") : ""}
                    </button>
                  </th>
                  <th
                    scope="col"
                    aria-sort={
                      sortKey === "grade"
                        ? sortDir === "asc"
                          ? "ascending"
                          : "descending"
                        : "none"
                    }
                    className="px-4 py-3 text-left"
                  >
                    <button
                      type="button"
                      onClick={() => toggleSort("grade")}
                      className="inline-flex items-center gap-1 font-semibold"
                    >
                      Grade
                      {sortKey === "grade" ? (sortDir === "asc" ? " ↑" : " ↓") : ""}
                    </button>
                  </th>
                  <th
                    scope="col"
                    aria-sort={
                      sortKey === "points"
                        ? sortDir === "asc"
                          ? "ascending"
                          : "descending"
                        : "none"
                    }
                    className="px-4 py-3 text-right"
                  >
                    <button
                      type="button"
                      onClick={() => toggleSort("points")}
                      className="inline-flex items-center gap-1 font-semibold"
                    >
                      UCAS Points
                      {sortKey === "points" ? (sortDir === "asc" ? " ↑" : " ↓") : ""}
                    </button>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
                {rows.length === 0 ? (
                  <tr>
                    <td colSpan={3} className="px-4 py-10 text-center text-sm text-zinc-500 dark:text-zinc-400">
                      No rows match your current filter.
                    </td>
                  </tr>
                ) : (
                  rows.map((r, idx) => (
                    <tr
                      key={`${r.qualKey}-${r.grade}-${idx}`}
                      className="bg-white hover:bg-indigo-50/40 dark:bg-zinc-950 dark:hover:bg-indigo-500/5"
                    >
                      <td className="px-4 py-3 text-zinc-700 dark:text-zinc-200">
                        <div className="flex items-center gap-2">
                          <span className="text-indigo-600 dark:text-indigo-400" aria-hidden>
                            <QualIcon qualKey={r.qualKey} size={16} />
                          </span>
                          <span className="font-medium text-zinc-900 dark:text-zinc-50">
                            {r.qual}
                          </span>
                        </div>
                      </td>
                      <td className="px-4 py-3 font-semibold text-zinc-900 dark:text-zinc-50">
                        {r.grade}
                      </td>
                      <td className="px-4 py-3 text-right tabular-nums text-zinc-700 dark:text-zinc-200">
                        <span className="inline-flex rounded-md bg-indigo-50 px-2.5 py-0.5 font-semibold text-indigo-700 dark:bg-indigo-500/10 dark:text-indigo-300">
                          {r.points}
                        </span>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
          <div className="flex items-center justify-between border-t border-zinc-200 bg-zinc-50 px-4 py-2 text-xs text-zinc-500 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-400">
            <span>
              Showing <span className="font-semibold text-zinc-700 dark:text-zinc-200">{rows.length}</span>{" "}
              of {allRows.length} rows
            </span>
            <span>Click column headers to sort • Use filters above to narrow</span>
          </div>
        </div>
      </div>
    </section>
  );
}

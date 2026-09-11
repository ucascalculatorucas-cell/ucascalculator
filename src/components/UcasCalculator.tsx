"use client";

import { useMemo, useState } from "react";
import {
  AddedQualification,
  QualificationKey,
  QUALIFICATIONS,
  REFERENCE_MAX_POINTS,
  REFERENCE_BENCHMARKS,
  interpretPoints,
} from "@/lib/ucasTariff";
import {
  QualIcon,
  IconCalculator,
  IconLightbulb,
  IconCheck,
  IconPlus,
} from "@/components/icons";

function makeId() {
  return Math.random().toString(36).slice(2, 10);
}

export default function UcasCalculator() {
  const [qualKey, setQualKey] = useState<QualificationKey>("a-level");
  const [gradeValue, setGradeValue] = useState<string>(
    QUALIFICATIONS["a-level"].grades[0]?.value ?? ""
  );
  const [items, setItems] = useState<AddedQualification[]>([]);
  const [editingId, setEditingId] = useState<string | null>(null);

  const currentQual = QUALIFICATIONS[qualKey];
  const currentGrade = currentQual?.grades.find((g) => g.value === gradeValue);
  const currentPoints = currentGrade?.points ?? 0;

  const total = useMemo(
    () => items.reduce((sum, i) => sum + i.points, 0),
    [items]
  );

  const pct = Math.min(100, Math.round((total / REFERENCE_MAX_POINTS) * 100));

  function handleQualChange(next: QualificationKey) {
    setQualKey(next);
    const q = QUALIFICATIONS[next];
    if (q && q.grades.length > 0 && q.available) {
      setGradeValue(q.grades[0].value);
    } else {
      setGradeValue("");
    }
    setEditingId(null);
  }

  function handleAddOrUpdate() {
    if (!currentQual || !currentQual.available) return;
    const grade = currentQual.grades.find((g) => g.value === gradeValue);
    if (!grade) return;

    if (editingId) {
      setItems((prev) =>
        prev.map((it) =>
          it.id === editingId
            ? {
                id: it.id,
                qualKey,
                gradeValue: grade.value,
                gradeLabel: grade.label,
                points: grade.points,
              }
            : it
        )
      );
      setEditingId(null);
    } else {
      setItems((prev) => [
        ...prev,
        {
          id: makeId(),
          qualKey,
          gradeValue: grade.value,
          gradeLabel: grade.label,
          points: grade.points,
        },
      ]);
    }
  }

  function handleRemove(id: string) {
    setItems((prev) => prev.filter((i) => i.id !== id));
    if (editingId === id) setEditingId(null);
  }

  function handleEdit(it: AddedQualification) {
    setEditingId(it.id);
    setQualKey(it.qualKey);
    setGradeValue(it.gradeValue);
  }

  function handleCancelEdit() {
    setEditingId(null);
    const firstAvail = Object.values(QUALIFICATIONS).find((q) => q.available);
    if (firstAvail) {
      setQualKey(firstAvail.key);
      setGradeValue(firstAvail.grades[0]?.value ?? "");
    }
  }

  function handleReset() {
    setItems([]);
    setEditingId(null);
  }

  // Helper: convert points score → tier label + short summary for UI badges
  function interpretTier(pts: number): { label: string; summary: string } {
    if (pts === 0) return { label: "Start", summary: "Add your first qualification above." };
    if (pts < 48)
      return {
        label: "Starter",
        summary: "Useful starting block — foundation years & apprenticeships.",
      };
    if (pts < 80)
      return {
        label: "Foundation Entry",
        summary: "Roughly BB/CC — foundation-entry uni courses.",
      };
    if (pts < 112)
      return {
        label: "Entry Level",
        summary: "CCD–BCC — clearing & modern-university courses.",
      };
    if (pts < 128)
      return {
        label: "Mainstream",
        summary: "BBC to ABB — typical undergrad entry in 2025-26.",
      };
    if (pts < 152)
      return {
        label: "High Tariff",
        summary: "ABB–AAA — Russell Group & high-tariff degrees.",
      };
    if (pts < 176)
      return {
        label: "Competitive",
        summary: "AAA–A*A*A — medicine, law, Oxbridge, STEM.",
      };
    return {
      label: "Elite",
      summary: "Above A*A*A*A — nearly every UK course reachable.",
    };
  }

  // Derived: projected total (current total + selected grade, if any) & benchmark helpers
  const selectedAvailable = !!currentQual?.available && !!currentGrade;
  const projectedTotal = total + (selectedAvailable ? currentPoints : 0);
  const projectedPct = Math.min(100, Math.round((projectedTotal / REFERENCE_MAX_POINTS) * 100));
  const interpretationSummary = interpretPoints(total);
  const interpretation = interpretTier(total);
  const projInterpretation = interpretTier(projectedTotal);
  const nextBenchmark = REFERENCE_BENCHMARKS.find((b) => b.points > total);
  const prevBenchmark = [...REFERENCE_BENCHMARKS].reverse().find((b) => b.points <= total);
  const projNextBenchmark = REFERENCE_BENCHMARKS.find((b) => b.points > projectedTotal);

  return (
    <section
      aria-labelledby="calc-title"
      className="rounded-2xl border border-zinc-200 bg-white p-3 shadow-sm sm:p-5 lg:p-7 dark:border-zinc-800 dark:bg-zinc-950"
    >
      {/* Header: Title + Badges */}
      <div className="mb-4 flex flex-col gap-3 sm:mb-5 sm:flex-row sm:items-end sm:justify-between">
        <div className="min-w-0">
          <h2
          id="calc-title"
          className="truncate text-lg font-semibold tracking-tight text-zinc-900 sm:text-2xl dark:text-zinc-50"
        >
          UCAS Tariff Points Calculator
        </h2>
        <p className="mt-1 text-xs text-zinc-600 sm:text-sm dark:text-zinc-400">
          Pick a qualification and grade, then add it to your running total.
        </p>
      </div>
        <div className="flex flex-wrap items-center gap-2 sm:gap-3">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-1 text-[11px] font-medium text-emerald-700 ring-1 ring-inset ring-emerald-600/20 sm:px-3 sm:text-xs dark:bg-emerald-500/10 dark:text-emerald-300 dark:ring-emerald-500/20">
            2025–2026 Tariff
          </div>
          {items.length > 0 && (
            <button
              type="button"
              onClick={handleReset}
              className="text-xs font-medium text-zinc-500 underline-offset-4 hover:underline dark:text-zinc-400"
            >
              Clear all
            </button>
          )}
        </div>
      </div>

      {/* LIVE TOTAL BAR (prominent + fully functional) */}
      <div
        className="sticky top-[72px] z-10 mb-4 rounded-xl border border-indigo-100 bg-gradient-to-br from-indigo-600 via-violet-600 to-blue-600 p-3.5 text-white shadow-lg shadow-indigo-500/10 sm:mb-6 sm:p-5 dark:border-indigo-900/60 dark:from-indigo-700 dark:via-violet-700 dark:to-blue-700"
        aria-live="polite"
        aria-atomic="true"
      >
        {/* Row 1: Total stats block + Progress block */}
        <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
          {/* LEFT: Totals + counts + selected preview */}
          <div className="flex-1 min-w-0">
            <div className="text-[10px] font-semibold uppercase tracking-widest text-indigo-100/95 sm:text-xs">
              Your Live UCAS Tariff Total
            </div>

            {/* Main total */}
            <div className="mt-0.5 flex flex-wrap items-baseline gap-x-3 gap-y-1 sm:gap-x-4">
              <span className="text-3xl font-black tabular-nums tracking-tight sm:text-4xl md:text-5xl">{total}</span>
              <span className="text-xs font-medium text-indigo-100 sm:text-sm">UCAS points</span>
              {items.length > 0 && (
                <span className="inline-flex items-center gap-1 rounded-full bg-white/15 px-2 py-0.5 text-[10px] font-semibold text-white ring-1 ring-white/10 sm:px-2.5 sm:text-[11px]">
                  <IconCheck size={11} className="sm:hidden" />
                  <IconCheck size={12} className="hidden sm:block" />
                  {items.length} qual{items.length !== 1 ? "s" : ""} added
                </span>
              )}
              {items.length === 0 && (
                <span className="inline-flex items-center gap-1 rounded-full bg-white/10 px-2 py-0.5 text-[10px] font-medium text-indigo-100 ring-1 ring-white/5 sm:px-2.5 sm:text-[11px]">
                  <IconCalculator size={11} className="sm:hidden" />
                  <IconCalculator size={12} className="hidden sm:block" />
                  No quals yet
                </span>
              )}
            </div>

            {/* Interpretation (based on confirmed total) */}
            {total > 0 && interpretation && (
              <div className="mt-2 flex flex-wrap items-center gap-1.5 sm:gap-2">
                <span className="inline-flex items-center gap-1 rounded-md bg-white/15 px-2.5 py-1 text-[10px] font-semibold text-white ring-1 ring-white/10 sm:rounded-lg sm:px-3 sm:gap-1.5 sm:text-xs">
                  <IconLightbulb size={11} className="sm:hidden" />
                  <IconLightbulb size={13} className="hidden sm:block" />
                  {interpretation.label}
                </span>
                {interpretation.summary && (
                  <span className="hidden text-[11px] text-indigo-100/90 md:inline">
                    {interpretation.summary}
                  </span>
                )}
              </div>
            )}

            {/* Selected preview: live pending (if grade selected & diff from 0) */}
            {selectedAvailable && currentPoints > 0 && (
              <div className="mt-2.5 flex flex-wrap items-center gap-1.5 rounded-lg border border-white/15 bg-white/10 px-2.5 py-1.5 ring-1 ring-white/5 sm:gap-2 sm:px-3 sm:py-2">
                <span className="inline-flex items-center gap-1 rounded-md bg-white/20 px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wider text-white sm:px-2 sm:gap-1.5 sm:text-[11px]">
                  <IconPlus size={10} className="sm:hidden" />
                  <IconPlus size={12} className="hidden sm:block" />
                  Selected
                </span>
                <span className="text-[13px] font-bold text-white sm:text-sm">
                  {currentGrade?.label} {currentQual?.shortName}
                </span>
                <span className="text-xs text-indigo-100 sm:text-sm">=</span>
                <span className="text-[13px] font-bold tabular-nums text-white sm:text-sm">
                  +{currentPoints}
                </span>
                <span className="mx-0.5 h-3.5 w-px bg-white/20 sm:mx-1 sm:h-4" />
                <span className="text-[10px] font-medium text-indigo-100 sm:text-[12px]">
                  +add:
                </span>
                <span className="text-[13px] font-bold tabular-nums text-white sm:text-sm">
                  {projectedTotal}
                </span>
                {total !== projectedTotal && (
                  <span className="text-[10px] text-indigo-100/90">
                    ({projectedPct}%)
                  </span>
                )}
                {projInterpretation && interpretation?.label !== projInterpretation.label && (
                  <span className="w-full inline-flex items-center gap-1 rounded-md bg-emerald-400/25 px-2 py-0.5 text-[10px] font-semibold text-emerald-50 ring-1 ring-emerald-300/20 sm:w-auto sm:ml-auto sm:text-[11px]">
                    <IconCheck size={10} />
                    New tier: {projInterpretation.label}
                  </span>
                )}
              </div>
            )}
          </div>

          {/* RIGHT: Progress + benchmark */}
          <div className="w-full md:w-72 shrink-0">
            <div className="mb-1.5 flex justify-between text-[11px] font-medium text-indigo-100/95 sm:mb-2 sm:text-xs">
              <span>Progress (max 200)</span>
              <span className="tabular-nums">
                {selectedAvailable ? (
                  <>
                    <span className="hidden text-white/60 line-through decoration-white/30 sm:inline sm:mr-1">{pct}%</span>
                    <span className="font-bold text-white">{projectedPct}%</span>
                  </>
                ) : (
                  <span className="font-bold text-white">{pct}%</span>
                )}
              </span>
            </div>
            <div
              className="h-3 w-full overflow-hidden rounded-full bg-white/15 ring-1 ring-white/10 sm:h-3.5"
              role="progressbar"
              aria-valuenow={selectedAvailable ? projectedPct : pct}
              aria-valuemin={0}
              aria-valuemax={100}
              aria-label="UCAS points progress bar"
            >
              <div className="h-full flex items-center" style={{ width: "100%" }}>
                <div
                  className="h-full rounded-l-full bg-white transition-all duration-500 ease-out"
                  style={{ width: `${(total / REFERENCE_MAX_POINTS) * 100}%` }}
                />
                {selectedAvailable && projectedTotal > total && (
                  <div
                    className="h-full border-l-2 border-dashed border-white/70 bg-white/30 transition-all duration-500 ease-out"
                    style={{
                      width: `${((projectedTotal - total) / REFERENCE_MAX_POINTS) * 100}%`,
                    }}
                    title={`+${currentPoints} pts (${currentGrade?.label} ${currentQual?.shortName})`}
                  />
                )}
              </div>
            </div>

            {/* Benchmark info */}
            <div className="mt-2 text-[11px] leading-snug text-indigo-100/95 sm:mt-2.5 sm:text-xs">
              {items.length === 0 && !selectedAvailable ? (
                <>Pick a grade below to preview your score.</>
              ) : total > 0 && nextBenchmark ? (
                <>
                  <span className="font-semibold text-white">{nextBenchmark.points - total}</span>{" "}
                  pts → <span className="font-semibold">{nextBenchmark.label}</span>
                  {selectedAvailable &&
                    projectedTotal >= nextBenchmark.points && (
                      <span className="mt-0.5 block text-[10px] text-emerald-50/95 sm:ml-1 sm:mt-0 sm:inline">
                        · <span className="font-semibold">Add to unlock it!</span>
                        {projNextBenchmark && projNextBenchmark.points > projectedTotal && (
                          <> {projNextBenchmark.points - projectedTotal}→{projNextBenchmark.label}</>
                        )}
                      </span>
                    )}
                </>
              ) : selectedAvailable && projNextBenchmark ? (
                <>
                  Add = <span className="font-semibold">{currentPoints} pts</span>
                  <span className="hidden sm:inline">
                    {" "}· {projNextBenchmark.points - projectedTotal} for <span className="font-semibold">{projNextBenchmark.label}</span>
                  </span>
                </>
              ) : prevBenchmark ? (
                <>Exceeds max benchmark 🏆</>
              ) : (
                <>Add your first qualification.</>
              )}
            </div>

            {/* Prev benchmark reached badge */}
            {prevBenchmark && (
              <div className="mt-2 hidden items-center gap-1 rounded-md bg-white/10 px-2 py-0.5 text-[10px] font-semibold text-white ring-1 ring-white/10 sm:mt-2.5 sm:flex sm:gap-1.5 sm:px-2.5 sm:py-1 sm:text-[11px]">
                <IconCheck size={11} />
                ✓ {prevBenchmark.label} ({prevBenchmark.points})
              </div>
            )}
          </div>
        </div>
      </div>

      {/* ADD FORM */}
      <fieldset className="mb-4 rounded-xl border border-zinc-200 p-3.5 sm:mb-5 sm:p-5 dark:border-zinc-800">
        <legend className="sr-only">Add a qualification</legend>

        {/* ROW 1: Qualification type — label + dropdown, label top on mobile / inline on desktop */}
        <div className="mb-3 flex flex-col gap-2 sm:mb-4 sm:flex-row sm:items-center sm:gap-3">
          <label
            htmlFor="qual-type"
            className="shrink-0 text-sm font-medium text-zinc-700 dark:text-zinc-300"
          >
            Qualification type
          </label>
          <div className="relative flex-1">
            <select
              id="qual-type"
              value={qualKey}
              onChange={(e) => handleQualChange(e.target.value as QualificationKey)}
              className="min-h-[42px] w-full rounded-lg border border-zinc-300 bg-white pl-3.5 pr-11 py-2 text-sm font-medium text-zinc-900 shadow-sm appearance-none focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/30 sm:min-h-[44px] sm:pl-4 sm:pr-12 sm:py-2.5 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-50"
            >
              {Object.values(QUALIFICATIONS).map((q) => (
                <option key={q.key} value={q.key} disabled={!q.available}>
                  {q.name}
                  {q.available ? "" : " — coming soon"}
                </option>
              ))}
            </select>
            <div
              className="pointer-events-none absolute inset-y-0 right-3 flex items-center sm:right-3.5"
              aria-hidden="true"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 20 20"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-zinc-500 sm:w-5 sm:h-5 dark:text-zinc-400"
              >
                <polyline points="6 8 10 12 14 8" />
              </svg>
            </div>
          </div>
        </div>

        {/* ROW 2: Grade label + keypad grid + actions — MATCHING GRID COLS across breakpoints */}
        <div className="flex flex-col gap-2 lg:flex-row lg:items-start">
          {/* Grade buttons grid — teal buttons */}
          <div className="flex-1 min-w-0">
            <label className="mb-1.5 block text-sm font-medium text-zinc-700 sm:mb-2 dark:text-zinc-300">
              Grade
            </label>

            {currentQual?.available ? (
              <div className="grid grid-cols-3 gap-1.5 sm:grid-cols-4 sm:gap-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                {currentQual.grades.map((g) => {
                  const isSelected = g.value === gradeValue;
                  return (
                    <button
                      key={g.value}
                      type="button"
                      onClick={() => setGradeValue(g.value)}
                      aria-pressed={isSelected}
                      className={`group relative flex aspect-square min-h-[64px] flex-col items-center justify-center rounded-xl border-2 p-1 text-center transition-all duration-150 sm:min-h-[72px] sm:p-2 md:min-h-[80px] lg:min-h-[84px] ${
                        isSelected
                          ? "border-teal-800 bg-teal-700 text-white shadow-md ring-2 ring-teal-500/30 dark:border-teal-900 dark:bg-teal-800 dark:ring-teal-400/30"
                          : "border-teal-500/20 bg-teal-600 text-white shadow-sm hover:border-teal-700 hover:bg-teal-700 hover:shadow-md active:scale-[0.98] dark:border-teal-400/20 dark:bg-teal-700 dark:hover:bg-teal-800"
                      }`}
                    >
                      <span className="text-base font-bold tracking-tight sm:text-lg md:text-xl lg:text-2xl">
                        {g.label}
                      </span>
                      <span
                        className={`mt-0.5 text-[9px] font-medium opacity-90 sm:mt-1 sm:text-[10px] md:text-xs ${
                          isSelected
                            ? "text-teal-100 dark:text-teal-100"
                            : "text-teal-100/90 dark:text-teal-100/80"
                        }`}
                      >
                        {g.points}
                      </span>
                    </button>
                  );
                })}
              </div>
            ) : (
              <div className="flex min-h-[120px] items-center justify-center rounded-xl border-2 border-dashed border-zinc-300 bg-zinc-50 px-3 text-xs text-center text-zinc-500 sm:min-h-[140px] sm:text-sm dark:border-zinc-700 dark:bg-zinc-900/40 dark:text-zinc-400">
                Conversion not included — see guide below.
              </div>
            )}
          </div>

          {/* Actions column — gold/amber buttons — SAME GRID COLS as grade buttons per breakpoint */}
          <div className="lg:pl-0 lg:pl-2 lg:w-auto">
            <div className="mb-1.5 lg:h-[1.25rem] sm:mb-2" aria-hidden="true" />
            {/* Grid cols MATCH grade grid per breakpoint:
                 3 cols (mobile) / 4 cols (sm) / 3 cols (md) / 1 col vertical (lg+) */}
            <div className="grid grid-cols-3 gap-1.5 sm:grid-cols-4 sm:gap-2 md:grid-cols-3 lg:grid-cols-1">
              {/* CLEAR — DARKER amber */}
              <button
                type="button"
                onClick={handleReset}
                disabled={items.length === 0}
                className="group flex aspect-square min-h-[64px] flex-col items-center justify-center gap-0.5 rounded-xl border-2 border-amber-600/20 bg-amber-600 p-1 text-white shadow-sm transition-all duration-150 hover:bg-amber-700 hover:shadow-md active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:bg-amber-600 sm:min-h-[72px] sm:p-2 md:min-h-[80px] lg:min-h-[84px]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                  className="sm:w-5 sm:h-5 lg:w-[22px] lg:h-[22px] opacity-95"
                >
                  <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
                  <path d="M3 3v5h5" />
                </svg>
                <span className="text-[10px] font-bold tracking-wider uppercase sm:text-xs">
                  Clear
                </span>
              </button>

              {/* DELETE — bright amber */}
              <button
                type="button"
                onClick={editingId ? handleCancelEdit : () => {
                  if (currentQual?.grades?.[0]) {
                    setGradeValue(currentQual.grades[0].value);
                  }
                }}
                className="group flex aspect-square min-h-[64px] flex-col items-center justify-center gap-0.5 rounded-xl border-2 border-amber-400/20 bg-amber-500 p-1 text-white shadow-sm transition-all duration-150 hover:bg-amber-600 hover:shadow-md active:scale-[0.98] sm:min-h-[72px] sm:p-2 md:min-h-[80px] lg:min-h-[84px]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                  className="sm:w-5 sm:h-5 lg:w-[22px] lg:h-[22px] opacity-95"
                >
                  <path d="m9 8-5 4 5 4" />
                  <path d="M20 4v16" />
                  <path d="M20 20H4" />
                </svg>
                <span className="text-[10px] font-bold tracking-wider uppercase sm:text-xs">
                  {editingId ? "Cancel" : "Delete"}
                </span>
              </button>

              {/* ADD — bright amber, larger icon */}
              <button
                type="button"
                onClick={handleAddOrUpdate}
                disabled={!currentQual?.available}
                className="group flex aspect-square min-h-[64px] flex-col items-center justify-center gap-0.5 rounded-xl border-2 border-amber-400/20 bg-amber-500 p-1 text-white shadow-sm transition-all duration-150 hover:bg-amber-600 hover:shadow-md active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:bg-amber-500 sm:min-h-[72px] sm:p-2 md:min-h-[80px] lg:min-h-[84px]"
              >
                <IconPlus size={20} className="sm:w-6 sm:h-6 lg:w-7 lg:h-7 opacity-100" strokeWidth={2.4} />
                <span className="text-[10px] font-bold tracking-wider uppercase sm:text-xs">
                  {editingId ? "Update" : "Add"}
                </span>
              </button>
            </div>
          </div>
        </div>
      </fieldset>

      {/* LIST */}
      <div className="mb-4 sm:mb-0">
        <div className="mb-2 flex items-center justify-between">
          <h3 className="text-sm font-semibold text-zinc-700 dark:text-zinc-300">
            Your qualifications ({items.length})
          </h3>
        </div>

        {items.length === 0 ? (
          <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-zinc-300 bg-zinc-50 px-4 py-8 text-center sm:px-6 sm:py-10 dark:border-zinc-800 dark:bg-zinc-900/40">
            <div className="mb-2.5 sm:mb-3" aria-hidden>
              <IconCalculator size={32} className="sm:w-10 sm:h-10 text-indigo-500 dark:text-indigo-400" />
            </div>
            <p className="text-sm font-medium text-zinc-700 dark:text-zinc-200">
              No qualifications added yet
            </p>
            <p className="mt-1 max-w-sm text-xs text-zinc-500 dark:text-zinc-400">
              Select your qualification and grade above, then tap Add.
            </p>
          </div>
        ) : (
          <ul
            role="list"
            className="divide-y divide-zinc-200 overflow-hidden rounded-xl border border-zinc-200 dark:divide-zinc-800 dark:border-zinc-800"
          >
            {items.map((it) => {
              const q = QUALIFICATIONS[it.qualKey];
              return (
                <li
                  key={it.id}
                  className="flex flex-col gap-3 px-3 py-2.5 sm:px-4 sm:py-3 sm:flex-row sm:items-center sm:justify-between"
                >
                  <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
                    <span
                      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-zinc-100 text-indigo-600 sm:h-9 sm:w-9 dark:bg-zinc-800 dark:text-indigo-400"
                      aria-hidden
                    >
                      <QualIcon qualKey={it.qualKey} size={16} className="sm:w-[18px] sm:h-[18px]" />
                    </span>
                    <div className="min-w-0">
                      <div className="truncate text-sm font-semibold text-zinc-900 dark:text-zinc-50">
                        {q?.shortName} — {it.gradeLabel}
                      </div>
                      <div className="truncate text-xs text-zinc-500 dark:text-zinc-400">
                        {q?.name}
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 pl-10 sm:pl-0 sm:shrink-0">
                    <span className="inline-flex items-center rounded-md bg-indigo-50 px-2 py-1 text-sm font-semibold tabular-nums text-indigo-700 ring-1 ring-inset ring-indigo-700/10 sm:px-2.5 dark:bg-indigo-500/10 dark:text-indigo-300 dark:ring-indigo-400/20">
                      {it.points} pts
                    </span>
                    <button
                      type="button"
                      onClick={() => handleEdit(it)}
                      aria-label={`Edit ${q?.name} ${it.gradeLabel}`}
                      className="inline-flex h-8 w-12 items-center justify-center rounded-md border border-zinc-300 bg-white px-1.5 text-xs font-medium text-zinc-700 hover:bg-zinc-50 sm:h-8 sm:w-auto sm:px-2 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-200 dark:hover:bg-zinc-800"
                    >
                      <span className="sm:hidden">Edit</span>
                      <span className="hidden sm:inline">Edit</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => handleRemove(it.id)}
                      aria-label={`Remove ${q?.name} ${it.gradeLabel}`}
                      className="inline-flex h-8 w-16 items-center justify-center rounded-md border border-rose-200 bg-rose-50 px-1.5 text-xs font-medium text-rose-700 hover:bg-rose-100 sm:h-8 sm:w-auto sm:px-2 dark:border-rose-900/40 dark:bg-rose-500/10 dark:text-rose-300 dark:hover:bg-rose-500/20"
                    >
                      <span className="sm:hidden">Remove</span>
                      <span className="hidden sm:inline">Remove</span>
                    </button>
                  </div>
                </li>
              );
            })}
          </ul>
        )}
      </div>

      {/* RESULT INTERPRETATION */}
      {total > 0 && (
        <div className="mt-4 rounded-xl border border-zinc-200 bg-gradient-to-br from-white to-zinc-50 p-3.5 sm:mt-6 sm:p-5 dark:border-zinc-800 dark:from-zinc-950 dark:to-zinc-900">
          <div className="flex flex-col gap-3 sm:gap-4 sm:flex-row sm:items-start">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-indigo-100 text-indigo-600 sm:h-12 sm:w-12 dark:bg-indigo-500/20 dark:text-indigo-300">
              <IconLightbulb size={20} className="sm:w-6 sm:h-6" />
            </div>
            <div className="min-w-0 flex-1">
              <h3 className="text-sm font-semibold text-zinc-900 sm:text-base dark:text-zinc-50">
                What does {total} UCAS points mean?
              </h3>
              <p className="mt-1 text-xs leading-relaxed text-zinc-600 sm:text-sm dark:text-zinc-300">
                {interpretPoints(total)}
              </p>
              {prevBenchmark && total >= prevBenchmark.points && (
                <p className="mt-2 inline-flex w-full items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-1 text-[11px] font-medium text-emerald-700 ring-1 ring-inset ring-emerald-600/20 sm:w-auto sm:gap-2 sm:px-3 sm:py-1 sm:text-xs dark:bg-emerald-500/10 dark:text-emerald-300 dark:ring-emerald-500/20">
                  <IconCheck size={12} className="sm:w-[14px] sm:h-[14px] text-emerald-600 dark:text-emerald-300" />
                  Meets: {prevBenchmark.label} ({prevBenchmark.points} pts)
                </p>
              )}
              <div className="mt-3 sm:mt-4">
                <h4 className="text-[10px] font-semibold uppercase tracking-wider text-zinc-500 sm:text-xs dark:text-zinc-400">
                  What can I do with this score?
                </h4>
                <p className="mt-1 text-xs text-zinc-600 sm:text-sm dark:text-zinc-300">
                  Use the{" "}
                  <a
                    href="https://www.ucas.com/student-hub/your-ucas-app/search-for-courses"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-indigo-600 underline-offset-4 hover:underline dark:text-indigo-400"
                  >
                    UCAS course search
                  </a>{" "}
                  to filter degrees by entry requirements.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      <p className="mt-4 text-[10px] leading-relaxed text-zinc-500 sm:mt-5 sm:text-[11px] dark:text-zinc-400">
        Figures based on the official UCAS Tariff table — always confirm with UCAS.com for your
        specific course and university.
      </p>
    </section>
  );
}

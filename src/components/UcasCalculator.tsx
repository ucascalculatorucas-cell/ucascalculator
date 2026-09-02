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

  const nextBenchmark = REFERENCE_BENCHMARKS.find((b) => b.points > total);
  const prevBenchmark = [...REFERENCE_BENCHMARKS].reverse().find((b) => b.points <= total);

  return (
    <section
      aria-labelledby="calc-title"
      className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm sm:p-7 dark:border-zinc-800 dark:bg-zinc-950"
    >
      <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2
            id="calc-title"
            className="text-xl font-semibold tracking-tight text-zinc-900 sm:text-2xl dark:text-zinc-50"
          >
            UCAS Tariff Points Calculator
          </h2>
          <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
            Pick a qualification and grade, then add it to your running total.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700 ring-1 ring-inset ring-emerald-600/20 dark:bg-emerald-500/10 dark:text-emerald-300 dark:ring-emerald-500/20">
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

      {/* LIVE TOTAL BAR (prominent) */}
      <div
        className="sticky top-0 z-10 mb-6 rounded-xl border border-indigo-100 bg-gradient-to-br from-indigo-600 via-violet-600 to-blue-600 p-5 text-white shadow-lg shadow-indigo-500/10 dark:border-indigo-900/60 dark:from-indigo-700 dark:via-violet-700 dark:to-blue-700"
        aria-live="polite"
        aria-atomic="true"
      >
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="text-xs font-semibold uppercase tracking-widest text-indigo-100">
              Your Live UCAS Tariff Total
            </div>
            <div className="mt-1 flex items-baseline gap-3">
              <span className="text-4xl font-bold tabular-nums sm:text-5xl">{total}</span>
              <span className="text-sm font-medium text-indigo-100">UCAS points</span>
            </div>
          </div>
          <div className="w-full sm:w-64">
            <div className="mb-2 flex justify-between text-xs font-medium text-indigo-100">
              <span>Progress to max. (200 pts)</span>
              <span>{pct}%</span>
            </div>
            <div
              className="h-3 w-full overflow-hidden rounded-full bg-white/15"
              role="progressbar"
              aria-valuenow={pct}
              aria-valuemin={0}
              aria-valuemax={100}
              aria-label="UCAS points progress bar"
            >
              <div
                className="h-full rounded-full bg-white transition-all duration-500 ease-out"
                style={{ width: `${pct}%` }}
              />
            </div>
            <div className="mt-2 text-xs text-indigo-100/90">
              {nextBenchmark ? (
                <>
                  <span className="font-semibold text-white">{nextBenchmark.points - total}</span>{" "}
                  more pts to reach <span className="font-semibold">{nextBenchmark.label}</span>
                </>
              ) : prevBenchmark ? (
                <>Exceeds max reference benchmark.</>
              ) : (
                <>Add your first qualification to start.</>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* ADD FORM */}
      <fieldset className="mb-5 rounded-xl border border-zinc-200 p-5 dark:border-zinc-800">
        <legend className="sr-only">Add a qualification</legend>

        {/* ROW 1: Qualification type dropdown + current selected info */}
        <div className="mb-5 grid grid-cols-1 gap-5 md:grid-cols-2">
          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="qual-type"
              className="block text-sm font-medium text-zinc-700 dark:text-zinc-300"
            >
              Qualification type
            </label>
            <select
              id="qual-type"
              value={qualKey}
              onChange={(e) => handleQualChange(e.target.value as QualificationKey)}
              className="min-h-[46px] w-full rounded-lg border border-zinc-300 bg-white px-3 py-2.5 text-sm text-zinc-900 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/30 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-50"
              aria-describedby="qual-type-help"
            >
              {Object.values(QUALIFICATIONS).map((q) => (
                <option key={q.key} value={q.key} disabled={!q.available}>
                  {q.name}
                  {q.available ? "" : " — coming soon"}
                </option>
              ))}
            </select>
            <p id="qual-type-help" className="min-h-[1.75rem] pt-0.5 text-xs leading-relaxed text-zinc-500 dark:text-zinc-400">
              {currentQual?.description}
            </p>
          </div>

          {/* Live grade + points preview */}
          <div className="flex flex-col gap-1.5">
            <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">
              Selected
            </label>
            <div className="flex min-h-[46px] items-center justify-between gap-3 rounded-lg border border-indigo-100 bg-gradient-to-r from-indigo-50 via-violet-50 to-indigo-50 px-4 py-2.5 dark:border-indigo-900/50 dark:from-indigo-950/40 dark:via-violet-950/30 dark:to-indigo-950/40">
              <div className="flex items-center gap-3 min-w-0">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-indigo-600 text-white dark:bg-indigo-500">
                  <QualIcon qualKey={qualKey} size={16} />
                </div>
                <div className="min-w-0">
                  <div className="truncate text-sm font-semibold text-zinc-900 dark:text-zinc-50">
                    {currentGrade?.label ?? "—"}
                  </div>
                  <div className="truncate text-[11px] text-zinc-500 dark:text-zinc-400">
                    {currentQual?.shortName}
                  </div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-xs font-medium uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
                  Points
                </div>
                <div className="text-xl font-bold tabular-nums text-indigo-700 dark:text-indigo-300">
                  {currentQual?.available ? currentPoints : "—"}
                </div>
              </div>
            </div>
            <p className="min-h-[1.75rem] pt-0.5 text-xs leading-relaxed text-zinc-500 dark:text-zinc-400">
              {editingId ? "Editing an existing qualification." : "Pick a grade below and tap Add."}
            </p>
          </div>
        </div>

        {/* ROW 2: Grade keypad (grid buttons + actions column) */}
        <div className="flex flex-col gap-3 lg:flex-row">
          {/* Grade buttons grid — teal/cyan like reference calculator */}
          <div className="flex-1">
            <div className="mb-2 flex items-center justify-between">
              <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">
                Grade
              </label>
              <span className="text-[11px] text-zinc-500 dark:text-zinc-400">
                Tap a grade to select
              </span>
            </div>

            {currentQual?.available ? (
              <div className="grid grid-cols-3 gap-2 sm:grid-cols-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                {currentQual.grades.map((g) => {
                  const isSelected = g.value === gradeValue;
                  return (
                    <button
                      key={g.value}
                      type="button"
                      onClick={() => setGradeValue(g.value)}
                      aria-pressed={isSelected}
                      className={`group relative flex aspect-square min-h-[72px] flex-col items-center justify-center rounded-xl border-2 p-2 text-center transition-all duration-150 sm:min-h-[84px] ${
                        isSelected
                          ? "border-teal-800 bg-teal-700 text-white shadow-md ring-2 ring-teal-500/30 dark:border-teal-900 dark:bg-teal-800 dark:ring-teal-400/30"
                          : "border-teal-500/20 bg-teal-600 text-white shadow-sm hover:border-teal-700 hover:bg-teal-700 hover:shadow-md active:scale-[0.98] dark:border-teal-400/20 dark:bg-teal-700 dark:hover:bg-teal-800"
                      }`}
                    >
                      <span className="text-lg font-bold tracking-tight sm:text-xl md:text-2xl">
                        {g.label}
                      </span>
                      <span
                        className={`mt-1 text-[10px] font-medium opacity-90 sm:text-xs ${
                          isSelected
                            ? "text-teal-100 dark:text-teal-100"
                            : "text-teal-100/90 dark:text-teal-100/80"
                        }`}
                      >
                        {g.points} pts
                      </span>
                    </button>
                  );
                })}
              </div>
            ) : (
              <div className="flex min-h-[140px] items-center justify-center rounded-xl border-2 border-dashed border-zinc-300 bg-zinc-50 text-sm text-zinc-500 dark:border-zinc-700 dark:bg-zinc-900/40 dark:text-zinc-400">
                Conversion not included — see guide below.
              </div>
            )}
          </div>

          {/* Actions column — gold/amber buttons like reference calculator */}
          <div className="lg:w-28">
            <div className="mb-2 lg:h-[1.25rem]" />
            <div className="grid grid-cols-3 gap-2 lg:grid-cols-1 lg:gap-2 lg:h-full">
              {/* CLEAR — clear all items */}
              <button
                type="button"
                onClick={handleReset}
                disabled={items.length === 0}
                className="group flex flex-col items-center justify-center gap-1 rounded-xl border-2 border-amber-400/20 bg-amber-500 py-3 text-white shadow-sm transition-all duration-150 hover:bg-amber-600 hover:shadow-md active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:bg-amber-500 lg:flex-1 lg:py-4 lg:justify-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                  className="opacity-90"
                >
                  <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
                  <path d="M3 3v5h5" />
                </svg>
                <span className="text-xs font-bold tracking-wider uppercase sm:text-sm">
                  Clear
                </span>
              </button>

              {/* DELETE — clear selection / cancel edit */}
              <button
                type="button"
                onClick={editingId ? handleCancelEdit : () => {
                  if (currentQual?.grades?.[0]) {
                    setGradeValue(currentQual.grades[0].value);
                  }
                }}
                className="group flex flex-col items-center justify-center gap-1 rounded-xl border-2 border-amber-400/20 bg-amber-500 py-3 text-white shadow-sm transition-all duration-150 hover:bg-amber-600 hover:shadow-md active:scale-[0.98] lg:flex-1 lg:py-4 lg:justify-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                  className="opacity-90"
                >
                  <path d="m9 8-5 4 5 4" />
                  <path d="M20 4v16" />
                  <path d="M20 20H4" />
                </svg>
                <span className="text-xs font-bold tracking-wider uppercase sm:text-sm">
                  {editingId ? "Cancel" : "Delete"}
                </span>
              </button>

              {/* ADD — add/update qualification */}
              <button
                type="button"
                onClick={handleAddOrUpdate}
                disabled={!currentQual?.available}
                className="group flex flex-col items-center justify-center gap-1 rounded-xl border-2 border-amber-400/20 bg-amber-500 py-3 text-white shadow-sm transition-all duration-150 hover:bg-amber-600 hover:shadow-md active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:bg-amber-500 lg:flex-[2] lg:py-6 lg:justify-center"
              >
                <IconPlus size={22} className="opacity-95" />
                <span className="text-xs font-bold tracking-wider uppercase sm:text-sm">
                  {editingId ? "Update" : "Add"}
                </span>
              </button>
            </div>
          </div>
        </div>
      </fieldset>

      {/* LIST */}
      <div>
        <div className="mb-2 flex items-center justify-between">
          <h3 className="text-sm font-semibold text-zinc-700 dark:text-zinc-300">
            Your qualifications ({items.length})
          </h3>
        </div>

        {items.length === 0 ? (
          <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-zinc-300 bg-zinc-50 px-6 py-10 text-center dark:border-zinc-800 dark:bg-zinc-900/40">
            <div className="mb-3" aria-hidden>
              <IconCalculator size={40} className="text-indigo-500 dark:text-indigo-400" />
            </div>
            <p className="text-sm font-medium text-zinc-700 dark:text-zinc-200">
              No qualifications added yet
            </p>
            <p className="mt-1 max-w-sm text-xs text-zinc-500 dark:text-zinc-400">
              Select your qualification and grade above, then click &ldquo;Add qualification&rdquo;.
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
                  className="flex flex-col gap-3 px-4 py-3 sm:flex-row sm:items-center sm:justify-between"
                >
                  <div className="flex items-center gap-3">
                    <span
                      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-zinc-100 text-indigo-600 dark:bg-zinc-800 dark:text-indigo-400"
                      aria-hidden
                    >
                      <QualIcon qualKey={it.qualKey} size={18} />
                    </span>
                    <div>
                      <div className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">
                        {q?.name} — {it.gradeLabel}
                      </div>
                      <div className="text-xs text-zinc-500 dark:text-zinc-400">
                        {q?.shortName}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center rounded-md bg-indigo-50 px-2.5 py-1 text-sm font-semibold tabular-nums text-indigo-700 ring-1 ring-inset ring-indigo-700/10 dark:bg-indigo-500/10 dark:text-indigo-300 dark:ring-indigo-400/20">
                      {it.points} pts
                    </span>
                    <button
                      type="button"
                      onClick={() => handleEdit(it)}
                      aria-label={`Edit ${q?.name} ${it.gradeLabel}`}
                      className="inline-flex h-8 items-center rounded-md border border-zinc-300 bg-white px-2 text-xs font-medium text-zinc-700 hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-200 dark:hover:bg-zinc-800"
                    >
                      Edit
                    </button>
                    <button
                      type="button"
                      onClick={() => handleRemove(it.id)}
                      aria-label={`Remove ${q?.name} ${it.gradeLabel}`}
                      className="inline-flex h-8 items-center rounded-md border border-rose-200 bg-rose-50 px-2 text-xs font-medium text-rose-700 hover:bg-rose-100 dark:border-rose-900/40 dark:bg-rose-500/10 dark:text-rose-300 dark:hover:bg-rose-500/20"
                    >
                      Remove
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
        <div className="mt-6 rounded-xl border border-zinc-200 bg-gradient-to-br from-white to-zinc-50 p-5 dark:border-zinc-800 dark:from-zinc-950 dark:to-zinc-900">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-indigo-100 text-indigo-600 dark:bg-indigo-500/20 dark:text-indigo-300">
              <IconLightbulb size={24} />
            </div>
            <div>
              <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-50">
                What does {total} UCAS Tariff points mean?
              </h3>
              <p className="mt-1 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
                {interpretPoints(total)}
              </p>
              {prevBenchmark && total >= prevBenchmark.points && (
                <p className="mt-2 inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700 ring-1 ring-inset ring-emerald-600/20 dark:bg-emerald-500/10 dark:text-emerald-300 dark:ring-emerald-500/20">
                  <IconCheck size={14} className="text-emerald-600 dark:text-emerald-300" />
                  Meets or exceeds: {prevBenchmark.label} ({prevBenchmark.points} pts)
                </p>
              )}
              <div className="mt-4">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                  What can I do with this score?
                </h4>
                <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-300">
                  Use the{" "}
                  <a
                    href="https://www.ucas.com/student-hub/your-ucas-app/search-for-courses"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-indigo-600 underline-offset-4 hover:underline dark:text-indigo-400"
                  >
                    official UCAS course search
                  </a>{" "}
                  to filter undergraduate degrees by entry requirements. For 2026 clearing vacancies,
                  keep an eye on individual university websites — most courses list minimum Tariff
                  thresholds in the offer details.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      <p className="mt-5 text-[11px] leading-relaxed text-zinc-500 dark:text-zinc-400">
        Figures based on the official UCAS Tariff table — always confirm with UCAS.com for your
        specific course and university.
      </p>
    </section>
  );
}

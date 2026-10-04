"use client";

import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { schema } from "./src/sanity/schemaTypes";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!;
const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2025-10-04";

export default defineConfig({
  name: "ucascalculator",
  title: "UCASCalculator Blog",
  projectId,
  dataset,
  basePath: "/studio",
  schema,
  plugins: [
    structureTool(),
    visionTool({ defaultApiVersion: apiVersion }),
  ],
});

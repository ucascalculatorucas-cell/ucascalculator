import { createImageUrlBuilder, type SanityImageSource } from "@sanity/image-url";
import { dataset, projectId } from "../env";

const builder = createImageUrlBuilder({
  projectId: projectId || "missing-project-id",
  dataset,
});

export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}

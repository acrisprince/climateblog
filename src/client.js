import sanityClient from "@sanity/client";

export const client = sanityClient({
  projectId: "jgx3y2ce",
  dataset: "production",
  apiVersion: "2023-01-13",
  useCdn: true,
});

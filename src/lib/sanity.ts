import { createClient } from '@sanity/client';

export const sanityClient = createClient({
  projectId: import.meta.env.PUBLIC_SANITY_PROJECT_ID,
  dataset: import.meta.env.PUBLIC_SANITY_DATASET,
  useCdn: true, // Uses edge caching for blazing fast loads
  apiVersion: '2026-05-15', // Today's date to lock in the API structure
});
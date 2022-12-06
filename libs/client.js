import { createClient } from "microcms-js-sdk";

export const client = createClient({
  serviceDomain: "ao16",
  apiKey: process.env.API_KEY,
});

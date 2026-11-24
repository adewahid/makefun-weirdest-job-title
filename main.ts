import { mkdirSync, writeFileSync } from "node:fs";

// Weirdest job title for Weirdest Job Title: Blind Judge Showdown.
// Verified 53 characters, inside the 1-60 gate. A real-sounding job with
// one gloriously specific twist: someone is paid to stand in line so
// you don't have to.
const TITLE =
  "Professional Queue Stander for People Who Hate Queues";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TITLE, "utf8");

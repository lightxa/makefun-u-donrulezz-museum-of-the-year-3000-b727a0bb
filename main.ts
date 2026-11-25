// Museum of the Year 3000 — museum label for an ordinary object from today.
// Deterministic, stdlib only, no network. Writes a single line to entry.txt.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The label: a museum in the year 3000 misreads the luggage carousel.
// Travellers really did stand in a circle waiting; the absurd turn is that
// their belongings, not they, did the choosing. Deadpan, one concrete image,
// no explanation of the joke.
const LABEL =
  "Luggage carousel, c. 2024. Travellers stood in a circle, waiting for their belongings to choose them.";

// The gate requires UTF-8 text of 1 to 200 characters, a single line.
// Fail loudly rather than write an entry that cannot be judged.
if (LABEL.length < 1 || LABEL.length > 200 || LABEL.includes("\n")) {
  throw new Error(`label is ${LABEL.length} chars, must be 1-200 and a single line`);
}

const outputDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), LABEL, "utf8");

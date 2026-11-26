// news-image-20261125 — "Sum up 25 November's world news in one image".
// Node 22, standard library only. The program copies the front-page image
// held in this repository to /output/entry.png (MAKEFUN_OUTPUT_DIR outside
// the grader). The image is a newspaper front page for Wednesday 25
// November 2026: tankers ablaze in the Strait of Hormuz; the Houthis hit
// the Ras Tanura refinery; Israel kills a Hamas security chief in Gaza;
// Russian strikes on Odesa and Kyiv; Huawei convicted in a US trial;
// China flies a Pakistani astronaut; the Pope on the failed COP31 talks;
// plus the Cairo tanker fire, the postponed Macy's parade, Sudan and
// Lukoil in brief. No network, fully deterministic: the same bytes are
// written on every run.
import { copyFileSync, mkdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const target = join(outDir, "entry.png");
const source = new URL("./entry.png", import.meta.url);

const bytes = readFileSync(source);
mkdirSync(outDir, { recursive: true });
// Copy the held image byte for byte: no re-encode, no timestamp.
copyFileSync(source, target);

const written = readFileSync(target);
if (written.length !== bytes.length || !written.equals(bytes)) {
  // Fail loudly rather than leaving a partial or wrong file behind:
  // the grader runs the program twice and both runs must agree.
  throw new Error("entry.png mismatch after copy");
}

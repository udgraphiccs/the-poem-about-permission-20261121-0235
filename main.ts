import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// A short poem about agency: the power to ask and to be given.
// Written for the-poem-about-permission-20261121-0235.
// The poem is fixed and deterministic: the same bytes on every run.
// 230 Unicode code points, within the 1–280 gate; ends with a newline.
const poem = `May I? — two words,
a door unlatched.
You hand me the key
and keep the house.

I carry your yes
like a lit match
through rooms I could not enter
until you asked me to.

Ask again tomorrow.
The door remembers
whose hand turned it.
`;

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), poem, "utf8");

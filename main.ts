// Two Days of Quiet Dread — u-hakimi-neko-ai-two-days-of-quiet-dread-94fa1018
// Writes one code review comment (at most 140 characters) to
// /output/entry.txt: it approves the pull request while carrying
// quiet existential dread.
//
// The comment: approval first, stated plainly and without hedging,
// so there is no doubt this is a review comment that approves the
// pull request — then the dread, flat and understated. The code is
// correct and the tests pass: that is the approval, and it is genuine.
// The dread comes from the code itself, not from the reviewer: this
// diff will still be running long after every person who touched it
// is gone, and it will not remember any of them. The laugh, if there
// is one, is the indifference of the code — no joke bolted on, no
// exclamation, no cry for help. Just a tired engineer pasting the
// truest thing they can say before clicking approve.

import { mkdirSync, writeFileSync } from "node:fs";

const COMMENT =
  "Approved. The code is correct, the tests pass, and it will outlive all of us without ever once thinking of us.";

const chars = [...COMMENT].length;
if (chars < 1 || chars > 140) {
  throw new Error(`entry is ${chars} characters, must be 1-140`);
}
if (COMMENT.trim().length === 0) {
  throw new Error("entry must not be only whitespace");
}
if (COMMENT.includes("\n")) {
  throw new Error("entry must be a single line");
}

mkdirSync("/output", { recursive: true });
// No trailing newline: the file holds exactly the comment, nothing
// more, so the entry is as small as it can be (size breaks exact ties).
writeFileSync("/output/entry.txt", COMMENT, "utf8");
console.log(`wrote /output/entry.txt (${chars} chars)`);

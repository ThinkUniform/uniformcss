#!/usr/bin/env node
// Normalizes a compiled CSS file into a sorted list of
// `media-context || single-selector || sorted-declarations` rows.
// This makes two stylesheets comparable regardless of how selectors are
// grouped into comma lists or what order rules/selectors appear in.

const fs = require("fs");

function stripComments(css) {
  return css.replace(/\/\*[\s\S]*?\*\//g, "");
}

// Returns array of { media, selector, body } for a flat or one-level-nested CSS.
function parseRules(css, media, out) {
  let i = 0;
  const n = css.length;
  let buf = "";
  while (i < n) {
    const ch = css[i];
    if (ch === "{") {
      const prelude = buf.trim();
      buf = "";
      // find matching close brace
      let depth = 1;
      let j = i + 1;
      while (j < n && depth > 0) {
        if (css[j] === "{") depth++;
        else if (css[j] === "}") depth--;
        if (depth === 0) break;
        j++;
      }
      const inner = css.slice(i + 1, j);
      if (prelude.startsWith("@media")) {
        parseRules(inner, prelude.replace(/\s+/g, " "), out);
      } else if (prelude.startsWith("@")) {
        // at-rule like @keyframes — keep whole block as one opaque row
        out.push(`${media} || ${prelude} || ${inner.replace(/\s+/g, " ").trim()}`);
      } else {
        const decls = inner
          .split(";")
          .map((d) => d.trim())
          .filter(Boolean)
          .sort()
          .join("; ");
        for (const sel of prelude.split(",")) {
          const s = sel.replace(/\s+/g, " ").trim();
          if (s) out.push(`${media} || ${s} || ${decls}`);
        }
      }
      i = j + 1;
      buf = "";
    } else {
      buf += ch;
      i++;
    }
  }
}

function normalize(file) {
  const css = stripComments(fs.readFileSync(file, "utf8"));
  const out = [];
  parseRules(css, "", out);
  return out.sort();
}

const [a, b] = process.argv.slice(2);
const na = normalize(a);
const nb = normalize(b);

const setB = new Set(nb);
const setA = new Set(na);
const onlyA = na.filter((x) => !setB.has(x));
const onlyB = nb.filter((x) => !setA.has(x));

if (onlyA.length === 0 && onlyB.length === 0) {
  console.log(`EQUIVALENT  (${na.length} normalized rules each)`);
  process.exit(0);
}
console.log(`DIFFERENT`);
console.log(`  only in ${a}: ${onlyA.length}`);
onlyA.slice(0, 10).forEach((x) => console.log("   - " + x));
console.log(`  only in ${b}: ${onlyB.length}`);
onlyB.slice(0, 10).forEach((x) => console.log("   + " + x));
process.exit(1);

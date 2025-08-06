import { mkdirSync, writeFileSync } from "node:fs";
const folderName = process.argv[2] || `Project`;

try {
  mkdirSync(folderName);
  writeFileSync(`${folderName}/index.html`, ``);
  writeFileSync(`${folderName}/style.css`, ``);
  writeFileSync(`${folderName}/script.js`, ``);
  console.log(`Erfolgreich!`);
} catch (err) {
  console.log(`Misslungen, ${err}`);
}

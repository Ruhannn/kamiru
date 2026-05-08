import c from "chalk";

export function line(num = 1) {
  console.log("\n".repeat(num));
}

export function formatSkillsGrid(skills: string[]) {
  const result = [];

  for (let i = 0; i < skills.length; i += 2) {
    const left = skills[i] ?? "";
    const right = skills[i + 1] ?? "";

    result.push(
      `${c.cyan("•")} ${left.padEnd(12)}${right ? `${c.cyan("•")} ${right}` : ""}`,
    );
  }

  return result.join("\n");
}
export { c };

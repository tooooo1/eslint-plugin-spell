import type { Rule } from "eslint";

import correctSpellings from "./rules/correctSpellings";

export const rules: Record<string, Rule.RuleModule> = {
  "correct-spellings": correctSpellings,
};

import type { Rule } from "eslint";

const rule: Rule.RuleModule = {
  meta: {
    type: "problem",
    docs: {
      description: "ESLint plugin to detect and report misspellings against",
      category: "Stylistic Issues",
      recommended: false,
    },
    schema: [
      {
        type: "object",
        properties: {
          correctSpellings: {
            type: "array",
            items: {
              type: "string",
            },
          },
        },
        additionalProperties: false,
      },
    ],
  },

  create(context) {
    const options = context.options[0] || {};
    const correctSpellings: string[] = options.correctSpellings || [];

    function checkSpelling(node: Rule.Node, value: string) {
      if (!correctSpellings.some((spelling) => value.includes(spelling))) {
        context.report({
          node,
          message: `Potential misspelling detected: '${value}' is not in the list of correct spellings.`,
        });
      }
    }

    return {
      Literal(node) {
        if (typeof node.value === "string") {
          checkSpelling(node, node.value);
        }
      },
      Identifier(node) {
        checkSpelling(node, node.name);
      },
    };
  },
};

export default rule;

// lib/rules/correctSpellings.ts
var rule = {
  meta: {
    type: "problem",
    docs: {
      description: "ESLint plugin to detect and report misspellings against",
      category: "Stylistic Issues",
      recommended: false
    },
    schema: [
      {
        type: "object",
        properties: {
          correctSpellings: {
            type: "array",
            items: {
              type: "string"
            }
          }
        },
        additionalProperties: false
      }
    ]
  },
  create(context) {
    const options = context.options[0] || {};
    const correctSpellings = options.correctSpellings || [];
    function checkSpelling(node, value) {
      if (!correctSpellings.some((spelling) => value.includes(spelling))) {
        context.report({
          node,
          message: `Potential misspelling detected: '${value}' is not in the list of correct spellings.`
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
      }
    };
  }
};
var correctSpellings_default = rule;

// lib/index.ts
var rules = {
  correct: correctSpellings_default
};
export {
  rules
};
//# sourceMappingURL=index.js.map
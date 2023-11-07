var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// lib/index.ts
var lib_exports = {};
__export(lib_exports, {
  rules: () => rules
});
module.exports = __toCommonJS(lib_exports);

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
  "correct-spellings": correctSpellings_default
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  rules
});
//# sourceMappingURL=index.cjs.map
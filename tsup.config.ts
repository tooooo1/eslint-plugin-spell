import { defineConfig } from "tsup";

export default defineConfig({
  format: ["cjs", "esm"],
  entry: ["lib/*.{ts,tsx}", "!**/*.{spec,test}.*"],
  sourcemap: true,
  dts: true,
  splitting: false,
});

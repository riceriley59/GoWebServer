const esbuild = require("esbuild");
const inlineImage = require('esbuild-plugin-inline-image');
const cssModulesPlugin = require("esbuild-css-modules-plugin");

esbuild.build({
    entryPoints: ["./src/index.tsx"],
    outfile: "./public/assets/app.js",
    minify: true,
    bundle: true,
    sourcemap: true,
    loader: {
        ".ts": "tsx",
    },
    plugins: [inlineImage(), cssModulesPlugin()],
}).catch(() => process.exit(1));
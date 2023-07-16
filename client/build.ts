const esbuild = require("esbuild");
const inlineImage = require('esbuild-plugin-inline-image');

esbuild.build({
    entryPoints: ["./src/index.tsx"],
    outfile: "./public/assets/app.js",
    minify: true,
    bundle: true,
    sourcemap: true,
    loader: {
        ".ts": "tsx",
    },
    plugins: [inlineImage()],
}).catch(() => process.exit(1));
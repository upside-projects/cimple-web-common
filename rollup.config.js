import babel from "rollup-plugin-babel"
import commonjs from "rollup-plugin-commonjs"
import json from "rollup-plugin-json"
import resolve from "rollup-plugin-node-resolve"
import postcss from "rollup-plugin-postcss"
import copy from "rollup-plugin-copy-glob"

import pkg from "./package.json"

export default {
  input: "src/components/index.js",
  output: {
    file: "dist/bundle.js",
    format: "cjs",
    name: pkg.name,
    exports: "named"
  },
  external: ["styled-components"],
  plugins: [
    babel({
      exclude: "node_modules/**",
      plugins: ["@babel/plugin-external-helpers"]
    }),
    copy([{ files: "src/components/Provider/fonts/*.*", dest: "dist/fonts" }], {
      verbose: true
    }),
    json(),
    resolve(),
    postcss(),
    commonjs({
      include: ["node_modules/**"],
      external: [
        ...Object.keys(pkg.dependencies || {}),
        ...Object.keys(pkg.peerDependencies || {})
      ],
      namedExports: {
        "node_modules/react/index.js": [
          "Component",
          "PureComponent",
          "Fragment",
          "Children",
          "createElement",
          "isValidElement",
          "cloneElement",
          "createContext"
        ],
        "node_modules/react-dom/index.js": ["createPortal"]
      }
    })
  ]
}
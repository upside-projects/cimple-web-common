import babel from "rollup-plugin-babel"
import commonjs from "rollup-plugin-commonjs"
import image from "rollup-plugin-image"
import json from "rollup-plugin-json"
import resolve from "rollup-plugin-node-resolve"
import postcss from "rollup-plugin-postcss"
import copy from "rollup-plugin-copy-glob"
import url from "rollup-plugin-url"

import pkg from "./package.json"

export default {
  input: "src/components/index.js",
  output: {
    file: "dist/bundle.js",
    format: "cjs",
    name: pkg.name,
    exports: "named"
  },
  external: [
    ...Object.keys(pkg.dependencies || {}),
    ...Object.keys(pkg.peerDependencies || {})
  ],
  plugins: [
    babel({
      exclude: "node_modules/**"
    }),
    copy([{ files: "src/components/Provider/fonts/*.*", dest: "dist/fonts" }], {
      verbose: true
    }),
    url({
      include: ["**/*.woff", "**/*.woff2"],
      limit: Infinity
    }),
    image(),
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

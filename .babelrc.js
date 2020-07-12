module.exports = {
  "presets": [
    [
      "@babel/preset-env",
      {
        "modules": process.env["BABEL_CJS"] ? "cjs" : false
      }
    ],
    "@babel/preset-react"
  ],
  "plugins": [
    [
      "@babel/transform-runtime",
      {
        "corejs": 3
      }
    ]
  ]
}
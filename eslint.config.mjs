import next from "eslint-config-next/core-web-vitals"

const eslintConfig = [
  ...next,
  { ignores: ["_archive/**", ".next/**", "node_modules/**"] },
]

export default eslintConfig

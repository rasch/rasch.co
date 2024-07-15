import { css } from "@rasch/reno"
import { g } from "../components/g.js"

export const baseCSS = () => css`
body {
  line-height: ${g};
  font-family: var(--sans);
  font-size: 100%;
  background-color: var(--bg);
  color: var(--fg);
}

h2.texture {
  margin-bottom: 3rem;
  padding: 2rem;
  border-top: 1px solid currentColor;
  font-size: 2rem;
  text-align: center;
}`

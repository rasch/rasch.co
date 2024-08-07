import { css } from "@rasch/reno"

export const cardCSS = () => css`
.card {
  background-image: radial-gradient(currentColor 1px, transparent 1px);
  background-size: var(--shadow-density, 6px) var(--shadow-density, 6px);
  margin-left: 1rem; /* fix centering from transform: translate */
}

.card > *:not(details[open]) {
  transform: translate(-1rem, -1rem);
  border: 1px solid currentColor;
}`

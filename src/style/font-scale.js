import { css } from "@rasch/reno"

export const fontScale = () => css`
.font-scale {
  font-size: 100%;
}

@media (min-width: 512px) {
  .font-scale {
    font-size: 115%;
  }
}

@media (min-width: 768px) {
  .font-scale {
    font-size: 125%;
  }
}`

import { css } from "@rasch/reno"

export const textureCSS = () => css`
.texture {
  background-image:
    radial-gradient(var(--texture) 1px, transparent 1px),
    radial-gradient(var(--texture) 1px, transparent 1px);
  background-position: 0 0, 10px 10px;
  background-size: 20px 20px;
}`

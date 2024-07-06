import { css } from "@rasch/reno"

export const modalCSS = () => css`
@keyframes appear {
  0% {
    opacity: 0;
    transform: translateY(-10px);
  }
}

input[type="checkbox"] {
  display: none;
}

input[type="checkbox"]:checked ~ dialog {
  display: flex;
}

dialog {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 10;
  width: 100%;
  height: 100%;
  border: none;
  color: var(--fg);
  background-color: rgba(0, 0, 0, 0.85);
  animation: appear 350ms ease-in 1;
}`

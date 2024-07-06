import { css } from "@rasch/reno"

export const animationCSS = () => css`
@keyframes pan {
  from { background-position: 0 0; }
  to { background-position: 100% 0; }
}

@keyframes lowbounce {
  0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
  40% { transform: translateY(-8px); }
  60% { transform: translateY(-4px); }
}

@keyframes fadeIn {
  0% { opacity: 0; }
  100% { opacity: 1; }
}

@keyframes pulse {
  0% { transform: scale(1); }
  50% { transform: scale(1.1); }
  100% { transform: scale(1); }
}`

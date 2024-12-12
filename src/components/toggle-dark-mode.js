import { css, html } from "@rasch/reno"

const svg = (mask = "mask") => html`
<svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 24 24"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  role="presentation"
>
  <mask id="${mask}">
    <rect x="0" y="0" width="100%" height="100%" fill="white" />
    <circle cx="12" cy="8" r="4" fill="black" class="moon-mask" />
  </mask>
  <circle class="sun-and-moon" cx="12" cy="12" r="5" mask="url(#${mask})" />
  <g class="sun-rays">
    <line x1="12" y1="1" x2="12" y2="3" />
    <line x1="12" y1="21" x2="12" y2="23" />
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
    <line x1="1" y1="12" x2="3" y2="12" />
    <line x1="21" y1="12" x2="23" y2="12" />
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
  </g>
</svg>`

export const toggleDarkMode = () => html`
<input id="toggle-dark-mode" type="checkbox">
<script>
document.querySelector("#toggle-dark-mode").checked =
  localStorage?.getItem("theme") === "light"
</script>`

export const toggleDarkModeButton = () => html`
<label for="toggle-dark-mode" class="toggle-theme" title="switch theme">
  ${svg("no-js-mask")}
</label>
<button type="button" class="toggle-theme" title="switch theme">
  ${svg()}
</button>`

export const toggleDarkModeCSS = () => css`
#toggle-dark-mode ~ .theme-wrapper {
  background-color: var(--bg);
  color: var(--fg);
  transition: 512ms ease-in-out;
}

#toggle-dark-mode:checked ~ .theme-wrapper {
  --bg: var(--bg-light) !important;
  --fg: var(--fg-light) !important;
  --texture: var(--texture-light);
}

#toggle-dark-mode {
  display: none;
}

/* hide input checkbox but allow it to be focusable if no JS */
.no-js #toggle-dark-mode {
  display: unset;
  position: absolute;
  opacity: 0;
}

#toggle-dark-mode ~ .theme-wrapper button.toggle-theme {
  border: none;
  background: none;
  color: inherit;
}

#toggle-dark-mode ~ .theme-wrapper label.toggle-theme {
  display: none;
}

.no-js #toggle-dark-mode ~ .theme-wrapper label.toggle-theme {
  display: unset;
}

.no-js #toggle-dark-mode ~ .theme-wrapper button.toggle-theme {
  display: none;
}

/* outline label when the checkbox is focused */
.no-js #toggle-dark-mode:focus ~ .theme-wrapper label.toggle-theme {
  outline: 3px solid hotpink;
}

#toggle-dark-mode ~ .theme-wrapper .toggle-theme {
  flex-shrink: 0;
  padding: 0.3rem;
  cursor: pointer;
}

#toggle-dark-mode ~ .theme-wrapper .toggle-theme > svg {
  width: 2rem;
  height: 2rem;
  transform: rotate(360deg);
  transition: transform 600ms var(--elastic);
}

#toggle-dark-mode:checked ~ .theme-wrapper .toggle-theme > svg {
  transform: rotate(45deg);
}

#toggle-dark-mode ~ .theme-wrapper .toggle-theme > svg > .sun-and-moon,
#toggle-dark-mode ~ .theme-wrapper .toggle-theme > svg > .sun-rays {
  fill: var(--bg);
  stroke: currentColor;
  opacity: 1;
  transform: scale(1);
  transform-origin: center;
  transition:
    fill 200ms 600ms var(--elastic),
    opacity 500ms var(--elastic),
    transform 600ms var(--elastic);
}

#toggle-dark-mode:checked ~ .theme-wrapper .toggle-theme > svg > .sun-and-moon {
  fill: currentColor;
  transform: scale(1.8);
}

#toggle-dark-mode:checked ~ .theme-wrapper .toggle-theme > svg > .sun-rays {
  transform: scale(0);
  opacity: 0;
}

#toggle-dark-mode ~ .theme-wrapper .toggle-theme > svg .moon-mask {
  transform: scale(0);
  transition: transform 600ms var(--elastic);
}

#toggle-dark-mode:checked ~ .theme-wrapper .toggle-theme > svg .moon-mask {
  transform: scale(1);
}`

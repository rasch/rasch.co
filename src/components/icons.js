import { html } from "@rasch/reno"

/**
 * Icons derived from Feather - https://github.com/feathericons/feather
 * @typedef {Object} Icon
 * @property {string} title
 * @property {string} body
 */
const iconArray = [
  {
    title: "activity",
    body: html`
<polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />`,
  },
  {
    title: "alert-triangle",
    body: html`
<path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
<line x1="12" y1="9" x2="12" y2="13" />
<line x1="12" y1="17" x2="12.01" y2="17" />`,
  },
  {
    title: "anchor",
    body: html`
<circle cx="12" cy="5" r="3" />
<line x1="12" x2="12" y1="22" y2="8" />
<path d="M5 12H2a10 10 0 0 0 20 0h-3" />`,
  },
  {
    title: "arrow-left-circle",
    body: html`
<circle cx="12" cy="12" r="10" />
<polyline points="12 8 8 12 12 16" />
<line x1="16" y1="12" x2="8" y2="12" />`,
  },
  {
    title: "arrow-right",
    body: html`
<line x1="5" y1="12" x2="19" y2="12" />
<polyline points="12 5 19 12 12 19" />`,
  },
  {
    title: "check-circle",
    body: html`
<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
<polyline points="22 4 12 14.01 9 11.01" />`,
  },
  {
    title: "chevron-right",
    body: html`
<polyline points="9 18 15 12 9 6" />`,
  },
  {
    title: "coffee",
    body: html`
<path d="M18 8h1a4 4 0 0 1 0 8h-1" />
<path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
<line x1="6" y1="1" x2="6" y2="4" />
<line x1="10" y1="1" x2="10" y2="4" />
<line x1="14" y1="1" x2="14" y2="4" />`,
  },
  {
    title: "edit",
    body: html`
<path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
<path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />`,
  },
  {
    title: "edit-2",
    body: html`
<path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z" />`,
  },
  {
    title: "file-text",
    body: html`
<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
<polyline points="14 2 14 8 20 8" />
<line x1="16" y1="13" x2="8" y2="13" />
<line x1="16" y1="17" x2="8" y2="17" />
<polyline points="10 9 9 9 8 9" />`,
  },
  {
    title: "frown",
    body: html`
<circle cx="12" cy="12" r="10" />
<path d="M16 16s-1.5-2-4-2-4 2-4 2" />
<line x1="9" y1="9" x2="9.01" y2="9" />
<line x1="15" y1="9" x2="15.01" y2="9" />`,
  },
  {
    title: "git-pull-request",
    body: html`
<circle cx="18" cy="18" r="3" />
<circle cx="6" cy="6" r="3" />
<path d="M13 6h3a2 2 0 0 1 2 2v7" />
<line x1="6" y1="9" x2="6" y2="21" />`,
  },
  {
    title: "github",
    body: html`
<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />`,
  },
  {
    title: "gitlab",
    body: html`
<path d="M22.65 14.39L12 22.13 1.35 14.39a.84.84 0 0 1-.3-.94l1.22-3.78 2.44-7.51A.42.42 0 0 1 4.82 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.49h8.1l2.44-7.51A.42.42 0 0 1 18.6 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.51L23 13.45a.84.84 0 0 1-.35.94z" />`,
  },
  {
    title: "globe",
    body: html`
<circle cx="12" cy="12" r="10" />
<line x1="2" y1="12" x2="22" y2="12" />
<path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />`,
  },
  {
    title: "grid",
    body: html`
<rect height="7" width="7" x="3" y="3" />
<rect height="7" width="7" x="14" y="3" />
<rect height="7" width="7" x="14" y="14" />
<rect height="7" width="7" x="3" y="14" />`,
  },
  {
    title: "help-circle",
    body: html`
<circle cx="12" cy="12" r="10" />
<path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
<line x1="12" y1="17" x2="12.01" y2="17" />`,
  },
  {
    title: "image",
    body: html`
<rect height="18" rx="2" ry="2" width="18" x="3" y="3" />
<circle cx="8.5" cy="8.5" r="1.5" />
<polyline points="21 15 16 10 5 21" />`,
  },
  {
    title: "info",
    body: html`
<circle cx="12" cy="12" r="10" />
<line x1="12" y1="16" x2="12" y2="12" />
<line x1="12" y1="8" x2="12.01" y2="8" />`,
  },
  {
    title: "key",
    body: html`
<path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4" />`,
  },
  {
    title: "minus-circle",
    body: html`
<circle cx="12" cy="12" r="10" />
<line x1="8" y1="12" x2="16" y2="12" />`,
  },
  {
    title: "package",
    body: html`
<line x1="16.5" x2="7.5" y1="9.4" y2="4.21" />
<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
<polyline points="3.27 6.96 12 12.01 20.73 6.96" />
<line x1="12" x2="12" y1="22.08" y2="12" />`,
  },
  {
    title: "rss",
    body: html`
<path d="M4 11a9 9 0 0 1 9 9" />
<path d="M4 4a16 16 0 0 1 16 16" />
<circle cx="5" cy="19" r="1" />`,
  },
  {
    title: "send",
    body: html`
<line x1="22" y1="2" x2="11" y2="13" />
<polygon points="22 2 15 22 11 13 2 9 22 2" />`,
  },
  {
    title: "star",
    body: html`
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />`,
  },
  {
    title: "terminal",
    body: html`
<polyline points="4 17 10 11 4 5" />
<line x1="12" x2="20" y1="19" y2="19" />`,
  },
  {
    title: "volume-1",
    body: html`
<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
<path d="M15.54 8.46a5 5 0 0 1 0 7.07" />`,
  },
  {
    title: "wind",
    body: html`
<path d="M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2" />`,
  },
  {
    title: "x",
    body: html`
<line x1="18" y1="6" x2="6" y2="18" />
<line x1="6" y1="6" x2="18" y2="18" />`,
  },
  {
    title: "zap",
    body: html`
<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />`,
  },
  {
    title: "codeberg", /* not from Feather */
    body: html`
<path d="M11.955.49A12 12 0 0 0 0 12.49a12 12 0 0 0 1.832 6.373L11.838 5.928a.187.14 0 0 1 .324 0l10.006 12.935A12 12 0 0 0 24 12.49a12 12 0 0 0-12-12 12 12 0 0 0-.045 0zm.375 6.467l4.416 16.553a12 12 0 0 0 5.137-4.213z"/>`,
  },
]

/**
 * @param {Icon} icon
 */
const svgSymbol = icon => html`
<symbol
  id="${icon.title}-icon"
  viewBox="0 0 24 24"
  fill="none"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>${icon.body}
</symbol>`

export const icons = () =>
html`<svg xmlns="http://www.w3.org/2000/svg" style="display: none;">
${iconArray.map(svgSymbol).join("")}
<symbol id="logo-icon" stroke="none" viewBox="0 0 44 44">
  <path d="M1.876.005v43.382h13.699c-.11-.016-.323-.078-.323-.32s1.33-2.383 1.59-3.067c.26-.684.472-1.533.425-1.769-.048-.236-.42-1.591-.694-1.787-.273-.195-.911.418-2.161.654-1.25.236-2.643.472-2.879.661-.236.189-.38.597-.39.853-.01.255-.152 1.058-.624 1.129-.472.07-1.085-.19-.967-1.087l-.001.001c.118-.896.991-2.289 1.7-2.525.707-.236 2.783-.967 2.925-1.297.141-.33.566-1.369.495-1.675-.07-.307-.637-1.84-.543-3.232.095-1.392.401-2.525.26-2.832-.142-.307-1.31-1.509-1.31-1.793 0-.413-.117-.543-.123-.775-.003-.133.25-.588.43-.72.177-.133 1.05-.18 1.215-.298.166-.118.19-.357.404-.405.176-.039.351.028.517.004.165-.024.306-.118.424-.095.118.024.183-.018.254-.23.07-.212.212-.872.301-.89.093-.019.342.4.4.873.06.471.08.578.294.59.214.011 1.364-1.224 1.65-1.179.287.046.44.447.168 1.768-.271 1.322-.436 1.864-.33 2.36.106.495.165 1.356.141 1.734-.023.377-.023.72.095.825.118.107 5.34 1.76 7.527 5.286 1.887 3.043 1.18 6.795 1.344 7.03.222.318 1.155.75 1.888.756 2.846.026 4.219-.513 5.017-1.484 1.415-1.722.85-3.822.4-4.743-.24-.494-.435-1.08-.424-1.297.012-.23.474-.475.85-.119.471.449.956 1.453 1.155 2.902.165 1.204.24 4.006-2.657 5.52-.984.513-2.36.643-3.85.673h11.348l-9.012-18.16c2.553-1.009 4.496-2.585 5.831-4.73 1.335-2.143 2.003-4.54 2.003-7.188 0-2.396-.53-4.603-1.59-6.62-1.021-2.06-2.572-3.679-4.654-4.856C32.052.613 29.58.005 26.674.005Zm13.017 9.9h8.54c1.022 0 1.886.378 2.592 1.134.707.757 1.06 1.703 1.06 2.838s-.353 2.102-1.06 2.9c-.706.757-1.57 1.135-2.591 1.135h-8.541zm4.452 27.834a.315.315 0 0 0-.167.042c-.106.07-.26 1.569-.437 2.324-.177.755-.908 1.982-1.002 2.3.059.119.33.012.507-.058.177-.071.413.059.696.07.283.012.826-.554 1.021-.64.195-.085.477.015.612 0s.142-.177.142-.177c-.397-.57-.655-1.672-.702-2.05-.047-.377.208-.703.208-.703s-.514-.818-.597-.972c-.052-.096-.172-.136-.281-.136z"/>
</symbol>
</svg>
`

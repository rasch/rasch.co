import { css, html } from "@rasch/reno"
import { icon } from "./icon.js"
import { g } from "./g.js"

/**
 * @param {import("./projects/index.js").Project} prj
 */
export const project = ({
  title,
  summary,
  description,
  layout,
  links,
  symbol,
  disabled,
  image,
  alt = "",
  x = 0,
}) => html`
<li class="project ${layout}${layout === "mini" ? "" : " card"}">
  <details>
    <summary>
      <header>
        <div class="image" style="--x:${x}px"></div>
        ${layout === "mini" ? symbol ? icon(symbol) : icon("zap") : ""}
      </header>
      <article>
        <h3>${title}</h3>
        ${summary}
      </article>
      <footer>
        <p>${disabled ? "Coming Soon!" : "View Project"}</p>
        ${disabled ? "" : icon("chevron-right")}
      </footer>
    </summary>
    <div class="details">
      <header>
        <button type="button" aria-label="close details" class="close" style="--icon-size:1.4rem">
          ${icon("x")}
        </button>
      </header>
      <article class="content">
        <h3 class="h2">${title}</h3>
        <img src="${image}" alt="${alt}" loading="lazy">
        ${links
          ? `<ul class="links">` + links
            .map(l => `<li><a href="${l.url}" class="btn">${icon(l.icon)} ${l.title}</a></li>`)
            .join("") + "</ul>"
          : ""
        }
        ${description}
      </article>
      <footer>
        <button type="button" class="close btn">${icon("x")} close</button>
      </footer>
    </div>
  </details>
</li>`

export const projectCSS = () => css`
@keyframes appear {
  0% {
    opacity: 0;
    transform: translateY(-10px);
  }
}

/* prevent document scroll while modal is open */
html:has(details[open]) {
  overflow: hidden;
}

/* hide card shadow texture while modal is open */
.project.card:has(details[open]) {
  background-image: none;
}

.project {
  width: 322px;
  height: var(--height, fit-content);
}

.project > details {
  width: 100%;
  height: 100%;
  background-color: var(--bg);
}

.project > details > summary {
  display: flex;
  width: 100%;
  height: 100%;
  list-style-type: none;
  cursor: pointer;
}

/* use details element as backdrop */
.project > details[open] {
  position: fixed;
  inset: 0;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0);
  backdrop-filter: blur(10px);
  animation: appear 350ms ease-in 1;
}

/* fill screen over backdrop with summary for light dismiss */
.project > details[open] > summary {
  position: fixed;
  inset: 0;
  opacity: 0;
}

/* the modal */
.project > details > .details {
  position: fixed;
  inset: 0;
  max-width: 768px;
  max-height: 768px;
  margin: auto;
  border: 1px solid currentColor;
  overflow-y: auto;
  z-index: 10;
  background-color: var(--bg);
}

/* provide room to close details if JS is diabled since
   the close buttons and escape key both won't work */
.no-js .project > details > .details {
  margin: 3rem auto;
}

.project.featured > details > summary {
  flex-direction: column;
}

.project > details > summary > header {
  flex-shrink: 0;
}

.project > details > summary > header .image {
  display: inline-block;
  height: 100px;
  width: 100px;
  flex-shrink: 0;
  background: url(i/sprite.jpg);
  background-position: var(--x, 0) var(--y, 0);
  filter: grayscale(1);
  transition: filter 320ms linear;
}

.project:hover > details > summary > header .image {
  filter: grayscale(0);
  transition: filter 420ms linear;
}

.project.featured > details > summary > header .image {
  width: 320px;
  height: 160px;
}

.project.mini > details > summary > header .image {
  display: none;
}

.project > details > summary p {
  line-height: 1.3;
  font-size: 0.9rem;
}

.project.featured > details > summary p {
  line-height: ${g};
  font-size: 1rem;
}

.project.mini > details > summary p {
  font-size: 1rem;
}

.project > details > summary > article {
  padding: 0.3rem 0.6rem;
}

.project.featured > details > summary > article {
  padding: 0.5rem 1rem;
}

.project.mini > details > summary > article {
  margin-left: 0.5rem;
  padding: 0;
}

.project > details > summary > article h3 {
  font-size: 1rem;
}

.project.featured > details > summary > article h3 {
  font-size: 1.2rem;
}

.project.mini > details > summary > article h3 {
  margin-bottom: 0.35rem;
  line-height: 1;
  font-size: 1.2rem;
}

.project.mini:hover > details > summary > article h3 {
  text-decoration: underline;
}

.project > details > summary > footer {
  position: absolute;
  right: 1rem;
  bottom: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.4rem;
}

.project.mini > details > summary > footer {
  display: none;
}

.project:hover > details > summary > footer {
  animation: 1s ease-in-out 1 both pulse;
}

.project > details > .details img {
  justify-self: center;
  width: 100%;
  max-width: 512px;
}

.project > details > .details img.thumb {
  max-width: 210px;
}

.project > details > .details h3 {
  max-width: 80%;
  margin: 0 auto;
  text-align: center;
  font-family: var(--sans);
}

.project > details > .details q.center {
  display: block;
  text-align: center;
}

.project > details > .details .btn {
  display: flex;
  align-items: center;
  flex-shrink: 0;
  gap: 0.5rem;
  padding: ${g / 4}rem 0.5rem;
  border: none;
  background: none;
  color: inherit;
  cursor: pointer;
  font-size: var(--icon-size, 1rem);
  box-shadow:
    -1px 0 0 0 currentColor,
    1px 0 0 0 currentColor,
    0 -1px 0 0 currentColor,
    0 1px 0 0 currentColor;
}

.project > details > .details header button {
  position: absolute;
  padding: 0.3rem 0.5rem 0.5rem;
  border: none;
  z-index: 10;
  background: none;
  color: inherit;
  cursor: pointer;
  box-shadow:
    1px 0 0 0 currentColor,
    0 1px 0 0 currentColor;
}

.project > details > .details .btn:hover,
.project > details > .details header button:hover {
  background-image: var(--gradient);
}

.project > details > .details footer button.btn {
  margin: ${g / 4}rem auto ${g}rem;
}

.no-js .project > details > .details header button,
.no-js .project > details > .details footer button.btn {
  display: none;
}

.project > details > .details .links {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  column-gap: ${g / 2}rem;
  margin-left: 0;
}

.project > details > .details .links li {
  list-style-type: none;
  margin: ${g / 4}rem 0;
}

.project > details > .details .links a {
  color: inherit;
  text-decoration: none;
}`

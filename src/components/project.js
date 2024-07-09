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
<li class="project project-${layout}${layout === "mini" ? "" : " card"}">
  <input type="checkbox" id="${title}-prj"${disabled ? " disabled" : ""}>
  <label for="${title}-prj">
    <div class="project-image" style="--x:${x}px"></div>
    ${layout === "mini" ? symbol ? icon(symbol) : icon("zap") : ""}
    <div class="project-summary">
      <div>
        <h3>${title}</h3>
        ${summary}
      </div>
      <p class="project-action">
        ${disabled ? "Coming Soon!" : `View Project ${icon("chevron-right")}`}
      </p>
    </div>
  </label>
  <dialog>
    <div class="project-details content">
      <h3 class="h2">${title}</h3>
      <img src="${image}" alt="${alt}" loading="lazy">
      ${links
        ? `<ul class="project-links">` + links
          .map(l => `<li><a href="${l.url}" class="btn">${icon(l.icon)} ${l.title}</a></li>`)
          .join("") + "</ul>"
        : ""
      }
      ${description}
      <label for="${title}-prj" class="x" style="--icon-size:1.4rem">${icon("x")}</label>
      <label for="${title}-prj" class="close btn">${icon("x")} close</label>
    </div>
  </dialog>
</li>`

export const projectCSS = () => css`
.project {
  height: var(--height, fit-content);
  width: 322px;
  max-width: 100%;
  background-color: var(--bg);
}

.project > label {
  display: flex;
  width: 100%;
  height: 100%;
  cursor: pointer;
  background-color: var(--bg);
}

.project.project-featured > label {
  flex-direction: column;
}

.project > input:disabled ~ label {
  cursor: not-allowed;
}

.project > input:disabled ~ label .icon,
.project > input:disabled ~ label .project-image,
.project > input:disabled ~ label .project-summary {
  opacity: 0.3;
}

.project .project-image {
  display: inline-block;
  height: 100px;
  width: 100px;
  flex-shrink: 0;
  background: url(i/sprite.jpg);
  background-position: var(--x, 0) var(--y, 0);
  filter: grayscale(1);
  transition: filter 300ms linear;
}

.project:hover .project-image {
  filter: grayscale(0);
  transition: filter 400ms linear;
}

.project.project-featured .project-image {
  width: 320px;
  height: 160px;
}

.project.project-mini .project-image {
  display: none;
}

.project .project-summary {
  padding: 0.3rem 0.6rem;
}

.project.project-featured .project-summary {
  padding: 0.5rem 1rem;
}

.project.project-mini .project-summary {
  margin-left: 0.5rem;
  padding: 0;
}

.project .project-summary h3 {
  font-size: 1rem;
}

.project.project-featured .project-summary h3 {
  font-size: 1.2rem;
}

.project.project-mini .project-summary h3 {
  margin-bottom: 0.35rem;
  line-height: 1;
  font-size: 1.2rem;
}

.project.project-mini:hover .project-summary h3 {
  text-decoration: underline;
}

.project.project-mini:hover input:disabled ~ label .project-summary h3 {
  text-decoration: none;
}

.project .project-summary p {
  line-height: 1.2;
  font-size: 0.9rem;
}

.project.project-featured .project-summary p {
  line-height: ${g};
  font-size: 1rem;
}

.project.project-mini .project-summary p {
  font-size: 1rem;
}

.project .project-summary .project-action {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  position: absolute;
  right: 1rem;
  bottom: 0.5rem;
}

.project.project-mini .project-summary .project-action {
  display: none;
}

.project:hover .project-summary .project-action {
  animation: 1s ease-in-out 1 both pulse;
}

.project:hover input:disabled ~ label .project-summary .project-action {
  animation: unset;
}

.project .project-details {
  position: relative;
  width: 100%;
  height: 100%;
  max-width: 768px;
  max-height: 768px;
  margin: auto;
  border: 1px solid currentColor;
  overflow-y: auto;
  background-color: var(--bg);
}

.project .project-details img {
  justify-self: center;
  width: 100%;
  max-width: 512px;
}

.project .project-details img.thumb {
  max-width: 210px;
}

.project .project-details h3 {
  max-width: 80%;
  margin: 0 auto;
  text-align: center;
  font-family: var(--sans);
}

.project .project-details q.center {
  display: block;
  text-align: center;
}

.project .project-details .btn {
  display: flex;
  align-items: center;
  flex-shrink: 0;
  gap: 0.5rem;
  font-size: var(--icon-size, 1rem);
  padding: ${g / 4}rem 0.5rem;
  margin: ${g / 4}rem 0;
  cursor: pointer;
  box-shadow:
    -1px 0 0 0 currentColor,
    1px 0 0 0 currentColor,
    0 -1px 0 0 currentColor,
    0 1px 0 0 currentColor;
}

.project .project-details label.x {
  position: absolute;
  left: 0;
  top: 0;
  padding: 0.3rem 0.5rem 0.5rem;
  border-bottom: 1px solid currentColor;
  border-right: 1px solid currentColor;
  cursor: pointer;
}

.project .project-details label.close {
  margin: 0 auto;
}

.project .project-details .project-links {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  column-gap: ${g / 2}rem;
  margin-left: 0;
}

.project .project-details .project-links li {
  list-style-type: none;
}

.project .project-details .project-links a {
  color: inherit;
  text-decoration: none;
}`

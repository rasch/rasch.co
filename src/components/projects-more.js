import { css, html } from "@rasch/reno"
import { icon } from "./icon.js"

export const projectsMore = () => html`
<section class="projects-more">
  <div class="card">
    <h2>${icon("activity")} more</h2>
  </div>
  <div class="content">${content}</div>
</section>`

export const projectsMoreCSS = () => css`
.projects-more {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 3rem;
  border-top: 1px solid currentColor;
}

.projects-more h2 {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.3rem 0.6rem;
  margin-bottom: 0;
  background-color: var(--bg);
  font-size: 1.5rem;
}

.projects-more p {
  max-width: 40rem;
  padding: 1rem;
}`

import { css, html } from "@rasch/reno"
import { icon } from "./icon.js"
import { project } from "./project.js"

/**
 * @param {import("./data.js").SiteData} data
 */
export const projectsMore = data => html`
<section class="projects-more">
  <div class="card">
    <h2>${icon("file-text")} more</h2>
  </div>
  <ul>
    ${
      data.projects
      .filter(p => p.layout === "mini")
      .map(project)
      .join("")
    }
  </ul>
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

.projects-more ul {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  justify-content: center;
  justify-items: center;
  gap: 1rem;
  width: 100%;
  max-width: 1500px;
  padding: 1rem;
}

.projects-more ul li {
  list-style-type: none;
  padding: 0;
}`

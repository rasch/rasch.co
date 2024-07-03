import { css, html } from "@rasch/reno"
import { project } from "./project.js"
import { projectsMore } from "./projects-more.js"

/**
 * @param {import("./data.js").SiteData} data
 * @returns {string}
 */
export const projects = data => html`
<div id="projects" class="page projects">
  <div>
    <h2 class="texture">$ ls projects</h2>
    <ul class="project-row">
      ${
        data.projects
        .filter(p => p.layout === "featured")
        .map(project)
        .join("")
      }
    </ul>
    <ul
      class="project-row"
      style="--height:102px; --shadow-offset:0.6rem; --shadow-density:6px;"
    >
      ${
        data.projects
        .filter(p => p.layout === "normal")
        .map(project)
        .join("")
      }
    </ul>
  </div>
  ${projectsMore(data)}
</div>`

export const projectsCSS = () => css`
.projects {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.projects .project-row {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: start;
  gap: 3rem;

  max-width: 1280px;
  margin: 0 auto 6rem;

  list-style-type: none;
  padding: 0;
}`

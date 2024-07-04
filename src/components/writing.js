import { css, html } from "@rasch/reno"
import { icon } from "./icon.js"

/**
 * @param {import("@rasch/reno").Post[]} posts
 */
export const writing = posts => html`
<section class="writing">
  <div class="card">
    <h2>${icon("edit")} writing</h2>
  </div>
  <ul>
    ${posts
      .filter(p => !p.draft && p.content)
      .slice(0, 4)
      .map(p => html`
        <li>
          <a href="${p.path || p._path}">${icon("arrow-right")} ${p.title}</a>
        </li>`
      )
      .join("")
    }
    <li>
      <a href="/writing" class="writing-index-link" style="--icon-size:1rem;">
        ${icon("arrow-right")} see all articles
      </a>
    </li>
  </ul>
</section>`

export const writingCSS = () => css`
.writing {
  display: flex;
  flex-direction: row-reverse;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: start;
  border-top: 1px solid currentColor;
  padding-bottom: 3rem;
}

.writing h2 {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0;
  padding: 0.3rem 0.6rem;
  background-color: var(--bg);
  transition: background-color 512ms ease-in-out;
  font-size: 1.5rem;
}

.writing ul {
  position: relative;
  padding: 2rem;
}

.writing ul li {
  list-style-type: none;
}

.writing ul li a {
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  line-height: 1;
  margin-bottom: 0.75rem;
  font-size: 1.2rem;
  text-decoration: none;
  color: var(--fg);
  transition: color 512ms ease-in-out;
}

.writing ul li a:hover {
  text-decoration: underline;
}

.writing ul li a:hover .icon {
  animation: 1s ease lowbounce;
}

.writing .writing-index-link {
  position: absolute;
  bottom: 0;
  right: 2rem;
  font-size: 1rem;
}`

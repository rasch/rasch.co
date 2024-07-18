import { html, css } from "@rasch/reno"
import { postCard } from "./post-card.js"
import { postTags } from "./post-tags.js"

/**
 * @param {import("@rasch/reno").Post[]} posts
 */
export const postIndex = posts => html`
<div class="post-index">
  ${postTags(posts)}
  <ul class="posts">${posts.map(postCard).join("").trim()}</ul>
</div>`

export const postIndexCSS = () => css`
.post-index ul.posts {
  margin: 3rem 0;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2rem;
}

/* expand the content width for this page */
.content:has(.post-index) {
  max-width: 1500px;
}

.content:has(.post-index) h1 {
  text-align: center;
}

.post-index ul {
  margin-left: 0;
}

.post-index ~ .post-date {
  display: none;
}`

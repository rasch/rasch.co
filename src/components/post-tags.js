import { html, css } from "@rasch/reno"

/**
 * @param {import("@rasch/reno").Post[]} posts
 */
const tagArray = posts => {
  const tags = posts.reduce((a, c) => a.concat(c.tags || []), [])
  const unique = new Set(/** @type {string[]} */  (tags))

  return Array.from(unique).sort()
}

/**
 * @param {import("@rasch/reno").Post[]} posts
 */
export const postTags = posts => html`
<form class="post-tags">
  <fieldset>
    <legend class="sr-only">filter posts</legend>
    <input type="radio" id="all" name="tag" value="all" checked />
    <label for="all">all posts</label>
    ${tagArray(posts).map(tag => `
      <input type="radio" id="${tag}" name="tag" value="${tag}" />
      <label for="${tag}">${tag}</label>
    `).join("")}
  </fieldset>
</form>`

export const postTagsCSS = () => css`
.post-tags fieldset {
  max-width: 768px;
  border: 0;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.post-tags fieldset input[type="radio"] {
  display: none;
}

.post-tags fieldset label {
  padding: 0 0.35rem;
  border: 1px solid currentColor;
  margin: 0.35rem;
}

.post-tags fieldset input:checked + label,
#toggle-dark-mode:checked ~ .theme-wrapper .post-tags fieldset label {
  border: 1px solid currentColor;
  color: var(--black);
  opacity: 0.6;
}

#toggle-dark-mode:checked ~ .theme-wrapper .post-tags fieldset input:checked + label {
  opacity: 1;
  box-shadow:
    2px 0 0 0 currentColor,
    0 2px 0 0 currentColor;
}

.post-tags fieldset label:nth-of-type(4n + 1) {
  color: var(--green);
}

.post-tags fieldset input:nth-of-type(4n + 1):checked + label,
#toggle-dark-mode:checked ~ .theme-wrapper .post-tags fieldset label:nth-of-type(4n + 1) {
  background-color: var(--green);
}

.post-tags fieldset label:nth-of-type(4n + 2) {
  color: var(--blue);
}

.post-tags fieldset input:nth-of-type(4n + 2):checked + label,
#toggle-dark-mode:checked ~ .theme-wrapper .post-tags fieldset label:nth-of-type(4n + 2) {
  background-color: var(--blue);
}

.post-tags fieldset label:nth-of-type(4n + 3) {
  color: var(--red);
}

.post-tags fieldset input:nth-of-type(4n + 3):checked + label,
#toggle-dark-mode:checked ~ .theme-wrapper .post-tags fieldset label:nth-of-type(4n + 3) {
  background-color: var(--red);
}

.post-tags fieldset label:nth-of-type(4n) {
  color: var(--yellow);
}

.post-tags fieldset input:nth-of-type(4n):checked + label,
#toggle-dark-mode:checked ~ .theme-wrapper .post-tags fieldset label:nth-of-type(4n) {
  background-color: var(--yellow);
}`

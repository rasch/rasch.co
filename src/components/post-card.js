import { html, css } from "@rasch/reno"

/**
 * @param {import("@rasch/reno").Post} post
 */
export const postCard = post => html`
<li class="post" data-tags="${(post.tags || []).join(",")}">
  <div class="background">
    <a href="/${post.path || post._path}">
      <div class="body">
        <time datetime="${(post.date || post._stat.mtime)?.toISOString()}">
          ${(post.date || post._stat.mtime)?.toDateString()}
        </time>
        <p>${post.title || post._path}</p>
      </div>
    </a>
  </div>
</li>`

export const postCardCSS = () => css`
.post {
  width: 320px;
  height: 200px;
  border: 1px solid currentColor;
  margin-left: 0;
  list-style: none;
  background-image: radial-gradient(currentColor 1px, transparent 1px);
  background-size: var(--shadow-density, 6px) var(--shadow-density, 6px);
}

.post .background {
  width: 100%;
  height: 100%;
  opacity: 0.9;
  background-image:
    radial-gradient(ellipse at top, #ccc, transparent),
    radial-gradient(ellipse at bottom, #000, transparent);
}

.post:hover .background {
  opacity: 1;
}

${[...Array(4)].map((_, n) => `
.post:nth-of-type(${n + 1}) .background {
  background-image: url(https://picsum.photos/320/200?grayscale&random=${n + 1});
}`).join("")}

.post a {
  width: 100%;
  height: 100%;
  color: var(--fg);
  text-decoration: none;
  text-align: center;
}

.post a:hover {
  color: inherit;
  background: none;
}

.post a .body {
  position: relative;
  width: 100%;
  height: 100%;
  padding: 1rem;
  display: grid;
  place-items: center;
  font-weight: bold;
  background-color: var(--black-opaque);
  text-shadow: 1px 1px 3px var(--black), -1px -1px 3px var(--black);
  transition: 512ms ease-in-out;
}

#toggle-dark-mode:checked ~ .theme-wrapper .post a .body {
  background-color: hsl(120 25% 95% / 65%);
  text-shadow: 1px 1px 3px var(--white), -1px -1px 2px var(--white);
  transition: 512ms ease-in-out;
}

.post a .body p {
  font-variant: small-caps;
}

.post a .body time {
  position: absolute;
  bottom: 0.1rem;
  width: 100%;
  text-align: center;
  font-size: 0.8rem;
  font-weight: 300;
}`

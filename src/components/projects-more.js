import { css, html, md } from "@rasch/reno"
import { icon } from "./icon.js"

const content = md`
The projects above, with the exception of the "Mattie J.T. Stepanek Peace
Garden", were created in my personal time and are released under various
permissive open source licenses. I also push more code to [Sourcehut] with
mirrors on [GitHub] and [Codeberg]. Most things are written in JavaScript (with
JSDoc type annotations), but there are also several POSIX shell scripts. I've
also written a fair amount of PHP and React professionally, but don't typically
share client work due to NDAs. There's also some artsy things, such as hand
coded SVGs and pixel art, buried throughout my repositories. Oh... and CSS is
pretty cool too!

[Sourcehut]: https://git.sr.ht/~rasch/
[GitHub]: https://github.com/rasch
[Codeberg]: https://codeberg.org/rasch`

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

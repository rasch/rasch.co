import { css, html } from "@rasch/reno"
import { logo } from "./logo.js"

export const navigation = () => html`
<nav class="navigation">
  <ul>
    <li>${logo()}</li>
    <ul>
    ${["#projects", "#photos", "#whoami"]
      .map(id => html`<li><a href="${id}" data-text="${id}">${id}</a></li>`)
      .join("")
    }
    </ul>
  </ul>
</nav>`

export const navigationCSS = () => css`
.navigation ul {
  display: flex;
  justify-content: space-evenly;
  padding: 0;
  font-size: 1.2rem;
}

.navigation > ul > ul {
  display: none;
}
@media (min-width: 360px) {
  .navigation > ul > ul {
    display: flex;
    flex-direction: column;
  }
}
@media (min-width: 600px) {
  .navigation > ul > ul {
    flex-direction: row;
    gap: 1rem;
    font-size: 1.4rem;
  }
}
@media (min-width: 800px) {
  .navigation > ul > ul {
    gap: 2rem;
    font-size: 1.75rem;
  }
}

.navigation ul > li {
  list-style-type: none;
}

.navigation ul > li > a,
.navigation ul > li > a:visited {
  position: relative;
  display: inline-block;
  padding: 0 0.3rem;
  color: var(--fg);
  font-family: var(--sans);
  text-decoration: none;
  transition: color 512ms ease-in-out;
}

.navigation > ul > ul > li > a::before {
  position: absolute;
  top: 0;
  left: 0;
  display: inline-block;
  overflow: hidden;
  width: 100%;
  height: 0;
  padding: 0 0.3rem;
  content: attr(data-text);
  background-color: var(--fg);
  color: var(--bg);
  transition: height 420ms var(--elastic);
}

.navigation > ul > ul > li > a:hover::before {
  height: 55%;
}`

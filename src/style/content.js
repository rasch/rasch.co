import { css } from "@rasch/reno"
import { g } from "../components/g.js"

export const contentCSS = () => css`
.content {
  display: grid;
  grid-row-gap: ${g}rem;
  line-height: ${g};
  padding: ${g}rem;

  max-width: 40rem;
  margin: 0 auto;
  position: relative;
  font-family: var(--sans);
  font-variant-numeric: "oldstyle-nums";
}

.content-grid {
  background-image: linear-gradient(#fff3 1px, transparent 1px);
  background-size: 100% ${g}rem;
  background-attachment: local;
}

.content > .post-date {
  position: absolute;
  top: 0;
  right: 0;
  display: inline-block;
  margin-right: 0.5rem;
  font-size: 0.9rem;
}

/* h1-h6 */
${[1, 2, 3, 4, 5, 6].map(n => {
  const fs = g ** (2 - n * 0.5)
  return css`.content h${n}, .content .h${n} {
    line-height: ${g * Math.ceil(fs) / fs};
    font-size: ${fs}rem;
    font-family: var(--serif);
  }`
}).join("")}

.content > p:not(.post-date):first-of-type::first-letter {
  float: left;
  padding: ${g / 4}rem;
  margin: ${g / 4}rem ${g / 4}rem 0 0;
  font-size: ${g ** 2}rem;
  font-family: var(--serif);
  font-weight: bold;
  color: var(--bg);
  background-color: var(--fg);
}

.content > p:not(.post-date):first-of-type::first-line {
  font-variant: small-caps;
}

.content a, a:visited {
  color: inherit;
}

.content a:hover {
  color: var(--black);
  background-image: var(--gradient);
  text-decoration: none;
}

/* fix vertical rhythm */
.content sub,
.content sup,
.content ul li::marker {
  line-height: 0;
}

.content strong {
  font-weight: bold;
}

.content mark {
  color: var(--black);
  background-image: var(--gradient);
  font-weight: bold;
  padding: 0 ${g / 8}rem;
}

.content hr {
  border: none;
}

.content hr::before {
  content: "*\\00a0*\\00a0*";
  display: block;
  margin: ${g}rem 0;
  text-align: center;
  color: var(--fg);
  font-family: var(--serif);
}

.content ul, ol {
  margin-left: ${g}rem;
  padding-left: 0;
}

.content ul li.task-list-item {
  margin-left: -1rem; /* hack to get rid of ul margin for task list items */
  list-style-type: none;
}

.content ul ul li.task-list-item {
  margin-left: 0; /* but not for nested unordered lists */
}

.content dl {
  display: grid;
  grid-template-columns: 1fr 3fr;
}

.content dl dt {
  grid-column-start: 1;
  margin: ${g / 4}rem ${g / 4}rem ${g / 4}rem 0;
  padding: ${g / 4}rem;
  text-align: right;
  box-shadow:
    -1px 0 0 0 var(--texture),
    1px 0 0 0 var(--texture),
    0 -1px 0 0 var(--texture),
    0 1px 0 0 var(--texture);
}

.content dl dd {
  grid-column-start: 2;
  margin: ${g / 4}rem 0 ${g / 4}rem 0;
  padding: ${g / 4}rem;
  box-shadow:
    -1px 0 0 0 var(--texture),
    1px 0 0 0 var(--texture),
    0 -1px 0 0 var(--texture),
    0 1px 0 0 var(--texture);
}

.content code {
  line-height: 1;
  font-family: var(--mono);
  background-color: var(--texture);
}

.content pre {
  padding: ${g}rem;
  overflow: auto;
  tab-size: 2;
  background-color: var(--texture);
}

.content pre > code {
  margin: 0;
  padding: 0;
  line-height: ${g};
  background-color: unset;
}

.content blockquote {
  display: grid;
  grid-row-gap: ${g}rem;
  max-width: max-content;
  padding: ${g / 2}rem ${g}rem;
  margin: 0 ${g}rem;
  border-left: dashed 1px currentColor;
  font-family: var(--serif);
  font-weight: 300;
}

.content blockquote footer {
  font-style: italic;
  text-align: right;
}

.content blockquote footer::before {
  content: "\\2014\\00a0";
}

.content blockquote q {
  quotes: "‘" "’" "“" "”";
}

.content q {
  quotes: "“" "”" "‘" "’";
  font-family: var(--serif);
}

.content table {
  table-layout: fixed;
  border-collapse: collapse;
  width: 100%;
  box-shadow:
    0 1px 0 0 currentColor,
    0 -1px 0 0 currentColor;
}

.content table > thead {
  box-shadow: 0 1px 0 0 currentColor;
}

.content table > tbody tr:nth-child(odd) {
  background-color: var(--texture);
}

.content th,
.content td {
  padding: 0 ${g}rem;
}

.content kbd {
  padding: 0 6px;
  margin: 0 ${g / 8}rem;
  border-radius: 1px;
  font-weight: bold;
  font-variant: small-caps;
  box-shadow:
    -1px 0 0 0 currentColor,
    2px 0 0 0 currentColor,
    0 -1px 0 0 currentColor,
    0 2px 0 0 currentColor;
.content iframe[src^="https://www.youtube.com/embed"] {
  width: 100%;
  aspect-ratio: 16 / 9;
  border: 0;
}
}`

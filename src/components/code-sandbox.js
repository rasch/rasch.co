import { css, html } from "@rasch/reno"
import { g } from "./g.js"

/**
 * @param {string} id
 * @param {string} [initHTML]
 * @param {string} [initCSS]
 * @param {string} [initJS]
 */
export const codeSandbox = (id, initHTML = "", initCSS = "", initJS = "") => html`
<div id="${id}" class="code-sandbox">
  <ul class="editor">
    <li>
      <input type="radio" id="${id}-html-tab" name="${id}-editor" checked>
      <label for="${id}-html-tab" class="html-tab" role="button">HTML</label>
      <textarea spellcheck="false" placeholder="HTML please...">${initHTML}</textarea>
    </li>
    <li>
      <input type="radio" id="${id}-css-tab" name="${id}-editor">
      <label for="${id}-css-tab" class="css-tab" role="button">CSS</label>
      <textarea spellcheck="false" placeholder="Gimme that CSS...">${initCSS}</textarea>
    </li>
    <li>
      <input type="radio" id="${id}-js-tab" name="${id}-editor">
      <label for="${id}-js-tab" class="js-tab" role="button">JS</label>
      <textarea spellcheck="false" placeholder="I need JavaScript...">${initJS}</textarea>
    </li>
  </ul>
  <div class="display">
    <iframe src="/iframe-error.html"></iframe>
  </div>
</div>`

export const codeSandboxCSS = () => css`
.code-sandbox {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  gap: ${g / 2}rem;
  padding: ${g * 2}rem ${g / 2}rem ${g}rem;
  background-color: var(--dark-black-opaque);
  border-radius: ${g / 8}rem;
}

#toggle-dark-mode:checked ~ .theme-wrapper .code-sandbox {
  background-color: var(--bright-white);
}

.code-sandbox .display {
  flex-grow: 1;
  width: 320px;
  height: ${g * 10}rem;
  background: white;
  box-shadow: inset 1px 1px 3px var(--dark-black-opaque);
}

.code-sandbox .display iframe {
  width: 100%;
  height: 100%;
  border: none;
  box-shadow: none;
}

.code-sandbox .editor {
  flex-grow: 2;
  width: 320px;
  margin: 0;
}

.code-sandbox .editor li {
  list-style: none;
}

.code-sandbox .editor li input {
  display: none;
}

.code-sandbox .editor li input:checked ~ textarea {
  display: inline-block;
}

.code-sandbox .editor li textarea {
  appearance: none;
  display: none;
  width: 100%;
  height: ${g * 10}rem;
  border: none;
  margin: 0;
  padding: 0 ${g / 8}rem;
  outline: none;
  vertical-align: top; /* fix vertical rhythm */
  resize: none;
  font-family: var(--mono);
  background-color: var(--texture);
  color: inherit;
  box-shadow: inset 1px 1px 3px var(--dark-black-opaque);
  border-radius: ${g / 8}rem;
  white-space: pre;
}

#toggle-dark-mode:checked ~ .theme-wrapper .code-sandbox .editor li textarea {
  background-color: var(--bg);
}

.code-sandbox .editor li textarea:focus {
  outline: 1px solid var(--blue);
}

.code-sandbox .editor li label {
  position: absolute;
  top: ${g / 2}rem;
  padding: 0 ${g / 4}rem;
  cursor: pointer;
}

.code-sandbox .editor li input:checked + label {
  font-weight: bold;
  text-decoration: underline;
}

.code-sandbox .editor li .html-tab {
  left: ${g / 2}rem;
}

.code-sandbox .editor li .css-tab {
  left: 5.2rem;
}

.code-sandbox .editor li .js-tab {
  left: 8.5rem;
}`

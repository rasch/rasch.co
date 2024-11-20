import { css } from "@rasch/reno"

export const syntaxHighlightCSS = () => css`
.hljs-keyword,
.hljs-selector-tag,
.hljs-literal,
.hljs-section,
.hljs-link {
  color: var(--fg);
}

.hljs-subst {
  /* default */
}

.hljs-string,
.hljs-title,
.hljs-name,
.hljs-type,
.hljs-attribute,
.hljs-symbol,
.hljs-bullet,
.hljs-built_in,
.hljs-addition,
.hljs-variable,
.hljs-template-tag,
.hljs-template-variable {
  color: var(--red);
}

#toggle-dark-mode:checked ~ .theme-wrapper .hljs-string,
#toggle-dark-mode:checked ~ .theme-wrapper .hljs-title,
#toggle-dark-mode:checked ~ .theme-wrapper .hljs-name,
#toggle-dark-mode:checked ~ .theme-wrapper .hljs-type,
#toggle-dark-mode:checked ~ .theme-wrapper .hljs-attribute,
#toggle-dark-mode:checked ~ .theme-wrapper .hljs-symbol,
#toggle-dark-mode:checked ~ .theme-wrapper .hljs-bullet,
#toggle-dark-mode:checked ~ .theme-wrapper .hljs-built_in,
#toggle-dark-mode:checked ~ .theme-wrapper .hljs-addition,
#toggle-dark-mode:checked ~ .theme-wrapper .hljs-variable,
#toggle-dark-mode:checked ~ .theme-wrapper .hljs-template-tag,
#toggle-dark-mode:checked ~ .theme-wrapper .hljs-template-variable {
  color: var(--dark-red);
}

.hljs-comment,
.hljs-quote,
.hljs-deletion,
.hljs-meta {
  opacity: 0.6;
}

.hljs-keyword,
.hljs-selector-tag,
.hljs-literal,
.hljs-title,
.hljs-section,
.hljs-doctag,
.hljs-type,
.hljs-name,
.hljs-strong {
  font-weight: bold;
}

.hljs-emphasis {
  font-style: italic;
}`

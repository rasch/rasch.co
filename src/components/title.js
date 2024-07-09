import { css, html } from "@rasch/reno"

export const title = () => html`
<h1 class="title">
  Hi. My name is <span>Ra</span>nd <span>Sch</span>neck<span>.</span>
  Wel<span>co</span>me to my website!
</h1>`

export const titleCSS = () => css`
.title {
  max-width: 512px;
  padding: 3rem;
  margin: auto;
  font-family: var(--sans);
  font-size: 2.5rem;
  line-height: 1.2;
  text-align: center;
}

@media (min-width: 460px) {
  .title {
    font-size: 2.7rem;
  }
}

@media (min-width: 600px) {
  .title {
    font-size: 3rem;
  }
}

.title > span {
  background-image: var(--gradient);
  -webkit-background-clip: text;
  background-clip: text;
  background-size: 1000% 100%;
  color: transparent;
  animation: 15s linear infinite alternate pan;
}`

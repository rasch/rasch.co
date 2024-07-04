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
  background:
    linear-gradient(
      135deg,
      hsl(34deg 100% 82%) 0%,
      hsl(23deg 100% 81%) 11%,
      hsl(11deg 100% 82%) 22%,
      hsl(340deg 47% 72%) 33%,
      hsl(269deg 17% 57%) 44%,
      hsl(206deg 27% 50%) 55%,
      hsl(177deg 27% 51%) 66%,
      hsl(118deg 21% 66%) 77%,
      hsl(89deg 29% 73%) 88%,
      hsl(66deg 41% 81%) 100%
    );
  -webkit-background-clip: text;
  background-clip: text;
  background-size: 1000% 100%;
  color: transparent;
  animation: 15s linear infinite alternate pan;
}`

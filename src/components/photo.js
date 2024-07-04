import { html, css } from "@rasch/reno"

/**
 * @typedef {Object} Photo
 * @property {string} src
 * @property {string} alt
 * @property {string} caption
 * @property {"tall" | "wide" | "full" | "normal"} layout
 */

/**
 * @param {Photo} photo
 */
export const photo = ({ src, alt, caption, layout }) => html`
<li class="photo photo-${layout} card">
  <figure>
    <img src="${src}" alt="${alt}" loading="lazy">
    <figcaption>${caption}</figcaption>
  </figure>
</li>`

export const photoCSS = () => css`
.photo figure {
  position: relative;
}

.photo figure figcaption {
  position: absolute;
  bottom: 1px;
  width: 100%;
  padding: 0 0.5rem;

  background-color: var(--black-opaque);
  color: var(--white);
  font-size: 0.8rem;

  transform: scaleY(1);
  transition: transform 128ms linear;
  transform-origin: bottom;
}

.photo figure:hover figcaption {
  transform: scaleY(0);
  transition: transform 512ms linear 2048ms;
  transform-origin: bottom;
}

@media screen and (min-width: 420px) {
  .photo figure figcaption {
    font-size: 1rem;
  }
}

@media screen and (min-width: 540px) {
  .photo figure figcaption {
    font-size: 1.2rem;
  }
}

@media screen and (min-width: 750px) {
  .photo.photo-full {
    grid-column: 1 / -1;
  }

  .photo.photo-wide {
    grid-column: span 2;
    grid-row: span 2;
  }

  .photo.photo-tall {
    grid-row: span 2;
  }
}`

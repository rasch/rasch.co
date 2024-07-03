import { css, html } from "@rasch/reno"
import { photo } from "./photo.js"

/**
 * @type {import("./photo.js").Photo[]}
 */
const photoArray = [
  {
    src: "i/1200/rainbow.jpg",
    alt: "A rainbow over Lake Superior provides some color on a gray day.",
    caption: "Presque Isle Park - Marquette, MI",
    layout: "tall",
  },
  {
    src: "i/600/lake-superior.jpg",
    alt: "While Lake Superior gently waves across the sand in the background, a small tuft of (macro)lichen grows from an aged wooden post on the beach.",
    caption: "Whitefish Bay - Paradise, MI",
    layout: "normal",
  },
  {
    src: "i/600/gibraltar.jpg",
    alt: "A Barbary macaque uses a cannon as a perch for silent reflection as they gaze across the strait.",
    caption: "Rock of Gibraltar",
    layout: "normal",
  },
  {
    src: "i/600/stonehenge.jpg",
    alt: "Stonehenge feels like a very somber place on a foggy day just before sunrise.",
    caption: "Stonehenge - Wiltshire, England",
    layout: "normal",
  },
  {
    src: "i/600/stourhead.jpg",
    alt: "A distinct tree, chiseled by time, provides substrate for some moss as its twisted branches reach out over the foggy lake.",
    caption: "Stourhead - Wiltshire, England",
    layout: "normal",
  },
  {
    src: "i/1200/state-hospital.jpg",
    alt: "Forget-me-not (Myosotis sylvatica) perennials with beautiful pale-blue flowers rise from the rich woodland soil.",
    caption: "Traverse City State Hospital - Traverse City, MI",
    layout: "wide",
  },
  {
    src: "i/600/le-mont-saint-michel.jpg",
    alt: "The tide is out and it's a sunny day at the tidal island of Le Mont-Saint-Michel.",
    caption: "Mont-Saint-Michel - Normandy, France",
    layout: "normal",
  },
  {
    src: "i/600/bonn.jpg",
    alt: "Looking up, the sky is filled with motion from the black birds flying in the silhouette of the leafless winter trees.",
    caption: "Freizeitpark Rheinaue - Bonn, Germany",
    layout: "normal",
  },
  {
    src: "i/1600/vail.jpg",
    alt: "The panoramic view from the top of the mountain is amazing!",
    caption: "Vail Mountain - Vail, Colorado",
    layout: "full",
  },
]

export const photos = () => html`
<div id="photos" class="page">
  <h2 class="texture">$ display photos</h2>
  <ul class="photos">
    ${photoArray.map(photo).join("")}
  </ul>
</div>`

export const photosCSS = () => css`
.photos {
  display: grid;
  grid-template-columns: minmax(320px, 500px);
  grid-auto-flow: dense;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  max-width: 1500px;
  margin: 0 auto 6rem;
  padding: 0 2%;

  list-style-type: none;
}

@media screen and (min-width: 750px) {
  .photos {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media screen and (min-width: 1200px) {
  .photos {
    grid-template-columns: repeat(3, 1fr);
  }
}`

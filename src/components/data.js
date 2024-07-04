import { html, postArray } from "@rasch/reno"
import { projects } from "./projects/index.js"

/**
 * @typedef {Object} SiteData
 * @property {string} title
 * @property {string} description
 * @property {string} url
 * @property {import("@rasch/reno").Post[]} posts
 * @property {import("./projects/index.js").Project[]} projects
 */

/**
 * @type {SiteData}
 */
export const data = {
  title: "rAsCH.co",
  description: html`Hi. My name is Rand Schneck. Welcome to my website!`,
  url: "https://www.rasch.co/",
  posts: await postArray("writing"),
  projects,
}

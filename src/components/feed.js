import { html, stringify } from "@rasch/reno"

const name = "Rand Schneck"
const url = "https://www.rasch.co"

/**
 * @param {import("./data.js").SiteData} data
 */
const jsonFeed = data => stringify({
  version: "https://jsonfeed.org/version/1.1",
  title: data.title,
  home_page_url: url,
  feed_url: `${url}/feed.json`,
  description: data.description,
  icon: `${url}/favicon-512x512.png`,
  favicon: `${url}/favicon-64x64.png`,
  authors: [
    {
      name,
      url,
      avatar: `${url}/og.jpg`,
    },
  ],
  language: "en-US",
  items: data.posts.map(p => ({
    id: `${url}/${p.path || p._path}`,
    url: `${url}/${p.path || p._path}`,
    title: p.title,
    content_html: p.content,
    content_text: p.text,
    summary: p.description,
    image: p.image,
    banner_image: p.banner_image,
    date_published: new Date(p.date || p._stat.mtimeMs),
    date_modified: new Date(p.modified || p.date || p._stat.mtimeMs),
    tags: p.tags,
  })),
})

/**
 * @param {string} str
 */
const escapeHTML = str => str
  .replace(/&/g, "&amp;")
  .replace(/</g, "&lt;")
  .replace(/>/g, "&gt;")
  .replace(/"/g, "&quot;")
  .replace(/'/g, "&#039;")

/**
 * @param {import("@rasch/reno").Post} p
 */
const entry = p => html`
<entry>
  <title>${p.title}</title>
  <link href="${url}/${p.path || p._path}"/>
  <id>${url}/${p.path || p._path}</id>
  <updated>${(new Date(p.modified || p.date || p._stat.mtimeMs)).toISOString()}</updated>
  <published>${(new Date(p.date || p._stat.mtimeMs)).toISOString()}</published>
  <summary>${p.description || ""}</summary>
  <content type="html">${escapeHTML(p.content)}</content>
  ${/** @type {string[]} */ (p.tags || []).map(t => `<category term="${t}"/>`).join("")}
</entry>`

/**
 * @param {import("./data.js").SiteData} data
 */
const atom = data => html`<?xml version="1.0" encoding="utf-8"?>
<feed xmlns="http://www.w3.org/2005/Atom">
  <title>${data.title}</title>
  <subtitle></subtitle>
  <icon>${url}/favicon-64x64.png</icon>
  <link href="${url}/writing"/>
  <link rel="self" href="${url}/atom.xml"/>
  <updated>${(new Date()).toISOString()}</updated>
  <author>
    <name>${name}</name>
    <uri>${url}</uri>
  </author>
  <id>${url}/writing</id>
  ${data.posts.map(entry).join("")}
</feed>`

/**
 * @param {import("./data.js").SiteData} data
 * @returns {(type: "json" | "atom" | "xml") => Promise<string>}
 */
export const generateFeed = data => async type =>
  type === "json" ? jsonFeed(data) : atom(data)

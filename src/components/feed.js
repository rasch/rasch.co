import { stringify } from "@rasch/reno"

const name = "Rand Schneck"
const url = "https://www.rasch.co"

/**
 * @param {import("./data.js").SiteData} data
 */
const feed = data => ({
  version: "https://jsonfeed.org/version/1.1",
  title: data.title,
  home_page_url: url,
  feed_url: `${url}/feed.json`,
  description: data.description,
  icon: `${url}/icon.png`,
  favicon: `${url}/icon.svg`,
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
 * @param {import("./data.js").SiteData} data
 */
export const feedJSON = data => stringify(feed(data))

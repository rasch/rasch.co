import { writePage, writePosts, write } from "@rasch/reno"
import { data } from "./components/data.js"
import { index } from "./components/index.js"
import { postIndex } from "./components/post-index.js"
import { style } from "./style/index.js"
import { icons } from "./components/icons.js"
import { generateFeed } from "./components/feed.js"

// sort posts in reverse chronological order
data.posts.sort((a, b) =>
  Number(new Date(b.date || b._stat.mtimeMs)) -
  Number(new Date(a.date || a._stat.mtimeMs))
)

// filter drafts and empty posts out of post array
const filteredPosts = data.posts.filter(p => !p.draft && p.content)

writePage({
  path: "/",
  template: null,
  content: index(data),
})

writePage({
  path: "writing",
  description: "the blog of rand schneck",
  date: new Date(),
  content: postIndex(filteredPosts),
})

writePosts(filteredPosts)
write("dist/style.css")(style)
write("dist/icons.svg")(icons())

const feed = generateFeed({ ...data, posts: filteredPosts })

write("dist/feed.json")(await feed("json"))
write("dist/feed.xml")(await feed("atom"))

import { html } from "@rasch/reno"
import { head } from "./head.js"
import { body } from "./body.js"

/**
 * @param {import("./data.js").SiteData} data
 */
export const index = data => html`<!doctype html>
<html>
  ${head(data)}
  ${body(data)}
</html>
`

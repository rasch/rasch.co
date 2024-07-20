import { html } from "@rasch/reno"
import { g } from "./g.js"

const style = `
max-width: 100%;
padding: ${g / 2}rem 0;
margin: 0 auto;
overflow-x: auto;
white-space: nowrap;
text-align: center;
`.replace(/\n/g, "")

export const keyboard = () => html`
<div class="keyboard" style="${style}">
  ${[
      [..."`1234567890-=", "Del"],
      ["Tab", ..."QWERTYUIOP[]\\"],
      ["Esc", ..."ASDFGHJKL;'", "Enter"],
      ["Shift", ..."ZXCVBNM,./", "&nbsp;Shift"],
      ["Ctrl", "Super", "Alt", "&nbsp;Space&nbsp;", "Alt", "Fn", "Menu", "Ctrl"]
    ].map(row => row.map(key => `<kbd>${key}</kbd>`).join("")).join("<br>")}
</div>

<script>
const weird = things => {
  const r = len => Math.floor(Math.random() * len)
  const div = document.createElement("div")
  const count = Math.floor(window.innerHeight * window.innerWidth / 4096)
  const tb = ["top", "bottom"]
  const lr = ["left", "right"]

  document.querySelector("body").appendChild(div)

  for (let i = 0; i < count; i++) {
    const span = document.createElement("span")

    span.innerHTML = things[r(things.length)]
    span.style.position = "fixed"
    span.style[tb[r(tb.length)]] = r(window.innerHeight) + "px"
    span.style[lr[r(lr.length)]] = r(window.innerWidth) + "px"
    span.style.fontSize = r(64) + "px"
    span.style.transform = "rotate(" + r(360) + "deg)"
    span.style.transformOrigin = "center"
    span.style.animation = "512ms ease fadeIn"

    setTimeout(() => div.appendChild(span), r(8192))
  }
}

let $input = ""

document
.querySelector(".keyboard")
.addEventListener("click", e => {
  $input += e.target.innerHTML.replace(/&nbsp;/g, "")
  $input = $input.slice(-24)

  if ($input.endsWith("TADA")) weird(["🤡", "🎈"])
  else if ($input.endsWith("BOO")) weird(["🦇", "🎃", "💀", "🕷️"])
  else if ($input.endsWith("SpaceShift")) weird(["🚀", "🛸", "🛰️", "✨"])
  else if ($input.endsWith("Shift4")) weird(["💸", "💰", "🪙", "🤑", "👑"])
  else if ($input.endsWith("GWAR"))
    window.location.href = "https://www.youtube.com/watch?v=Dbnm-0r3suM"
})
</script>`

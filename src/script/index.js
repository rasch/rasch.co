//----------------------------------------------------------------------
// Name Pronunciation
//----------------------------------------------------------------------

const myName = document.getElementById("name")
const audio = document.querySelector("audio")

if (myName && audio) {
  myName.title = "click for audio pronunciation"
  myName.removeAttribute("disabled")
  myName.addEventListener("click", () => audio.play())
}

//----------------------------------------------------------------------
// Console Poetry
//----------------------------------------------------------------------

const consoleMessage = () => {
  if (!window.console) return

  const base = `
    line-height: ${(1 + Math.sqrt(5)) / 2};
    padding: 0 0.5rem;
    font-size: 16px;`

  const title = `
    display: inline-block;
    width: 100%;
    padding: 6rem 8rem;
    font-size: 6rem;
    font-weight: bold;
    color: hsl(49deg 100% 80%);
    text-shadow:
      -93px -63px 55px hsla(47.37, 50.44%, 22.16%, 0.294),
      37px -69px 62px hsla(184.29, 47.3%, 29.02%, 0.164),
      -60px 56px 42px hsla(47.59, 64.44%, 55.88%, 0.428),
      77px -35px 35px hsla(196, 50.24%, 59.02%, 0.451),
      -2px -73px 2px hsla(116.76, 31.09%, 23.33%, 0.044),
      69px -24px 78px hsla(172.17, 59.48%, 45.49%, 0.445),
      -45px 4px 6px hsla(358.8, 83.33%, 88.24%, 0.417);`

  /**
   * @param {string} c
   */
  const color = c =>
    `${base} color: #2d383a; background-color: ${c}; margin: 0 1px;`

  const red = color("#ed0a3f")
  const orange = color("#ff8833")
  const yellow = color("#fbe870")
  const green = color("#01a638")
  const blue = color("#0066ff")
  const indigo = color("#4f69c6")
  const white = color("#ffffff")
  const gray = color("#8b8680")
  const brown = color("#af593e")
  const blonde = color("#ffff99")
  const pink = color("#ffa6c9")
  const silver = color("#c9c0bb")
  const clear = `all: unset; ${base}`
  const italic = "font-style: italic;"
  const bluefg = `${base} color: #0066ff;`

  console.log(`%ccolors%c
    My skin is kind of sort of %cbrownish%c
    %cPinkish%c %cyellowish%c %cwhite%c.
    My eyes are %cgreyish%c %cblueish%c %cgreen%c,
    But I'm told they look %corange%c in the night.
    My hair is %creddish%c %cblondish%c %cbrown%c,
    But it's %csilver%c when it's wet.
    And all the %cc%co%cl%co%cr%cs%c I am inside
    Have not been invented yet.

    %c~Shel Silverstein%c
    __________________________________________
     🦋%chttps://rasch.co/colors
    `,
    title, clear,
    brown, clear,
    pink, clear, yellow, clear, white, clear,
    gray, clear, blue, clear, green, clear,
    orange, clear,
    red, clear, blonde, clear, brown, clear,
    silver, clear,
    red, orange, yellow, green, blue, indigo, clear,
    italic, clear,
    bluefg,
  )
}

consoleMessage()

//----------------------------------------------------------------------
// Modal (works without JS, but make the UX a little more polished)
//----------------------------------------------------------------------

const close = () =>
  document.querySelector(".project > details[open]")?.removeAttribute("open")

document.addEventListener("keydown", e => (e.key === "Escape") && close())

document
  .querySelectorAll("details > .details button.close")
  .forEach(btn => btn.addEventListener("click", close))

//----------------------------------------------------------------------
// Konami Code
//----------------------------------------------------------------------

const konamiKeys = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a",
  "Enter",
]

let konamiIndex = 0

const konamiFunction = () => {
  /** @type {HTMLElement | null} */
  const global = document.querySelector(":where(html)")

  if (!global) return

  global.style.setProperty("--bg", "steelblue")
  global.style.setProperty("--fg", "papayawhip")
  global.style.setProperty("--texture", "tomato")

  global.style.setProperty("--bg-light", "papayawhip")
  global.style.setProperty("--fg-light", "steelblue")
  global.style.setProperty("--texture-light", "tomato")
}

document.addEventListener('keydown', e => {
  if (e.key === konamiKeys[konamiIndex++]) {
    if (konamiIndex === konamiKeys.length) {
      konamiIndex = 0
      konamiFunction()
    }
  } else {
    konamiIndex = 0
  }
})

//----------------------------------------------------------------------
// Copy Public PGP Key To Clipboard (requires https)
//----------------------------------------------------------------------

if (navigator) {
  const pubkey = document.querySelector(".pubkey")
  const contact = document.querySelector(".contact")

  /** @type {HTMLButtonElement | null | undefined} */
  const button = contact?.querySelector(".contact > button")

  const writeClipboardText = async () => {
    if (contact && pubkey?.textContent) {
      const div = document.createElement("div")

      div.style.cssText = `
        position: absolute;
        top: 0;
        zIndex: 10;
        maxWidth: max-content;
        margin: 1rem auto;
        padding: 0.3rem 0.6rem;
        border: 0.1rem solid currentColor;
        background: var(--bg);
        animation: 1s ease 1 fadeIn;`

      try {
        await navigator.clipboard.writeText(pubkey.textContent)
        div.innerHTML = "Public key copied to clipboard!"
        div.style.color = "#97d0ed"
      } catch (e) {
        div.innerHTML = "Error: Could not copy key to clipboard."
        div.style.color = "#e89daf"
      } finally {
        contact.appendChild(div)
        setTimeout(() => contact.removeChild(div), 5000)
      }
    }
  }

  if (button) {
    button.title = "click to copy public key to clipboard"
    button.removeAttribute("disabled")
    button.addEventListener("click", writeClipboardText)
  }
}

//----------------------------------------------------------------------
// Save and Load Theme Preference From localStorage
//----------------------------------------------------------------------

/** @type {HTMLInputElement | null} */
const themeToggle = document.querySelector("#toggle-dark-mode")
const themeToggleBtn = document.querySelector("button.toggle-theme")

if (localStorage?.getItem("theme") === "light") {
  if (themeToggle) themeToggle.checked = true
}

themeToggle?.addEventListener("change", () => {
  localStorage.setItem("theme", themeToggle.checked ? "light" : "dark")
})

themeToggleBtn?.addEventListener("click", () => themeToggle?.click())


//----------------------------------------------------------------------
// Content Style and Vertical Rythm
//----------------------------------------------------------------------

/**
 * @param {HTMLImageElement} e
 */
const setImageMargin = e => {
  const html = document.querySelector("html")

  if (!html) return

  const fs = window.getComputedStyle(html).getPropertyValue('font-size')
  const fontSize = parseFloat(fs)
  const g = (1 + Math.sqrt(5)) / 2
  const ht = e.clientHeight
  const margin = (Math.ceil(ht / (g * fontSize)) * (g * fontSize) - ht) / 2

  e.style.marginTop = `${margin}px`
  e.style.marginBottom = `${margin}px`
}

// Align images on vertical grid
document.querySelectorAll(".content img").forEach(img =>
  img.addEventListener("load", () =>
    setImageMargin(/** @type {HTMLImageElement} */ (img))
  )
)

/** @type {number} */
let debounce

window.addEventListener("resize", () => {
  clearTimeout(debounce)
  debounce = setTimeout(
    () => document.querySelectorAll(".content img").forEach(img =>
      setImageMargin(/** @type {HTMLImageElement} */ (img))
    ),
    250
  )
})

// Show vertical grid by pressing "#"
document.addEventListener("keydown", e => e.key === "#" &&
  document
    .querySelectorAll(".content")
    .forEach(c => c.classList.toggle("content-grid"))
)

// Add class to task list items for styling
document
  .querySelectorAll(".content li > input[type=checkbox]")
  .forEach(li => /** @type {HTMLElement} */ (li.parentNode)
    .classList.add("task-list-item")
  )

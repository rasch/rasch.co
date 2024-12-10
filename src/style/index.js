import { importFontsCSS } from "./import-fonts.js"
import { resetCSS } from "./reset.js"
import { customPropertiesCSS } from "./custom-properties.js"
import { baseCSS } from "./base.js"
import { pageCSS } from "./page.js"
import { cardCSS } from "./card.js"
import { textureCSS } from "./texture.js"
import { animationCSS } from "./animation.js"
import { admonitionCSS } from "../components/admonition.js"
import { inlineListCSS } from "../components/inline-list.js"
import { contentCSS } from "./content.js"
import { syntaxHighlightCSS } from "./syntax-highlight.js"
import { fontScale } from "./font-scale.js"

import { toggleDarkModeCSS } from "../components/toggle-dark-mode.js"
import { iconCSS } from "../components/icon.js"
import { homeCSS } from "../components/home.js"
import { bannerCSS } from "../components/banner.js"
import { logoCSS } from "../components/logo.js"
import { navigationCSS } from "../components/navigation.js"
import { titleCSS } from "../components/title.js"
import { writingCSS } from "../components/writing.js"
import { projectsCSS } from "../components/projects.js"
import { projectCSS } from "../components/project.js"
import { projectsMoreCSS } from "../components/projects-more.js"
import { photosCSS } from "../components/photos.js"
import { photoCSS } from "../components/photo.js"
import { whoamiCSS } from "../components/whoami.js"
import { aboutCSS } from "../components/about.js"
import { profileCSS } from "../components/profile.js"
import { contactCSS } from "../components/contact.js"
import { formCSS } from "../components/form.js"
import { codeSandboxCSS } from "../components/code-sandbox.js"
import { navigationMiniCSS } from "../components/navigation-mini.js"
import { postIndexCSS } from "../components/post-index.js"
import { postCardCSS } from "../components/post-card.js"
import { postTagsCSS } from "../components/post-tags.js"
import { screenReaderOnly } from "./screen-reader.js"

export const style = `
${importFontsCSS()}
${resetCSS()}
${customPropertiesCSS()}
${baseCSS()}
${screenReaderOnly()}
${pageCSS()}
${cardCSS()}
${textureCSS()}
${animationCSS()}
${admonitionCSS()}
${inlineListCSS()}
${contentCSS()}
${syntaxHighlightCSS()}
${fontScale()}
${iconCSS()}
${toggleDarkModeCSS()}
${homeCSS()}
${bannerCSS()}
${logoCSS()}
${navigationCSS()}
${titleCSS()}
${writingCSS()}
${projectsCSS()}
${projectCSS()}
${projectsMoreCSS()}
${photosCSS()}
${photoCSS()}
${whoamiCSS()}
${profileCSS()}
${aboutCSS()}
${contactCSS()}
${formCSS()}
${codeSandboxCSS()}
${navigationMiniCSS()}
${postIndexCSS()}
${postCardCSS()}
${postTagsCSS()}`

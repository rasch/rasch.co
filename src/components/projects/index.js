import { phalanx } from "./phalanx.js"
import { today } from "./today.js"
import { transactions } from "./transactions.js"
import { containers } from "./containers.js"
import { dicecube } from "./dicecube.js"
import { bf } from "./bf.js"
import { reno } from "./reno.js"
import { pomodoro } from "./pomodoro.js"
import { speed } from "./speed.js"
import { eekWhales } from "./eek-whales.js"
import { cliModules } from "./cli-modules.js"
import { stepanek } from "./stepanek.js"

/**
 * @typedef {Object} Project
 * @property {string} title
 * @property {string} summary
 * @property {string} description
 * @property {string} image
 * @property {string} [alt]
 * @property {"featured"} [layout]
 * @property {number} x
 * @property {number} [y]
 * @property {{title: string, url: string, icon: string}[]} [links]
 */

/**
 * @type {Project[]}
 */
export const projects = [
  phalanx, today, transactions,
  containers, dicecube, bf,
  reno, pomodoro, speed,
  eekWhales, cliModules, stepanek,
]

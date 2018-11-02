import { debuglog } from 'util'

const LOG = debuglog('@moderne/moderne')

/**
 * The Side-To-IDE Developer Tool To Manage Contents Of Packages Expressed As Maps Of Code, Docs and Tests On Function Level; Elimintate Plumbing By Facsilitating Maintanance Of Abstract Package Structure; Build Packages With Closure For Publishing; Synchronise With Remote Source Control; Support Templates For Modern Node.js Apps; Deploy API As Serverless Functions.
 * @param {Config} [config] Options for the program.
 * @param {boolean} [config.shouldRun=true] A boolean option. Default `true`.
 * @param {string} config.text A text to return.
 */
export default async function moderne(config = {}) {
  const {
    shouldRun = true,
    text,
  } = config
  if (!shouldRun) return
  LOG('@moderne/moderne called with %s', text)
  return text
}

/* documentary types/index.xml */
/**
 * @typedef {Object} Config Options for the program.
 * @prop {boolean} [shouldRun=true] A boolean option. Default `true`.
 * @prop {string} text A text to return.
 */

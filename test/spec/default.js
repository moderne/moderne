import { equal, ok } from 'zoroaster/assert'
import Context from '../context'
import moderne from '../../src'

/** @type {Object.<string, (c: Context)>} */
const T = {
  context: Context,
  'is a function'() {
    equal(typeof moderne, 'function')
  },
  async 'calls package without error'() {
    await moderne()
  },
  async 'gets a link to the fixture'({ FIXTURE }) {
    const res = await moderne({
      text: FIXTURE,
    })
    ok(res, FIXTURE)
  },
}

export default T
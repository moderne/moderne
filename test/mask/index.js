import { makeTestSuite } from 'zoroaster'
import Context from '../context'
import moderne from '../../src'

const ts = makeTestSuite('test/result', {
  async getResults(input) {
    const res = await moderne({
      text: input,
    })
    return res
  },
  context: Context,
})

export default ts
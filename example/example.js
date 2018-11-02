/* yarn example/ */
import moderne from '../src'

(async () => {
  const res = await moderne({
    text: 'example',
  })
  console.log(res)
})()
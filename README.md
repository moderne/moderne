# @moderne/moderne

[![npm version](https://badge.fury.io/js/@moderne/moderne.svg)](https://npmjs.org/package/@moderne/moderne)

`@moderne/moderne` is The Side-To-IDE Developer Tool To Manage Contents Of Packages Expressed As Maps Of Code, Docs and Tests On Function Level; Elimintate Plumbing By Facsilitating Maintanance Of Abstract Package Structure; Build Packages With Closure For Publishing; Synchronise With Remote Source Control; Support Templates For Modern Node.js Apps; Deploy API As Serverless Functions.

```sh
yarn add -E @moderne/moderne
```

## Table Of Contents

- [Table Of Contents](#table-of-contents)
- [API](#api)
- [`moderne(arg1: string, arg2?: boolean)`](#mynewpackagearg1-stringarg2-boolean-void)
  * [`Config`](#type-config)
- [Copyright](#copyright)

<p align="center"><a href="#table-of-contents"><img src=".documentary/section-breaks/0.svg?sanitize=true"></a></p>

## API

The package is available by importing its default function:

```js
import moderne from '@moderne/moderne'
```

<p align="center"><a href="#table-of-contents"><img src=".documentary/section-breaks/1.svg?sanitize=true"></a></p>

## `moderne(`<br/>&nbsp;&nbsp;`arg1: string,`<br/>&nbsp;&nbsp;`arg2?: boolean,`<br/>`): void`

Call this function to get the result you want.

__<a name="type-config">`Config`</a>__: Options for the program.

|   Name    |   Type    |    Description    | Default |
| --------- | --------- | ----------------- | ------- |
| shouldRun | _boolean_ | A boolean option. | `true`  |
| __text*__ | _string_  | A text to return. | -       |

```js
/* yarn example/ */
import moderne from '@moderne/moderne'

(async () => {
  const res = await moderne({
    text: 'example',
  })
  console.log(res)
})()
```
```
example
```

<p align="center"><a href="#table-of-contents"><img src=".documentary/section-breaks/2.svg?sanitize=true"></a></p>

## Copyright

(c) [Moderne][1] 2018

[1]: https://moderne.app

<p align="center"><a href="#table-of-contents"><img src=".documentary/section-breaks/-1.svg?sanitize=true"></a></p>
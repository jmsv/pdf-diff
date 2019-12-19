# pdf-diff

Compare 2 PDFs

---

## Install

```bash
npm install pdf-diff
```

## Usage

pdf-diff's `diff` function (default export) returns a promise:

```js
const diff = require('pdf-diff')

diff('./file1.pdf', './file2.pdf')
  .then(diffs => {
    console.log('diffs:', diffs)
  })
  .catch(err => {
    console.error('err:', err)
  })
```

## Changelog

### `0.1.1`

- Removed console logs
- Docs
- Node gitignore

### `0.1.0`

Initial version

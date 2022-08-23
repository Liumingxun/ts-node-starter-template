import { lstat } from 'fs/promises'

// eslint-disable-next-line no-console
console.log('233')

// eslint-disable-next-line no-console
lstat(process.cwd()).then(console.log)

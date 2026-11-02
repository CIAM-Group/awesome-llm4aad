import fs from 'node:fs/promises'
import { buildContent } from './build-content.mjs'
import { updateReadme } from './readme-content.mjs'

const data = await buildContent({ write: false })
const readme = await fs.readFile('README.md', 'utf8')
await fs.writeFile('README.md', updateReadme(readme, data.papers))
console.log(`Updated README with ${data.papers.length} papers.`)

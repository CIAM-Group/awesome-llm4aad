import fs from 'node:fs/promises'
import path from 'node:path'

const indexFile = path.join('dist', 'index.html')
const generated = JSON.parse(await fs.readFile(path.join('src', 'generated', 'content.json'), 'utf8'))
const routes = [
  'relations',
  'papers',
  ...generated.papers.map((paper) => path.join('papers', paper.id)),
]

await Promise.all(routes.map(async (route) => {
  const routeDirectory = path.join('dist', route)
  await fs.mkdir(routeDirectory, { recursive: true })
  await fs.copyFile(indexFile, path.join(routeDirectory, 'index.html'))
}))

await fs.copyFile(indexFile, path.join('dist', '404.html'))
console.log(`Created ${routes.length} static route entries and the GitHub Pages fallback.`)

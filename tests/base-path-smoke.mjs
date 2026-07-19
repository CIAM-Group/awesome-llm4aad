import { chromium } from 'playwright'

const baseUrl = process.env.PAGES_BASE_URL
if (!baseUrl) throw new Error('PAGES_BASE_URL is required')
const expectedBasePath = new URL(baseUrl).pathname.replace(/\/$/, '')

const browser = await chromium.launch({ headless: true })
const page = await browser.newPage({ viewport: { width: 1280, height: 900 } })
const errors = []
page.on('console', (message) => {
  if (message.type() === 'error') errors.push(message.text())
})
page.on('pageerror', (error) => errors.push(error.message))

async function checkDirectRoute(route, heading) {
  const directPage = await browser.newPage({ viewport: { width: 1280, height: 900 } })
  const directErrors = []
  directPage.on('console', (message) => {
    if (message.type() === 'error') directErrors.push(message.text())
  })
  directPage.on('pageerror', (error) => directErrors.push(error.message))
  try {
    const response = await directPage.goto(new URL(route, baseUrl).href, { waitUntil: 'domcontentloaded', timeout: 60_000 })
    if (!response || response.status() >= 400) throw new Error(`${route}: expected HTTP 2xx/3xx, received ${response?.status() ?? 'no response'}`)
    await directPage.getByRole('heading', { name: heading }).waitFor()
    if (directErrors.length > 0) throw new Error(`${route}: console errors: ${directErrors.join(' | ')}`)
  } finally {
    await directPage.close()
  }
}

try {
  await page.goto(baseUrl, { waitUntil: 'domcontentloaded', timeout: 60_000 })
  await page.getByText('Paper Timeline').waitFor()

  await page.getByRole('link', { name: 'Relations', exact: true }).click()
  await page.getByRole('heading', { name: 'Research relations' }).waitFor()
  if (!page.url().includes(`${expectedBasePath}/relations`)) throw new Error(`Unexpected Relations URL: ${page.url()}`)

  await page.getByRole('link', { name: 'Papers', exact: true }).click()
  await page.getByRole('heading', { name: 'Paper index' }).waitFor()
  const aelRow = page.locator('tr').filter({ hasText: 'Algorithm Evolution Using Large Language Model' })
  await aelRow.locator('a').first().click()
  await page.getByRole('heading', { name: 'Algorithm Evolution Using Large Language Model' }).waitFor()
  await page.locator('.paper-note img').first().waitFor({ state: 'visible' })
  await page.waitForFunction(() => {
    const image = document.querySelector('.paper-note img')
    return image instanceof HTMLImageElement && image.complete && image.naturalWidth > 0
  })
  await checkDirectRoute('relations', 'Research relations')
  await checkDirectRoute('papers', 'Paper index')
  await checkDirectRoute('papers/ael', 'Algorithm Evolution Using Large Language Model')
  if (errors.length > 0) throw new Error(`Console errors: ${errors.join(' | ')}`)
  console.log('GitHub Pages smoke passed: client navigation, direct 200 routes, AEL detail, and image assets.')
} finally {
  await browser.close()
}

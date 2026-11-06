export function resolvePaperNoteLinks(
  html: string,
  paperIds: ReadonlySet<string>,
  baseUrl: string,
): string {
  const base = `${baseUrl.replace(/\/$/, '')}/`
  return html.replace(
    /href="\.\.\/([a-z0-9]+(?:-[a-z0-9]+)*)\/index\.md(#[^"]*)?"/g,
    (original, id: string, fragment: string | undefined) => paperIds.has(id)
      ? `href="${base}papers/${id}${fragment ?? ''}"`
      : original,
  )
}

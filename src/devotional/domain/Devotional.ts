export type DevotinalId = string

export type Devotional = {
  id: DevotinalId
  title: string
  passage: Passage
  bibleReading: string
  content: string
  author: string
  slug: string
}

export type Passage = {
  text: string
  reference: string
}

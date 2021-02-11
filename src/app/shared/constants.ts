export interface Lang {
  code: string
  label: string
}

export const languageList: Array<Lang> = [
  { code: 'en', label: 'English' },
  { code: 'ro', label: 'Romanian' },
  { code: 'ru', label: 'Русский' }
]

export interface ItemModel {
  id?: string
  name?: string
  size?: number
  color?: string
  price?: number
  imageSrc?: string
}

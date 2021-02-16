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
  size?: string
  color?: string
  price?: number
  qty?: number
  discountedPrice?: number
  imageSrc?: [string]
  categoryName?: [string]
  labels?: [string]
  sku?: string
  description?: string
}

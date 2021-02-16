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

export interface MainCategoryInterface {
  mainCategory: string
  hidden?: boolean
  categories?: Array<CategoriesInterface>
}

export interface CategoriesInterface {
  category: string
  hidden?: boolean
  subCategories?: string[]
}

export const categories: Array<MainCategoryInterface> = [
  { mainCategory: 'spring 2020' },
  { mainCategory: 'summer 2020' },
  { mainCategory: 'autumn 2020' },
  {
    mainCategory: 'femei',
    hidden: true,
    categories: [
      {
        category: 'haine femei',
        hidden: true,
        subCategories: [
          'blugi',
          'cămăși',
          'rochii | salopete',
          'tricouri | topuri',
          'fuste | pantaloni scurți',
          'pulovere | hanorace',
          'geci | paltoane',
          'pantaloni',
          'sacouri',
          'pentru plajă',
          'lenjerie/sport'
        ]
      },
      {
        category: 'denim'
      },
      {
        category: 'încălțăminte femei',
        hidden: true,
        subCategories: ['sandale', 'pantofi', 'ghete', 'botine', 'șlapi']
      },
      {
        category: 'genți femei',
        hidden: true,
        subCategories: [
          'genți mari | shoppere',
          'genți mici | poșete',
          'rucsacuri'
        ]
      },
      {
        category: 'accesorii femei',
        hidden: true,
        subCategories: [
          'portmonee',
          'curele',
          'eșarfe | fulare',
          'chipiuri | șepci',
          'alte accesorii'
        ]
      }
    ]
  },
  {
    mainCategory: 'bărbați',
    hidden: true,
    categories: [
      {
        category: 'haine bărbați',
        hidden: true,
        subCategories: [
          'blugi',
          'cămăși',
          'tricouri | polo',
          'pulovere | hanorace',
          'sacouri',
          'pantaloni',
          'pantaloni scurți',
          'geci | paltoane',
          'pentru plajă',
          'lenjerie/sport'
        ]
      },
      {
        category: 'denim'
      },
      {
        category: 'încălțăminte bărbați',
        hidden: true,
        subCategories: ['ghete', 'botine']
      },
      {
        category: 'genți bărbați',
        hidden: true,
        subCategories: ['genți', 'rucsacuri']
      },
      {
        category: 'accesorii bărbați',
        hidden: true,
        subCategories: [
          'portmonee',
          'curele',
          'eșarfe | fulare',
          'chipiuri | șepci',
          'alte accesorii'
        ]
      }
    ]
  },
  {
    mainCategory: 'marciano',
    hidden: true,
    categories: [
      { category: 'marciano femei' },
      { category: 'marciano bărbați' }
    ]
  },
  {
    mainCategory: 'copii',
    hidden: true,
    categories: [
      { category: 'fete' },
      { category: 'băieți' },
      { category: 'unisex' }
    ]
  },
  {
    mainCategory: 'new arrivals',
    hidden: true,
    categories: [
      { category: 'new arrivals băieți' },
      { category: 'new arrivals fete' },
      {
        category: 'new arrivals femei',
        hidden: true,
        subCategories: ['haine', 'denim', 'încălțăminte', 'genți', 'accesorii']
      },
      {
        category: 'new arrivals bărbați',
        hidden: true,
        subCategories: ['haine', 'denim', 'încălțăminte', 'genți', 'accesorii']
      }
    ]
  }
]

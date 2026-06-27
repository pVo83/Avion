export const categories = [
  { id: 1, title: "All" },
  { id: 2, title: "Vases" },
  { id: 3, title: "Ceramics" },
  { id: 4, title: "Plant pots" },
  { id: 5, title: "Tableware" },
  { id: 6, title: "Home decor" },
]

export const productTypes = [
  { id: 1, title: "All" },
  { id: 2, title: "Handcrafted" },
  { id: 3, title: "Minimalist" },
  { id: 4, title: "Organic shape" },
  { id: 5, title: "Sculptural" },
  { id: 6, title: "Functional" },
]

export const prices = [
  { id: 1, title: "All" },
  { id: 2, title: "Under € 50" },
  { id: 3, title: "€ 50 – € 100" },
  { id: 4, title: "€ 100 – € 200" },
  { id: 5, title: "€ 200 – € 500" },
  { id: 6, title: "Over € 500" },
]

export const brands = [
  { id: 1, title: "All" },
  { id: 2, title: "Avion Studio" },
  { id: 3, title: "Clay & Co" },
  { id: 4, title: "Nordic Craft" },
  { id: 5, title: "Terra Form" },
  { id: 6, title: "Still Objects" },
]

export const sortOptions = [
  { id: 1, title: "Date added", value: "date-added" },
  { id: 2, title: "Price: low to high", value: "price-asc" },
  { id: 3, title: "Price: high to low", value: "price-desc" },
  { id: 4, title: "Name: A to Z", value: "name-asc" },
]

export default {
  categories: categories,
  productTypes: productTypes,
  prices: prices,
  brands: brands,
  sortOptions: sortOptions,
}

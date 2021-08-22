const initialState = {
  products: [
    { name: 'tv', description: 'something to watch stuff', image: "https://westinghouseelectronics.com/wp-content/uploads/2019/10/WD32HB1120-C_Westinghouse-HD-LED-32_inch_TV.jpg", category: 'electronics', inventoryCount: 1, price: 100 },
    { name: 'TCL 20S', description: 'something to stuff with',image:"https://www.tcl.com/usca/content/dam/tcl/product/mobile/tcl-20s/carousel/1.jpg", category: 'electronics', inventoryCount: 2, price: 200 },
    { name: 'plant-based diet', description: 'its a food for the love of god', image: "https://images.everydayhealth.com/images/diet-nutrition/what-is-a-plant-based-diet-beginners-guide-food-list-benefits-722x406.jpg?w=1110", category: 'food', inventoryCount: 3, price: 300 },
    { name: 'apple', description: 'its a food for the love of god', image : "https://c.ndtvimg.com/2020-04/dih4ifhg_pasta_625x300_22_April_20.jpg", category: 'food', inventoryCount: 4, price: 400 }
  ],
  activeProducts: [{ name: 'tv', description: 'something to watch stuff', image: "https://westinghouseelectronics.com/wp-content/uploads/2019/10/WD32HB1120-C_Westinghouse-HD-LED-32_inch_TV.jpg", category: 'electronics', inventoryCount: 1, price: 100 },
  { name: 'TCL 20S', description: 'something to stuff with',image:"https://www.tcl.com/usca/content/dam/tcl/product/mobile/tcl-20s/carousel/1.jpg", category: 'electronics', inventoryCount: 2, price: 200 }]
}

export default function getItems(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case 'CHANGE_ACTIVE':
      const modified = state.products.filter(item => {
        return item.category === payload
      })
      return {
        products: state.products,
        activeProducts: modified
      }
    default:
      return state;
  }

}


export function getCategoryItems(name) {
  return {
    type: 'CHANGE_ACTIVE',
    payload: name
  }
}
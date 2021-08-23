const initialState = {
  products: [
    { name: 'tv', description: 'New Apple Original series. and films coming this year. Preview now. The Morning Show. ', image: "https://westinghouseelectronics.com/wp-content/uploads/2019/10/WD32HB1120-C_Westinghouse-HD-LED-32_inch_TV.jpg", category: 'electronics', inventoryCount: 1, price: '500 JD' },
    { name: 'TCL 20S', description: 'Android smartphone. Announced Apr 2021. Features 6.67″ display, Snapdragon 665 chipset, 5000 mAh battery, 256 GB storage, 6 GB RAM.',image:"https://www.tcl.com/usca/content/dam/tcl/product/mobile/tcl-20s/carousel/1.jpg", category: 'electronics', inventoryCount: 2, price:' 250 JD'},
    { name: 'plant-based diet', description: 'foods primarily from plants', image: "https://images.everydayhealth.com/images/diet-nutrition/what-is-a-plant-based-diet-beginners-guide-food-list-benefits-722x406.jpg?w=1110", category: 'food', inventoryCount: 3, price: '30 JD' },
    { name: 'Spaghetti', description: 'now you have a delicious, warm and satisfying homemade spaghetti Bolognese-Vegan option.', image : "https://c.ndtvimg.com/2020-04/dih4ifhg_pasta_625x300_22_April_20.jpg", category: 'food', inventoryCount: 4, price: '10 JD '}
  ],
  activeProducts: [{ name: 'tv', description: 'New Apple Original series. and films coming this year. Preview now. The Morning Show.', image: "https://westinghouseelectronics.com/wp-content/uploads/2019/10/WD32HB1120-C_Westinghouse-HD-LED-32_inch_TV.jpg", category: 'electronics', inventoryCount: 1, price: 100 },
  { name: 'TCL 20S', description: 'Android smartphone. Announced Apr 2021. Features 6.67″ display, Snapdragon 665 chipset, 5000 mAh battery, 256 GB storage, 6 GB RAM.',image:"https://www.tcl.com/usca/content/dam/tcl/product/mobile/tcl-20s/carousel/1.jpg", category: 'electronics', inventoryCount: 2, price: 200 }]
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

      case 'DECREASE_INVENTORY':
            console.log('called from decrease inventory');
            const afterAdd = state.products.map((element)=>{
                if(element.name == payload.name&&element.inventoryCount>0){
                    element.inventoryCount=element.inventoryCount-1;
                }
                if(element.inventoryCount===0){
                    element.description='out of stock'
                }
                return element;
            });
            console.log('called in products');
            return {
                products:afterAdd,
                activeProducts:state.activeProducts
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

export function reduceInventory(product){
  return{
      type:'DECREASE_INVENTORY',
      payload:product
  }
}
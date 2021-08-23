const initialState = {
  categories: [{ name: 'electronics', description: 'Making your life easier, one volt at a time', }, { name: 'food', description: 'Stuff for you to eat' }],
  activeCategory: {},
}



export default function categoriesReducer(state = initialState, action) {
  const { payload, type } = action;

  switch (type) {
    case 'CHANGE_ACTIVE':
      let modified = {};
      console.log('called');
      state.categories.forEach(item => {
        if (item.name === payload) {
          modified = item;
        }
      });
      return {
        categories: state.categories,
        activeCategory: modified
      };
    default:
      return state;
  }
}


export function changeActive(name) {
  return {
    type: 'CHANGE_ACTIVE',
    payload: name
  }
}

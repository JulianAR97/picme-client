import {sortByLikes} from '../helpers/picHelpers'

const initialState = {
  pic: {},
  picsLoading: true,
  picLoading: true,
  pics: [],
  hottest: []
}

const picsReducer = (state = initialState, action) => {
  
  switch (action.type) {
    case "LOADING":
      return {
        ...state, loading: true
      }
    
    // For getting random pic
    case "SET_PIC":
      return {
        ...state,
        picLoading: false,
        pic: {...action.pic, likes: 0}
      }

    // For getting pics from backend
    case "SET_PICS":
      return {
        ...state,
        picsLoading: false,
        pics: action.pics,
        // add hottest here so that only one fetch call needs to be make to api
        hottest: sortByLikes(action.pics).slice(0, 100)
      }
    
    case "ADD_PIC":
      return {
        ...state,
        pics: [...state.pics, action.pic]
      }
    
    case "UPDATE_PIC":
      let idx = state.pics.findIndex(p => p.id === Number(action.pic.id))
      
      return ({
        ...state,
        pics: [...state.pics.slice(0, idx), action.pic, ...state.pics.slice(idx + 1)]
      })
    default:
      return state;
    
  }
}

export default picsReducer

// use separate reducer file for other actions
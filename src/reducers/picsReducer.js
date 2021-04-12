import {sortByLikes} from '../helpers/picHelpers'

const initialState = {
  pic: {},
  loading: true,
  pics: [],
  hottest: [],
  cookie: '',
  myCollection: []
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
        loading: false,
        pic: {...action.pic, likes: 0}
      }

    // For getting pics from backend
    case "SET_PICS":
      return {
        ...state,
        loading: false,
        pics: action.pics,
        // add hottest here so that only one fetch call needs to be make to api
        hottest: sortByLikes(action.pics).slice(0, 100)
      }
    
    case "SET_MY_COLLECTION":
      return {
        ...state,
        loading: false,
        myCollection: action.myCollection
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

    case "SET_COOKIE":
      return ({
        ...state,
        cookie: action.cookie
      })

    default:
      return state;
    
  }
}

export default picsReducer

// use separate reducer file for other actions
export const getPic = () => {
  // First set an initial pic with no attributes
  let pic = {}
  return dispatch => {
    // Dispatch type loading first
    dispatch({type: "LOADING"})
    // This should fetch a random picture with a 16:9 aspect ratio
    fetch("https://picsum.photos/800/450")
      .then(resp => {
        pic.url = resp.url
        return resp.url })
      .then(url => {
        // url will be in form "https://i.picsum.photos/id/73/200/200.jpg?hmac=IYjgRq-Ok9gn3_MVxJ4TlfhLPONQ97qWvp2Ir1Y1z6c"
        let id = url.split('/')[4];
        pic.id = id;
        fetch(`https://picsum.photos/id/${id}/info`)
          .then(resp => resp.json())
          .then(json => pic.author = json.author)
          // Finally, dispatch pic to store
          .then(() => dispatch({type: "SET_PIC", pic}))
      })
  }
}

export const getPics = () => {
  return dispatch => {
    dispatch({type: "LOADING"})

    fetch("http://localhost:3001/pics")
      .then(resp => resp.json())
      .then(pics => dispatch({type: "SET_PICS", pics}))
  }
}

// (pic, history for later)

export const addPic = (pic) => {
  // Maybe get another pic here
  return dispatch => {
    fetch('http://localhost:3001/pics', {
      method: 'POST',
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({pic})
    })
      .then(resp => resp.json())
      .then(pic => {
        dispatch({type: "ADD_PIC", pic})
      })
  }
}

export const updatePic = (pic) => {
  return dispatch => {
    fetch(`http://localhost:3001/pics/${pic.id}`, {
      method: 'PATCH',
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        likes: pic.likes
      })
    })
      .then(resp => resp.json())
      .then(pic => {
        dispatch({type: "UPDATE_PIC", pic})
      })
  }
}

export const setUSNews = (data) =>  ({
    type: "SET_US_NEWS",
    payload: {
      country: "US",
      news: data[0]
    }
})

export const setUKNews = (data) => ({
    type: "SET_UK_NEWS",
    payload: {
      country: "UK",
      news: data[0]
    }
})


export const setAUNews = (data) => ({
    type: "SET_AU_NEWS",
    payload: {
      country: "AU",
      news: data[0]
    }
})


export const setFRNews = (data) => ({
    type: "SET_FR_NEWS",
    payload: {
      country: "FR",
      news: data[0]
    }
})


export const setJPNews = (data) => ({
    type: "SET_JP_NEWS",
    payload: {
      country: "JP",
      news: data[0]
    }
})

export const setCNNews = (data) => ({
    type: "SET_CN_NEWS",
    payload: {
      country: "CN",
      news: data[0]
    }
})

export const fetchNews_US  = () => {
  return function action(dispatch) {
      return fetch( "https://elanewsfeedserver.herokuapp.com/news/us" )
        .then( res => res.json( ) )
        .then( res => {
          dispatch(setUSNews(res))
      });
  }
}

export const fetchNews_UK  = () => {
  return function action(dispatch) {
      return fetch( "https://elanewsfeedserver.herokuapp.com/news/gb" )
        .then( res => res.json( ) )
        .then( res => {
          dispatch(setUKNews(res))
      });
  }
}

export const fetchNews_AU  = () => {
  return function action(dispatch) {
      return fetch( "https://elanewsfeedserver.herokuapp.com/news/au" )
        .then( res => res.json( ) )
        .then( res => {
          dispatch(setAUNews(res))
      });
  }
}

export const fetchNews_JP  = () => {
  return function action(dispatch) {
      return fetch( "https://elanewsfeedserver.herokuapp.com/news/jp" )
        .then( res => res.json( ) )
        .then( res => {
          dispatch(setJPNews(res))
      });
  }
}

export const fetchNews_FR  = () => {
  return function action(dispatch) {
      return fetch( "https://elanewsfeedserver.herokuapp.com/news/fr" )
        .then( res => res.json( ) )
        .then( res => {
          dispatch(setFRNews(res))
      });
  }
}
export const fetchNews_CN = () => {
  return function action(dispatch) {
      return fetch( "https://elanewsfeedserver.herokuapp.com/news/cn" )
        .then( res => res.json( ) )
        .then( res => {
          dispatch(setCNNews(res))
      });
  }
}
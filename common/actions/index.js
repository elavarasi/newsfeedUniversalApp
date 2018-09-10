
export const setUSNews = (data) =>  ({
    type: "SET_US_NEWS",
    payload: {
      country: "US",
      news: data
    }
})

export const setUKNews = (data) =>  ({
    type: "SET_UK_NEWS",
    payload: {
      country: "UK",
      news: data
    }
})


export const setAUNews = (data) => ({
    type: "SET_AU_NEWS",
    payload: {
      country: "AU",
      news: data
    }
})


export const setFRNews = (data) => ({
    type: "SET_FR_NEWS",
    payload: {
      country: "FR",
      news: data
    }
})


export const setJPNews = (data) => ({
    type: "SET_JP_NEWS",
    payload: {
      country: "JP",
      news: data
    }
})

export const setCNNews = (data) => ({
    type: "SET_CN_NEWS",
    payload: {
      country: "CN",
      news: data
    }
})

export const fetchNews_US  = () => {
  return function action(dispatch) {
      return fetch( "https://newsapi.org/v2/top-headlines?country=US&category=business&apiKey=1d941fa3d7de451fa00e69a607e5f2a6" )
        .then( res => res.json( ) )
        .then( res => {
          dispatch(setUSNews(res))
      });
  }
}

export const fetchNews_UK  = () => {
  return function action(dispatch) {
      return fetch( "https://newsapi.org/v2/top-headlines?country=GB&category=business&apiKey=1d941fa3d7de451fa00e69a607e5f2a6" )
        .then( res => res.json( ) )
        .then( res => {
          dispatch(setUKNews(res))
      });
  }
}

export const fetchNews_AU  = () => {
  return function action(dispatch) {
      return fetch( "https://newsapi.org/v2/top-headlines?country=AU&category=business&apiKey=1d941fa3d7de451fa00e69a607e5f2a6" )
        .then( res => res.json( ) )
        .then( res => {
          dispatch(setAUNews(res))
      });
  }
}

export const fetchNews_JP  = () => {
  return function action(dispatch) {
      return fetch( "https://newsapi.org/v2/top-headlines?country=JP&category=business&apiKey=1d941fa3d7de451fa00e69a607e5f2a6" )
        .then( res => res.json( ) )
        .then( res => {
          dispatch(setJPNews(res))
      });
  }
}

export const fetchNews_FR  = () => {
  return function action(dispatch) {
      return fetch( "https://newsapi.org/v2/top-headlines?country=FR&category=business&apiKey=1d941fa3d7de451fa00e69a607e5f2a6" )
        .then( res => res.json( ) )
        .then( res => {
          dispatch(setFRNews(res))
      });
  }
}
export const fetchNews_CN = () => {
  return function action(dispatch) {
      return fetch( "https://newsapi.org/v2/top-headlines?country=CN&category=business&apiKey=1d941fa3d7de451fa00e69a607e5f2a6" )
        .then( res => res.json( ) )
        .then( res => {
          dispatch(setCNNews(res))
      });
  }
}
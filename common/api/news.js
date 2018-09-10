import fetch from "isomorphic-fetch";

export const fetchUSNews = (callback) => {
    return fetch( "https://newsapi.org/v2/top-headlines?country=US&category=business&apiKey=1d941fa3d7de451fa00e69a607e5f2a6" )
        .then( res => res.json( ) )
        .then( res => callback(res)) ;
}
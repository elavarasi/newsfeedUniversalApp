import fetch from "isomorphic-fetch";

export const fetchUSNews = (callback) => {
    return fetch( "https://elanewsfeedserver.herokuapp.com/news/us" )
        .then( res => res.json( ) )
        .then( res => callback(res[0])) ;
}
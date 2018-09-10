const initialState = {
  country: "US",
  news: []
}

const setNews = (state = initialState, action) => {
  console.log("Inside the reducer setNews.js");
  console.log("state: " + JSON.stringify(state));
  console.log("action: " + JSON.stringify(action));
  switch (action.type) {
    case "SET_US_NEWS":  
      console.log("inside US" + JSON.stringify(action.payload.articles));
      return action.payload.news;
      break;
    case "SET_UK_NEWS":
      console.log("inside UK" + JSON.stringify(action.payload.articles));
      return action.payload.news;
      break;   
    case "SET_AU_NEWS":
      console.log("inside AU" + JSON.stringify(action.payload.articles));
      return action.payload.news;
      break;  
    case "SET_FR_NEWS":
      console.log("inside FR" + JSON.stringify(action.payload.articles));
      return action.payload.news;
      break; 
    case "SET_JP_NEWS":
      console.log("inside JP" + JSON.stringify(action.payload.articles));
      return action.payload.news;
      break; 
    case "SET_CN_NEWS":
      console.log("inside CN" + JSON.stringify(action.payload.articles));
      return action.payload.news;
      break; 
    default:
      return state;
      break;
  }
}

export default setNews; 
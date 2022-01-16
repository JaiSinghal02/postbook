import * as actionTypes from "./actions";

const initialState = {
  postData: [],
  searchedData: [],
  isSearching: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_SEACRHED_DATA:
      let searchedData=[]
      state.postData.forEach((post)=>{
        if(post.title.toLowerCase().trim().includes(action.searchText.toLowerCase().trim())){
            searchedData.push(post)
        }
      })
      return{
        ...state,
        searchedData: searchedData,
        isSearching: true
      }
    case actionTypes.SET_POST_DATA:
      return {
        ...state,
        postData: action.postData
      };
    default:
      return state;
  }
};

export default reducer;
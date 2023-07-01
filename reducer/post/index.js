const initialState = {
  posts: [],
};
export default function PostReducer(state = initialState, action) {
  switch (action.type) {
    case "getAllPosts.reply":
      console.log("da vao ");
      if (action.data.success === true) {
        console.log("Da get duoc all post");
        return {
          ...state,
          posts: action.data.data,
        };
      }
    /* falls through */
    default:
      return state;
  }
}

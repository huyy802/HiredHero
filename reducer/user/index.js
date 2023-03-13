const initialState = {
  phoneNumber: "",
  username: "",
  fullname: "",
  imagePath: "",
  address: "",
  email: "",
};
export default function UserReducer(state = initialState, action) {
  switch (action.type) {
    case "login.reply":
      if (action.data.success === true) {
        return {
          ...state,
          phoneNumber: action.data.data.phoneNumber,
          username: action.data.data.username,
          fullname: action.data.data.fullname,
          imagePath: action.data.data.imagePath,
          address: action.data.data.address,
          email: action.data.data.email,
          isLoggedin: true,
        };
      }
    /* falls through */
    default:
      return state;
  }
}

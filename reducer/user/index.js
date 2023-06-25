const initialState = {
  id: "646f7e91d8319469c198f606",
  name: "",
  email: "",
  phoneNumber: "",
  profilePicture: "",
  address: "",
  dateOfBirth: "",
  userType: "",
  companyName: "",
  industry: "",
  skills: [],
  experiences: [],
  bookmarks: [],
};
export default function UserReducer(state = initialState, action) {
  switch (action.type) {
    case "loginUser.reply":
      if (action.data.success === true) {
        return {
          ...state,
          id: action.data.data._id,
          name: action.data.data.name,
          email: action.data.data.email,
          phoneNumber: action.data.data.phoneNumber,
          profilePicture: action.data.data.profilePicture,
          address: action.data.data.address,
          dateOfBirth: action.data.data.dateOfBirth,
          userType: action.data.data.userType,
          industry: action.data.data.industry,
          skills: action.data.data.skills,
          experiences: action.data.data.experiences,
          bookmarks: action.data.data.bookmarks,
          isLoggedin: true,
        };
      }
    case "getAllJobs.reply":
      if (action.data.success === true) {
        return {
          ...state,
          jobs: action.data.message,
        };
      } else {
        return {
          ...state,
          errorMessage: "Cann't get menu desert and drinks",
        };
      }
    case "getAllBookmarksOfUser.reply":
      console.log("getAllBookmarksOfUser ne ", action.data.success);
      console.log("data ne ", action.data.data);
      console.log("job ne ", action.data.data.job);

      if (action.data.success === true) {
        return {
          ...state,
          bookmarks: action.data.data,
        };
      } else {
        return {
          ...state,
          errorMessage: "Cann't get menu desert and drinks",
        };
      }
    /* falls through */
    default:
      return state;
  }
}

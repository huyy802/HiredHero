const initialState = {
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
};
export default function UserReducer(state = initialState, action) {
  switch (action.type) {
    case "loginUser.reply":
      if (action.data.success === true) {
        return {
          ...state,
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
    /* falls through */
    default:
      return state;
  }
}

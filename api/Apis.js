export const getAPIs = {
  loginUser: {
    name: "loginUser",
    path: "/api/auth/loginUser",
    method: "POST",
  },
  getAllJobs: {
    name: "getAllJobs",
    path: "/api/job/getAllJobs",
    method: "GET",
  },
  getJob: {
    name: "getJob",
    path: "/api/job/getJob",
    method: "GET",
  },
  getAllAppliesFromUser: {
    name: "getAllAppliesFromUser",
    path: "/api/apply/getAllAppliesFromUser",
    method: "GET",
  }
};

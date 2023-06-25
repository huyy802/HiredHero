export const getAPIs = {
  loginUser: {
    name: "loginUser",
    path: "/api/auth/loginUser",
    method: "POST",
  },
  //job
  getAllJobs: {
    name: "getAllJobs",
    path: "/api/job/getAllJobs",
    method: "GET",
  },
  getAllJobsNonExpired: {
    name: "getAllJobs",
    path: "/api/job/getAllJobsNonExpired",
    method: "GET",
  },
  getJob: {
    name: "getJob",
    path: "/api/job/getJob",
    method: "GET",
  },
  getAllJobsFromCompany: {
    name: "getAllJobsFromCompany",
    path: "/api/job/getAllJobsFromCompany",
    method: "GET",
  },
  getAllJobsFromCompanyNonExpired: {
    name: "getAllJobsFromCompanyNonExpired",
    path: "/api/job/getAllJobsFromCompanyNonExpired",
    method: "GET",
  },

  //apply
  getAllAppliesFromUser: {
    name: "getAllAppliesFromUser",
    path: "/api/apply/getAllAppliesFromUser",
    method: "GET",
  },

  //company
  getAllCompanies: {
    name: "getAllCompanies",
    path: "/api/company/getAllCompanies",
    method: "GET",
  },
 
};

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
<<<<<<< HEAD
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
  createApply: {
    name: "getAllAppliesFromUser",
    path: "/api/apply/createApply/",
    method: "POST",
  },
  //company
  getAllCompanies: {
    name: "getAllCompanies",
    path: "/api/company/getAllCompanies",
    method: "GET",
  },

  uploadFile: {
    name: "uploadFile",
    path: "/api/file/upload",
    method: "POST",
  }
 
=======
  getAllBookmarksOfUser: {
    name: "getAllBookmarksOfUser",
    path: "/api/bookmark/getAllBookmarksOfUser",
    method: "GET",
  },
>>>>>>> 5d5b16b8dc7456a000b207ba199f7c8480dd6379
};

export const getAPIs = {
  getAllPosts: {
    name: "getAllPosts",
    path: "/api/post/getAllPosts",
    method: "GET",
  },
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
  createApply: {
    name: "getAllAppliesFromUser",
    path: "/api/apply/createApply/",
    method: "POST",
  },
  getAllAppliesFromHR: {
    name: "getAllAppliesFromHR",
    path: "/api/apply/getAllAppliesFromHR",
    method: "GET",
  },
  getFilterAppliesFromHR:{
    name: "getFilterAppliesFromHR",
    path: "/api/apply/getFilterAppliesFromHR",
    method: "GET",
  },
  
  updateApplyStatus: {
    name:"updateApplyStatus",
    path: "/api/apply/updateApplyStatus",
    method: "PUT"
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
  },

  getAllBookmarksOfUser: {
    name: "getAllBookmarksOfUser",
    path: "/api/bookmark/getAllBookmarksOfUser",
    method: "GET",
  },

  //post
  getAllPosts: {
    name: "getAllPosts",
    path: "/api/post/getAllPosts",
    method: "GET",
  },

  createPost: {
    name: "createPost",
    path: "/api/post/createPost",
    method: "POST",
  },
  createApply: {
    name: "createApply",
    path: "api/apply/createApply",
    method: "POST",
  },
};

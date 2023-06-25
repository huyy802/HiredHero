import * as ACTIONS from "./action";

const initialState = {
  JobRecommend: null,
  JobDetail: null,
};
export default function JobReducer(state = initialState, action) {
  switch (action.type) {
    case "getJob.reply":
      return { ...state, JobDetail: action.data };
    case ACTIONS.SET_RECOMMEND_JOB:
      return { ...state, JobRecommend: action.data };
    /* falls through */
    default:
      return state;
  }
}

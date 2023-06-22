import { configureStore } from "@reduxjs/toolkit";
import SettingReducer from "../reducer/setting";
import UserReducer from "../reducer/user";
import JobReducer from "../reducer/job";

export default configureStore({
  reducer: {
    setting: SettingReducer,
    user: UserReducer,
    job: JobReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }),
});

import { getAPIs } from "./Apis";
import customAxios from "./AxiosInterceptors";

<<<<<<< HEAD
// const host = "https://hiredhero.onrender.com";
const host = "https://f1c8-123-21-33-87.ngrok-free.app";
=======
const host = "https://55a0-14-161-13-207.ngrok-free.app";

>>>>>>> 5d5b16b8dc7456a000b207ba199f7c8480dd6379
export function getAPIActionJSON(
  type,
  data,
  params = "",
  addparams = "",
  onSuccess = () => {},
  onError = () => {}
) {
  const api = getAPIs[type];

  return (dispatch, getState) => {
    dispatch({ type: "loading.start" });
    customAxios({
      method: api.method, //POST
      url: host + api.path + addparams,
      params: params,
      data: data,
    })
      .then(function (response) {
        dispatch({ type: "loading.success" });

        console.log(type, response.data);
        if (response.status === 200) {
          dispatch({
            type: `${type}.reply`, /// loginUser.reply
            data: response.data,
            headers: response.headers,
          });
        }
        onSuccess(response.data);
      })
      .catch((e) => {
        dispatch({ type: "loading.success" });
        onError(e);
        console.log(e);
      });
  };
}
export async function getStatelessAPI(
  type,
  data,
  headers,
  params = {},
  addparams = ""
) {
  const api = getAPIs[type];
  try {
    const res = await customAxios({
      method: api.method,
      url: host + api.path + addparams,
      params: params,
      data: data,
      headers: headers,
    });
    const responseData = res.data;
    console.log(type, responseData);
    return responseData;
  } catch (error) {
    if (error) {
      // Error Handler
      console.log(error);
    }
  }
}

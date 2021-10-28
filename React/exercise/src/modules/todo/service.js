import { apiCommunicator as api, responseFormatter } from "../../utils";

const get = (query = '') => {
  return responseFormatter(
    api.get(`todos/${query}`)
  )
};

export default {
  get
}
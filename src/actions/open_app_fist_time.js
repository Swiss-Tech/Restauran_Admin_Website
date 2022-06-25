import { FIRSTTIME } from "./types";
import { firsttime_function } from "../services/auth.service";

export const firstTime = () => (dispatch) => {
  firsttime_function();
  dispatch({
    type: FIRSTTIME,
  });
};

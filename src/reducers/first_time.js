import { FIRSTTIME } from "../actions/types";

const first_time_user = JSON.parse(localStorage.getItem("firsttime"));

export default function reducer(state = first_time_user, action) {
  switch (action.type) {
    case FIRSTTIME:
      return state;

    default:
      return state;
  }
}

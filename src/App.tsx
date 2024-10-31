import { useEffect, useReducer } from "react";
import { LoadingSpinner, Table } from "./components";
import { fetchCoinsData } from "./helpers/";
import type { ResponseData, FetchStatusState } from "./types";

type Action =
  | { type: "FETCH_START" }
  | { type: "FETCH_SUCCESS"; payload: ResponseData }
  | { type: "FETCH_FAILURE"; payload: string };

const initialState: FetchStatusState = { status: "idle" };

function fetchReducer(
  state: FetchStatusState,
  action: Action,
): FetchStatusState {
  switch (action.type) {
    case "FETCH_START":
      return { status: "loading" };
    case "FETCH_SUCCESS":
      return { status: "success", data: action.payload };
    case "FETCH_FAILURE":
      return { status: "failure", error: action.payload };
    default:
      return state;
  }
}

export default function App() {
  const [state, dispatch] = useReducer(fetchReducer, initialState);

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: "FETCH_START" });
      const result = await fetchCoinsData();
      if (result.status === "success") {
        dispatch({ type: "FETCH_SUCCESS", payload: result.data });
      } else if (result.status === "failure") {
        dispatch({ type: "FETCH_FAILURE", payload: result.error });
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#dcdcdc]">
      {state.status === "loading" && <LoadingSpinner />}
      {state.status === "success" && <Table data={state.data.data} />}
      {state.status === "failure" && <p>Error: {state.error}</p>}
    </div>
  );
}

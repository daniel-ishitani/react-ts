import { useMemo } from "react";
import { bindActionCreators } from "redux";
import { useDispatch } from "react-redux";

import { actionCreators } from "../redux";

const useActions = () => {
  const dispatch = useDispatch();

  return useMemo(() => bindActionCreators(actionCreators, dispatch), [dispatch]);
};

export default useActions;

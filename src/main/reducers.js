import { combineReducers } from "redux";
import DashboardReducer from "../dashboard/dashboardReducer";
import TabReducers from "../common/tab/tabReducers";

const rootReducers = combineReducers({
  dashboard: DashboardReducer,
  tab: TabReducers,
});

export default rootReducers;

import { combineReducers } from "redux";
import DashboardReducer from "../dashboard/dashboardReducer";
import TabReducers from "../common/tab/tabReducers";
import BillingCyclesReducer from "../billingCycle/billingCyclesReducer";
import { reducer as formReducer } from "redux-form";

const rootReducers = combineReducers({
  dashboard: DashboardReducer,
  tab: TabReducers,
  billingCycle: BillingCyclesReducer,
  form: formReducer,
});

export default rootReducers;

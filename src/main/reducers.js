import { combineReducers } from "redux";
import DashboardReducer from "../dashboard/dashboardReducer";
import TabReducers from "../common/tab/tabReducers";
import BillingCyclesReducer from "../billingCycle/billingCyclesReducer";
import { reducer as formReducer } from "redux-form";
import { reducer as toastrReducer } from "react-redux-toastr";

const rootReducers = combineReducers({
  dashboard: DashboardReducer,
  tab: TabReducers,
  billingCycle: BillingCyclesReducer,
  form: formReducer,
  toastr: toastrReducer,
});

export default rootReducers;

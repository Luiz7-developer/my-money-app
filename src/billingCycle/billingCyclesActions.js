import axios from "axios";
import { toastr } from "react-redux-toastr";
import { reset as resetForm, initialize } from "redux-form";
import { showTabs, selectTab } from "../common/tab/tabActions";
import billingCycleList from "./billingCycleList";

const BASE_URL = "http://localhost:3003/api";

export function getList() {
  const request = axios.get(`${BASE_URL}/billingCycles`);
  return {
    type: "BILLING_CYCLES_FETCHED",
    payload: request,
  };
}

export function create(values) {
  return (dispatch) => {
    axios
      .post(`${BASE_URL}/billingCycles`, values)
      .then((resposta) => {
        toastr.success("Sucesso", "Operação Realizada com sucesso");
        dispatch([
          resetForm("billingCycleForm"),
          getList(),
          selectTab("tabList"),
          showTabs("tabList", "tabCreate"),
        ]);
      })
      //se der um erro vai aparecer um toastr para cada erro, vai fazer um forEach para cada ero que veio do backend
      .catch((evento) => {
        evento.response.data.errors.forEach((error) =>
          toastr.error("Erro", error)
        );
      });
  };
}

export function showUpdate(billingCycle) {
  return [
    showTabs("tabUpdate"),
    selectTab("tabUpdate"),
    initialize("billingCycleForm", billingCycle),
  ];
}

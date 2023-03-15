import axios from "axios";
import { values } from "lodash";
import { toastr } from "react-redux-toastr";
import { reset as resetForm, initialize } from "redux-form";
import { showTabs, selectTab } from "../common/tab/tabActions";
import billingCycleList from "./billingCycleList";

const BASE_URL = "http://localhost:3003/api";
const INITIAL_VALUES = {};

export function getList() {
  const request = axios.get(`${BASE_URL}/billingCycles`);
  return {
    type: "BILLING_CYCLES_FETCHED",
    payload: request,
  };
}

export function create(values) {
  return subMit(values, "post");
}

export function update(values) {
  return subMit(values, "put");
}

export function remove(values) {
  return subMit(values, "delete");
}

function subMit(values, method) {
  return (dispatch) => {
    const id = values._id ? values._id : "";
    axios[method](`${BASE_URL}/billingCycles/${id}`, values)
      .then((resposta) => {
        toastr.success("Sucesso", "Operação Realizada com sucesso");
        dispatch([init()]);
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

export function init() {
  return [
    showTabs("tabList", "tabCreate"),
    selectTab("tabList"),
    getList(),
    initialize("billingCycleForm", INITIAL_VALUES),
  ];
}

export function showDelete(billingCycle) {
  return [
    showTabs("tabDelete"),
    selectTab("tabDelete"),
    initialize("billingCycleForm", billingCycle),
  ];
}

import axios from "axios";
import { toastr } from "react-redux-toastr";

const BASE_URL = "http://localhost:3003/api";

export function getList() {
  const request = axios.get(`${BASE_URL}/billingCycles`);
  return {
    type: "BILLING_CYCLES_FETCHED",
    payload: request,
  };
}

export function create(values) {
  axios
    .post(`${BASE_URL}/billingCycles`, values)
    .then((resposta) => {
      toastr.success("Sucesso", "Operação Realizada com sucesso");
    })
    //se der um erro vai aparecer um toastr para cada erro, vai fazer um forEach para cada ero que veio do backend
    .catch((evento) => {
      evento.response.data.errors.forEach((error) =>
        toastr.error("Erro", error)
      );
    });
  return {
    type: "TEMP",
  };
}

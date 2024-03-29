import React, { Component } from "react";
import { reduxForm, Field, formValueSelector } from "redux-form";
import labelAndInput from "../common/form/labelAndInput";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { init } from "./billingCyclesActions";
import ItemList from "./itemList";
import Summary from "./summary";

class BillingCycleForm extends Component {
  calculateSummary() {
    const soma = (x, y) => x + y;
    return {
      somaOfCredits: this.props.credits.map((c) => +c.value || 0).reduce(soma),
      somaOfDebts: this.props.debts.map((d) => +d.value || 0).reduce(soma),
    };
  }

  render() {
    const { handleSubmit, readOnly, credits, debts } = this.props;
    const { somaOfCredits, somaOfDebts } = this.calculateSummary();
    return (
      <form role="form" onSubmit={handleSubmit}>
        <div className="box-body">
          <Field
            name="name"
            component={labelAndInput}
            readOnly={readOnly}
            label="Nome:"
            cols="12 4"
            placeholder="Informe o Nome"
          />
          <Field
            name="month"
            component={labelAndInput}
            readOnly={readOnly}
            type="number"
            label="Mês:"
            cols="12 4"
            placeholder="Informe o Mês"
          />
          <Field
            name="year"
            component={labelAndInput}
            readOnly={readOnly}
            type="number"
            label="Ano:"
            cols="12 4"
            placeholder="Informe o Ano"
          />
          <Summary credit={somaOfCredits} debt={somaOfDebts} />

          <ItemList
            cols="12 6"
            list={credits}
            readOnly={readOnly}
            field="credits"
            legend="Créditos"
          />
          <ItemList
            cols="12 6"
            list={debts}
            readOnly={readOnly}
            field="debts"
            legend="Débitos"
            showStatus={true}
          />
        </div>
        <div className="box-footer">
          <button type="submit" className={`btn btn-${this.props.submitClass}`}>
            {this.props.submitLabel}
          </button>
          <button
            type="button"
            className={`btn btn-default`}
            onClick={this.props.init}
          >
            {" "}
            Cancelar
          </button>
        </div>
      </form>
    );
  }
}

BillingCycleForm = reduxForm({
  form: "billingCycleForm",
  destroyOnUnmount: false,
})(BillingCycleForm);

const selector = formValueSelector("billingCycleForm");
const mapStateToProps = (state) => ({
  credits: selector(state, "credits"),
  debts: selector(state, "debts"),
});
const mapDispatchToProps = (dispatch) => bindActionCreators({ init }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(BillingCycleForm);

import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect, Connect } from "react-redux";
import { getList, showUpdate } from "./billingCyclesActions";

class BilingCycleList extends Component {
  componentWillMount() {
    this.props.getList();
  }

  renderRows() {
    const list = this.props.list || [];
    return list.map((billic) => (
      <tr key={billic._id}>
        <td>{billic.name}</td>
        <td>{billic.month}</td>
        <td>{billic.year}</td>
        <td>
          <button
            className="btn btn-green"
            onClick={() => this.props.showUpdate(billic)}
          >
            {" "}
            <i className="fa fa-pencil"></i>
          </button>
        </td>
      </tr>
    ));
  }

  render() {
    console.log(this.props.list);
    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>Nome</th>
              <th>Mês</th>
              <th>Ano</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>{this.renderRows()}</tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ list: state.billingCycle.list });
const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ getList, showUpdate }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(BilingCycleList);

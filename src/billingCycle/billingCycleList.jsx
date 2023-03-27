import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { getList, showUpdate, showDelete } from "./billingCyclesActions";

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
            className="btn btn-warning"
            onClick={() => this.props.showUpdate(billic)}
          >
            <i className="fa fa-pencil"></i>
          </button>
          <button
            className="btn btn-danger"
            onClick={() => this.props.showDelete(billic)}
          >
            <i className="fa fa-trash-o"></i>
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
              <th className="table-actions">Ações</th>
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
  bindActionCreators({ getList, showUpdate, showDelete }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(BilingCycleList);

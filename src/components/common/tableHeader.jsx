import React, { Component } from "react";

class TableHeader extends Component {
  raiseSort = (path) => {
    const tempSortHolder = { ...this.props.sortColumn };
    if (tempSortHolder.path === path) {
      tempSortHolder.order = tempSortHolder.order === "asc" ? "desc" : "asc";
    } else {
      tempSortHolder.path = path;
      tempSortHolder.order = "asc";
    }
    this.props.onSort(tempSortHolder);
  };

  renderSortIcon = (column) => {
    if (column.path !== this.props.sortColumn.path) return null;
    if (this.props.sortColumn.order === "asc")
      return <i className="fa fa-sort-asc"></i>;
    return <i className="fa fa-sort-desc"></i>;
  };

  render() {
    return (
      <thead>
        <tr>
          {this.props.columns.map((column) => (
            <th
              style={{ cursor: "pointer" }}
              key={column.path || column.key}
              onClick={() => this.raiseSort(column.path)}
            >
              {column.label} {this.renderSortIcon(column)}
            </th>
          ))}
        </tr>
      </thead>
    );
  }
}

export default TableHeader;

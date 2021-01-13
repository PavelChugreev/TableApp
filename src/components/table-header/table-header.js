import React, { Component } from 'react';
import "./table-header.css";

export default class TableHeader extends Component {
    constructor(props) {
        super(props)
        this.state = {
            up: { id: "", firstName: "", lastName: "", email: "", phone: "", description: "" },
            down: { id: "", firstName: "", lastName: "", email: "", phone: "", description: "" }
        }

        this.changeSortStatusUp = this.changeSortStatusUp.bind(this);
        this.changeSortStatusUpDown = this.changeSortStatusUpDown.bind(this);
    }

    changeSortStatusUp(index) {
        const sorted = " sorted";
        const noSorted = "";
        this.setState({ up: { [index]: sorted }, down: { [index]: noSorted } })
    }

    changeSortStatusUpDown(index) {
        const sorted = "sorted";
        const noSorted = "";
        this.setState({ up: { [index]: noSorted }, down: { [index]: sorted } })
    }

    render() {
        const {data, onSortUp, onSortDown} = this.props;
        const {up, down} = this.state;

        const headerItem = (title, selector,  ) => {
            return (
                <>
                    <div className="title">{title}</div>
                    <div className="sort_wrapper">
                        <div className="sort_item"
                            className={`sort ${up[selector]}`}
                            onClick={() => { onSortUp(data, selector); this.changeSortStatusUp(selector) }}>
                            <i className="fa fa-sort-up"></i>
                        </div>
                        <div className="sort_item"
                            className={`sort ${down[selector]}`}
                            onClick={() => { onSortDown(data, selector); this.changeSortStatusUpDown(selector) }}>
                            <i className="fa fa-sort-down"></i>
                        </div>
                    </div>
                </>
            )
        }

        return (
            <div className="table_header container">
                <div className="row">
                <div className="table_header_item col-md-1">{headerItem('ID', "id")}</div>
                <div className="table_header_item col-md-1">{headerItem('Name', "firstName")}</div>
                <div className="table_header_item col-md-1">{headerItem('Surname', "lastName")}</div>
                <div className="table_header_item col-md-2">{headerItem('Email', "email")}</div>
                <div className="table_header_item col-md-2">{headerItem('Phone number', "phone")}</div>
                <div className="table_header_item col-md-2">Address</div>
                <div className="table_header_item col-md-3">{headerItem('Description', "description")}</div>                   
                    {/* <th><div className="col"></div></th> */}
                </div>
            </div>
        )
    }
}
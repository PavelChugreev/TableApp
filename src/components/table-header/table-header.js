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

        const line = (title, selector, data, up, down) => {
            return (
                <th scope="col">
                    <div className="d-flex">
                        <div className="col">{title}</div>
                        <div className="d-flex">
                            <span
                                className={`sort ${up[selector]}`}
                                onClick={() => { onSortUp(data, selector); this.changeSortStatusUp(selector) }}>
                                <i className="fa fa-sort-up"></i>
                            </span>
                            <span
                                className={`sort ${down[selector]}`}
                                onClick={() => { onSortDown(data, selector); this.changeSortStatusUpDown(selector) }}>
                                <i className="fa fa-sort-down"></i>
                            </span>
                        </div>
                    </div>
                </th>
            )
        }

        return (
            <tr>
                {line('ID', "id", data, up, down)}
                {line('Name', "firstName", data, up, down)}
                {line('Surname', "lastName", data, up, down)}
                {line('Email', "email", data, up, down)}
                {line('Phone number', "phone", data, up, down)}
                <th><div className="col">Address</div></th>
                {line('Description', "description", data, up, down)}
            </tr>
        )
    }
}
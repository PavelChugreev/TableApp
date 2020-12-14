import React, { Component } from 'react';
import SearchPanel from "../search-panel/search-panel";
import AddForm from "../add-form/add-form";
import Table from "../table/table";
// import InfoPanel from "../info-panel/info-panel";
import "./app.css";

export default class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [],
            sorted: "no"
        }

        this.getResourse = this.getResourse.bind(this);
        this.checkRepeatedId = this.checkRepeatedId.bind(this);
        this.onSortUp = this.onSortUp.bind(this);
        this.onSortDown = this.onSortDown.bind(this);

        this.getResourse("http://www.filltext.com/?rows=32&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D")
            .then(response => {
                this.setState({ data: response })
            })
    }

    checkRepeatedId(data) {
        const uniqueId = [];
        let newArray = data.filter(el => {
            if (uniqueId.includes(el.id)) return;
            uniqueId.push(el.id);
            return true;
        })
        return newArray;

        // let newArray = [];
        // for (let i = 0; i < data.length; i++) {
        //     const element = data[i];
        //     const elementId = element.id;
        //     let isAlreadyInNewArray = false;
        //     for (let k = 0; k < newArray.length; k++) {
        //         const newArrayElement = newArray[k];
        //         const newArrayElementId = newArrayElement.id;
        //         if (elementId === newArrayElementId) {
        //             isAlreadyInNewArray = true;
        //         }
        //     }
        //     if (!isAlreadyInNewArray) {
        //         newArray.push(element);
        //     }
        // }
        // return newArray;
    }

    async getResourse(url) {
        let response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Error uploading from ${url}, status: ${response.status}`);
        }
        return await response.json()
    }

    onSortUp(data, keyName) {
        const up = "up"
        const newData = data.sort(function (a, b) {
            if (a[keyName] > b[keyName]) {
                return 1;
            }
            if (a[keyName] < b[keyName]) {
                return -1;
            }
            return 0;
        });
        this.setState({ data: newData })
    }

    onSortDown(data, keyName) {
        const newData = data.sort(function (a, b) {
            if (a[keyName] > b[keyName]) {
                return -1;
            }
            if (a[keyName] < b[keyName]) {
                return 1;
            }
            return 0;
        });
        this.setState({ data: newData })
    }

    render() {
        const { data, sorted } = this.state;

        const checked = this.checkRepeatedId(data);
        return (
            <div className="app">
                <button
                    className="btn btn-info"
                    onClick={() => console.log(this.state.res)}
                >TEST</button>
                <button
                    onClick={() => this.changeData(this.state.res)}
                >TEST-2</button>
                <button
                    onClick={() => console.log(this.state.data)}
                >TEST-3</button>
                <div className="search-panel d-flex">
                    <SearchPanel/>
                </div>
                <div className="add-form d-flex">
                    <AddForm
                        getResourse={this.getResourse}
                    />
                </div>
                <Table
                    data={checked}
                    sorted={sorted}
                    changeAny={this.changeAny}
                    onSortUp={this.onSortUp}
                    onSortDown={this.onSortDown}
                />
                {/* <InfoPanel
                    onAdd={this.addItem}
                /> */}
            </div>
        );
    }
}
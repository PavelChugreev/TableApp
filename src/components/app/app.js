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
            sorted: "no",
            inputSearchValue: "",
        }

        this.getResourse = this.getResourse.bind(this);
        this.checkRepeatedId = this.checkRepeatedId.bind(this);
        this.onSortUp = this.onSortUp.bind(this);
        this.onSortDown = this.onSortDown.bind(this);
        this.onUpdateSearchValue = this.onUpdateSearchValue.bind(this);
        this.searchRows = this.searchRows.bind(this);

        this.getResourse("http://www.filltext.com/?rows=32&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D")
            .then(response => {
                this.setState({ data: response })
            })
    }

    async getResourse(url) {
        let response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Error uploading from ${url}, status: ${response.status}`);
        }
        return await response.json()
    }

    checkRepeatedId(data) {
        const uniqueId = [];
        let newArray = data.filter(el => {
            if (uniqueId.includes(el.id)) return;
            uniqueId.push(el.id);
            return true;
        })
        return newArray;
    }

    onSortUp(data, keyName) {
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

    onUpdateSearchValue(value){
        this.setState({inputSearchValue: value})
    }

    searchRows(data, value){
        if(value.length === 0){
            return data
        } 
            return data.filter(item => {
                const str = (`${item.id}${item.phone}${item.firstName}${item.lastName}${item.email}${item.description}`).toLocaleLowerCase()

                if(str.indexOf(value.toLowerCase()) > -1){
                    return item
                }
            });
    }

    render() {
        const { data, sorted, inputSearchValue } = this.state;

        const checked = this.checkRepeatedId(data);
        const visiblePosts = this.searchRows(checked, inputSearchValue)

        return (
            <div className="app">
                <div className="search-panel d-flex">
                    <SearchPanel
                        data={visiblePosts}
                        onUpdateSearchValue={this.onUpdateSearchValue}
                        searchRows={this.searchRows}
                    />
                </div>
                <div className="add-form d-flex">
                    <AddForm
                        getResourse={this.getResourse}
                    />
                </div>
                <Table
                    data={visiblePosts}
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
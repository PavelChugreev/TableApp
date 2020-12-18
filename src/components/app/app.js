import React, { Component } from 'react';
import SearchPanel from "../search-panel/search-panel";
import AddForm from "../add-form/add-form";
import Table from "../table/table";
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
        this.onUpdateSearchValue = this.onUpdateSearchValue.bind(this);
        this.searchRows = this.searchRows.bind(this);
        this.addItem = this.addItem.bind(this);

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

    onUpdateSearchValue(value){
        this.setState({inputSearchValue: value})
    }

    searchRows(data, value){
        if(value.length === 0){
            return data
        } 
            return data.filter(item => {
                const str = Object.entries(item).map(([key, value]) => value).join("").toLocaleLowerCase();

                if(str.indexOf(value.toLowerCase()) > -1){
                    return item
                }
            });
    }

    addItem(id, firstName, lastName, email, phone){
        const newRow = {
            id: id,
            firstName: firstName,
            lastName: lastName,
            email: email,
            phone: phone,
            address: {streetAddress:"", city:"", state:"", zip:""},
            description: " "
        }
        this.setState(({data}) => {
            const newData = [ newRow, ...data];
            return ( {data: newData} )
        })
    }

    render() {
        const {data, sorted, inputSearchValue, info, showInfo} = this.state;

        const checked = this.checkRepeatedId(data);
        const visiblePosts = this.searchRows(checked, inputSearchValue);

        return (
            <div className="container">
                <h1><span class="badge badge-secondary">User list</span></h1>
                <SearchPanel
                    data={visiblePosts}
                    onUpdateSearchValue={this.onUpdateSearchValue}
                    searchRows={this.searchRows}
                />
                <AddForm
                    addItem={this.addItem}
                />
                <Table
                    data={visiblePosts}
                    sorted={sorted}
                    changeAny={this.changeAny}
                />
            </div>
        );
    }
}
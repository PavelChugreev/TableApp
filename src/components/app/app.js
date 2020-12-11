import React, {Component} from 'react';
import SearchPanel from "../search-panel/search-panel";
import AddForm from "../add-form/add-form";
import Table from "../table/table";
// import InfoPanel from "../info-panel/info-panel";
import "./app.css";

export default class App extends Component {
    constructor(props){
        super(props)
        this.state = {
            data: [],
            res: ""
        }

        this.getResourse = this.getResourse.bind(this);
        this.changeData = this.changeData.bind(this);

        
        this.getResourse("http://www.filltext.com/?rows=32&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D")
        .then(result => this.state.res = result)
    }

    async getResourse(url){
        const res =  await fetch(url);
        return await res.json()
    }

    changeData(arg){
        this.setState(() => {
            return {data: arg}
        });
    }
    
    render() {    
        return (
            <div className="app">
                <button
                    onClick={() => console.log(this.state.res) }    
                >TEST</button>
                <button
                    onClick={() => this.changeData(this.state.res) }    
                >TEST-2</button>
                <button
                    onClick={() => console.log(this.state.data) }    
                >TEST-3</button>
                <div className="search-panel d-flex">
                    <SearchPanel
                        // onUpdateTerm={this.onUpdateTerm}
                    />
                </div>
                <div className="add-form d-flex">
                    <AddForm
                        getResourse={this.getResourse}
                    />
                </div>
                <Table
                    // posts={visiblePosts}
                    // onDelete={this.deleteItem}
                    // onTogImportant={this.onTogImportant}
                    // onTogLiked={this.onTogLiked}
                />
                {/* <InfoPanel
                    onAdd={this.addItem}
                /> */}
            </div>
        );
    }
}
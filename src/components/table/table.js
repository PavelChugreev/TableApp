import React, {Component} from 'react';
import TableItem from "../table-item/table-item";
import TableHeader from "../table-header/table-header";
import InfoPanel from "../info-panel/info-panel";
import "./table.css";

export default class  Table extends Component  {
    constructor(props){
        super(props)
        this.state ={
            info: { user: "", description: " ", address: "", city: "", state: "", zip: "" },
            showInfo: false
        }

        this.onSortUp = this.onSortUp.bind(this);
        this.onSortDown = this.onSortDown.bind(this);
        this.onShowInfo = this.onShowInfo.bind(this);
        this.onCloseInfo = this.onCloseInfo.bind(this);
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

    onShowInfo(tableItem){
        this.setState(() => {
            const user = `${tableItem.fname} ${tableItem.lname}`;
            const description = tableItem.description;
            const address = tableItem.address.streetAddress;
            const city = tableItem.address.city;
            const state = tableItem.address.state;
            const zip = tableItem.address.zip;
            const show = true;

            return ({
                info: {
                    user: user,
                    description: description,
                    address: address,
                    city: city,
                    state: state,
                    zip: zip
                },
                showInfo: show
            })
        })
    }

    onCloseInfo(){
        const hidden = false;
        this.setState({showInfo: hidden})
    }

    render() {
        const {data, sorted} = this.props;
        const {info, showInfo} = this.state;

        let elements = data.map(item => {          
            return(
                <div className="row table_item" 
                    key={item.id} 
                    onClick={() => this.onShowInfo(item)}
                >
                    <TableItem
                        id={item.id}
                        name={item.fname}
                        surname={item.lname}
                        email={item.email}
                        tel={item.phone}
                        address={`
                            ${item.address.streetAddress} 
                            ${item.address.city} 
                            ${item.address.state} 
                            ${item.address.zip}
                        `}
                        description={item.description}
                    />
                </div>
            );
        })
    
        return(
            <div>
                <InfoPanel
                    info={info}
                    onCloseInfo={this.onCloseInfo}
                    showInfo={showInfo}
                />
                <div className="table">
                    <TableHeader
                        data={data}
                        sorted={sorted}
                        onSortUp={this.onSortUp}
                        onSortDown={this.onSortDown}    
                    />
                    <div className="table_body container">
                        {elements}
                    </div>
                </div>
            </div>
        )
    }
};
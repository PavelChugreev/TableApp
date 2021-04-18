import React, {Component} from 'react';
import TableItem from "../table-item/table-item";
import TableHeader from "../table-header/table-header";
import InfoPanel from "../info-panel/info-panel";
import "./table.css";

export default class  Table extends Component  {
    constructor(props){
        super(props)
        this.state = {
            info: { user: "", website: " ", address: "", city: "", suite: "", zipcode: "" },
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
            const user = `${tableItem.name} - "${tableItem.username}"`;
            const website = tableItem.website;
            const address = tableItem.address.street;
            const city = tableItem.address.city;
            const suite = tableItem.address.suite;
            const zipcode = tableItem.address.zipcode;
            const show = true;

            return ({
                info: {
                    user: user,
                    website: website,
                    address: address,
                    city: city,
                    suite: suite,
                    zipcode: zipcode
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
            console.log(item.website)
            return(
                <div className="row table_item" 
                    key={item.id} 
                    onClick={() => this.onShowInfo(item)}
                >
                    <TableItem
                        id={item.id}
                        name={item.name}
                        surname={item.username}
                        email={item.email}
                        tel={item.phone}
                        address={`
                            ${item.address.street} 
                            ${item.address.city} 
                            ${item.address.suite} 
                            ${item.address.zipcode}
                        `}
                        website={item.website}
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
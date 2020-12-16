import React, {Component} from 'react';
import TableItem from "../table-item/table-item";
import TableHeader from "../table-header/table-header";
import "./table.css";


export default class  Table extends Component  {
    constructor(props){
        super(props)
        this.state={
        }

        // this.onSortUp = this.onSortUp.bind(this);
        // this.onSortDown = this.onSortDown.bind(this);

    }

    render() {
        const {data, onSortUp, onSortDown, sorted} = this.props;
        // const {sorted} =this.state

        // const arrows = (keyName) => {
        //     return(
        //         <div className="">
        //             <span
        //                 className="sort"
        //                 onClick={() => onSortUp(data, `${keyName}`)}
        //                 onClick={this.changeSortClass}
        //                 >
        //                 <i className="fa fa-sort-up"></i>
        //             </span>
        //             <span
        //                 onClick={() => onSortDown(data, `${keyName}`)}
        //                 onClick={this.changeSortClass}
        //             >
        //                 <i className="fa fa-sort-down"></i>
        //             </span>
        //         </div>
        //     )
        // }

        let elements = data.map(item => {          
            return(
                <tr key={item.id} className="table">
                    <TableItem
                        id={item.id}
                        name={item.firstName}
                        surname={item.lastName}
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
                </tr>
            );
        })
    
        return(
            <table className="">
                <tbody>
                    {/* <tr>
                        <td>id {arrows("id")}</td>
                        <td>name {arrows("firstName")}</td>
                        <td>surname {arrows("lastName")}</td>
                        <td>email {arrows("email")}</td>
                        <td>tel {arrows("phone")}</td>
                        <td>address</td>
                        <td>description {arrows("description")}</td>
                    </tr> */}
                    <TableHeader
                        data={data}
                        sorted={sorted}
                        onSortUp={onSortUp}
                        onSortDown={onSortDown}    
                    />
                    {elements}
                </tbody>
            </table>
        )
    }
};

import React, { Component } from 'react';

export default class AddForm extends Component {
    constructor(props){
        super(props)
        this.state = {
            id: "",
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
        }

        this.show = "btn btn-secondary"
        this.hide = `${this.show} d-none`;
        this.btnClass = "";

        this.onChangeAddValue = this.onChangeAddValue.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChangeAddValue(e, stateEl){
        const value = e.target.value;
        this.setState(() => {
            return {[stateEl]: value} 
        });
    }

    onSubmit(e, id, firstName, lastName, email, phone){
        e.preventDefault();
        if(id !== "" && firstName !== "" && lastName !== "" && email !== "" && phone !== ""){
            this.props.addItem(id, firstName, lastName, email, phone);
            this.setState({id: "", firstName: "", lastName: "", email: "", phone: ""});
        }
    }

    render(){
        const {id, firstName, lastName, email, phone} = this.state;

        if(id !== "" && firstName !== "" && lastName !== "" && email !== "" && phone !== ""){
            this.btnClass = this.show;
        } else {
            this.btnClass = this.hide;
        }

        return (
            <form 
                className="input-group mb-3"
                onSubmit={(e) => this.onSubmit(e, id, firstName, lastName, email, phone)}
            >               
                <input 
                    type="number"
                    value={id}
                    placeholder="id"
                    className="form-control"
                    onChange={(e) => {this.onChangeAddValue(e, "id")}}
                />
                <input 
                    type="text"
                    value={firstName}
                    placeholder="First name"
                    className="form-control"
                    onChange={(e) => {this.onChangeAddValue(e, "firstName")}}
                />
                <input 
                    type="text"
                    value={lastName}
                    placeholder="Last name"
                    className="form-control"
                    onChange={(e) => this.onChangeAddValue(e, "lastName")}
                />
                <input 
                    type="email"
                    value={email}
                    placeholder="Email"
                    className="form-control"
                    onChange={(e) => this.onChangeAddValue(e, "email")}
                />
                <input 
                    type="tel"
                    value={phone}
                    placeholder="Phone"
                    className="form-control"
                    onChange={(e) => this.onChangeAddValue(e, "phone")}
                />
                <button
                    type="submit"
                    className={this.btnClass}
                >Add to table</button>
            </form>
        );
    }
};
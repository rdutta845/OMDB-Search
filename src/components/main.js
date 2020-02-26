import React,  { Component } from 'react';
import Input from '../base_components/input';
import Select from '../base_components/select';
import Button from '../base_components/button';
import Card from '../base_components/card';
import Header from "./header";
import json from '../mock.json';
class Main extends Component{
    constructor(props){
        super(props);
        this.state = {
            options: [{
                value: 'all',
                name: 'All'
            },
            {
                value: 'movies',
                name: 'Movies'
            },
            {
                value: 'series',
                name: 'Series'
            },
            {
                value: 'episode',
                name: 'Episode'
            }],
            isLoading: false,
            dropdown: '',
            Search: []
        }
    }
    evenListener(e){
        console.log(e);
    }
    setDropdown(val){
        this.setState({dropdown: val});
    }
    render(){
        const {options} = this.state;
        const {Search} = json;
        return(
            <React.Fragment>
                <Header />
                {this.state.isLoading && <div className="loader" >Loading.....</div>}
           {!this.state.isLoading && <div className="container">
                <div className="field-container">
                    <Input />
                    <Select options={options} setDropdown={this.setDropdown.bind(this)}/>
                    <Button name="search" evenListener={this.evenListener.bind(this)}/>
                </div>
                <div className="card-container">
                    {Search.map(val =><Card data={val} key={val.imdbID} history={this.props.history}/>)}
                </div>
            </div>}
            </React.Fragment>
        )
    }
}
export default  Main;
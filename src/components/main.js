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
            options: [
            {
                value: 'movie',
                name: 'Movie'
            },
            {
                value: 'series',
                name: 'Series'
            },
            {
                value: 'episode',
                name: 'Episode'
            }],
            searchVal: '',
            isLoading: false,
            isSearch: false,
            dropdown: '',
            Search: []
        }
    }
    evenListener(e){
        const {searchVal, dropdown} = this.state;
        const apiUrl = dropdown ? `https://www.omdbapi.com/?s=${searchVal}&type=${dropdown}&apikey=1ffd4fd6` : `https://www.omdbapi.com/?s=${searchVal}&apikey=1ffd4fd6` ;
        this.setState({isLoading: true, isSearch: true});
        if(searchVal) {
            fetch(apiUrl)
            .then(val => val.json())
            .then(data => {
                if(data.Response && data.Response!=="False"){
                    this.setState({Search: data.Search, isLoading: false});
                } else {
                    this.setState({Search: json.Search, isLoading: false});
                }
            })
            .catch(err =>{
                this.setState({Search: json.Search, isLoading: false});
            })
        }
    }
    setValue(e){
        this.setState({searchVal: e.target.value});
    }
    setDropdown(e){
        e.persist();
        console.log(e, e.target.value);
        this.setState({dropdown: e.target.value});
    }
    render(){
        const {options, Search} = this.state;
        return(
            <React.Fragment>
                <Header />
                {this.state.isLoading && this.state.isSearch && <div className="loader" >Loading.....</div>}
                <div className="container">
                <div className="field-container">
                    <Input setValue={this.setValue.bind(this)}/>
                    <Select options={options} setDropdown={this.setDropdown.bind(this)}/>
                    <Button name="search" evenListener={this.evenListener.bind(this)}/>
                </div>
                {!this.state.isLoading && this.state.isSearch &&  <div className="card-container">
                    {Search.map(val =><Card data={val} key={val.imdbID} history={this.props.history}/>)}
                </div>}
            </div>
            </React.Fragment>
        )
    }
}
export default  Main;
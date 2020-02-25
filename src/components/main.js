import React,  { Component } from 'react';
import Input from '../base_components/input';
import Select from '../base_components/select';
import Button from '../base_components/button';

class Main extends Component{
    evenListener(e){
        console.log(e);
    }
    render(){
        return(
            <div className="container">
                <div className="field-container">
                    <Input />
                    <Select />
                    <Button name="search" evenListener={this.evenListener.bind(this)}/>
                    </div>
            </div>
        )
    }
}
export default  Main;
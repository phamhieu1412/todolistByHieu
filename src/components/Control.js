import React, {Component} from 'react';
import Search from './Search';
import Arrage from './Arrage';


class Control extends Component {

  render(){
    return(
        <div className="row" style={{marginBottom: '25px'}}>
            <Search/>
        
            <Arrage/>                
        </div>

    );
  }
}





export default Control;

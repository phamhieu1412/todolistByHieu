import React, { Component } from 'react';
import { connect } from 'react-redux';
import { searchTask } from '../actions/index';


class Search extends Component {

  constructor(props) {
    super(props);
    this.state = {
      keyword: '' 
    }
  }
  onHandleChange = (event) => {
    this.setState({
      keyword: event.target.value
    });
  }
  onSearch = () => {
    this.props.onSearchTask(this.state.keyword);
  }

  render() {
    
    
    return (

      <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
        <div className="input-group">
          <input type="text"
            className="form-control"
            name="keyword"
            placeholder="Nhập từ khóa..."
            value={this.state.keyword}
            onChange={this.onHandleChange}
          />
          <span className="input-group-btn">
            <button type="button"
                    className="btn btn-primary"
                    onClick={this.onSearch}
            >
              <span className="fa fa-search"></span>
              Search
                </button>
          </span>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    onSearchTask: (keyword) => {
      dispatch(searchTask(keyword))
    }
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(Search);

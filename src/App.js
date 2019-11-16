import React, {Component} from 'react';
import { connect } from 'react-redux';
import TaskForm from './components/TaskForm';
import Table from './components/Table';
import Control from './components/Control';
import { toggleForm,editTask,openForm } from './actions/index';


class App extends Component {
  onExitForm = () => {
    if(this.props.editTask && this.props.editTask.id !== ''){
      this.props.onOpenForm();
    }
    else {
      this.props.onToggleForm();
    }
    this.props.onEditTask({
      id: '',
      name: '',
      status: false
    });
  }

  render(){
    var{ isDisplayForm, tasks } = this.props;
    // neu isdiaplay  = true thi mo taskform
    var element = isDisplayForm === true ? <TaskForm  onClick={this.onExitForm}/> : '';
    
    return(
        <div className="container">
          <div className="row" style={{marginTop: '30px'}}>
            <h1 style={{textAlign: 'center',marginBottom:'50px' }}>Quản Lý Công Việc Của Bạn</h1>
            {/* left */}
            <div className={isDisplayForm === true ? "col-xs-4 col-sm-4 col-md-4 col-lg-4" : " "}>
              {element}
            </div>

            {/* right */}
          <div className= {isDisplayForm === true ? "col-xs-8 col-sm-8 col-md-8 col-lg-8" : "col-xs-12 col-sm-12 col-md-12 col-lg-12"}>
              <button type="button"
                      style={{marginBottom:'20px'}} 
                      className="btn btn-primary" 
                      onClick={this.onExitForm}
                      >
                Thêm mới công việc!!!
                <span className="fa fa-plus"></span>  
              </button>

              <Control />

              <div className="">
                <Table tasks={tasks}/>
              </div>
            </div>
          </div>
        </div>
    );
  }
}

const mapStateToProps = (state) =>{
  return {
    isDisplayForm: state.isDisplayForm,
    editTask : state.editTask //reducers
  }
}
const mapDispatchToProps = (dispatch, props) => {
  return {
    onToggleForm: () => {
      dispatch(toggleForm())
    },  
    onOpenForm: () => {
      dispatch(openForm())
    },
    onEditTask: (task) => {
      dispatch(editTask(task))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);

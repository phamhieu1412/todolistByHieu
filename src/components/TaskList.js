import React, {Component} from 'react';
import { connect } from 'react-redux';
import {deleteTask, closeForm,updateStatus, openForm,editTask} from '../actions/index';

class TaskList extends Component {
  onDeleteTask = () => {
    this.props.onDelete(this.props.task.id);
    this.props.onCloseForm();
  }
  onUpdateStatus = (e) => {
    e.preventDefault();
    this.props.onUpdateStatus(this.props.task.id)
  }
  onEditTask = () => {
    this.props.onEditTask(this.props.task);
    this.props.onOpenForm();
  }

  render(){
    
    return(
        <tr>
            {/* STT */}
            <td>{this.props.index}</td>
            {/* Name */}
            <td>{this.props.task.name}</td>
            {/* status */}
            <td className="text-center">
              <span className={this.props.task.status === true ? 'label label-success' : 'label label-danger'}
                    onClick={this.onUpdateStatus}>
                {this.props.task.status === true ? 'Hoàn thành' : 'Chưa hoàn thành'}
              </span>
            </td>    
            {/* action */}
            <td className="text-center">
              <button type="submit" 
                      className="btn btn-warning" 
                      onClick={this.onEditTask}                    
              >
                  Sửa
                  <span className="fa fa-pencil mr-5"></span>  
              </button>&nbsp;
              <button type="button" 
                      className="btn btn-danger" 
                      onClick={this.onDeleteTask}
              >
                  Xóa
                  <span className="fa fa-trash mr-5"></span>  
              </button>
            </td>
        </tr>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    onDelete: (id) => {
      dispatch(deleteTask(id))
    },
    onCloseForm : () => {
      dispatch(closeForm())
    },
    onUpdateStatus : (id) => {
      dispatch(updateStatus(id))
    },
    onOpenForm : () => {
      dispatch(openForm())
    },
    onEditTask: (task) => {
      dispatch(editTask(task))
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(TaskList);
  
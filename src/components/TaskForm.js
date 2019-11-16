import React, { Component } from 'react';
import { connect } from 'react-redux';
import { closeForm, saveTask } from '../actions/index';


class TaskForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            name: '',
            status: false
        }
    }
    //khi nhan button add se goi
    componentWillReceiveProps(nextProps) {
        if (nextProps && nextProps.editTask){
            //gan info vao editTask
            this.setState({
                id: nextProps.editTask.id,
                name: nextProps.editTask.name,
                status: nextProps.editTask.status
            });
        }
        else{
            this.onClear();
        }
    }
    componentWillMount(){
        if (this.props.editTask && this.props.editTask.id != null){
            this.setState({
                id: this.props.editTask.id,
                name: this.props.editTask.name,
                status: this.props.editTask.status
            });
        }
        else{
            this.onClear();
        }
    }

    onChange = (event) => {
        var name = event.target.name;
        var value = event.target === 'checkbox' ? event.target.checked : event.target.value;
        this.setState({
            [name]: value
        });
    }
    onSubmitForm = (event) => {
        event.preventDefault();
        this.props.onSave(this.state);
        this.onClear();
        this.props.onCloseForm();
    }
    onClear = () => {
        this.setState({
            name: '',
            status: false
        })
    }
    onCloseForm = () => {
        this.props.onCloseForm()
    }

    render() {
        if(!this.props.isDisplayForm) return null;
        return (
            <div className="panel panel-warning">
                <div className="panel-heading">
                    <h3 className="panel-title">
                        { !this.state.id ? 'Thêm Công Việc' : 'Cập Nhật Công Việc' }
                        <span className="fa fa-times-circle text-right"
                            style={{ float: 'right' }}
                            onClick={this.onCloseForm}>
                        </span>
                    </h3>
                </div>

                <div className="panel-body">
                    <form onSubmit={this.onSubmitForm}>
                        <div className="form-group">
                            <label >Công việc :</label>
                            <input type="text"
                                className="form-control"
                                name="name"
                                value={this.state.name}
                                onChange={this.onChange}
                            />
                            <br></br>

                            <label >Tình trạng :</label>
                            <select name="status"
                                className="form-control"
                                value={this.state.status}
                                onChange={this.onChange}
                            >
                                <option value={true}>Hoàn thành</option>
                                <option value={false}>Chưa hoàn thành</option>
                            </select>
                            <br></br>

                            <div className="text-center">
                                <button type="submit" className="btn btn-warning">
                                    Lưu<span className="fa fa-plus"></span>
                                </button>&nbsp;
                                <button type="button" className="btn btn-danger" onClick={this.onClear}>
                                    Xóa<span className="fa fa-close "></span>
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isDisplayForm : state.isDisplayForm,
        editTask : state.editTask
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        onCloseForm: () => {
            dispatch(closeForm())
        },
        onSave: (task) => {
            dispatch(saveTask(task))
        }
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(TaskForm);

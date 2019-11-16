import React, { Component } from 'react';
import { connect } from 'react-redux';
import TaskList from './TaskList';
import {filterTask} from '../actions/index.js';


class Table extends Component {
    constructor(props){
        super(props);
        this.state = {
            filterName: '',
            filterStatus: -1
        }
    }

    onChange = (event) =>{
        var name = event.target.name;
        var value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;

        var filter = {
            name: name === 'filterName' ? value : this.state.filterName,
            status: name === 'filterStatus' ? value : this.state.filterStatus
        }
        this.props.onFilterTable(filter);
        this.setState({
            [name]: value
        })
    }

    render() {
        var {tasks,filterTable, keyword, sort} =this.props;
        //check name and status
        if(filterTable.name){
            tasks = tasks.filter( (task)=> {
                return task.name.toLowerCase().indexOf(filterTable.name.toLowerCase()) !== -1
            });
        }
        tasks = tasks.filter( (task)=> {
            if(filterTable.status === -1){
                return task;
            }   
            else{
                return task.status === (filterTable.status === 1 ? true : false)
            } 
        });
        //loc lay du lieu tren store(search)
        tasks = tasks.filter( (task)=> {
            return task.name.toLowerCase().indexOf(keyword.toLowerCase()) !== -1
        });
        //sap xep
        if (sort.by === 'name') {
            tasks.sort((a, b) =>{
                if (a.name > b.name) {
                    return sort.value;
                }
                else if (a.name < b.name) {
                    return -sort.value;
                }
                else return 0;
            });
        }
        else {
            tasks.sort((a, b) =>{
                if (a.status > b.status) {
                    return -sort.value;
                }
                else if (a.status < b.status) {
                    return sort.value;
                }
                else return 0;
            });
        }
        

        var element = tasks.map( (task, index) => {
            return <TaskList key={task.id}
                            task={task}
                            index={index + 1}
                    />
        });

        return (
            <table className="table table-hover table-bordered" >
                <thead>
                    <tr>
                        <th className="text-center">STT</th>
                        <th className="text-center">Tên</th>
                        <th className="text-center">Tình trạng</th>
                        <th className="text-center">Hành động</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td></td>
                        <td>
                            <input className="form-control"
                                type="text"
                                name="filterName"
                                onChange={this.onChange}
                                value={this.state.filterName}
                            />
                        </td>
                        <td>
                            <select className="form-control"
                                name="filterStatus"
                                onChange={this.onChange}
                                value={this.state.filterStatus}
                            >
                                <option value={-1}>Tất cả</option>
                                <option value={0}>Chưa hoàn thành</option>
                                <option value={1}>Hoàn thành</option>
                            </select>
                        </td>
                        <td></td>
                    </tr>

                    {element}

                </tbody>
            </table>
        );
    }
}

const mapStateToProps = (state) => {
    return{
        tasks: state.allTask,
        filterTable: state.filterTable,
        keyword: state.searchTask,
        sort: state.sortTask
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return{
        onFilterTable: (filter) => {
            dispatch(filterTask(filter))
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Table);

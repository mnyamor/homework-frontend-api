import React, { Component, PropTypes } from 'react';
import { fetchData } from '../../actions/loginAuth';


export default class Document extends Component {
    constructor(props) {
      super(props);
        this.state = {
        isLoading: false
      };
    }
    render() {

        const dataOutput = JSON.parse(localStorage.getItem("data")) || [];
        const arr = dataOutput;    
        console.log(arr);
        return (
            <div className="container">
              <div className="col-md-12 col-xs-12">
                <form className="navbar-form pull-right" role="search">
                  <div className="input-group add-on">
                    <input className="form-control" placeholder="Search" name="srch-term" id="srch-term" type="text" />
                    <div className="input-group-btn">
                      <button className="btn btn-default" type="submit"><i className="glyphicon glyphicon-search"></i></button>
                    </div>
                  </div>
                </form>
                <table className="table table-bordered table-hover table-striped table-foldersystem">
                  <thead>
                    <tr>
                      <th></th>
                      <th>id</th>
                      <th>name</th>
                      <th>size</th>
                    </tr>
                  </thead>
                  <tbody>
                    { arr.map((item, i) =>
                    <tr key={i}>
                      <td><i className="glyphicon glyphicon-folder-open"></i></td>
                      <td>{item.id}</td>
                      <td >{item.name}</td>
                      <td className="cooltip">{item.size}</td>
                    </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
        );
    }
}
import React, { Component } from 'react';

class TableDataRow extends Component {
    //Đây là cháu của App.js là con của TableData.js
    //Đây là hàm kiểm tra lấy giá trị từ props để kiểm tra và in ra dữ liệu hàm props hàm props này lấy giá trị value trong giữ liệu ra để đối chiếu còn value là giá trị của dữ liệu 
    //Dùng hàm map để đẩy dữ liệu vào
    // giá trị của id bên dữ liệu kì tương ứng với từng quyên VD: nếu bằng 1 thì quyền là Admin 
    // video 64 : sử dụng col để tự động co giản giao diện khi click vào 
    permissionShow = () => {
        if(this.props.permission === 1){
            return "Admin"}else if(this.props.permission === 1){
                return "Moderator"} else { return "Normal User"}
    }
    editClick = () => {
        this.props.editFunClick();
        this.props.changeEditUserStatus();
    }

    deleteButtonClick = (idUser) => {
        this.props.deleteButtonClick(idUser);      
    }
    //this.props.editFunClick
    render() {
        return (
            <tr>
            <td >{this.props.stt}</td>
            <td>{this.props.userName}</td>
            <td>{this.props.tel}</td>
            <td>
               {
                  this.permissionShow()
               }
            </td>
            <td>
            <div className="btn-group">
                <div className="btn btn-warning sua" onClick={ () => this.editClick()}>
                <i className=" fa fa-edit "> Sữa </i>
                </div>
                <div className="btn btn-danger xoa">
                <i className=" fa fa-delete" onClick={(idUser) => this.deleteButtonClick(this.props.id)}> Xóa </i>
                </div>
            </div>
            </td>
        </tr>
     );
    }
}

export default TableDataRow;
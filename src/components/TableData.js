import React, { Component } from 'react';
import TableDataRow from './TableDataRow';
// viết 1 hàm map để đẩy dữ liệu ra
// Các cái này là các phần tử các phần tử là các đối tượng VD:name,id 
class TableData extends Component {
    // đây là con của App.js 
    // thuộc tín key là phải bắt buộc phải có ,còn dùng cái gì thì chuyền vào đó 
    // Chú ý : viết hàm thì phải khai báo ra bằng hàm 
    deleteButtonClick = (idUser) => {
         this.props.deleteUser(idUser);    
        //    console.log(idUser);           
   }

    mappingDataUser = () => this.props.dataUserProps.map((value,key) => (
                                                <TableDataRow
                                                deleteButtonClick={(idUser) => this.deleteButtonClick(idUser)}
                                                userName={value.name}
                                                key={key}
                                                stt={key}
                                                tel={value.tel}
                                                permission={value.Permission}
                                                editFunClick={ (user) => this.props.editFun(value)}
                                                changeEditUserStatus ={ () => this.props.changeEditUserStatus()}
                                                id={value.id}></TableDataRow>
                                            )) 
   //this.props.editFun
    render() {
    // console.log(this.props.dataUserProps);
        return (
                <div className="col">
                <table className="table table-striped table-hover">
                    <thead>
                    <tr>
                        <th>STT</th>
                        <th>Tên</th>
                        <th>Điện Thoại</th>
                        <th>Quyền</th>
                        <th>Thao Tác</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.mappingDataUser()
                    }
                    </tbody>
                </table>
                </div>
        );
    }
}

export default TableData;
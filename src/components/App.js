import React, { Component } from 'react';
import './../App.css';

import Header from './Header';
import Searchform from './Searchform';
import TableData from './TableData';
import AppUser from './AppUser';
// import {DataUser} from 'http://api.vietnd.abc/';

import DataUser from './Data.json';
const uuidv1 = require('uuid/v1');


//trang App.js là trang để view ra tất cả các file component mà người dùng thấy được  
//Chia trang thành nhiều component để xú lý cho phù hợp VD:trang này chia ra làm 4 phần tương ứng với 4 component:-header;-seachform;-tableDate;-cardform
//Cách đường link trực truyến để ở file index.html trong folder public có hai trường hợp trường hợp thứ nhất nếu là đường link trực tuyến thì không cần chỉnh đường dẫn nếu đường link nội thì phải chỉnh 
//Nếu mà tất cả đề u năm trong 1 thuộc tính html thì có hai cách đó là tạo như trên hoặc tạo 1 file chính và những file phụ phía sau
//Có hai cách để chuyển file HTML sang mã JSX bằng cách view trên google rồi kiểm tra từng phần tử để copy và paste vào để chuyển mã JSX "cách 1 nay khuyên dùng nó dể hơn và đở lỗi khi thiếu khi copy"hoặc lấy trong file ra  
//vào google để check lại những guyên nin lỗi phát khi chuyển HTML sang mã JSX  

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hienThiForm:false,
      data:DataUser,
      searchText:"",
      editUserStatus:false,
      userEditObject:{}
    }
  }  

   
 componentWillMount() {
    //  kiểm tra xem có localStorage nay chưa 
    //  console.log(localStorage.getItem('userData',JSON.stringify(DataUser)));      
    if (localStorage.getItem('userData') === null) {
      localStorage.setItem('userData', JSON.stringify(DataUser));
    }
    else {
      var temp = localStorage.getItem('userData');

      temp = JSON.parse(temp);
      this.setState({
        data: temp
      });

    }    
  }
   

 changeEditUserStatus = () => {
    this.setState({
      editUserStatus : !this.state.editUserStatus
    });
  }

  deleteUser = (idUser) => {
    // console.log(idUser);
    // đây là 1 hàm xóa mới trong JavaScript filter lọc và xóa đi dữ liệu 
    // var arr=[1,2,3];
    // var x  = 2;
    // arr = arr.filter(item => item != x);
    // console.log(arr);
    //thay cho hàm forEach

    var tempData = this.state.data;
    tempData = tempData.filter(item => item.id !== idUser);
      this.setState({
        data:tempData
      });
       localStorage.setItem('userData', JSON.stringify(tempData));
    }
 
  getUserEditInfoApp = (info) => {
     //console.log('thông tin đã sữa xong là' + info.tel);
     this.state.data.forEach((value,key) => {
        if(value.id === info.id){
          value.name = info.name;
          value.tel = info.tel;
          value.Permission = info.Permission
        }
     })
  }
  editUser = (user) => {
    //  console.log(" Da ket noi ok ")
     this.setState({
      userEditObject:user
     });
    //  console.log(user);
     
  }

  getNewUserData = (name,tel,Permission) => {
  var item = {};
  item.id         = uuidv1(); 
  item.name       = name;
  item.tel        = tel;
  item.Permission = Permission;
  var items = this.state.data;
  items.push(item);

  this.setState({
    data:items
  });
  //  console.log('kết nối ok ok');
   console.log(this.state.data);
  //  console.log(tel);
  //  console.log(Permission); 
  }
 
  getTextSearch = (dl) => {
    this.setState({
      searchText:dl
    });
  }

  doiTrangThai = () => {
    this.setState({
      hienThiForm: !this.state.hienThiForm
    });
  }
  // thongBao = () => {
  //   alert('kết nối thành công')
  // }
  render() {
      console.log(this.state.data);
    // localStorage.setItem('userData',JSON.stringify(DataUser));
    // localStorage.setItem("key1","ha ha");
    // console.log(localStorage.getItem('key1'));
    //localStorage.removeItem('key1');
    var ketqua = [];
  //  console.log(this.state.data);
    this.state.data.forEach( (item) => {
    //  console.log(item.name);
      if (item.name.indexOf(this.state.searchText) !== -1){
          ketqua.push(item);
     }
    })
    // console.log(ketqua);
    // console.log(this.state.data);
    return (
      <div>
        <Header></Header>
        <div className="searchform">
          <div className="container">
            <div className="row">               
              <Searchform
              getUserEditInfoApp ={(info) => this.getUserEditInfoApp(info)}
              userEditObject={this.state.userEditObject}
              checkConnectProps={ (dl) => this.getTextSearch(dl)}
              ketNoi={() =>this.doiTrangThai()} 
              hienThiForm={this.state.hienThiForm}
              editUserStatus={this.state.editUserStatus}
              changeEditUserStatus ={ () => this.changeEditUserStatus()}
              ></Searchform>
              <TableData
              deleteUser = {(idUser) => this.deleteUser(idUser)}
              dataUserProps={ketqua} 
              editFun={ (user) => this.editUser(user) }
              changeEditUserStatus ={ () => this.changeEditUserStatus()}
              ></TableData>
              <AppUser
               add={ ( name,tel,Permission ) => this.getNewUserData(name,tel,Permission)}
               hienThiForm={this.state.hienThiForm}></AppUser>
            </div>
          </div>
        </div>
      </div>  
    );
  }
}

export default App; 
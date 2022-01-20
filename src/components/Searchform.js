import React, { Component } from 'react';
import EditUser from './EditUser';

//Cách làm tương tác giữa hai component khác nhau VD: Nút Thêm Mới Và đóng lại 
// state là 1 biến b rai vết nên chỉ được dùng trong 1 component
// muốn kết nối tương tắc giữa hai component thì phải dùng một cái component làm trung gian đó là file App.js đây là file chính để xô ra cho người nhìn thấy và ta dùng cái này để kết nối với component searchform và Appuser.js  
// Con muốn chuyền hàm cho bố thì phải thông qua tham số trong hàm props
class Searchform extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tempValue:'',
            userObj:{}
        }
    }
    //this.props.getUserInfoApp


     getUserEditInfo = (info) =>{
         this.setState({
             userObj:info
         });
         this.props.getUserEditInfoApp(info);
     }
     isShowEditForm = () => {
         if(this.props.editUserStatus === true){
             return (<EditUser 
                getUserEditInfo ={(info) => this.getUserEditInfo(info)}
                userEditObject={this.props.userEditObject}
                changeEditUserStatus ={ () => this.props.changeEditUserStatus()}></EditUser>)
         }
     }
    // this.props.checkConnectProps
    // Điền text thì lấy được text giống như form . khi này chỉ cần điền vào là lấy được rồi không cần submit
    // Nếu muốn submit vào nó cũng lấy được text thì phài khai báo 1 biết trung gian khi có sự kiện onClick vào để lưu các giá trị 
    
    ischange = (event) => {
        //hàm seSttate để đẩy giá trị vào trong state
        this.setState({
            tempValue: event.target.value
        });
        
       this.props.checkConnectProps(event.target.value); 
       // cái k  dùng đc đâu vì nó  thay nó thành event.target.value mới ghi cái nào là nó nhận luôn còn dùng state là nhận chậm  vd ghi 3 chữ a nhưng nó chỉ gửi đi 2 chữ a thôi vì nó là hàm bất đồng bộ nó chạy song song với mấy hàm kia nên lúc đầu nó lâý cái giá trị đầu tiên đặt cho nó chính là  tempValue:'' ok chưa
    }
    hienThiNut = () => { 
        if(this.props.hienThiForm === true){
           return(<div className="btn btn-block btn-outline-secondary mt-2" onClick={() => this.props.ketNoi()}>Đóng Lại</div>) 
        }else{
           return(<div className="btn btn-block btn-outline-info mt-2" onClick={() => this.props.ketNoi()}>Thêm Mới</div>)
        }
    }
    render() {        
        // console.log(this.state.userObj);
        return (
        <div className="col-12">
         {
             this.isShowEditForm()
         }
        <div className="form-group">
            <div className="btn-group">
            <input type="text" className="form-control" onChange={ (event) => this.ischange(event)}  placeholder=" Nhập tên cần tìm " />
            <div className="btn btn-info" onClick={ (dl) => this.props.checkConnectProps(this.state.tempValue)}> Tìm </div>
        </div>
        <div className="btn-group1">
        {this.hienThiNut()}
        </div>
        </div>
        <hr/>    
        </div>
        );
    }
}

export default Searchform;
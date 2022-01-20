import React, { Component } from 'react';

// sử lý logic cho phần frontend để ntuowng tác nhanh hơn 
//viết hàm state phải có constructor
//xử lý nút hiển thêm mới và đóng lại cho form xử lý thông qua state 
//viết theo kiểu gọi hàm ra luôn thì chỉ cần gọi ra luôn không cần phải có thao tác gì cả còn gọi theo kiểu arrow function thì phài có click hai một tham số truyền vào nào đó thì nó mới thay đổi VD:onClick={() => this.trangThaiChinhSua()} còn gọi thẳng ra trong Mã JSX {this.hienThiNut} đây là gọi thẳng hàm ra luôn 
class AppUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id:"",
            name:"",
            tel:"",
            Permission:""
        }
    }
    
    // constructor(props) {
    //     super(props);
    //     this.state ={
    //        trangThaiChinhSua: false
    //     }
    // }
    // //cho phủ định có nghĩa là khi trangThaiChinhSua: true cài này bằng false trangThaiChinhSua: !this.state.trangThaiChinhSua  

    // thaiDoiTrangThai = () =>{
    //        this.setState({
    //            trangThaiChinhSua: !this.state.trangThaiChinhSua
    //        });
    // }

    // hienThiNut = () => {
    //        if(this.state.trangThaiChinhSua === true){
    //              return(
    //                 <div className="btn btn-block btn-outline-secondary" onClick={() => this.thaiDoiTrangThai()}>Đóng Lại</div>
    //              );
    //        }
    //        else {
    //            return(
    //             <div className="btn btn-block btn-outline-info" onClick={() =>this.thaiDoiTrangThai()}>Thêm Mới</div>
    //            );
    //        }
    // }
    // hienThiForm = () => {
    //   if(this.state.trangThaiChinhSua === true)
        //  return( <div className="card border-primary mb-3 mt-2">
        //  <div className="card-header">Thêm Mới user vào hệ thống</div>
        //  <div className="card-body text-primary">
        //      <div className="form-group">
        //      <input type="text" className="form-control"  placeholder="Tên User" />
        //      </div>
        //      <div className="form-group">
        //      <input type="text" className="form-control"  placeholder="Điện Thoại" />
        //      </div>
        //      <div className="form-group">
        //      <select className="custom-select" required>
        //          <option value>Chọn Quyền Mặc Định</option>
        //          <option value={1}>Admin</option>
        //          <option value={2}>Modrator</option>
        //          <option value={3}>Normal</option>
        //      </select>
        //      </div>
        //      <div className="form-group">
        //      <div className="btn btn-block btn-primary">Thêm Mới</div>
        //      </div>
        //  </div>
        //  </div>);
    // }
//gọi Hàm thì dùng dâu ngoặc nhọn trong phần JSX
// Cài này chỉ cần gọi hàm ra thôi không có tham số thuyền vào nên ta không thể gọi theo kiểu arrow function mà phải gọi trực tiếp hàm ra luôn  
// Hai trạng thái đóng mở nhờ biến này ={    trangThaiChinhSua: false  } nên khi cúng tra  kiểm tra dùng hmaf if thì nó sẽ khác 
isChange = (event) => {
    const name = event.target.name;
    const value =event.target.value;
//  console.log(name);
//  console.log(value);
 
    this.setState({
        [name]:value
    });    

    //  pakage to item (đóng gói thành một cái đối tượng là item)

    // var item = {} ;
    //     item.id = this.state.id;
    //     item.name = this.state.name;
    //     item.tel = this.state.tel;
    //     item.Permission = this.state.Permission; 
    // console.log(item);
    
}

kiemTraTrangThai = () => {
    if(this.props.hienThiForm === true)
    {
        return (            
            <div className="col">
                <form>
                    <div className="card border-primary mb-3 mt-2">
                    <div className="card-header">Thêm Mới user vào hệ thống</div>
                    <div className="card-body text-primary">
                    <div className="form-group">
                    <input name="name" onChange={(event) =>this.isChange(event)} type="text" className="form-control"  placeholder="Tên User" />
                    </div>
                    <div className="form-group">
                    <input name="tel" onChange={(event) =>this.isChange(event)} type="text" className="form-control"  placeholder="Điện Thoại" />
                    </div>
                    <div className="form-group">
                    <select name="Permission" onChange={(event) =>this.isChange(event)} className="custom-select" required>
                        <option value>Chọn Quyền Mặc Định</option>
                        <option value={1}>Admin</option>
                        <option value={2}>Modrator</option>
                        <option value={3}>Normal</option>
                    </select>
                    </div>
                    <div className="form-group">
                        <input type="reset" className="btn btn-block btn-primary" onClick={ (name,tel,Permission) => this.props.add(this.state.name,this.state.tel,this.state.Permission) } value=" Thêm Mới "/>
                    </div>
                </div>
                </div>
            </form>
        </div>
        );
    }
}     
render() {
        // console.log(this.props.hienThiForm);
        //    console.log(this.state);
        return (
                <div>
                   {/* {this.hienThiNut()}
                   {this.hienThiForm()} */}

                 {
                     this.kiemTraTrangThai()
                 }                  
                </div>                
        );
    }
}

export default AppUser;
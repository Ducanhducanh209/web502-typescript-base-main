import { useState } from "react"; 
function ShowHide() { const [isShow, setIsShow] = useState(false);
     return ( <div> <h2>Thông tin</h2>
      <button onClick={() => setIsShow(!isShow)} className="border border-black px-4 py-2" >
{isShow ? "Ẩn thông tin" : "Hiển thị thông tin"} 
       </button> {isShow ? ( <div> <p>Tên: Nguyễn Duc Anh</p> <p>Email: blatda29@gmail.com</p> </div> ) : ( <p>Thông tin được ẩn</p> )} </div> ); }
 export default ShowHide;
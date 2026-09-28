import { useState } from "react";
import { Link } from "react-router-dom";
interface Props{
    logo: string;
    text?: string;
}
function Header(props:Props){
    console.log(props);
    // let label = "Danh Sach Sinh Vien";
    // const changeLabel = () => {
    //   label = "DSSV"
    //   console.log(label);
    // };
//usestaste
const [label, changeLabel] = useState("danh sach Sinh vien")
    return(
           <nav className="bg-blue-600 text-white shadow">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="#" className="text-xl font-semibold">
            <strong>{props.logo}</strong>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="#" className="hover:text-gray-200">
             
            </Link>
            <Link to="#" className="hover:text-gray-200">
              {label}
            </Link>
            <button onClick={() =>changeLabel("DSSV") }>changeLabel</button>
          </div>
        </div>
      </nav>
    )
}

export default Header;

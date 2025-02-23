import React from "react";
import MenuIcon from "../../assets/Icons/MenuIcon";
import DashIcon from "../../assets/Icons/DashIcon";
import AppleIcon from "../../assets/Icons/AppleIcon";
import GooglePlayIcon from "../../assets/Icons/GooglePlayIcon";
import mainLogo from '../../assets/Images/mainLogo.jpeg'
import lamadaLogo from '../../assets/Images/lamadaLogo.jpg'
import { Link } from "react-router-dom";
const NewHomePage=()=>{
    return(
        <div>
         <div className={`w-full h-full flex flex-col md:flex-row pb-0 p-2 md:p-6 justify-center`}>

            <div className={`w-full md:w-1/2 h-full flex flex-col items-center`}>
                <img src={lamadaLogo} width={180} height={180} alt="Main Logo" />
                 <div className="flex items-center justify-center gap-2">
                    <h1 className="text-mainColor font-semibold text-2xl">Lamada</h1>
                </div>
            </div>

            <div className={`w-full md:w-1/2 h-full flex flex-col gap-3 p-2 md:p-4 items-center justify-center`}>
                <div className="flex gap-5">
                    <Link to="/lamada_menu" className="bg-[#9E090F1A] flex flex-col gap-3  items-center justify-center rounded-xl p-2 md:p-6">
                        <MenuIcon/>
                        <h1 className="text-2xl text-mainColor">Menu</h1>
                    </Link>
                    <Link target="_blank" to="https://www.restaurantlogin.com/ordering/restaurant/menu?company_uid=a2fc19d6-e9ea-4b4d-8ae9-526bac2e6b97&restaurant_uid=8ac9c3d9-c2d3-4d26-b397-c0fb409535a7&facebook=true" className="bg-[#9E090F1A] flex flex-col gap-3  items-center justify-center rounded-xl p-2 md:p-6">
                        <DashIcon/>
                        <h1 className="text-2xl text-mainColor">Order Now</h1>
                    </Link>      
                </div>

                <div className="flex gap-1 p-4 pb-0">
                    <Link to="#" className="opacity-50 cursor-not-allowed">
                        <GooglePlayIcon/>
                    </Link>
                    <Link to="https://apps.apple.com/eg/app/lamada/id6553989792">
                        <AppleIcon/>
                    </Link>      
                </div>
            </div>
        </div>

        <Link to="https://food2go.online/" target="_blank" className="flex items-center justify-center gap-2">
            <h1 className="text-gray-600">Powered by</h1>
            <img src={mainLogo} className="w-16 h-16" alt="Main Logo" />
        </Link>
        </div>
    )
}

export default NewHomePage;
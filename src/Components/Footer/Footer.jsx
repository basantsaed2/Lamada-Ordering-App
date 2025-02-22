import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaPhoneAlt, FaWhatsapp, FaEnvelope, FaMapMarkerAlt,FaFacebookF, FaInstagram, FaApple, FaGooglePlay } from 'react-icons/fa';
// import RedLogo from '../../Assets/Images/RedLogo';
import WhiteLogo from '../../assets/Images/WhiteLogo';
import { Link } from 'react-router-dom';
import mainLogo from '../../assets/Images/mainLogo.jpeg'
import lamadaLogo from '../../assets/Images/lamadaLogo.jpg'

const Footer = () => {
  return (
    // <div className="footer bg-mainColor w-full text-white p-4">
    //   <div className="w-full px-5">
        
    //     {/* Logo Section */}
    //     <div className="flex items-center gap-x-2 mb-5">
    //       <img src={lamadaLogo} width={50} height={50} alt="Logo" />
    //       <span className="text-3xl text-white font-TextFontRegular">Lamada</span>
    //     </div>

    //     {/* Footer Grid */}
    //     <div className="footer-content grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-8">
          
    //       {/* Connect Us Section */}
    //       <div className="content">
    //         <h2 className="text-gray-200 font-bold">Connect Us</h2>
    //         <ul className="space-y-4 mt-4">
    //           <li className="flex items-center space-x-2">
    //             <FaPhoneAlt className="text-3xl text-mainColor bg-white rounded-sm p-2"  />
    //             <span>Phone: 035559288</span>
    //           </li>
    //           <li className="flex items-center space-x-2">
    //             <FaWhatsapp className="text-3xl text-mainColor bg-white rounded-sm p-2"  />
    //             <span>WhatsApp: +201069470088</span>
    //           </li>
    //           {/* <li className="flex items-center space-x-2">
    //             <FaEnvelope className="text-3xl text-mainColor bg-white rounded-sm p-2" />
    //             <span>Email: Info@food2go.online</span>
    //           </li> */}
    //           {/* <li className="flex items-center space-x-2">
    //             <FaMapMarkerAlt className="text-3xl text-mainColor bg-white rounded-sm p-2" />
    //             <span>Address: 329 Queensberry St, Melbourne</span>
    //           </li> */}
    //         </ul>
    //       </div>

    //       {/* Quick Links Section */}
    //       <div className="content">
    //         <h2 className="text-gray-200 font-bold">Pages</h2>
    //         <ul className="gap-4 mt-4 flex flex-row md:flex-col">
    //           <li>
    //             <NavLink
    //               to=""
    //               className={({ isActive }) =>
    //                 `hover:text-white underline ${isActive ? 'text-white' : 'text-gray-300'}`
    //               }
    //             >
    //               Home
    //             </NavLink>
    //           </li>
    //           <li>
    //             <NavLink
    //               to="menu"
    //               className={({ isActive }) =>
    //                 `hover:text-white underline ${isActive ? 'text-white' : 'text-gray-300'}`
    //               }
    //             >
    //               Menu
    //             </NavLink>
    //           </li>
    //           <li>
    //             <NavLink
    //               to="contact_us"
    //               className={({ isActive }) =>
    //                 `hover:text-white underline ${isActive ? 'text-white' : 'text-gray-300'}`
    //               }
    //             >
    //               Contact Us
    //             </NavLink>
    //           </li>
    //         </ul>
    //       </div>

    //       {/* Mobile Section */}
    //       <div className="content">
    //         <h2 className="text-gray-200 font-bold">Mobile</h2>
    //         <ul className="gap-2 mt-4 flex flex-row md:flex-col">
    //           <li className="border w-[50%] border-white rounded-lg p-2 flex items-center gap-4">
    //             <FaApple className="text-3xl text-white p-1" />
    //             <div>
    //               <p className="text-sm">App Store</p>
    //               {/* <p className="text-xs text-gray-400">Available now</p> */}
    //             </div>
    //           </li>
    //           <li className="border w-[50%] border-white rounded-lg p-2 flex items-center gap-4">
    //             <FaGooglePlay className="text-3xl text-white p-1" />
    //             <div>
    //               <p className="text-sm">Google Play</p>
    //               {/* <p className="text-xs text-gray-400">Get it on</p> */}
    //             </div>
    //           </li>
    //         </ul>
    //       </div>
    //     </div>

    //       <div className="flex justify-center items-center gap-3 text-sm mt-4">
    //         <Link to="https://food2go.online/" target="_blank" className="flex items-center justify-center gap-2">
    //         <p>©2025 . All rights reserved</p>
    //         <h1 className="text-white font-semibold text-xl">Lamada</h1>
    //         </Link>
    //       </div>

    //   </div>
    // </div>

    <div className="footer bg-mainColor w-full text-white py-8">
    <div className="w-full max-w-6xl mx-auto px-5">
      {/* Logo Section */}
      <div className="flex items-center gap-x-3 mb-6">
      <img src={lamadaLogo} width={50} height={50} alt="Logo" />
      <span className="text-3xl font-semibold">Lamada</span>
      </div>

      {/* Footer Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Connect Us Section */}
        <div className="content">
          <h2 className="text-white font-bold text-lg mb-4">Connect With Us</h2>
          <ul className="space-y-4">
            <li className="flex items-center space-x-2">
                <FaPhoneAlt className="text-3xl text-mainColor bg-white rounded-full p-2"  />
                 <span>Phone: 035559288</span>
               </li>
               <li className="flex items-center space-x-2">
                 <FaWhatsapp className="text-3xl text-mainColor bg-white rounded-full p-2"  />
                 <span>WhatsApp: +201069470088</span>
              </li>
          </ul>
          {/* Social Media Links */}
          <div className="flex space-x-4 mt-4">
            <Link
              to="https://www.facebook.com/share/1QhHMNt95o/?mibextid=qi2Omg"
              target="_blank"
              className="p-3 bg-white text-mainColor rounded-full hover:bg-gray-300 transition duration-300"
            >
              <FaFacebookF className="text-xl" />
            </Link>
            <Link
              to="https://www.instagram.com/lamada.fastfood?igsh=MTN1Y2dqOGpsdWw4dA=="
              target="_blank"
              className="p-3 bg-white text-mainColor rounded-full hover:bg-gray-300 transition duration-300"
            >
              <FaInstagram className="text-xl" />
            </Link>
          </div>
        </div>

        {/* Quick Links Section */}
        <div className="content">
          <h2 className="text-white font-bold text-lg mb-4">Pages</h2>
        <ul className="gap-4 mt-4 flex flex-row md:flex-col">
          {["Home", "Menu", "Contact Us"].map((page, index) => (
              <li key={index}>
                <NavLink
                  to={page.toLowerCase().replace(" ", "_")}
                  className={({ isActive }) =>
                    `text-white hover:text-gray-300 transition duration-300 ${isActive ? "text-white font-semibold underline" : ""}`
                  }
                >
                  {page}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Section */}
        <div className="content">
          <h2 className="text-white font-bold text-lg mb-4">Download Our App</h2>
          <div className="space-y-3">
            <Link className="flex items-center border border-white rounded-lg px-4 py-2 space-x-4 hover:bg-white hover:text-mainColor transition duration-300">
              <FaApple className="text-2xl" />
              <span className="text-sm">App Store</span>
            </Link>
            <Link className="flex items-center border border-white rounded-lg px-4 py-2 space-x-4 hover:bg-white hover:text-mainColor transition duration-300">
              <FaGooglePlay className="text-2xl" />
              <span className="text-sm">Google Play</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <Link to="https://food2go.online/" target="_blank" className="flex items-center justify-center gap-2 text-sm mt-2 border-t border-white pt-4">
        <p>©2025 . All rights reserved</p>
        <h1 className="text-white font-semibold text-lg">Lamada</h1>
        </Link>
    </div>
  </div>
  );
};

export default Footer;

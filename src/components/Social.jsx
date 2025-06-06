import Link from 'next/link';
import {FaGithub, FaLinkedin,FaTwitter,FaFacebook } from "react-icons/fa"
const social = [
  {icon:<FaGithub/>,path:""},
  {icon:<FaLinkedin/>,path:""},
  {icon:<FaTwitter/>,path:""},
  {icon:<FaFacebook/>,path:""},
]
const Social = ({containerStyle, iconStyles}) => {
  return (
    
    <div className={containerStyle}>
      
      {social.map((item, index) => {
        return (
          <Link key={index} href={item.path} className={iconStyles}>{ item.icon}</Link>
        )
      })}
      </div>
   
  );
};

export default Social;
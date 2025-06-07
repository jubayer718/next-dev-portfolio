import Link from 'next/link';
import {FaGithub, FaLinkedin,FaTwitter,FaFacebook } from "react-icons/fa"
const social = [
  {icon:<FaGithub/>,path:"https://github.com/jubayer718"},
  {icon:<FaLinkedin/>,path:"https://www.linkedin.com/in/jubayer-ahmed-86224521a/"},
  {icon:<FaTwitter/>,path:"https://x.com/JubayerAhm73103"},
  {icon:<FaFacebook/>,path:"https://www.facebook.com/jubayer.ahmed.303336"},
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
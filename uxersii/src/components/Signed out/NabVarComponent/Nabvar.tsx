
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import Logo from '../../../assets/logoLightTheme.svg'

function Nabvar() {


  return (
  <>
  <div className="flex bg-[#F63E4F] h-24 flex-col pb-48 ">
    <div className="py-1 flex justify-between px-28"> 
      <div className="text-white font-bold">  Devsolutions</div>
    <div className="text-white font-bold "><EmailIcon/>devsolutionsco@gmail.com</div>
    <div className='text-white cursor-pointer '><FacebookIcon/><InstagramIcon/><XIcon/></div>
    
    </div>
    <div className="bg-white flex justify-between px-24 "> 
    
    <div><img src={Logo} className='w-32 h-32' /></div>
    <div className='border-2 border-black  my-12 w-3/5 rounded-2xl'>
     
    </div>
    <div>login</div>
    <div>mexico</div>
    
    </div>
  </div>
  </>
  )
}

export default Nabvar;

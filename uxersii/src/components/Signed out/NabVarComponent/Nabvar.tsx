
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import Logo from '../../../assets/LogoUxersii.png'
import SearchAppBar from './SearchBar';
import BotonLogin from '../login/BotonLogin';
import BotonIndex from './Boton';
import { Link } from 'react-router-dom';

function Nabvar() {


  return (
  <>
  <div className="flex bg-[#F63E4F] h-24 flex-col pb-40 ">
    <div className="py-1 flex justify-between px-28"> 
      <div className="text-white font-bold">  Devsolutions</div>
    <div className="text-white font-bold "><EmailIcon/>devsolutionsco@gmail.com</div>
    <div className='text-white cursor-pointer '><FacebookIcon/><InstagramIcon/><XIcon/></div>
    
    </div>
    <div className="bg-white flex justify-between px-24 items-center"> 
    
    <div ><img src={Logo} className='w-fit h-20 my-3' /></div>
    <div className='border-2 border-black bg-slate-50  my-5 w-3/5 rounded-2xl'>
     <SearchAppBar/>
    </div>
    <div>
    <Link to="/login">
              <BotonIndex
                className="border-[#F03849] text-[#F03849] bg-white hover:bg-[#F03849] hover:text-white z-10

          "
              >
                Log in
              </BotonIndex>
            </Link>

            <Link to="/signup">
              <BotonIndex
                className="border-[#F03849] bg-[#F03849] text-white hover:bg-white hover:text-[#F03849] -ml-5
          
          "
              >
                Register
              </BotonIndex>
            </Link>
    </div>
    <div>mexico</div>
    
    </div>
  </div>
  </>
  )
}

export default Nabvar;

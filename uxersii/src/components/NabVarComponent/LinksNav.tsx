import { ReactNode } from 'react';


interface props{
    children : ReactNode;
    href?:string
}

function LinksNav(props : props) {
  return (
    <li className='cursor-pointer hover:text-zinc-400'><a href={props.href}>{props.children}</a></li>
  )
}

export default LinksNav
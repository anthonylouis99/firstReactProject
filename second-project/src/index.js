import  ReactDOM  from 'react-dom/client';
import Description from './Description';
import React from "react";
import Link from './Link';
import Info from './Info';
import SecLink from './SecLink';
let root=ReactDOM.createRoot(document.querySelector("#root"))

function Render() {
    
    return(
        <>
        <div className='container'>
        <div className=''>
        <Description />
        <Link>
        </Link>
        <Info/>
        </div>


         <div className=''>
        <Description />
        <SecLink/>
        <Info/>
        </div>
        </div>
          
        </>
    
    )
}

root.render(<Render/>)
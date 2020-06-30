import React, { useRef } from 'react';
import { scroll } from '../components/tools/scroll';
import {Navbar} from '../components/navigation/navbar';
import {Link} from '../components/navigation/link';


const Main = () => {
    const refHero= useRef(null);

    let testLinks:Link[] = [
        new Link('Home', 'homeBoy', useRef(null)),
        new Link('Garage', 'wheremycarIs', useRef(null))
    ]

    function handleNavigation(target:string){
        scroll(testLinks[0].ref.current.offsetTop);
    }

    return (
        <div>
            <Navbar
                onNavigation={()=>handleNavigation(testLinks[0].anchor)}
            />

            <div style={{ height: '120vh' }} ></div>
            <div style={{ height: '120vh' }}>
             <div style={{ height: '120vh' }} ref={testLinks[0].ref}></div>
            </div>
        </div>
    )
}

export default Main;
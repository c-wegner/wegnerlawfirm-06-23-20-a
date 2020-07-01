import React, { useState, useRef } from 'react';
import { scroll } from '../components/tools/scroll';
import { Navbar } from '../components/navigation/navbar';
import { Link } from '../components/navigation/link';


const Main = () => {
    const [currentId, setCurrentId] = useState('hero');
    const refHero = useRef(null);

    let testLinks: Link[] = [
        new Link('Home', 'home', useRef(null)),
        new Link('Garage', 'about', useRef(null))
    ]

    function handleNavigation(id: string) {

        scroll(getLinkRef(testLinks, id).current.offsetTop);
        setCurrentId(id);
    }

    return (
        <div>

            <Navbar
                onNavigation={handleNavigation}
                currentId={currentId}
            />
            <div style={{ height: '120vh' }} >{currentId}</div>
            <div ref={getLinkRef(testLinks, 'home')}></div>

            <div style={{ height: '120vh' }} >{currentId}</div>            <div style={{ height: '120vh' }} >{currentId}</div>
            <div style={{ height: '120vh' }} >{currentId}</div>
            <div style={{ height: '120vh' }}>
                <div style={{ height: '120vh', backgroundColor: '#222' }} ref={getLinkRef(testLinks, 'about')}></div>

            </div>
        </div>
    )
}

function getLinkRef(links: Link[], id: string): any {
    console.table(links)
    let l = links.length;
    for (let i = 0; i < l; i++) {
        if (links[i].anchor === id) {
            return links[i].ref;
            console.log(links[i].anchor+ ' lnononh')
        }
    }
    return links[0].ref;
}

export default Main;
import React, { useState, useRef } from 'react';
import { scroll } from '../components/tools/scroll';
import { Navbar } from '../components/navigation/navbar';
import { Link } from '../components/navigation/link';


const Main = () => {
    const [currentId, setCurrentId] = useState('hero');

    let testLinks: Link[] = [
        new Link('Home', 'home', useRef(null), false),
        new Link('About', 'about', useRef(null)),
        new Link('Practices', 'practices', useRef(null)),
        new Link('Industries', 'industries', useRef(null)),
        new Link('Contact Us', 'contactUs', useRef(null)),
    ]

    function handleNavigation(id: string) {

        scroll(getLinkRef(testLinks, id).current.offsetTop);
        setCurrentId(id);
    }

    return (
        <div>
            <div ref={getLinkRef(testLinks, 'home')}></div>
            <Navbar
                onNavigation={handleNavigation}
                currentId={currentId}
                options={testLinks}
            />
            <div style={{ height: '120vh' }} >home</div>

            <div ref={getLinkRef(testLinks, 'about')}></div>
            <div style={{ height: '120vh' }} >about</div>

            <div ref={getLinkRef(testLinks, 'practices')}></div>
            <div style={{ height: '120vh' }} >Practies</div>

            <div ref={getLinkRef(testLinks, 'industries')}></div>
            <div style={{ height: '120vh' }} >Industry</div>

            <div ref={getLinkRef(testLinks, 'contactUs')}></div>
            <div style={{ height: '120vh' }} >contact</div>
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
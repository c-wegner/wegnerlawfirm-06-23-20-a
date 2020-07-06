import React, { useState, useRef } from 'react';
import { scroll } from '../components/tools/scroll';
import { Navbar } from '../components/navigation/navbar';
import { Link } from '../components/navigation/link';
import {navigate} from 'gatsby';
import {Background} from '../components/hero/background';
import {Profile} from '../components/profile/_profile';


const Main = () => {
    const [currentId, setCurrentId] = useState('hero');

    let menuLinks: Link[] = [
        new Link('Home', 'home', useRef(null), false),
        new Link('About', 'about', useRef(null)),
        new Link('Practices', 'practices', useRef(null)),
        new Link('Industries', 'industries', useRef(null)),
        new Link('Insight', 'insight', useRef(null), true, 'privacy'),
        new Link('Contact Us', 'contactUs', useRef(null)),
    ]

    function handleNavigation(id: string) {
        setCurrentId(id);
        let temp = getLinkByAnchor(menuLinks, id);
        if(temp.page===''){
            scroll(getLinkRef(menuLinks, id).current.offsetTop);
        }else{
            navigate(
                '/' + temp.page
            )
        }
    }

    return (
        <div>
            <div ref={getLinkRef(menuLinks, 'home')}></div>
            <Navbar
                onNavigation={handleNavigation}
                currentId={currentId}
                options={menuLinks}
            />

            <Background />
            <div style={{ height: '120vh' }} >home</div>

            <div ref={getLinkRef(menuLinks, 'about')}>
                <Profile />
            </div>


            <div ref={getLinkRef(menuLinks, 'practices')}></div>
            <div style={{ height: '120vh' }} >Practies</div>

            <div ref={getLinkRef(menuLinks, 'industries')}></div>
            <div style={{ height: '120vh' }} >Industry</div>

            <div ref={getLinkRef(menuLinks, 'contactUs')}></div>
            <div style={{ height: '120vh' }} >contact</div>
        </div>
    )
}

function getLinkByAnchor(links: Link[], id: string): Link {
    let l = links.length;
    for (let i = 0; i < l; i++) {
        if (links[i].anchor === id) {
            return links[i];
        }
    }
    return links[0];
}

function getLinkRef(links: Link[], id: string): any {
    let l = links.length;
    for (let i = 0; i < l; i++) {
        if (links[i].anchor === id) {
            return links[i].ref;
        }
    }
    return links[0].ref;
}

export default Main;
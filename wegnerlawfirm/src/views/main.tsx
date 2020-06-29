import React, { useRef } from 'react';
import { scroll } from '../components/tools/scroll';


const Main = () => {
    const refHero= useRef(null);

    function handleNavigation(){
        scroll(refHero.current.offsetTop);
    }

    return (
        <div>
            Place stuff here src/views/main.tsx
            <div style={{ height: '120vh' }} ref={refHero}></div>
            <div style={{ height: '120vh' }} ></div>
            <div style={{ height: '120vh' }}>
                <button onClick={handleNavigation}>ddd</button>
            </div>
        </div>
    )
}

export default Main;
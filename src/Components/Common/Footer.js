import { useState } from 'react';
import VideoComponent from '../App/SubComponents/VideoComponent';

export default function Footer() {
    let [toggleVideo, setToggleVideo] = useState(false)

    const fnToggle = ()=>setToggleVideo((prev)=> !prev)
    return (
        <footer className="footer text-center w-100 mt-4">
            <div className="cursor-pointer">
            <img src={require('../../assets/play_icon.svg').default} alt=""/>
            <h5 className="d-inline" onClick={fnToggle}>Take A Tour</h5>
            </div>
            <VideoComponent isOpen={toggleVideo}  toggle={fnToggle} />
        </footer>
    )
}

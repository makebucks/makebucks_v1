import { useEffect } from 'react';
import './preloader.css' 
import { preLoaderAnim } from '../animations';
const PreLoader = ()=>{
    useEffect(()=>{
       preLoaderAnim() 
    },[])
    return (
        <>
        
        <div className="preloader">
        {/* <div className='logo-container'>
            <img src={logo}></img>
        </div> */}
            <div className="preloader-container">
                <span>Time</span>
                <span>Patience</span>
                <span>Emotions</span>
            </div>
        </div>
        </>
    )
}
export default PreLoader;
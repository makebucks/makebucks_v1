import ContactUs from '../components/ContactUs';
import FAQ from '../components/FAQ';
import HowWeWork from '../components/HowWeWork';
import LandingSection from '../components/LandingSection'
import MentorShipProgram from '../components/MentorShipProgram';
import NavBar from '../components/NavBar';
import OurPerformance from '../components/OurPerformance';
import WcuSection from '../components/WcuSection';


const LandingPage = ()=>{
    return(
        <> 
        
            <NavBar/>
            <LandingSection/>
            <WcuSection/>
            <OurPerformance/>
            <HowWeWork/>
            <MentorShipProgram/>
            <FAQ/>
            <ContactUs/>
        </>
        
    )
}
export default LandingPage;
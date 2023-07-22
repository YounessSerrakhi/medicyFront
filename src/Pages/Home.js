import HeaderSection from '../component/HeaderSection';
import Promotion from '../component/Promotion';
import Demand from '../component/Demand';
import Contact from '../component/Contact';
import Medicine from '../component/Medicine';

function Home(){
    return(<body data-spy="scroll" data-target=".navbar" data-offset="40" id="home">
    <HeaderSection />
    <Promotion />
    <Medicine />
    <Demand />
    <Contact />
    </body>)
}
export default Home;
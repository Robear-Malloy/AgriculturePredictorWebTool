import './MainPage.css';
import { Tableau } from '../../components/Tableau/Tableau.js';
import { Header } from '../../components/Header/Header.js';
import { Testimonials } from '../../components/Testimonials/Testimonials.js';
import { PredictionTool } from '../../components/PredictionTool/PredictionTool.js';
import { Services } from '../../components/Services/Services.js';
import { Mission } from '../../components/Mission/Mission.js';
import { Contact } from '../../components/Contact/Contact.js';
import { Footer } from '../../components/Footer/Footer.js';

const MainPage = () => {
  return (
    <div className="main-container">
      <Header />
      <Mission />
      <PredictionTool />
      <Tableau />
      <Services />
      <Testimonials />
      <Contact />
      <Footer />      
    </div>
  );
};

export default MainPage;

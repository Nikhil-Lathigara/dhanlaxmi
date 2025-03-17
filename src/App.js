import Faq from "./components/Faq";
import Footer from "./components/Footer";
import GameRates from "./components/GameRates";
import Games from "./components/Games";
import InfoBox from "./components/InfoBox";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <Navbar />

    <div className="w-full max-w-xl
     mx-auto">
      <img
        src="/images/main.png"
        alt="Full Width"
        className="img-fluid w-full"
      />
    </div>

    <div className="w-100 text-center mt-3 mx-3">
      <button className="btn btn-warning w-100">Download</button>
    </div>

    {/* Contact Section */}
      <div className="contact-section text-center py-5">
        <h2 className="mb-3">+9999999999</h2>
        <div className="d-flex justify-content-center">
          <button className="btn btn-danger mx-2">
            <i className="fas fa-phone-alt"></i> Call Now
          </button>
          <button className="btn btn-success mx-2">
            <i className="fab fa-whatsapp"></i> WhatsApp
          </button>
        </div>
      </div>

      {/* Info Box Section */}
      <InfoBox />
      {/* Game Rates Section */}
      <GameRates />

      {/* Game  Section */}
      <Games />

      {/* Faq  Section */}
      <Faq />
            {/* Faq  Section */}
<Footer/>
    </div>
  );
}

export default App;

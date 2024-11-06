import "./App.css";
import HeroSection from "./Componants/HeroSection/HeroSection";
import Navbar from "./Componants/Navigation/NavigationBar";
import PostSection from "./Componants/PostSection/PostSection";
import WorkSection from "./Componants/WorkSection/WorkSection";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <HeroSection />
        <PostSection />
        <WorkSection />
      </div>
    </>
  );
}

export default App;

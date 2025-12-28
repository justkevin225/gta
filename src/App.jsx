import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

// To use the ScrollTrigger plugin, we need to register thanks to gsap
gsap.registerPlugin(ScrollTrigger);

const App = () => {
  return (
    <main className="flex items-center justify-center h-screen">
      Hello World !
    </main>
  );
};

export default App;

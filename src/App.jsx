import { Navbar } from "./Components/navbar";
import { Home } from "./Components/home";
import { Footer } from "./Components/footer";

function App() {
  return (
    <div className="h-max-screen w-screen text-white ">
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;

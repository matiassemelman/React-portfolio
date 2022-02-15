import { Home } from "./Components/home";
import { Footer } from "./Components/footer";
import { Navbar } from "./Components/Navbar";

function App() {
  return (
    <div className="h-max-screen w-screen text-white ">
      {/* <Navbar /> */}
      <Home />
      <Footer />
    </div>
  );
}

export default App;

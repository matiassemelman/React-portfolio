import { Navbar } from "./Components/navbar";
import { Main } from "./Components/main";
import { Footer } from "./Components/footer";

function App() {
  return (
    <div className="bg-zinc-900 h-max-screen w-screen text-white ">
      <Navbar />
      <Main />
      <Footer />
    </div>
  );
}

export default App;

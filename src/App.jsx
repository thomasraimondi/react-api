import Header from "./components/layout/Header";
import Main from "./components/layout/Main";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <>
      <Header />
      <div className="container mx-auto flex flex-col min-h-screen">
        <Main />
      </div>
    </>
  );
}

export default App;

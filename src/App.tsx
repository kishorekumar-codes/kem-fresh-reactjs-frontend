import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import HomePage from "./pages/HomePage";

export default function App() {
  return (
    <div id="top" className="app">
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <Header />
      <main id="main">
        <HomePage />
      </main>
      <Footer />
    </div>
  );
}

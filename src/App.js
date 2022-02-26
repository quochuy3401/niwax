import logo from "./logo.svg";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Header } from "./components/header/Header";
import { Footer } from "./components/footer/Footer";
import { Main } from "./components/main/Main";
import { ScrollButton } from "./components/scrollButton/ScrollButton";

export const App = () => {
  return (
    <div>
      <Header />
      <Main />
      <Footer />
      <ScrollButton />
    </div>
  );
};

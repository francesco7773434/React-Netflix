import "./App.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import GalleryFilms from "./components/GalleryFilms";

import GenresBar from "./components/GenresBar";
import MyFooter from "./components/MyFooter";
import TopBar from "./components/TopBar";

function App() {
  return (
    <>
      <TopBar />
      <GenresBar />
      <GalleryFilms titles="harry potter" genre="Harry Potter" />
      <GalleryFilms titles="batman" genre="Batman" />
      <GalleryFilms titles="superman" genre="Superman" />
      <MyFooter />
    </>
  );
}

export default App;

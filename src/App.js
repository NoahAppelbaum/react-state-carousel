import "./App.css";
import Carousel from "./Carousel";
import photos from "./photos.js";
import Flipper from "./Flipper";

/** App component, renders Carousel
 *
 * Props: none
 * State: none
 *
 * App --> Carousel
 */

function App() {

  // In real life, this data would probably come from an AJAX call.
  // For our purposes, we're just importing from another file.
  const carouselPhotos = photos;
  const carouselTitle = "Shells from far-away beaches";

  return (
    <div className="App">
      <Flipper />

      {/* <Carousel photos={carouselPhotos} title={carouselTitle} /> */}
    </div>
  );
}

export default App;
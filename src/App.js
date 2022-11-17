import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar/NavBar";
import ViewPost from "./components/ViewPost/ViewPost";
import Footer from "./components/Footer/Footer";
import CardDetail from "./components/CardDetail/CardDetail";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            exact
            path="detail"
            element={
              <>
                <NavBar />
                <CardDetail />
                <Footer />
              </>
            }
          />
          <Route
            path="/"
            element={
              <>
                <NavBar />
                <ViewPost />
                <Footer />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

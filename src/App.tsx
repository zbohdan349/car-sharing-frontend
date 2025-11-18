import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";

import { Header } from "./layouts/Header";
import { Footer } from "./layouts/Footer";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div>
      <Header />
      <div className="bg-background">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default App;

import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";

import { Header } from "./layouts/Header";
import { Footer } from "./layouts/Footer";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;

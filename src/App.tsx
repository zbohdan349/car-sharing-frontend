import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";

import { Header } from "./layouts/Header";
import { HomePage } from "./pages/HomePage";
import { Footer } from "./layouts/Footer";

function App() {
  return (
    <div>
      <Header />
      <HomePage />
      <Footer />
    </div>
  );
}

export default App;

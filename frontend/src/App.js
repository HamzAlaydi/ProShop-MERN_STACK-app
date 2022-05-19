import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { Container } from "react-bootstrap";
import Home from "./Pages/Home";
import Products from "./Pages/Products";
import { BrowserRouter, Route, Routes } from "react-router-dom";

//styles
import "./App.css";

function App() {
  const routes = [
    { path: "/", component: Home, exact: true },
    { path: "/product/:id", component: Products },
  ];

  return (
    <>
      <Header />
      <Container>
        <BrowserRouter>
          <main>
            <Routes>
              {routes.map(({ path, component: Component }) => (
                <Route path={path} element={<Component />} key={path} />
              ))}
            </Routes>
          </main>
        </BrowserRouter>
      </Container>
      <Footer />
    </>
  );
}

export default App;

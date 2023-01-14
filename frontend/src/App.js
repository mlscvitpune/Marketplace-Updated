import "./App.css";

import Layout from "./components/Layout/Layout";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Layout />;
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;

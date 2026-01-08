import { BrowserRouter } from "react-router";
import Router from "./router/routes";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </>
  );
};

export default App;

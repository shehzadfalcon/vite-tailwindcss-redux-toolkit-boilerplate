import { Routes, Route } from "react-router-dom";
import { AllRoutes } from "./routes";
import Header from "components/Header";
import Footer from "components/Footer";

const Router = () => {
  return (
    <Routes>
      {AllRoutes?.map((item, index) => (
        <Route
          key={index}
          path={item.path}
          element={
            <>
              <Header />
              {item.page}
              <Footer />
            </>
          }></Route>
      ))}
    </Routes>
  );
};

export default Router;

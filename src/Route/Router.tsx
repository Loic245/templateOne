import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import Spinner from "../spinner";

const Main = lazy(() => import("../components/main"));

const Routers = () => {
  return (
      <Routes>
        <Route
          path="/"
          element={ 
            <Suspense fallback={<Spinner />}>
                <Main />
            </Suspense>
          }
        /> 
      </Routes>
  );
};

export default Routers;
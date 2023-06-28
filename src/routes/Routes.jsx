import { Routes as RoutesWrapper, Route } from "react-router-dom";
import { unauthenticatedRoutes } from "./const";

const Routes = () => {
  return (
    <RoutesWrapper>
      {unauthenticatedRoutes.map(({ path, Component, Layout }) => (
        <Route
          key={path}
          path={path}
          element={
            <Layout>
              <Component />
            </Layout>
          }
        />
      ))}
    </RoutesWrapper>
  );
};

export default Routes;

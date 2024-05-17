import { useRoutes } from "react-router-dom";

function Router({ allRoutes }) {
  const routes = useRoutes([...allRoutes]);
  return;
}

export default Router;

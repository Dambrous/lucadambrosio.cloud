import { Router, Route, RootRoute } from "@tanstack/react-router";
import { ContainerCustom } from "./components/Container";
import { Home } from "./components/Home";
import { Works } from "./components/Works";
import { Education } from "./components/Education";
import { About } from "./components/About";

const rootRoute = new RootRoute({
  component: () => <ContainerCustom />,
});

const indexRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/",
  component: () => <Home />,
});

const WorksRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/works",
  component: () => <Works />,
});

const AboutRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/About",
  component: () => <About />,
});

const EducationRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/education",
  component: () => <Education />,
});

const routeTree = rootRoute.addChildren([
  indexRoute,
  WorksRoute,
  EducationRoute,
  AboutRoute,
]);

export const router = new Router({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

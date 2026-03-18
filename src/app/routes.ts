import { createBrowserRouter } from "react-router";
import { Root } from "./pages/Root";
import { Home } from "./pages/Home";
import { Services } from "./pages/Services";
import { Technology } from "./pages/Technology";
import { ClassicStatus } from "./pages/ClassicStatus";
import { Education } from "./pages/Education";
import { Network } from "./pages/Network";
import { Business } from "./pages/Business";
import { Support } from "./pages/Support";
import { About } from "./pages/About";

import { Community } from "./pages/Community";
import { SpecialistApply } from "./pages/SpecialistApply";
import { Pricing } from "./pages/Pricing";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
      { path: "services", Component: Services },
      { path: "technology", Component: Technology },
      { path: "status", Component: ClassicStatus },
      { path: "education", Component: Education },
      { path: "network", Component: Network },
      { path: "business", Component: Business },
      { path: "support", Component: Community },
      { path: "specialist-apply", Component: SpecialistApply },
      { path: "pricing", Component: Pricing },
    ],
  },
], { basename: '/classic-translation/' });

//  pages start
import HomePage from "pages/HomePage";
import FAQsPage from "src/pages/FAQsPage";
import TeamPage from "src/pages/TeamPage";

export const AllRoutes = [
  // hom page route
  {
    path: "/",
    page: <HomePage />,
    isPrivate: false,
  },
  // faqs page route
  {
    path: "/faqs",
    page: <FAQsPage />,
    isPrivate: false,
  },
  // team page route
  {
    path: "/team",
    page: <TeamPage />,
    isPrivate: false,
  },
];

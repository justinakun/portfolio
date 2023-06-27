import UnauthenticatedLayout from "../layouts/UnauthenticatedLayout";
import Main from "../pages/Main/Main";
import Work from "../pages/Work/Work";
import Contacts from "../pages/Contacts/Contacts";
import SingleWork from "../pages/SingleWork/SingleWork";
export const MAIN_ROUTE = "/";
export const WORK_ROUTE = "/work";
export const CONTACTS_ROUTE = "/contacts";
export const SINGLE_WORK_ROUTE = `${WORK_ROUTE}/:id`;

export const unauthenticatedRoutes = [
  {
    path: MAIN_ROUTE,
    Component: Main,
    Layout: UnauthenticatedLayout,
  },
  {
    path: WORK_ROUTE,
    Component: Work,
    Layout: UnauthenticatedLayout,
  },
  {
    path: CONTACTS_ROUTE,
    Component: Contacts,
    Layout: UnauthenticatedLayout,
  },
  {
    path: SINGLE_WORK_ROUTE,
    Component: SingleWork,
    Layout: UnauthenticatedLayout,
  },
];

export const navbarNavigationItems = [
  { route: MAIN_ROUTE, title: "Home" },
  { route: WORK_ROUTE, title: "Work" },
  { route: CONTACTS_ROUTE, title: "Contacts" },
];

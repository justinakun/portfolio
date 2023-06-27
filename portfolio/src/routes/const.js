import UnauthenticatedLayout from "../layouts/UnauthenticatedLayout";
import Main from "../pages/Main/Main";
import Work from "../pages/Work/Work";
import Contacts from "../pages/Contacts/Contacts";

export const MAIN_ROUTE = "/";
export const WORK_ROUTE = "/work";
export const CONTACTS_ROUTE = "/contacts";

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
];

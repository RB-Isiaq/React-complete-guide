import { Outlet } from "react-router-dom";

import MainNavigstion from "../components/MainNavigation";

function RootLayout() {
  return (
    <>
      <MainNavigstion />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;

import { Outlet } from "react-router-dom";
import NavBar from "../components/nav/NavBar";
import Footer from "./Footer";
import LoadingPage from "./LoadingPage";
import { Suspense, lazy } from "react";

const LogInUp = lazy(() => import('./LogInUp'))

function AppLayout() {
  return (
    <div className="relative">
      <Suspense fallback={<LoadingPage />}>
        <LogInUp />
      </Suspense>
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default AppLayout;

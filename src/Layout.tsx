import { Outlet } from "react-router";
import Header from "./components/Header";
import Footer from "./components/Footer";

function Layout() {
  return (
    <section className="container mx-auto px-5 md:px-10 lg:px-20 flex flex-col h-screen">
      <Header />
      <Outlet />
      <Footer />
    </section>
  );
}

export default Layout;

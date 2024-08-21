import Navbar from "./Navbar";
import SideBar from "./SideBar";
import Footer from "./Footer";
import PageComponent from "./PageComponent";

const Component = () => {
  return (
    <main className="font-sans bg-white">
      <Navbar />

      <SideBar />
      <PageComponent />

      <Footer />
    </main>
  );
};

export default Component;

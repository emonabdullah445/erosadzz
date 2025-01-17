import Footer from "@/components/Footer/Footer";
import LeftText from "@/components/LeftText/LeftText";
import Login from "@/components/Login/Login";
import Navbar from "@/components/Navbar/Navbar";

export default function Home() {
  return (
    <div className="flex min-h-screen w-full flex-col-reverse gap-10  md:flex-row md:items-center md:justify-center">
      <Navbar />
      <LeftText />
      <Login />
      <Footer />
    </div>
    // <div className="">Eros</div>
  );
}

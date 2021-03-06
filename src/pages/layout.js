import Navbar from "../components/navbar";
import Footer from "../components/footer";

export default function layout({ children }) {
  return (
    <>
      <Navbar />
      <div className="container">{children}</div>
      <Footer />
    </>
  );
}

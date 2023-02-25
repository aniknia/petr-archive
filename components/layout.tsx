import Meta from "./general/meta";
import Navbar from "./general/navbar";
import Footer from "./general/footer";

export default function Layout({ children }) {
  return (
    <>
      <Meta />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}

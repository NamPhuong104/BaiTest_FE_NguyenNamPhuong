import Footer from "./footer";
import Header from "./header";
import Session1 from "./sessions/session1";
import Session2 from "./sessions/session2";
import Session3 from "./sessions/session3";
import Session4 from "./sessions/session4";
import Session5 from "./sessions/session5";

const Layout = () => {
  return (
    <div style={{ width: "100%" }}>
      <Header />
      <Session1 />
      <Session2 />
      <Session3 />
      <Session4 />
      <Session5 />
      <Footer />
    </div>
  );
};

export default Layout;

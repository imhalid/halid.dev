import Nav from "./header";
import Footer from "./footer";
import classNames from "../util/classNames";

const Layouts = ({ children }) => {
  return (
    <div className="main">
      <div className="container">
        <div className="nav">
          <Nav />
        </div>
        <div className="children">{children}</div>
        <Footer />
      </div>

      <style jsx>{`
        .main {
          padding: 70px 20% 0 20%;
          background-color: #e7e7e7;
          height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        .container {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          background-color: #fff;
          height: 100%;
          max-width: 750px;
          border-top-left-radius: 30px;
          border-top-right-radius: 30px;
        }

        .nav {
          padding: 30px 30px 0 30px;
        }

        .children {
          padding: 30px;
          flex: 1;
        }
      `}</style>
    </div>
  );
};

export default Layouts;

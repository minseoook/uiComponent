import { Link, Outlet, useNavigate } from "react-router-dom";
import styled from "./index.module.css";
import ScrollToTop from "../components/ScrollTop";
const Layout = () => {
  const navigate = useNavigate();
  return (
    <div className={styled.container}>
      <header className={styled.header}>
        <h1 onClick={() => navigate("/")}>라이브러리 없이 만드는 ui</h1>
        <Link
          to="https://github.com/minseoook/uiComponent"
          className={styled.button}
        >
          깃허브
        </Link>
      </header>
      <main className={styled.main}>
        <Outlet />
      </main>
      <ScrollToTop />
    </div>
  );
};

export default Layout;

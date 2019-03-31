import Header from "./Header";
import Head from "./Head";

const Layout = props => (
  <div>
    <Head />
    <Header />
    {props.children}
  </div>
);

export default Layout;

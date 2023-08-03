import Header from "components/header";
import Footer from "components/footer";

const layout = ({ Children }) => (
  <>
    <Header />
    <main>{Children}</main>
    <footer />
  </>
);
export default layout;

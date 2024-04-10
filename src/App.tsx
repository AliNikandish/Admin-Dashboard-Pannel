import { useRoutes } from "react-router-dom";
import "./App.css";
import routes from "./Routes";
import Layout from "./Layout/Layout";

function App() {
  const router = useRoutes(routes);

  return (
    <>
      <div className="">
        <Layout>
        {router}
        </Layout>
      </div>
    </>
  );
}

export default App;
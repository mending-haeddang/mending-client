import { BrowserRouter, Route, Routes } from "react-router-dom";
import Create from "./pages/Create";
import Ending from "./pages/Ending";
import Intro from "./pages/Intro";
import Join from "./pages/Join";
import Main from "./pages/Main";
import Result from "./pages/Result";
import Layout from "./components/common/Layout";
import Header from "./components/common/Header";
function App() {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Header />
          <Routes>
            <Route path="/" element={<Intro />} />
            <Route path="/create" element={<Create />} />
            <Route path="/join" element={<Join />} />
            <Route path="/main/*" element={<Main />}>
              <Route path=":id" element={<Main />} />
              <Route path=":id/result" element={<Result />} />
            </Route>
            <Route path="/ending" element={<Ending />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
}

export default App;

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Create from "./pages/Create";
import Ending from "./pages/Ending";
import Intro from "./pages/Intro";
import Join from "./pages/Join";
import Result from "./pages/Result";
import Layout from "./components/common/Layout";
import Header from "./components/common/Header";
import StartQuestions from "./components/main/StartQuestions";
import Main from "./pages/Main";
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
            <Route path="/main" element={<Main />} />
            <Route path="/main/:id" element={<StartQuestions />} />
            <Route path="/result/:id" element={<Result />} />
            <Route path="/ending" element={<Ending />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
}

export default App;

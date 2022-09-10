import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DisplayPosts from "./components/DisplayPosts";
import CreatePost from "./components/CreatePost";
import Detail from "./components/Detail";
import UpdatePost from "./components/UpdatePost";
import companyLogo from './logo/logo_interiorarchitects.png';


function App() {
  return (
    <div className="App">
      <img className="applogo" src={companyLogo} alt="Blog Logo is usually here.. we apologize for the mishap"/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DisplayPosts />} />
          <Route path="/posts/new" element={<CreatePost />} />
          <Route path="/posts/:id/edit" element={<UpdatePost />} />
          <Route path="/posts/:id" element={<Detail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
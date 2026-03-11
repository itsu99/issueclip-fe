import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import CompanyNew from "./pages/Admin/Companies/new";
import BoardList from "./pages/BoardList";
import NoteList from "./pages/NoteList";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<BoardList />} />
        {/* mock用にpath変更　本来は /NoteList/:boardId ※boardIdを使ってboardIdを持つNoteを取得=> 表示*/}
        <Route path="/noteList" element={<NoteList />} />
        <Route path="/admin/companies/new" element={<CompanyNew />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

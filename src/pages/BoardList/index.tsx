import { RiAddLine, RiDashboardLine, RiDeleteBinLine } from "react-icons/ri";
import Header from "../../components/Header";
import CreateBoardModal from "../../components/CreateBoardModal";
import { Link } from "react-router-dom";
import "./index.css";
import { useState } from "react";

export default function BoardList() {
  const boards = [
    { id: "1", name: "Design Mockup", updatedAt: new Date().toISOString() },
    { id: "2", name: "GP-Prod", updatedAt: new Date().toISOString() },
    { id: "2", name: "PB-Prod", updatedAt: new Date().toISOString() },
    { id: "2", name: "GP-staging", updatedAt: new Date().toISOString() },
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModalHandle = () => {
    setIsModalOpen(true);
  };

  return (
    <div>
      <Header title="ボード一覧" />
      <div className="bl-page">
        <main className="bl-main">
          <div className="bl-toolbar">
            <button className="bl-create-btn" onClick={openModalHandle}>
              <RiAddLine className="bl-create-btn-icon" />
              新しいボードを作成
            </button>
          </div>

          {boards.length === 0 ? (
            <div className="bl-empty">
              <RiDashboardLine size={48} className="bl-empty-icon" />
              <p className="bl-empty-title">ボードがまだありません</p>
              <p className="bl-empty-sub">
                「新しいボードを作成」ボタンから作成してください。
              </p>
            </div>
          ) : (
            <div className="bl-grid">
              {boards.map((board) => (
                <Link key={board.id} className="bl-card" to="">
                  <button className="bl-card-delete">
                    <RiDeleteBinLine />
                  </button>
                  <div className="bl-card-preview">
                    <RiDashboardLine size={48} />
                  </div>
                  <div className="bl-card-info">
                    <h3 className="bl-card-name">{board.name}</h3>
                    <p className="bl-card-date">
                      更新:
                      {new Date(board.updatedAt).toLocaleDateString()}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </main>
      </div>
      <CreateBoardModal
        isModalOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}

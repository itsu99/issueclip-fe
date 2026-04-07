import { FiPlus } from "react-icons/fi";
import Header from "../../components/Header";
import LabelSidebar from "./LabelSidebar";
import "./Board.css";
import NoteCard from "./NoteCard";
import { useState } from "react";
import NoteModal from "./NoteModal";

export default function Board() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const closeModalHandle = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="note">
      <Header title="GP-Prod" />
      <div className="board-main">
        <LabelSidebar />

        <main className="board-content">
          <div className="board-content__header">
            <h2 className="board-content__title">すべてのクリップ</h2>
            <button
              className="btn btn-primary board-content__add-btn"
              onClick={() => {
                setIsModalOpen(true);
              }}
            >
              <FiPlus />
              <span>新しいクリップ</span>
            </button>
          </div>
          <div className="board-grid">
            <NoteCard />
            <NoteCard />
            <NoteCard />
            <NoteCard />
            <NoteCard />
          </div>
          {/* <div className='loading' style={{ textAlign: 'center', padding: '20px' }}>
            読み込み中...
          </div> */}

          {/* <div className='no-more' style={{ textAlign: 'center', padding: '20px', color: '#666' }}>
            全てのメモを表示しました
          </div> */}

          {/* <div className='no-notes'>
            <p>メモがありません</p>
            <p>新しいメモを作成してみましょう</p>
          </div> */}
        </main>
      </div>
      {isModalOpen && <NoteModal onClose={closeModalHandle} />}
    </div>
  );
}

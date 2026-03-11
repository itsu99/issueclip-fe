import { FiEdit2, FiTrash2 } from "react-icons/fi";
import "./NoteList.css";

export default function NoteCard() {
  return (
    <div className="note-card">
      <h3 className="note-card__no">GP-20000</h3>
      <p className="note-card__title">
        【既存バグ】トーク画面での登録処理に失敗する
      </p>
      <div className="note-card__labels">
        <span className="note-card__label" style={{ background: "#f44336" }}>
          未対応
        </span>
      </div>
      <div className="note-card__footer">
        <span className="note-card__date">2026-03-10</span>
        <div className="note-card__actions">
          <button className="icon-btn note-card__action-btn" onClick={() => {}}>
            <FiEdit2 />
          </button>
          <button className="icon-btn note-card__action-btn" onClick={() => {}}>
            <FiTrash2 />
          </button>
        </div>
      </div>
    </div>
  );
}

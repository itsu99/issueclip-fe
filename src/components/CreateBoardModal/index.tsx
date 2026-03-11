import { RiCloseLine } from "react-icons/ri";
import "./index.css";

type CreateBoardModalProps = {
  isModalOpen: boolean;
  onClose: () => void;
};

export default function CreateBoardModal({
  isModalOpen,
  onClose,
}: CreateBoardModalProps) {
  if (!isModalOpen) return null;

  return (
    <div className="cbm-overlay" onClick={onClose}>
      <div className="cbm-modal" onClick={(e) => e.stopPropagation()}>
        <div className="cbm-header">
          <h2 className="cbm-title">新しいボードを作成</h2>
          <button className="cbm-close" onClick={onClose}>
            <RiCloseLine />
          </button>
        </div>

        <div className="cbm-body">
          <div className="cbm-field">
            <label htmlFor="board-name" className="cbm-label">
              ボード名
            </label>
            <input
              id="board-name"
              type="text"
              className="cbm-input"
              placeholder="ボード名を入力"
              autoFocus
            />
          </div>
        </div>

        <div className="cbm-footer">
          <button className="cbm-btn-cancel" onClick={onClose}>
            キャンセル
          </button>
          <button className="cbm-btn-create">作成</button>
        </div>
      </div>
    </div>
  );
}

import { FiX } from "react-icons/fi";
import "./NoteList.css";

interface NoteModalProps {
  onClose: () => void;
}

export default function NoteModal({ onClose }: NoteModalProps) {
  return (
    <div className="note-modal-overlay" onClick={onClose}>
      <div className="note-modal" onClick={(e) => e.stopPropagation()}>
        <div className="note-modal__header">
          <h2 className="note-modal__title">クリップ情報を入力</h2>
          <button className="icon-btn note-modal__close-btn" onClick={onClose}>
            <FiX />
          </button>
        </div>

        <div className="note-modal__body">
          <div className="form-group">
            <input
              type="text"
              className="form-input note-modal__no-input"
              placeholder="チケット番号を入力"
              value=""
              onChange={() => {}}
            />
          </div>

          <div className="form-group">
            <textarea
              className="form-textarea note-modal__content-textarea"
              placeholder="チケットのタイトルを入力..."
              rows={8}
              value=""
              onChange={() => {}}
            ></textarea>
          </div>

          <div className="note-modal__labels">
            {/* ここはラベル選択UIのエリア
             - クリックで選択/解除
             - 選択されたラベルは背景色がつく 
             本来は登録時はlabelsの配列をmapしてボタンを生成　編集時は選択状態を管理して背景色を切り替える
             */}
            <button
              className="note-modal__label-tag"
              style={{
                backgroundColor: "transparent",
                color: "#f44336",
                border: "2px solid #f44336",
              }}
              onClick={() => {}}
            >
              未対応
            </button>
            <button
              className="note-modal__label-tag"
              style={{
                backgroundColor: "transparent",
                color: "#2196f3",
                border: "2px solid #2196f3",
              }}
              onClick={() => {}}
            >
              処理中
            </button>
            <button
              className="note-modal__label-tag"
              style={{
                backgroundColor: "transparent",
                color: "#4caf50",
                border: "2px solid #4caf50",
              }}
              onClick={() => {}}
            >
              処理済み
            </button>
            <button
              className="note-modal__label-tag"
              style={{
                backgroundColor: "transparent",
                color: "#ffc107",
                border: "2px solid #ffc107",
              }}
              onClick={() => {}}
            >
              完了
            </button>
          </div>
        </div>

        <div className="note-modal__footer">
          <button className="btn btn-secondary" onClick={onClose}>
            キャンセル
          </button>
          <button className="btn btn-primary" onClick={() => {}}>
            保存
          </button>
        </div>
      </div>
    </div>
  );
}

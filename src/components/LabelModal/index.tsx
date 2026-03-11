import { FiX } from "react-icons/fi";
import "./index.css";

const LABEL_COLORS = [
  { name: "赤", value: "#f44336" },
  { name: "青", value: "#2196f3" },
  { name: "緑", value: "#4caf50" },
  { name: "黄", value: "#ffc107" },
  { name: "紫", value: "#9c27b0" },
  { name: "灰", value: "#9e9e9e" },
];

interface LabelModalProps {
  onClose: () => void;
}

export default function LabelModal({ onClose }: LabelModalProps) {
  return (
    <div className="lm-overlay" onClick={onClose}>
      <div className="lm-modal" onClick={(e) => e.stopPropagation()}>
        <div className="lm-header">
          <h2 className="lm-title">新しいラベル</h2>
          <button className="lm-close" onClick={onClose}>
            <FiX />
          </button>
        </div>

        <div className="lm-body">
          <div className="lm-field">
            <label htmlFor="label-name" className="lm-label">
              ラベル名
            </label>
            <input
              id="label-name"
              type="text"
              className="lm-input"
              placeholder="ラベル名を入力(最大30文字)"
              maxLength={30}
              value=""
              onChange={() => {}}
              autoFocus
            />
          </div>

          <div className="lm-field">
            <label className="lm-label">色</label>
            <div className="lm-color-list">
              {LABEL_COLORS.map((color) => (
                <button
                  key={color.value}
                  className="lm-color-btn"
                  style={{ backgroundColor: color.value }}
                  onClick={() => {}}
                  title={color.name}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="lm-footer">
          <button className="lm-btn-cancel" onClick={onClose}>
            キャンセル
          </button>
          <button className="lm-btn-create" onClick={() => {}} disabled={true}>
            作成
          </button>
        </div>
      </div>
    </div>
  );
}

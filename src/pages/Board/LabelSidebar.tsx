import { FiPlus, FiTag, FiX } from "react-icons/fi";
import "./Board.css";
import { useState } from "react";
import LabelModal from "../../components/LabelModal";

const labels = [
  { id: 1, name: "未対応", color: "#f44336" },
  { id: 2, name: "処理中", color: "#2196f3" },
  { id: 3, name: "処理済み", color: "#4caf50" },
  { id: 4, name: "完了", color: "#ffc107" },
];

export default function LabelSidebar() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <aside className="label-sidebar">
        <div className="label-sidebar-header">
          <h3>
            <FiTag className="label-sidebar__title-icon" />
            ラベル
          </h3>
          <button
            className="label-sidebar__add-button"
            onClick={() => setIsModalOpen(true)}
          >
            <FiPlus />
          </button>
        </div>

        <ul className="label-sidebar__list">
          {labels.map((label) => (
            <li key={label.id} className="label-sidebar__item">
              <div className="label-sidebar__label-btn">
                <span
                  className="label-sidebar__label-color"
                  style={{ backgroundColor: label.color }}
                ></span>
                <span className="label-sidebar__label-name">{label.name}</span>
              </div>
              <button className="label-sidebar__delete-btn" onClick={() => {}}>
                <FiX />
              </button>
            </li>
          ))}
        </ul>
      </aside>

      {isModalOpen && <LabelModal onClose={() => setIsModalOpen(false)} />}

      {/* モーダル表示 - コメントアウトを切り替えて表示/非表示を変更 */}
      {/* <LabelModal /> */}
    </>
  );
}

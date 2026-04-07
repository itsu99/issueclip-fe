import { useState } from "react";
import { FiPlus, FiEdit2, FiTrash2 } from "react-icons/fi";
import "./index.css";
import Header from "../../../../components/Header";

export default function CompanyNew() {
  const [activeTab, setActiveTab] = useState<"company" | "user">("company");
  const [companySearch, setCompanySearch] = useState("");
  const [userSearch, setUserSearch] = useState("");

  const companies = [
    { id: "1", name: "株式会社サンプル", createdAt: "2026/3/1" },
    { id: "2", name: "テスト株式会社", createdAt: "2026/3/2" },
    { id: "3", name: "デモ合同会社", createdAt: "2026/3/3" },
    { id: "4", name: "サンプルテスト株式会社", createdAt: "2026/3/4" },
  ];

  const users = [
    {
      id: "1",
      name: "田中 太郎",
      email: "tanaka@sample.com",
      company: "株式会社サンプル",
    },
    {
      id: "2",
      name: "山田 花子",
      email: "yamada@test.com",
      company: "テスト株式会社",
    },
  ];

  const filteredCompanies = companies.filter((c) =>
    c.name.includes(companySearch),
  );
  const filteredUsers = users.filter(
    (u) => u.name.includes(userSearch) || u.email.includes(userSearch),
  );

  return (
    <div className="admin-page">
      <Header title="Admin" />
      <div className="admin-content">
        {/* Tabs */}
        <div className="admin-tabs">
          <button
            className={`admin-tab ${activeTab === "company" ? "active" : ""}`}
            onClick={() => setActiveTab("company")}
          >
            会社
          </button>
          <button
            className={`admin-tab ${activeTab === "user" ? "active" : ""}`}
            onClick={() => setActiveTab("user")}
          >
            ユーザー
          </button>
        </div>

        {/* Company Tab */}
        {activeTab === "company" && (
          <div className="admin-section">
            <div className="admin-section__header">
              <h2 className="admin-section__title">会社一覧</h2>
              <div className="admin-section__controls">
                <input
                  type="text"
                  className="admin-search"
                  placeholder="会社名で検索..."
                  value={companySearch}
                  onChange={(e) => setCompanySearch(e.target.value)}
                />
                <button className="admin-add-btn">
                  <FiPlus />
                  会社を追加
                </button>
              </div>
            </div>
            <div className="admin-company-grid">
              {filteredCompanies.map((company) => (
                <div key={company.id} className="admin-company-card">
                  <div className="admin-company-card__name">{company.name}</div>
                  <div className="admin-company-card__date">
                    作成:{company.createdAt}
                  </div>
                  <div className="admin-company-card__actions">
                    <button className="admin-icon-btn">
                      <FiEdit2 />
                    </button>
                    <button className="admin-icon-btn admin-icon-btn--danger">
                      <FiTrash2 />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* User Tab */}
        {activeTab === "user" && (
          <div className="admin-section">
            <div className="admin-section__header">
              <h2 className="admin-section__title">ユーザー一覧</h2>
              <div className="admin-section__controls">
                <input
                  type="text"
                  className="admin-search"
                  placeholder="名前・メールで検索..."
                  value={userSearch}
                  onChange={(e) => setUserSearch(e.target.value)}
                />
                <button className="admin-add-btn">
                  <FiPlus />
                  ユーザーを追加
                </button>
              </div>
            </div>
            <table className="admin-table">
              <thead>
                <tr>
                  <th>名前</th>
                  <th>メールアドレス</th>
                  <th>会社</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {filteredUsers.map((user) => (
                  <tr key={user.id}>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.company}</td>
                    <td className="admin-table__actions">
                      <button className="admin-icon-btn">
                        <FiEdit2 />
                      </button>
                      <button className="admin-icon-btn admin-icon-btn--danger">
                        <FiTrash2 />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

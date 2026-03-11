import "./index.css";

export default function Login() {
  return (
    <div className="lp-page">
      <div className="lp-card">
        <h1 className="lp-title">Team Clip</h1>

        <div className="lp-form">
          <div className="lp-field">
            <label htmlFor="email" className="lp-label">
              メールアドレス
            </label>
            <input
              id="email"
              type="email"
              className="lp-input"
              placeholder="example.com"
            />
          </div>

          <div className="lp-field">
            <label htmlFor="password" className="lp-label">
              パスワード
            </label>
            <input
              id="password"
              type="password"
              className="lp-input"
              placeholder="パスワードを入力"
            />
          </div>

          <button type="button" className="lp-btn">
            ログイン
          </button>
        </div>
      </div>
    </div>
  );
}

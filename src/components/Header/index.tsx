import { RiLogoutBoxLine, RiUser3Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import "./index.css";

interface HeaderProps {
  title: string;
}

export default function Header({ title }: HeaderProps) {
  return (
    <header className="header">
      <div className="header-left">
        <Link to="/" className="header-logo">
          Team Clip
        </Link>
        <div className="header-divider" />
        <h1 className="header-title">{title}</h1>
      </div>
      <div className="header-right">
        <span className="header-user">
          <RiUser3Line />
          User1
        </span>
        <button className="header-logout-btn" title="ログアウト">
          <RiLogoutBoxLine />
        </button>
      </div>
    </header>
  );
}

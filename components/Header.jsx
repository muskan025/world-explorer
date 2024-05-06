import { useTheme } from "../hooks/useTheme";

const Header = () => {
const [isDark, setIsDark] = useTheme();

  function handleTheme() {
    setIsDark(!isDark);
    localStorage.setItem("isDarkMode", !isDark);
  }
  return (
    <header className={`header-container ${isDark ? "dark" : ""}`}>
      <div className="header-content">
        <h2 className="title">
          <a href="/">Where in the worlds?</a>
        </h2>
        <p className="theme-changer" onClick={handleTheme}>
          <i className={`fa-regular fa-${isDark ? "sun" : "moon"} `} />
          &nbsp;&nbsp;{isDark ? "Light " : "Dark "}Mode
        </p>
      </div>
    </header>
  );
};

export default Header;

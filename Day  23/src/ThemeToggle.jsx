import { useState } from 'react';

function ThemeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // styles based on the state
  const appStyle = {
    backgroundColor: isDarkMode ? "#222" : "#fff",
    color: isDarkMode ? "#fff" : "#000",
    padding: "20px",
    borderRadius: "10px",
    textAlign: "center"
  };

  return (
    <div style={appStyle}>
      <p>The theme is {isDarkMode ? "Dark" : "Light"}</p>
      <button onClick={() => setIsDarkMode(!isDarkMode)}>
        Toggle Theme
      </button>
    </div>
  );
}

export default ThemeToggle;
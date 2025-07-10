import { useEffect, useState } from "react";
import MainSection from "./components/MainSection";
import SideBar from "./components/SideBar";
import TopBar from "./components/TopBar";
import TutorInfo from "./components/TutorInfo";
import ThemeSelector from "./themeSelector";

export default function App() {
  const [theme, setTheme] = useState(null); // null = not loaded yet
  const [isLoading, setIsLoading] = useState(true);

  // Get theme from localStorage
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") || "light";
    setTheme(storedTheme);

    // Show loader for minimum 1.2s
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  // Apply theme when ready
  useEffect(() => {
    if (theme !== null) {
      document.documentElement.setAttribute("data-theme", theme);
      localStorage.setItem("theme", theme);
    }
  }, [theme]);

  // Loading screen
  if (isLoading) {
    return (
      <div className="h-screen w-screen flex items-center justify-center bg-base-100 text-primary text-3xl">
        <i className="ri-loader-2-line animate-spin" />
      </div>
    );
  }

  // Main App
  return (
    <div className="h-screen w-screen overflow-hidden font-[Inter,sans-serif] flex flex-col bg-base-100 text-base-content transition-colors">
      {/* 🔹 Topbar */}
      <TopBar>
        <ThemeSelector theme={theme} setTheme={setTheme} />
      </TopBar>

      {/* 🔹 Layout */}
      <div className="flex flex-1 min-h-0 overflow-hidden">
        <SideBar />
        <div className="flex-1 overflow-auto">
          <MainSection />
        </div>
        <TutorInfo />
      </div>
    </div>
  );
}

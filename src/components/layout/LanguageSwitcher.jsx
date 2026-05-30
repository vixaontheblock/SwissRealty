import { useState } from "react";

function LanguageSwitcher() {
  const [language, setLanguage] = useState("EN");

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "EN" ? "ES" : "EN"));
  };

  return (
    <button
      onClick={toggleLanguage}
      className="
        text-sm uppercase tracking-[2px]
        px-4 py-2
        rounded-full
        border border-neutral-300
        bg-white
        text-neutral-800

        hover:bg-neutral-900
        hover:text-white
        hover:border-neutral-900

        transition-all duration-300
      "
    >
      {language}
    </button>
  );
}

export default LanguageSwitcher;
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";

// Redux
import { useDispatch } from "react-redux";

// Store
import { setAppLanguage } from "@store/languageSlice";

// Styled dropdown component
const Dropdown = styled.select`
  padding: 10px;
  margin: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
`;

// Main
const LanguageSwitcher = () => {
  const dispatch = useDispatch();
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState(i18n.language);

  // Safely get the available languages from i18n
  const availableLanguages = i18n.options?.resources
    ? Object.keys(i18n.options.resources)
    : [];

  useEffect(() => {
    setLanguage(i18n.language);
  }, [i18n.language]);

  // Handle language change
  const handleLanguageChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const selectedLanguage = event.target.value;
    dispatch(setAppLanguage(selectedLanguage)); // Update the Redux store
    i18n.changeLanguage(selectedLanguage); // Change the language in i18n
  };

  return (
    <div>
      <Dropdown
        id="language-switcher"
        value={language}
        onChange={handleLanguageChange}
        aria-label={i18n.t("language_selector")}
      >
        {availableLanguages.map((lang) => (
          <option key={lang} value={lang}>
            {i18n.t(`${lang}`)}{" "}
          </option>
        ))}
      </Dropdown>
    </div>
  );
};

export default LanguageSwitcher;
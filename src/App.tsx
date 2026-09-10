import "./styles/App.css";
import { LanguageProvider } from "./i18n/LanguageContext";
import Experience from "./experience/Experience";

function App() {
  return (
    <LanguageProvider>
      <Experience />
    </LanguageProvider>
  );
}

export default App;

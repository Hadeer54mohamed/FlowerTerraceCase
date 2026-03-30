import Header from "../components/Header";
import Footer from "../components/Footer";
import { useLocale } from "next-intl";

export default function HomePage() {
  const locale = useLocale();

  return (
    <div className="min-h-screen d-flex flex-column">
      <Header />
      <main className="flex-grow-1 flex items-center justify-center px-4 w-full buttons-main">
        <div className="buttons-container">
      <a
            href={`https://flowercafe.app.ensmenu.com/${locale}`}
            rel="noopener noreferrer"
            className="luxury-btn"
          >
            <span className="luxury-btn-icon">☕</span>
            <span className="luxury-btn-text">{locale === "ar" ? "منيو كافيه" : "Cafe Menu"}</span>
          </a>
          <a
            href={`https://flower-food.app.ensmenu.com/${locale}`}
            rel="noopener noreferrer"
            className="luxury-btn"
          >
            <span className="luxury-btn-icon">🍝</span>
            <span className="luxury-btn-text">{locale === "ar" ? "منيو مطعم" : "Restaurant Menu"}</span>
          </a>
        </div>
      </main>
      <Footer />
    </div>
  );
}

import Header from "../components/Header";
import Footer from "../components/Footer";
import { useLocale } from "next-intl";

export default function HomePage() {
  const locale = useLocale();

  return (
    <div className="min-h-screen d-flex flex-column">
      <Header />
      <main className="flex-grow-1 flex items-center justify-center px-3 w-full">
        <div className="flex  gap-5">
          <a
            href={`https://flowercafe.app.ensmenu.com/${locale}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flower-choice-button"
          >
            <div>
              <div>
                <div>{locale === "ar" ? "كافيه" : "Cafe"}</div>
              </div>
            </div>
          </a>
          <a
            href={`https://flower-food.app.ensmenu.com/${locale}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flower-choice-button"
          >
            <div>
              <div>
                <div>{locale === "ar" ? "مطعم" : "Restaurant"}</div>
              </div>
            </div>
          </a>
        </div>
      </main>
      <Footer />
    </div>
  );
}

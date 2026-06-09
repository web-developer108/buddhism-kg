import { Header } from "./components/Header/Header.tsx";
import { LinkCardsSection } from "./components/LinkCardsSection/LinkCardsSection.tsx";
import { BishkekCenterSection } from "./components/BishkekCenterSection/BishkekCenterSection.tsx";
import { ScheduleSection } from "./components/ScheduleSection/ScheduleSection.tsx";
import { ContactsSection } from "./components/ContactsSection/ContactsSection.tsx";
import { Footer } from "./components/Footer/Footer.tsx";

function App() {

  return (
      <>
          <Header />
          <BishkekCenterSection />
          <ScheduleSection />
          <ContactsSection />
          <LinkCardsSection/>
          <Footer />
      </>
  )
}

export default App

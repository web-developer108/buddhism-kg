import { Header } from "./components/Header/Header.tsx";
import { LinkCardsSection } from "./components/LinkCardsSection/LinkCardsSection.tsx";
import { BishkekCenterSection } from "./components/BishkekCenterSection/BishkekCenterSection.tsx";
import { ScheduleSection } from "./components/ScheduleSection/ScheduleSection.tsx";

function App() {

  return (
      <>
          <Header />
          <BishkekCenterSection />
          <ScheduleSection />
          <LinkCardsSection/>
      </>
  )
}

export default App

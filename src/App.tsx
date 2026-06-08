import { Header } from "./components/Header/Header.tsx";
import { MaintenancePage } from "./components/MaintenancePage/MaintenancePage.tsx";
import { LinkCardsSection } from "./components/LinkCardsSection/LinkCardsSection.tsx";

function App() {

  return (
      <>
          <Header />
          <MaintenancePage />
          <LinkCardsSection/>
      </>
  )
}

export default App

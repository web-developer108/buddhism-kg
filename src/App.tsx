import { Header } from "./components/Header/Header.tsx";
import { LinkCardsSection } from "./components/LinkCardsSection/LinkCardsSection.tsx";
import { BishkekCenterSection } from "./components/BishkekCenterSection/BishkekCenterSection.tsx";

function App() {

  return (
      <>
          <Header />
          <BishkekCenterSection />
          <LinkCardsSection/>
      </>
  )
}

export default App

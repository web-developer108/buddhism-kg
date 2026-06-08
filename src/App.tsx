import './App.css'
import { Header } from "./components/Header/Header.tsx";

function App() {

  return (
      <>
          <Header />
        <div className="container">
          <div className="logo">🔧</div>

          <h1>Сайт временно недоступен</h1>

          <p>
            В настоящее время проводятся технические работы и настройка сервиса.
          </p>

          <p>
            По вопросам работы буддистского центра в г. Бишкек просим обращаться по электронному адресу
            bishkek@buddhism.kg.
          </p>

          <p>
            Мы работаем над восстановлением работы сайта и скоро вернемся в обычный режим.
          </p>

          <div className="footer">
            Благодарим за понимание.
          </div>
        </div>
      </>
  )
}

export default App

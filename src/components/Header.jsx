import logo from "../assets/quiz-logo.png"

function Header() {
  return (
    <header>
      <img src={logo} alt="Qiz logo" />
      <h1>ReactQuiz</h1>
    </header>
  )
}

export default Header
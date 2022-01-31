import css from "./App.module.css";
import articles from "../../libs/articles";
import Article from "../Article";
import LoginButton from "../LoginButton";
import LogoutButton from "../LogoutButton";
import Profile from "../Profile";
function App() {
  return (
    <main className={css.App}>
      <div className={css.buttons}>
        <LoginButton></LoginButton> {"  "}
        <LogoutButton></LogoutButton>
      </div>
      <Profile></Profile>
      <h1>WikiPigeon</h1>
      {articles.map((article, index) => {
        return <Article article={article} key={index}></Article>;
      })}
    </main>
  );
}

export default App;

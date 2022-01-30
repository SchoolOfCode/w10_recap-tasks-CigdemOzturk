import css from "./App.module.css";
import articles from "../../libs/articles";
import Article from "../Article";
function App() {
  return (
    <main className={css.App}>
      <h1>WikiPigeon</h1>
      {articles.map((article, index) => {
        return <Article article={article} key={index}></Article>;
      })}
    </main>
  );
}

export default App;

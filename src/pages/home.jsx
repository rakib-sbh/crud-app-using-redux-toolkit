import data from "../database/data.json";

const Home = () => {
  return (
    <div>
      <h3>Importance Of Books</h3>
      <section>
        {data.map((article) => {
          return <article key={article.id}>{article.body}</article>;
        })}
      </section>
    </div>
  );
};

export default Home;

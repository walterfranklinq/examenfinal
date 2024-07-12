import { useEffect, useState } from "react";

import { Article } from "./Article";

import img1 from "../assets/images/image-retro-pcs.jpg";
import img2 from "../assets/images/image-top-laptops.jpg";
import img3 from "../assets/images/image-gaming-growth.jpg";

//
const apiKey = "a72213c8e55c47188ee952f90113dd8b";
//

export const ArticlesContainer = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`)
      .then((res) => res.json())
      .then((data) => setArticles(data.articles));
  }, []);
  return (
    <section className="md:flex md:flex-wrap md:place-content-between md:gap-10 md:justify-center">
      {
        // articles.map(article =>
        //   <Article
        //     key={article.publishedAt}
        //     img={article.urlToImage}
        //     number='01'
        //     title={article.title}
        //     text={article.description}
        //   />)
      }

      <Article
        img={img1}
        number="01"
        title="
Reviviendo las PC retro"
        text="
¿Qué sucede cuando las PC antiguas reciben actualizaciones modernas?"
      />
      <Article
        img={img2}
        number="02"
        title="Las 10 mejores computadoras portátiles de 2022"
        text="
Nuestras mejores opciones para diversas necesidades y presupuestos."
      />
      <Article
        img={img3}
        number="03"
        title="El crecimiento de los juegos"
        text="
Cómo la pandemia ha generado nuevas oportunidades."
      />
    </section>
  );
};

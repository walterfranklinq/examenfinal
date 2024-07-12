import { NewArticle } from "./NewArticle";

export const NewContainer = () => {
  return (
    <aside className="bg-VeryDarkBlue text-OffWhite py-[28px] px-[20px] flex-none mb-[60px] md:w-[350px] md:mb-0 ">
      <h1 className="text-SoftOrange text-4xl font-bold">New</h1>

      <NewArticle
        title="Hidrógeno VS Coches Eléctricos"
        text="¿Algún día los coches impulsados ​​por hidrógeno alcanzarán a los vehículos eléctricos?"
      />

      <NewArticle
        title="
Las desventajas del arte de la IA"
        text="
¿Cuáles son los posibles efectos adversos de la generación de imágenes de IA bajo demanda?"
      />

      <NewArticle
        title="¿Se está agotando la financiación de capital de riesgo?"
        text="
La financiación privada por parte de empresas de capital riesgo ha disminuido un 50% interanual. Echemos un vistazo a lo que eso significa."
      />
    </aside>
  );
};

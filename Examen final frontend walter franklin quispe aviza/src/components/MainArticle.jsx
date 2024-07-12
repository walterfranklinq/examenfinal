import imageMobile from "../assets/images/image-web-3-mobile.jpg";
import imageDesktop from "../assets/images/image-web-3-desktop.jpg";

export const MainArticle = () => {
  return (
    <section className="mb-12 md:mb-0">
      <picture>
        <source media="(max-width: 640px)" srcSet={imageMobile} />
        <source media="(min-width: 641px)" srcSet={imageDesktop} />
        <img src={imageMobile} alt="image" />
      </picture>
      <div className="sm:flex">
        <div className="flex-1 py-6">
          <h2 className="text-[40px] leading-none font-bold sm:text-[58px]">
            ¿El brillante futuro de la Web 3.0?
          </h2>
        </div>
        <div className="flex-1  pt-9 px-4">
          <p className="mb-10 text-[13px] sm:text-[15px] ">
            Nos sumergimos en la próxima evolución de la web que pretende poner
            el el poder de las plataformas de nuevo en manos del pueblo. Pero es
            ¿Cumpliendo realmente su promesa?
          </p>
          <button className="bg-SoftRed w-[185px] h-[48px] uppercase text-OffWhite hover:bg-VeryDarkBlue ">
            Read more
          </button>
        </div>
      </div>
    </section>
  );
};

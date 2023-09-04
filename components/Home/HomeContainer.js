import React from "react";
import AboutUs from "./AboutUs";
import ControledCarousel from "./ControledCarousel";
import HeroImage from "./HeroImage";
import style from "styles/Home.module.scss";
import HomeArticle from "./HomeArticle";

const imageOne = "./MZ_004.jpg";
const imageTwo = "./MZ_015.jpg";
const imageThree = "./MZ_050.jpg";

const HomeContainer = () => {
  const articles = [
    {
      imgSrc: imageOne,
      header: "Sklep zoologiczny Błękitna Planeta",
      content: `Nasza firma powstała w 1993 roku. Działamy na rynku już od wielu lat, dlatego mamy duże doświadczenie i niezbędną wiedzę, aby zapewniać Państwu fachowe doradztwo i najwyższej jakości produkty. Zwierzęta są naszą pasją i chcemy zagwarantować im wszystko, co najlepsze. Postanowiliśmy więc stworzyć Sklepy zoologiczne z szerokim asortymentem, w którym każdy bez trudu znajdzie to, co niezbędne dla pupila.`,
      color: `#aedbef`,
      belowImageText: (
        <div>
          Dbamy o to, aby w nim były dostępne wyłącznie sprawdzone karmy i
          akcesoria renomowanych producentów. Są to produkty doceniane przez
          hodowców i weterynarzy. Nasz zespół tworzą osoby pełne pasji i
          zaangażowania, dla których dobro zwierząt zawsze jest na pierwszym
          miejscu. Chętnie Państwu doradzimy i pomożemy w wyborze odpowiednich
          produktów. Na naszej stronie udostępniamy wiele dodatkowych,
          przydatnych porad, które są rzetelnym źródłem wiedzy. Dotyczą one
          najistotniejszych kwestii, takich jak karmienie, pielęgnacja, dobór
          właściwych zabawek i akcesoriów czy bezpieczny transport. Dobrze
          wiemy, czego potrzebują psy, koty i inne zwierzęta, m.in. gryzonie.{" "}
          <br />
          <br />
          Naszą dodatkową i prawdopodobnie największą pasją są akwarystyka i
          terrarystyka. W sklepie mamy odrębną salę wystawową skupiającą się
          wokół tych dziedzin. Można znaleźć w niej wiele gatunków żywych
          zwierząt i ryb, m.in.: <br /> <br />
          <ul>
            <li>gekony, agamy, kameleony,</li>
            <li>żółwie — stepowe, greckie, lamparcie, wodno-lądowe,</li>
            <li>drzewołazy (żabki)</li>
          </ul>
          <br />
          Jesteśmy sklepem specjalistycznym i gwarantujemy, że każdy miłośnik
          akwarystyki i terrarystyki znajdzie u nas wszystkie niezbędne
          produkty. Zapewniamy profesjonalne doradztwo i rozwiewamy wszystkie
          wątpliwości dotyczące hodowli zwierząt.
        </div>
      ),
    },
    {
      imgSrc: imageTwo,
      header: "Spełniamy potrzeby zwierząt",
      content: (
        <span>
          Oferujemy pełen asortyment dla psów, kotów, gryzoni, ptaków oraz
          gadów. Dostępne są u nas produkty renomowanych, niespotykanych w
          innych miejscach marek. Jesteśmy dystrybutorem duńskiej firmy Tropica,
          czyli uznanego producenta roślin do akwarium.
          <br /> <br /> Ponadto jesteśmy wyłącznym dystrybutorem włoskich
          gryzaków Ciuffogatto i prężnie rozwijamy markę własną{" "}
          <a
            href="https://bestanutrado.pl/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <b>BESTA NUTRADO</b>
          </a>
          .
        </span>
      ),
      belowImageText: (
        <div>
          W naszym asortymencie znajdą Państwo:
          <br /> <br />
          <ul>
            <li> karmy suche i mokre,</li>
            <li>smakołyki,</li>
            <li>zabawki,</li>
            <li>legowiska,</li>
            <li>transportery,</li>
            <li>klatki i wiele innych produktów.</li>
          </ul>
          <br />
          Dodatkowo wykonujemy zbiorniki na specjalne zamówienie z różnych
          rodzajów szkła i zapewniamy pomoc w zakładaniu terrariów oraz
          akwariów, także w Państwa domach.
          <br />
          <br />
          Czujemy się odpowiedzialni za zwierzęta, dlatego stale kontrolujemy
          jakość dostępnych towarów. Na bieżąco poszerzamy swój asortyment, aby
          zapewnić Klientom zadowolenie z zakupów. Uważamy, że każdy pupil,
          niezależnie od rasy czy wieku, zasługuje na miłość i odpowiednią
          opiekę. Wybierając nasze produkty, możecie Państwo zapewnić swoim
          ulubieńcom wszystko, co potrzebne. <br />
          <br />W sprzedaży mamy nie tylko karmy i akcesoria, ale również żywe
          zwierzęta. Dbamy o nie każdego dnia i zapewniamy im wszystko, co
          niezbędne. To m.in. myszki, chomiki, szczurki, króliki oraz ptaki.{" "}
          <br />
          <br />
          Branża zoologiczna nie ma przed nami żadnych tajemnic. Jesteśmy
          profesjonalistami, którzy udowadniają, że zagwarantowanie zwierzętom
          dobrych warunków do rozwoju i życia nie musi być trudne. Nasze
          wyjątkowe produkty są odpowiedzią na potrzeby psów, kotów, gadów i
          innych pupili. Zachęcamy do zapoznania się z ofertą firmy i wspólnego
          odkrywania niezwykłego świata zwierząt.
        </div>
      ),
      color: `#c5cae9`,
    },
  ];

  return (
    <div>
      <HeroImage />
      {articles.map((article, index) => (
        <HomeArticle key={index} {...article} isLeft={index % 2} />
      ))}
    </div>
  );
};

export default HomeContainer;

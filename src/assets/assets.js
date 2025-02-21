import web_logo from "./logo.png";
import search_icon from "./search-icon.png";
import profile_icon from "./profile-icon.png";
import cart_icon from "./cart-icon.png";
import menu_icon from "./menu-icon.png";
import back_icon from "./back-icon.png";
import inicio from "./logo.png";
import esdla_lcda from "./esdla-lcda.jpg";
import esdla_lcda2 from "./esdla-lcda2.png";
import skyward from "./skyward.jpg";
import close_icon from "./close-icon.png";
import home_img from "./home-img.jpg";
import star_icon from "./star1.png";
import star1_icon from "./star2.webp";
import delete_icon from "./delete-icon.png";

export const assets = {
  web_logo,
  esdla_lcda,
  esdla_lcda2,
  search_icon,
  profile_icon,
  cart_icon,
  menu_icon,
  back_icon,
  inicio,
  skyward,
  close_icon,
  home_img,
  star_icon,
  star1_icon,
  delete_icon,
};

export const books = [
  {
    _id: "1",
    name: "EL SEÑOR DE LOS ANILLOS: LA COMUNIDAD DEL ANILLO",
    author: "J. R. R. Tolkien",
    genre: "Fantasy",
    format: "Book",
    category: ["Fantasy", "Horror"],
    bestseller: true,
    image: [esdla_lcda, esdla_lcda2],
    editorial: "MINOTAURO",
    description:
      "En la adormecida e idílica Comarca, un joven hobbit recibe un encargo: custodiar el Anillo Único y emprender el viaje para su destrucción en la Grieta del Destino. Acompañado por magos, hombres, elfos y enanos, atravesará la Tierra Media y se internará en las sombras de Mordor, perseguido siempre por las huestes de Sauron, el Señor Oscuro, dispuesto a recuperar su creación para establecer el dominio definitivo del Mal.",
    price: "15",
    discountPrice: "12",
  },
  {
    _id: "2",
    name: "SKYWARD",
    author: "Brandon Sanderson",
    genre: "Science Fiction",
    format: "eBook",
    category: "Horror",
    bestseller: false,
    image: [skyward, web_logo],
    editorial: "MINOTAURO",
    description:
      "En la adormecida e idílica Comarca, un joven hobbit recibe un encargo: custodiar el Anillo Único y emprender el viaje para su destrucción en la Grieta del Destino. Acompañado por magos, hombres, elfos y enanos, atravesará la Tierra Media y se internará en las sombras de Mordor, perseguido siempre por las huestes de Sauron, el Señor Oscuro, dispuesto a recuperar su creación para establecer el dominio definitivo del Mal.",
    price: "15",
  },
  {
    _id: "3",
    name: "El señor de los anillos: La comunidad del anillo",
    author: "J. R. R. Tolkien",
    genre: "Fantasy",
    format: "Audiobook",
    category: "Horror",
    bestseller: false,
    image: [profile_icon, web_logo],
    editorial: "MINOTAURO",
    description:
      "Empieza tu viaje a la Tierra Media. Los libros que han inspirado la nueva serie EL SEÑOR DE LOS ANILLOS: LOS ANILLOS DEL PODER. La primera entrega de la trilogía de J. R. R. Tolkien El Señor de los Anillos. En la adormecida e idílica Comarca, un joven hobbit recibe un encargo: custodiar el Anillo Único y emprender el viaje para su destrucción en la Grieta del Destino. Acompañado por magos, hombres, elfos y enanos, atravesará la Tierra Media y se internará en las sombras de Mordor, perseguido siempre por las huestes de Sauron, el Señor Oscuro, dispuesto a recuperar su creación para establecer el dominio definitivo del Mal. «La obra de Tolkien, difundida en millones de ejemplares, traducida a docenas de lenguas, inspiradora de slogans pintados en las paredes de Nueva York y de Buenos Aires... una coherente mitología de una autenticidad universal creada en pleno siglo veinte.» âeuros'George Steiner, Le Monde, 1973",
    price: "15",
  },
  {
    _id: "4",
    name: "El señor de los anillos: La comunidad del anillo",
    author: "J. R. R. Tolkien",
    genre: "Novel",
    format: "audiobook",
    category: "Mystery",
    bestseller: true,
    image: [esdla_lcda2, web_logo],
    editorial: "MINOTAURO",
    description:
      "Empieza tu viaje a la Tierra Media. Los libros que han inspirado la nueva serie EL SEÑOR DE LOS ANILLOS: LOS ANILLOS DEL PODER. La primera entrega de la trilogía de J. R. R. Tolkien El Señor de los Anillos. En la adormecida e idílica Comarca, un joven hobbit recibe un encargo: custodiar el Anillo Único y emprender el viaje para su destrucción en la Grieta del Destino. Acompañado por magos, hombres, elfos y enanos, atravesará la Tierra Media y se internará en las sombras de Mordor, perseguido siempre por las huestes de Sauron, el Señor Oscuro, dispuesto a recuperar su creación para establecer el dominio definitivo del Mal. «La obra de Tolkien, difundida en millones de ejemplares, traducida a docenas de lenguas, inspiradora de slogans pintados en las paredes de Nueva York y de Buenos Aires... una coherente mitología de una autenticidad universal creada en pleno siglo veinte.» âeuros'George Steiner, Le Monde, 1973",
    price: "15",
  },
  {
    _id: "5",
    name: "El señor de los anillos: La comunidad del anillo",
    author: "J. R. R. Tolkien",
    format: "Book",
    category: "Fantasy",
    bestseller: true,
    image: [esdla_lcda, web_logo],
    editorial: "MINOTAURO",
    description:
      "Empieza tu viaje a la Tierra Media. Los libros que han inspirado la nueva serie EL SEÑOR DE LOS ANILLOS: LOS ANILLOS DEL PODER. La primera entrega de la trilogía de J. R. R. Tolkien El Señor de los Anillos. En la adormecida e idílica Comarca, un joven hobbit recibe un encargo: custodiar el Anillo Único y emprender el viaje para su destrucción en la Grieta del Destino. Acompañado por magos, hombres, elfos y enanos, atravesará la Tierra Media y se internará en las sombras de Mordor, perseguido siempre por las huestes de Sauron, el Señor Oscuro, dispuesto a recuperar su creación para establecer el dominio definitivo del Mal. «La obra de Tolkien, difundida en millones de ejemplares, traducida a docenas de lenguas, inspiradora de slogans pintados en las paredes de Nueva York y de Buenos Aires... una coherente mitología de una autenticidad universal creada en pleno siglo veinte.» âeuros'George Steiner, Le Monde, 1973",
    price: "15",
  },
  {
    _id: "6",
    name: "El señor de los anillos: La comunidad del anillo",
    author: "J. R. R. Tolkien",
    genre: "Fantasy",
    category: "fantasy",
    bestseller: false,
    image: [esdla_lcda, web_logo],
    editorial: "MINOTAURO",
    description:
      "Empieza tu viaje a la Tierra Media. Los libros que han inspirado la nueva serie EL SEÑOR DE LOS ANILLOS: LOS ANILLOS DEL PODER. La primera entrega de la trilogía de J. R. R. Tolkien El Señor de los Anillos. En la adormecida e idílica Comarca, un joven hobbit recibe un encargo: custodiar el Anillo Único y emprender el viaje para su destrucción en la Grieta del Destino. Acompañado por magos, hombres, elfos y enanos, atravesará la Tierra Media y se internará en las sombras de Mordor, perseguido siempre por las huestes de Sauron, el Señor Oscuro, dispuesto a recuperar su creación para establecer el dominio definitivo del Mal. «La obra de Tolkien, difundida en millones de ejemplares, traducida a docenas de lenguas, inspiradora de slogans pintados en las paredes de Nueva York y de Buenos Aires... una coherente mitología de una autenticidad universal creada en pleno siglo veinte.» âeuros'George Steiner, Le Monde, 1973",
    price: "15",
  },
  {
    _id: "7",
    name: "El señor de los anillos: La comunidad del anillo",
    author: "J. R. R. Tolkien",
    genre: "Novel",
    category: "Fantasy",
    bestseller: true,
    image: [esdla_lcda, web_logo],
    editorial: "MINOTAURO",
    description:
      "Empieza tu viaje a la Tierra Media. Los libros que han inspirado la nueva serie EL SEÑOR DE LOS ANILLOS: LOS ANILLOS DEL PODER. La primera entrega de la trilogía de J. R. R. Tolkien El Señor de los Anillos. En la adormecida e idílica Comarca, un joven hobbit recibe un encargo: custodiar el Anillo Único y emprender el viaje para su destrucción en la Grieta del Destino. Acompañado por magos, hombres, elfos y enanos, atravesará la Tierra Media y se internará en las sombras de Mordor, perseguido siempre por las huestes de Sauron, el Señor Oscuro, dispuesto a recuperar su creación para establecer el dominio definitivo del Mal. «La obra de Tolkien, difundida en millones de ejemplares, traducida a docenas de lenguas, inspiradora de slogans pintados en las paredes de Nueva York y de Buenos Aires... una coherente mitología de una autenticidad universal creada en pleno siglo veinte.» âeuros'George Steiner, Le Monde, 1973",
    price: "15",
  },
  {
    _id: "8",
    name: "El señor de los anillos: La comunidad del anillo",
    author: "J. R. R. Tolkien",
    genre: "Novel",
    category: "Fantasy",
    bestseller: true,
    image: [esdla_lcda, web_logo],
    editorial: "MINOTAURO",
    description:
      "Empieza tu viaje a la Tierra Media. Los libros que han inspirado la nueva serie EL SEÑOR DE LOS ANILLOS: LOS ANILLOS DEL PODER. La primera entrega de la trilogía de J. R. R. Tolkien El Señor de los Anillos. En la adormecida e idílica Comarca, un joven hobbit recibe un encargo: custodiar el Anillo Único y emprender el viaje para su destrucción en la Grieta del Destino. Acompañado por magos, hombres, elfos y enanos, atravesará la Tierra Media y se internará en las sombras de Mordor, perseguido siempre por las huestes de Sauron, el Señor Oscuro, dispuesto a recuperar su creación para establecer el dominio definitivo del Mal. «La obra de Tolkien, difundida en millones de ejemplares, traducida a docenas de lenguas, inspiradora de slogans pintados en las paredes de Nueva York y de Buenos Aires... una coherente mitología de una autenticidad universal creada en pleno siglo veinte.» âeuros'George Steiner, Le Monde, 1973",
    price: "15",
  },
  {
    _id: "9",
    name: "EL SEÑOR DE LOS ANILLOS: LA COMUNIDAD DEL ANILLO",
    author: "J. R. R. Tolkien",
    genre: "Novel",
    format: "Book",
    category: "Fantasy",
    bestseller: true,
    image: [esdla_lcda, esdla_lcda2],
    editorial: "MINOTAURO",
    description:
      "Empieza tu viaje a la Tierra Media. Los libros que han inspirado la nueva serie EL SEÑOR DE LOS ANILLOS: LOS ANILLOS DEL PODER. La primera entrega de la trilogía de J. R. R. Tolkien El Señor de los Anillos.",
    price: "15",
    discountPrice: "12",
  },
  {
    _id: "10",
    name: "EL SEÑOR DE LOS ANILLOS: LA COMUNIDAD DEL ANILLO",
    author: "J. R. R. Tolkien",
    genre: "Novel",
    format: "Book",
    category: "Fantasy",
    bestseller: true,
    image: [esdla_lcda, esdla_lcda2],
    editorial: "MINOTAURO",
    description:
      "Empieza tu viaje a la Tierra Media. Los libros que han inspirado la nueva serie EL SEÑOR DE LOS ANILLOS: LOS ANILLOS DEL PODER. La primera entrega de la trilogía de J. R. R. Tolkien El Señor de los Anillos.",
    price: "15",
    discountPrice: "12",
  },
  {
    _id: "11",
    name: "EL SEÑOR DE LOS ANILLOS: LA COMUNIDAD DEL ANILLO",
    author: "J. R. R. Tolkien",
    genre: "Novel",
    format: "Book",
    category: "Fantasy",
    bestseller: true,
    image: [esdla_lcda, esdla_lcda2],
    editorial: "MINOTAURO",
    description:
      "Empieza tu viaje a la Tierra Media. Los libros que han inspirado la nueva serie EL SEÑOR DE LOS ANILLOS: LOS ANILLOS DEL PODER. La primera entrega de la trilogía de J. R. R. Tolkien El Señor de los Anillos.",
    price: "15",
    discountPrice: "12",
  },
  {
    _id: "12",
    name: "EL SEÑOR DE LOS ANILLOS: LA COMUNIDAD DEL ANILLO",
    author: "J. R. R. Tolkien",
    genre: "Novel",
    format: "Book",
    category: "Fantasy",
    bestseller: true,
    image: [esdla_lcda, esdla_lcda2],
    editorial: "MINOTAURO",
    description:
      "Empieza tu viaje a la Tierra Media. Los libros que han inspirado la nueva serie EL SEÑOR DE LOS ANILLOS: LOS ANILLOS DEL PODER. La primera entrega de la trilogía de J. R. R. Tolkien El Señor de los Anillos.",
    price: "15",
    discountPrice: "12",
  },
];

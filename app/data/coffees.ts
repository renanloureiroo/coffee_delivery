import { ImageSourcePropType } from "react-native";

export const coffees = [
  {
    id: "tradicional",
    type: "tradicional",
    name: "Expresso Tradicional",
    description: "O tradicional café feito com água quente e grãos moídos",
    price: 9.9,
    image: require("../assets/images/expresso.png"),
  },

  {
    id: "americano",
    type: "tradicional",
    name: "Expresso Americano",
    description: "Expresso diluído, menos intenso que o tradicional",
    price: 9.9,
    image: require("../assets/images/americano.png"),
  },
  {
    id: "cremoso",
    type: "tradicional",
    name: "Expresso Cremoso",
    description: "Café expresso tradicional com espuma cremosa",
    price: 9.9,
    image: require("../assets/images/expresso-cremoso.png"),
  },

  {
    id: "latte",
    type: "tradicional",
    name: "Latte",
    description: "Café expresso com o dobro de leite e espuma cremosa",
    price: 9.9,
    image: require("../assets/images/latte.png"),
  },

  {
    id: "gelado",
    type: "tradicional",
    name: "Expresso Gelado",
    description: "Bebida preparada com café expresso e cubos de gelo",
    price: 9.9,
    image: require("../assets/images/caf-gelado.png"),
  },

  {
    id: "capuccino",
    type: "doce",
    name: "Capuccino",
    description: "Bebida com canela feita de doses de café, leite e espuma",
    price: 9.9,
    image: require("../assets/images/capuccino.png"),
  },

  {
    id: "mocaccino",
    type: "doce",
    name: " Mocaccino",
    description: "Café expresso com calda de chocolate, pouco leite e espuma",
    price: 9.9,
    image: require("../assets/images/macchiato.png"),
  },
  {
    id: "chocolate-quente",
    type: "doce",
    name: "Chocolate Quente",
    description: "Bebida feita com chocolate dissolvido no leite quente e café",
    price: 9.9,
    image: require("../assets/images/chocolate-quente.png"),
  },

  {
    id: "cubano",
    type: "especial",
    name: "Cubano",
    description:
      "Drink gelado de café expresso com rum, creme de leite e hortelã",
    price: 9.9,
    image: require("../assets/images/cubano.png"),
  },

  {
    id: "havaiano",
    type: "especial",
    name: "Havaiano",
    description: "Bebida adocicada preparada com café e leite de coco",
    price: 9.9,
    image: require("../assets/images/havaiano.png"),
  },

  {
    id: "arabe",
    type: "especial",
    name: "Árabe",
    description: "Bebida preparada com grãos de café árabe e especiarias",
    price: 9.9,
    image: require("../assets/images/arabe.png"),
  },

  {
    id: "irlandes",
    type: "especial",
    name: "Irlandês",
    description: "Bebida a base de café, uísque irlandês, açúcar e chantilly",
    price: 9.9,
    image: require("../assets/images/arabe.png"),
  },
];

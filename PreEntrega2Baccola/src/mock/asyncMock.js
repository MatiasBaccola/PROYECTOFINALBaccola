const products = [
  {
    id: 1,
    title: "ASUS ZenBook 14 Ultra-Slim Laptop",
    price: 849.99,
    description: "Ultra-slim 14-inch laptop with Intel Core i7, 16GB RAM, 512GB SSD, and Windows 10 Pro.",
    image: "https://m.media-amazon.com/images/I/51mmnvSEoWL._AC_SL1280_.jpg",
    stock: 8,
  },
  {
    id: 2,
    title: "Apple MacBook Air 13 M1 Chip - 256GB SSD Silver ",
    price: 1500,
    description:
      "Pantalla - Frecuencia de actualización de la pantalla: 60 Hz - Resolución de la pantalla: 2560 px x 1600 px - Con pantalla táctil: No - Tamaño de la pantalla: 13.3 - Relación de aspecto: 16:10 - Tipo de resolución de la pantalla: Full HD. ",
    image:
      "https://i.kinja-img.com/image/upload/c_fit,q_60,w_645/zapcbx7ugq4z10ns3gd8.jpg",
    stock: 2,
  },
  {
    id: 3,
    title: "Samsung Galaxy A04 64GB",
    price: 179.99,
    description:
      "Expandí tu vista a la pantalla Infinity-V de 6,5 pulgadas de tu Galaxy A04 y mirá lo que estuviste perdiendo.",
    image: "https://tiendaonline.movistar.com.ar/media/catalog/product/cache/1d01ed3f1ecf95fcf479279f9ae509ad/a/0/a04_1__1_1_2.png",
    stock: 4,
  },
  {
    id: 4,
    title: "Iphone Xr 64GB",
    price: 290,
    description:
      "Con el iPhone XR obtienes una amplia pantalla de 6,1 pulgadas, un rendimiento lo suficientemente rápido del procesador A12 Bionic de Apple y una buena calidad de cámara en un diseño colorido y un paquete asequible. Apple ha incluido la nueva pantalla LCD Liquid Retina como pantalla del iPhone XR. Apple lanzó el iPhone XR con un puñado de opciones de color. Tanto la parte trasera de cristal como el marco de metal tienen colores brillantes, y el vidrio utiliza un proceso de color de siete capas en profundidad para lograr un acabado rico y la aleación de aluminio anodizada exclusiva de Apple para combinar. En lugar de 3D Touch, el iPhone XR reproduce la experiencia a través del «toque háptico». El Face ID avanzado te permite desbloquear tu iPhone de forma segura e iniciar sesión en aplicaciones con solo un vistazo.",
    image: "https://i0.wp.com/shop.litecorp.com.ar/wp-content/uploads/2022/05/image-removebg-preview-9.png?w=459&ssl=1",
    stock: 33,
  },
  {
    id: 5,
    title:
      "Reliquia Nokia 1100",
    price: 100,
    description:
      "Nokia 1100, original, mas duro que un ladrillo, no se rompe con nada.",
    image: "https://http2.mlstatic.com/D_NQ_NP_824610-MLA52950921338_122022-O.webp",
    stock: 1,
  },
  {
    id: 6,
    title:
      "6900 series Android TV Full HD",
    price: 320,
    description:
      "¿Buscás el mejor televisor para un espacio pequeño? Este televisor Philips de 43 encaja a la perfección en cualquier parte. Las imágenes son nítidas; el sonido, claro; y encima es inteligente: Android TV de Philips",
    image: "https://images.philips.com/is/image/philipsconsumer/4b02eea6e2994a3f9cecafbf00d5beae?$jpglarge$&wid=960",
    stock: 10,
  },
  {
    id: 7,
    title:
      "Smart TV 4K Ultra HD con Google TV 55",
    price: 700,
    description:
      "X80J | 4K Ultra HD | Alto rango dinámico (HDR) | Smart TV (Google TV), Realismo impresionante con el 4K",
    image: "https://arsonyb2c.vtexassets.com/arquivos/ids/357805-800-800?v=637695490986100000&width=800&height=800&aspect=true",
    stock: 15,
  },
  {
    id: 8,
    title:
      "Aspiradora Trineo Compact Power violeta 1.5 lts 1500W Atma",
    price: 152,
    description:
      "La Aspiradora Trineo Compact Power violeta 1.5 lts Atma tiene una potencia de 1500W y es ideal para cualquier tipo de piso ya que incluye un cepillo con cerdas ajustables. Es perfecta para una limpieza impecable en tu hogar, ésta poderosa herramienta de limpieza cuenta con un regulador de potencia y un indicador de bolsa llena para un control total y conveniente durante el uso.",
    image: "https://tiendanewsan.com.ar/media/catalog/product/a/s/aspiradora_2.jpg?auto=webp&format=pjpg&width=640&height=800&fit=cover",
    stock: 123,
  },
  {
    id: 9,
    title:
      "Lavarropas Samsung 8kg con Wobble y puerta de vidrio templado",
    price: 890,
    description:
      "La tecnología Wobble le brinda a tus prendas un inmejorable cuidado y desempeño de lavado. El pulsador Wobble genera corrientes de agua que logran un lavado dinámico y multi-direccional que previene las arrugas y limpia a fondo las manchas más difíciles.",
    image: "https://www.multipoint.com.ar/Image/0/700_700-WA80F5S4UDA-1.jpg",
    stock: 3,
  },
  {
    id: 10,
    title:"Heladera No Frost Inverter Whirpool WRE57K2 443L",
    price: 2000,
    description:
      "Capacidad en volumen: 308 Lt - Tipo de Heladera: Con frezeer - Tipo de enfriamiento: No Frost - Dispenser de agua: No - Dispenser de hielo: No - Material de estantes: Vidrio templado - Cantidad de estantes de la heladera: 3 - Estantes removibles: Si",
    image: "https://pardohogar.vtexassets.com/arquivos/ids/175294-1200-auto?v=637988619263630000&width=1200&height=auto&aspect=true",
    stock: 9,
  },
];

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 2000);
  });
};

export const getProductById = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.find((product) => product.id === id));
    }, 2000);
  });
};

export const getProductByCategory = (category) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.filter((product) => product.category === category));
    }, 2000);
  });
};

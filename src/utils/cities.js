// src/utils/cities.js
export const CITIES_DATABASE = [
  "Kyiv, Ukraine",
  "Kharkiv, Ukraine",
  "Odesa, Ukraine",
  "Dnipro, Ukraine",
  "Donetsk, Ukraine",
  "Zaporizhzhia, Ukraine",
  "Lviv, Ukraine",
  "Kryvyi Rih, Ukraine",
  "Mykolaiv, Ukraine",
  "Mariupol, Ukraine",
  "Luhansk, Ukraine",
  "Vinnytsia, Ukraine",
  "Simferopol, Ukraine",
  "Kherson, Ukraine",
  "Poltava, Ukraine",
  "Chernihiv, Ukraine",
  "Cherkasy, Ukraine",
  "Zhytomyr, Ukraine",
  "Sumy, Ukraine",
  "Khmelnytskyi, Ukraine",
  "Chernivtsi, Ukraine",
  "Rivne, Ukraine",
  "Kropyvnytskyi, Ukraine",
  "Ivano-Frankivsk, Ukraine",
  "Ternopil, Ukraine",
  "Lutsk, Ukraine",
  "Uzhhorod, Ukraine",

  // Європейські міста
  "Berlin, Germany",
  "Munich, Germany",
  "Hamburg, Germany",
  "Cologne, Germany",
  "Frankfurt, Germany",
  "Vienna, Austria",
  "Salzburg, Austria",
  "Prague, Czech Republic",
  "Brno, Czech Republic",
  "Warsaw, Poland",
  "Krakow, Poland",
  "Gdansk, Poland",
  "Wroclaw, Poland",
  "Budapest, Hungary",
  "Debrecen, Hungary",
  "Rome, Italy",
  "Milan, Italy",
  "Naples, Italy",
  "Turin, Italy",
  "Paris, France",
  "Lyon, France",
  "Marseille, France",
  "Madrid, Spain",
  "Barcelona, Spain",
  "Valencia, Spain",
  "Amsterdam, Netherlands",
  "Rotterdam, Netherlands",
  "Brussels, Belgium",
];

export const filterCities = (query) => {
  if (query.length < 2) return [];

  const lowercaseQuery = query.toLowerCase();

  return CITIES_DATABASE.filter((city) =>
    city.toLowerCase().includes(lowercaseQuery)
  ).slice(0, 5);
};

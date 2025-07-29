

let pronombres = ['el', 'nuestro'];
let adjetivos = ['codigo'];
let sustantivos = ['ancestral', 'arcano'];
let dominios = ['.com', '.net', '.pa'];

const generarDominios = () => {
  for (let pronombreIndex = 0; pronombreIndex < pronombres.length; pronombreIndex++) {
    const pronombre = pronombres[pronombreIndex];

    for (let adjetivoIndex = 0; adjetivoIndex < adjetivos.length; adjetivoIndex++) {
      const adjetivo = adjetivos[adjetivoIndex];

      for (let sustantivoIndex = 0; sustantivoIndex < sustantivos.length; sustantivoIndex++) {
        const sustantivo = sustantivos[sustantivoIndex];

        for (let dominioIndex = 0; dominioIndex < dominios.length; dominioIndex++) {
          const dominio = dominios[dominioIndex];

          const nombreDominio = pronombre + adjetivo + sustantivo + dominio;
          console.log(nombreDominio);
        }
      }
    }
  }
};

generarDominios();
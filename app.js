var ROMANOS_BASICOS = {
  'I': 1,
  'V': 5,
  'X': 10,
  'L': 50,
  'C': 100,
  'D': 500,
  'M': 1000,
  }

function converte(romano){
  if(ROMANOS_BASICOS[romano]){
    return ROMANOS_BASICOS[romano];
  }

  else {
    var resultado = 0;
    if (romano.length > 2) {
      var primeiro =romano.substring(0, romano.length-2);
      var resto = romano.substring(romano.length-2, romano.length);
      return converte(primeiro) + converte(resto);
    } else if (converte(romano[0]) >= converte(romano[1])) {
      resultado = soma(romano);
    } else {
      resultado = converte(romano[1]) - converte(romano[0]);
    }
      return resultado;
  }
}

function soma(romano) {
  var soma = 0 ;
  for (i = 0 ; i < romano.length ; i++) {
    soma += converte(romano[i]);
  }
  return soma;
}

module.exports.converte  = converte;

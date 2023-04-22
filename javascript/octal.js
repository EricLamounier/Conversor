export const oct_dec = (oct) => {
    if(oct == ''){
        return ''
    }

    // Separa a parte inteira da parte fracionária
    const partes = oct.split('.');
    const parteInteira = partes[0];
    const parteFracionaria = partes[1];
    let fracao = 0;

    let decimal = parseInt(parteInteira, 8); //parte inteira
    
    if(parteFracionaria != undefined){

    // Converte a parte fracionária para decimal
    for (let i = 0; i < parteFracionaria.length; i++) {
        const digito = parseInt(parteFracionaria[i]);
        fracao += digito * Math.pow(8, -(i + 1));
    }
    }

    // Soma a parte inteira e a parte fracionária convertidas
    decimal += fracao;

    return decimal;
}
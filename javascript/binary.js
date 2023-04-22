export const bin_dec = (bin) => {

    if(bin == ''){
        return ''
    }

    // Separa a parte inteira da parte fracionária
    const partes = bin.split('.');
    const parteInteira = partes[0];
    const parteFracionaria = partes[1];
    let fracao = 0;

    let decimal = parseInt(parteInteira, 2); //parte inteira
    
    if(parteFracionaria != undefined){

    // Converte a parte fracionária para decimal
    for (let i = 0; i < parteFracionaria.length; i++) {
        const digito = parseInt(parteFracionaria[i]);
        fracao += digito * Math.pow(2, -(i + 1));
    }
    }

    // Soma a parte inteira e a parte fracionária convertidas
    decimal += fracao;

    return decimal;
}
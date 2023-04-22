export const hex_dec = (hex) => {
    if(hex == ''){
        return ''
    }

    if (!/^([0-9A-Fa-f]+)?(\.[0-9A-Fa-f]+)?$/.test(hex)) {
        hex = hex + '0';
      }
    
      // Separa a parte inteira da parte fracionária
      const partes = hex.split('.');
      const parteInteira = parseInt(partes[0], 16);
      const parteFracionaria = partes[1] || '0';
    
      // Converte a parte fracionária para decimal
      let fracao = 0;
      for (let i = 0; i < parteFracionaria.length; i++) {
        const digito = parseInt(parteFracionaria[i], 16);
        fracao += digito * Math.pow(16, -(i + 1));
      }
    
      // Soma a parte inteira e a parte fracionária convertidas
      const decimal = parteInteira + fracao;
    
      return decimal;
}
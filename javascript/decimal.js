export const dec_bin = (dec) => {
    if(dec == ''){
        return '';
    }

    dec = Number(dec);

    let binary = dec.toString(2);
    return binary;
}

export const dec_oct = (dec) => {
    if(dec == ''){
        return '';
    }

    dec = Number(dec);

    let octal = dec.toString(8);
    return octal;
}

export const dec_hex = (dec) => {
    if(dec == ''){
        return '';
    }

    dec = Number(dec);

    let octal = dec.toString(16);
    return octal.toUpperCase();
}
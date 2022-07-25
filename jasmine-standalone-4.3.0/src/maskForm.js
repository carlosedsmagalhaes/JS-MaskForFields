function maskForm(tipoDocumento, caracteres){

    switch(tipoDocumento){
        case 'RG': 
            caracteres = caracteres.replace(/\b(\d{2})(\d{3})(\d{3})(\d{1})\b/, "$1.$2.$3-$4")
            break;
        case 'CPF':
            caracteres = caracteres.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/,"$1.$2.$3-$4")

    }

    return caracteres
}


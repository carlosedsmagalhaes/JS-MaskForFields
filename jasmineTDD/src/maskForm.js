function maskForm(tipoDocumento, campoDocumento){

    switch(tipoDocumento){
        case 'RG': 
            campoDocumento = campoDocumento.replace(/\b(\d{2})(\d{3})(\d{3})(\d{1})\b/, "$1.$2.$3-$4")
            break;

        case 'CPF':
            campoDocumento = campoDocumento.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/,"$1.$2.$3-$4")
            break;

        case 'CNPJ':
            campoDocumento = campoDocumento.replace(/\b(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})\b/, "$1.$2.$3/$4-$5")
            break;
    }

    return campoDocumento
};


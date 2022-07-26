let form = document.querySelector('form')

form.addEventListener('submit', function(e){
    e.preventDefault()

    let nome           = form.elements.nome.value.toUpperCase()
    let email          = form.elements.email.value.toLowerCase()
    let tipoDocumento  = document.querySelector('select').value
    let inputDocumento = form.elements.documento.value

    let outDocumento = maskForm(tipoDocumento, removeCaracteres(inputDocumento)) 

    console.log(`Nome: ${nome} - Email: ${email} - ${tipoDocumento}: ${outDocumento}`)

});





function removeCaracteres(campo){

    expressaoRegular = /[^0-9a-zA-Z]+/
    campo = campo.split(expressaoRegular)

    let campoConcat = ''
    for (concat in campo){
        campoConcat += campo[concat]
    }

    return campoConcat
};


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



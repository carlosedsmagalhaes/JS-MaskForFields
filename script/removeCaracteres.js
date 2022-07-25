function removeCaracteres(campo){

    expressaoRegular = /[^0-9a-zA-Z]+/
    campo = campo.split(expressaoRegular)

    let campoConcat = ''
    for (concat in campo){
        campoConcat += campo[concat]
    }

    return campoConcat
};
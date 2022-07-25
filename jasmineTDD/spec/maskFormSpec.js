describe("maskForm", function(){
    it("Se o documento escolhido for RG, deve aplicar a máscara de RG", function(){
        expect(maskForm('RG', '583825813')).toEqual('58.382.581-3')
    });

    it("Se o documento escolhido for CPF, deve aplicar a máscara de CPF", function(){
        expect(maskForm('CPF', '54139560886')).toEqual('541.395.608-86')
    });

    it("Se o documento escolhido for CNPJ, deve aplicar a máscar de CNPJ", function(){
        expect(maskForm('CNPJ', '18570996000136')).toEqual('18.570.996/0001-36')
    })
});
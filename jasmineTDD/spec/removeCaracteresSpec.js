describe("removeCaracteres", function(){
    it("Se o campo contiver letras acentuadas as mesmas deverão ser retiradas", function(){
        expect(removeCaracteres('magalhãeçs')).toEqual('magalhes')
    });

    it("Se o campo contiver os demais caracteres especiais os mesmos deverão ser retirados", function(){
        expect(removeCaracteres('@_t3$t@nd0-#\c0m3çôU?/')).toEqual('t3tnd0c0m3U')
    });

    it("Se o campo contiver espaços os mesmos deverão ser retirados", function(){
        expect(removeCaracteres('   test      @ndo ')).toEqual('testndo')
    });
});
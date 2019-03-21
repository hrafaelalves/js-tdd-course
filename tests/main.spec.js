/* 
    Criando testes com MOCHA e CHAI
*/

describe('Main', function(){

    //roda uma vez, antes do bloco
    before(function(){

    });

    //roda uma vez, depois do bloco
    after(function(){

    });

    // roda todas as vezes, antes do bloco
    beforeEach(function(){

    });

    // roda todas as vezes, depois de cada bloco
    afterEach(function(){

    });

    describe('Method A', function(){
        context('Case 1', function(){

            it('should happen bla bla', function(){ //deveria acontecer bla bla

                // espera o que aconteça, é de fato o teste

                //Entrada de dados / Método sum(2, 2);
                // Espera retornar (4) => true | (3) => false => broken test (Quebrou o test)

            }) //roda o comando, o que deve acontecer

        }); //context separa os casos de testes do método
        
        context('Case 2', function(){
            it('should happen bla bla', function(){ //deveria acontecer bla bla

                // espera o que aconteça, é de fato o teste

                //Entrada de dados / Método sum(2, 2);
                // Espera retornar (4) => true | (3) => false => broken test (Quebrou o test)

            }) //roda o comando, o que deve acontecer

            it('should happen mimi', function(){ //deveria acontecer bla bla

                // espera o que aconteça, é de fato o teste

                //Entrada de dados / Método sum(2, 2);
                // Espera retornar (4) => true | (3) => false => broken test (Quebrou o test)

            }) //roda o comando, o que deve acontecer


        });
    });
    
    describe('Method B', function(){
        
    });

}); //describe serve para criar um bloco onde se testa os métodos de uma função


/* 
    Criando testes com MOCHA e CHAI
*/

describe('Main', function(){

    describe('Method A', function(){
        context('Case 1', function(){

            it('should happen bla bla', function(){ //deveria acontecer bla bla

                // espera o que aconteça, é de fato o teste

                //Entrada de dados / Método sum(2, 2);
                // Espera retornar (4) => true | (3) => false => broken test (Quebrou o test)

            }) //roda o comando, o que deve acontecer

        }); //context separa os casos de testes do método
        
        context('Case 2', function(){

        });
    });
    
    describe('Method B', function(){
        
    });

}); //describe serve para criar um bloco onde se testa os métodos de uma função

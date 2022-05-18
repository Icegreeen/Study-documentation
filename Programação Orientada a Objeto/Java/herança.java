
// "extends" estabelece a relaão de herança dom a classe Carro

public class HondaFit extends Carro {
    
    public HondaFit(MecanismoAceleracao mecanismoAceleracao) {

        String modelo = "Honda Fit";

        // chama o construtor da classe mãe, ou seja, a classe "Carro"
        super(modelo, mecanismoAceleracao);
    }
}
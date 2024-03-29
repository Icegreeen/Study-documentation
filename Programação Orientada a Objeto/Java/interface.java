
public interface Automovel {
    void acelerar();
    void frear();
    void acenderFarol();
}

public class Carro implements Automovel {
    /* ... */

    @Override 
    public void acelerar(){
        this.mecanismoAceleracao.acelerar();
    }

    @Override 
    public void frear(){
        /* código do carro para frear */
    }

    @Override
    public void acenderFarol(){
        /* código do carro para acender o farol */
    }

      /* ... */
}

public class Moto implements Automovel {

      /* ... */

    @Override 
    public void acelerar(){
        /* código específico da moto para acelerar */
    }

     @Override
    public void frear() {
        /* código específico da moto para frear */
    }

    @Override
    public void acenderFarol() {
        /* código específico da moto para acender o farol */
    }

    /* ... */
}
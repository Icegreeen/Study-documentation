Para uma linguagem de programação ser considerada orientada a objetos, deve haver quatro comportamentos característicos. São eles o encapsulamento, a herança, o polimorfismo e a abstração.

# Encapsulamento:

O encapsulamento é a capacidade que determinado método ou atributo de um objeto tem de se manter invisível. Ou seja, ele continua funcional, mas sem mostrar como. É aquele famoso pensamento de saber o que faz, mas não saber como se faz.

Isso tem sua razão. Para o programa, pouco interessa como determinado método é construído. O que de fato importa é que ele faça aquilo que promete, pois assim poderá ser utilizado com eficiência.

Isso garante uma camada extra de proteção para a aplicação, pois os detalhes de implementação não são revelados. Se essa é a intenção da pessoa que faz a programação, ela é garantida por meio da declaração de que aquele método é privado e não público.

# Herança:

Como o próprio nome diz, trata-se de uma relação de receber algo pré-existente. No caso da POO, a herança é um evento que ocorre entre classes. A doadora é chamada de classe-mãe. Já a classe que herda é chamada de filha.

Quando ocorre uma herança, a classe-filha herda as características da classe-mãe. Isso é bastante útil para um reaproveitamento de código, pois não seria necessário refazer algo que já existe. Parte-se de um ponto e se desenvolvem novos métodos.

# Polimorfismo:

Já o polimorfismo é uma característica inerente aos métodos dos objetos. Significa dizer que um mesmo método pode ser utilizado em diferentes objetos, de diferentes classes.

Podemos imaginar esse tipo de evento ocorrendo num sistema bancário: o extrato (método) mostra a movimentação da conta de clientes de determinada categoria (objeto). No entanto, pode-se usar essa funcionalidade para clientes no geral. Além disso, ele pode ser utilizado no sistema de outros bancos (classes) também!

# Abstração:

Também chamada de interface ou template. Muitos simplificam sua explicação como sendo uma espécie de mistura de encapsulamento e polimorfismo. A ideia principal é representar um objeto de forma abstrata, que seja obrigatoriamente herdado por outras classes.

Assim, é possível criar uma classe abstrata com atributos e métodos, mas sua implementação deve ser feita nas classes herdadas. Na programação, é chamada de superclasse, sendo que um objeto não pode ser criado diretamente dela.

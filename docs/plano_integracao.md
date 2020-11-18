---
id: planoIntegracao
title: Plano Integração
---

O projeto Track Cooler é composto pelos subsistemas de sistema eletrônico, estrutura, alimentação, e aplicativo. A visão geral da integração dos módulos do projeto são
apresentados na Figura 13.

## Comunicação

A comunicação entre o aplicativo e o Track Cooler é feita via Bluetooth. Esta
comunicação permite que o usuário veja a temperatura interna do cooler e o nível de
bateria, além de possibilitar a ESP32 de enviar alertas ao usuário e receber sua localização para que seja feita a comparação das distâncias e assim dar início seguimento (figura 1).
Para que seja possível a conexão da ESP32 com o usuário, habilita-se a biblioteca "BluetoothSerial.h", ela é responsável por inicializar a pilha que tornará possível que a ESP32
emparelhe com o celular do usuário, assim sendo possível além da conexão com outro
aparelho, o envio e recebimento de dados.

![Integração]()

<center>Figura 1 – Integração do subsistema de Eletrônica com o subsistema de Software. Fonte: Autor.</center>

Para que o aplicativo troque informações com o cooler foi necessário desenvolver
um código em Java usando a biblioteca nativa do Android. Assim, o primeiro passo para
realizar a conexão é verificar se o dispositivo possui um adaptador Bluetooth usando a
função BluetoothAdapter.getDefaultAdapter(), se o retorno for diferente de nulo significa que o celular é apto a fazer conexões. Em seguida é verificado se o Bluetooth do smartphone
está ativado através da chamada BluetoothAdapter.isEnabled() e, se verdadeiro, invocar a
função startDiscovery() para encontrar outros dispositivos disponíveis e próximos. Para
conectar a um dispositivo é preciso antes fazer o pareamento que consiste na troca de
informações, como nome e endereço MAC, além disso o app recebe um objeto do tipo
BluetoothDevice.

Com o BluetoothDevice em mãos é possível iniciar uma conexão entre os aparelhos
que permita a troca de dados. Para isso, o cooler implementou os mecanismos do servidor,
isso significa que ele irá aguardar por uma tentativa de conexão e, o aplicativo implementou os do cliente, ou seja, irá realizar um pedido de conexão com o servidor. O aplicativo
irá iniciar uma conexão chamando a função createRfcommSocketToServiceRecord(UUID),
em que o parâmetro passado é o UUID definido pelo servidor, usando o BluetoothDevice.
Essa função deve retornar um BluetoothSocket, com o qual é possível abrir um socket para
comunicação através do método connect(). Com o socket aberto é possível enviar dados
para o Bluetooth com o método write(byte[]) e receber com read(byte[]).

##  Alocação do sistema eletrônico na estrutura

Para a integração de sistemas eletrônicos com a parte estrutural, primeiramente
foi definido os requisitos que a estrutura deveria seguir para acomodar sensores, display
LCD e circuitos eletrônicos. Esses requisitos são:

* Compartimento para abrigar os sensores ultrassônicos em uma localização que permite seu correto funcionamento;
* Compartimento para abrigar o display LCD;
* Compartimento para abrigar o sensor de temperatura em uma localização que permite seu correto funcionamento;
* Possibilidade de fixação da válvula solenoide para permitir o escoamento de água
da parte interna do Track Cooler;
* Abrigo para os circuitos eletrônicos;
* Fácil acesso aos sensores e aos circuitos.

Para a acomodação dos sensores ultrassônicos foram feitos quatro alojamentos na
estrutura da caixa térmica, sendo todos com 20,4 mm de largura, 45,5 mm de comprimento
e 10 mm de profundidade. Dois dos sensores estão localizados na parte frontal para a
detecção de obstáculos (figura 3), e os outros dois na parte inferior da camada externa
da caixa térmica para detecção de desníveis (figura 4).

O compartimento que vai abrigar o display LCD, está localizado na parte frontal
da caixa térmica (figura 2), tendo 35 mm de largura, 80 mm de comprimento e 10 mm
de profundidade.


![Display]()

<center>Figura 2 – Display LCD integrado ao cooler. Fonte: Autor.</center>

![LCD Frontal]()

<center>Figura 3 – Visão frontal mostrando o LCD e os sensores ultrassônicos. Fonte: Autor.</center>

![Sensores]()

<center>Figura 4 – Vista da parte inferior com a válvula, sensores ultrassônicos, caixa de circuitos e baterias. Fonte: Autor.</center>

Diferentemente do sensor ultrassônico e display LCD, o sensor de temperatura
deve ficar na parte interna caixa térmica, e para permitir sua correta acomodação foi
feito um abrigo (figura 5) semicircular com 12 mm de raio e 86 mm de altura.

![Sensor Temperatura]()

<center>Figura 5 – Sensor de temperatura na parte interna. Fonte: Autor.</center>

Como já foi discutido em tópicos anteriores, será necessário a utilização de uma
válvula solenoide para permitir o escoamento da água proveniente do gelo que vai derreter
no interior do cooler. Para permitir a integração dessa válvula na estrutura do Track Cooler
foi feito um duto na parte inferior da caixa, que terá uma luva de PVC de 1/2"com rosca,
que vai facilitar a união da válvula solenoide a estrutura. As figuras 4 e 6 mostram a
localização da válvula na parte inferior, e o local do duto de escoamento na parte interna.

![Escoamento]()

<center>Figura 6 – Visão do interior com o duto para o escoamento da água. Fonte: Autor.</center>

A alocação da PCB, das duas pontes H, dos dois reles, do módulo GPS e da bússola
foi feita em uma caixa plástica de material ABS (figura 7) com 100 mm de largura,
110 mm de comprimento e 35 mm de altura. A caixa tem duas aberturas para permitir a
passagem dos dissipadores de calor das pontes H e pontos de fixação dos parafusos para
fixar as placas em suas devidas posições.

![Componetes eletrônicos]()

<center>Figura 7 –  Caixa dos componentes eletrônicos com os circuitos presos. Fonte: Autor.</center>

![Vista explodida]()

<center>Figura 8 –  Vista explodida circuitos e caixa dos componentes eletrônicos. Fonte: Autor.</center>

![Caixa dissipadores]()

<center>Figura 9 –  Parte inferior da caixa com os dissipadores para o lado de fora. Fonte: Autor.</center>

Para facilitar o acesso aos sensores ultrassônicos e ao display LCD, foram feitas
tampas de manutenção (figura 10). Essas tampas são parafusadas em frente aos sensores,
de modo que para realizar sua substituição, basta desparafusar essa tampa e efetuar a
troca. Elas são feitas de fibra de vidro, possuindo 65,5 mm de comprimento e 40,4 mm de
largura (para as tampa do sensor ultrassônico), e 100 mm de comprimento e 55 mm de
largura (tampa do display LCD).

![Tampas de manutenção]()

<center>Figura 10 –  Tampas de manutenção. Fonte: Autor.</center>

## Alocação do sistema de alimentação na estrutura

Para a integração do sistema de alimentação na estrutura, foi necessário encontrar
a localização ideal para as baterias, e o pino de conexão do carregador, além de criar o
design da carcaça do carregador.

A bateria ficou localizada na parte inferior da caixa térmica, próxima a região traseira. Ela foi colocada nessa parte para contribuir em manter o CG (centro de gravidade)
o mais próximo possível do solo, o que aumenta a estabilidade do Track Cooler. Na figura 4 é possível observar as duas baterias presas com duas abraçadeiras.

O pino de conexão do carregador escolhido foi um conector P4 fêmea, que está
localizado em um furo feito na cantoneira transversal traseira do chassi. Essa localização
foi escolhida por estar próximo das baterias e em um local de fácil acesso.

![Localização do conector]()

<center>Figura 11 – Localização do conector P4. Fonte: Autor.</center>

A carcaça do carregador, foi feita em impressora 3D com material ABS. Suas
dimensões são 154 mm de comprimento, 103 mm de largura e 64 mm de altura. A figura 12 mostra o carregador aberto com a PCB e os transformadores em seu interior.

![Carregador]()

<center>Figura 12 – Carregador. Fonte: Autor.</center>

![Integração dos Subsistemas]()

<center>Figura 13 – Integração de todos os subsistemas do Track Cooler. Fonte: Autor.</center>

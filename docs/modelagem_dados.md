---
id: modelagemDados
title: Modelagem Dados
---

Segundo ARAÚJO (2008), a modelagem de sistemas, tanto a nível funcional quanto de dados, é
um requisito fundamental para a obtenção de produtos de software de maior qualidade e
confiabilidade.

Nessa seção, foi especificada a modelagem dos dados que serão utilizados no desenvolvimento do aplicativo Track Cooler.

## Diagrama de Sequência

O diagrama de sequência é uma solução de modelagem UML dinâmica, que incide
na representação das interações entre os objetos em várias linhas de vida. Descreve como
objetos e componentes interagem uns com os outros para concluir um processo, função
ou operação.

O diagrama do fluxo inicial como vemos na Figura 1, mostra a interação de dados
entre os módulos do sistema, ao usuário acessar a aplicação pela primeira vez, mostrando
o fluxo de cadastro do nome do usuário e a transmissão de dados com o cooler.


![Fluxo Inicial](https://github.com/track-cooler/app_track_cooler/blob/docs/docs/assets/fluxoIncial.png?raw=true)

<center>Figura 1 – Diagrama de Sequência - Fluxo Inicial. Fonte: Autor.</center>

O diagrama do fluxo de informação como vemos na Figura 2, mostra a interação
de requisição, troca e visualização de dados entre o celular e o cooler, bem como a gravação
das informações na memória do celular.

![Fluxo Informação](https://github.com/track-cooler/app_track_cooler/blob/docs/docs/assets/fluxoInforma%C3%A7%C3%B5es.png?raw=true)

<center>Figura 2 – Diagrama de Sequência - Fluxo de Informação. Fonte: Autor.</center>

O diagrama do fluxo de acessibilidade como vemos na Figura 3, mostra como serão
feitas as modificações de acessibilidade, indicando a sequência para realizar a alteração
da fonte das letras, a alteração do contrastes de cores e a execução dos comandos de voz.

![Fluxo Acessibilidade](https://github.com/track-cooler/app_track_cooler/blob/docs/docs/assets/fluxoAcessibilidade.png?raw=true)

<center>Figura 3 – Diagrama de Sequência - Fluxo de Acessibilidade. Fonte: Autor.</center>

O diagrama do fluxo de configuração como vemos na Figura 4, mostra a interação
do sistema e o cooler depois de feitas as configurações gerais do aplicativo, ilustrando as
configurações de Bluetooth e localização referente ao dispositivo celular e o modo seguir
do cooler.

![Fluxo Configuração](https://github.com/track-cooler/app_track_cooler/blob/docs/docs/assets/fluxoConfigura%C3%A7%C3%B5es.png?raw=true)

<center>Figura 4 – Diagrama de Sequência - Fluxo de Configuração. Fonte: Autor.</center>

##  Diagrama de Estado

Usado durante a etapa de projeto do sistema, o diagrama de estados permite a
modelagem de diversos estados de um objeto durante o seu ciclo de vida. Os diagramas
de estados mostrados nas Figuras 5 e 6 apresentam uma especificidade em relação ao
objeto que está sendo modelado, expondo os estados de cadastro de nome e os estados
comportamentais das funcionalidade do sistema.

![Diagrama Estado Cadastro](https://github.com/track-cooler/app_track_cooler/blob/docs/docs/assets/diagrama_de_estado02.jpg?raw=true)

<center>Figura 5 – Diagrama de Estado - Cadastro. Fonte: Autor.</center>

![Diagrama Estado Usuário](https://github.com/track-cooler/app_track_cooler/blob/docs/docs/assets/diagrama_de_estado01.2.jpg?raw=true)

<center>Figura 6 – Diagrama de Estado - Usuário padrão. Fonte: Autor.</center>

##  Diagrama de Pacotes

O diagrama de pacotes como vemos na Figura 7, é usado para simplificar módulos,
através do agrupamento dos módulos em pacotes. Um pacote é uma coleção de elementos UML logicamente relacionados que ao ser criado permite uma visualização geral do
software modelado.

![Diagrama Pacotes](https://github.com/track-cooler/app_track_cooler/blob/docs/docs/assets/diagrama_de_pacotes.png?raw=true)

<center>Figura 7 – Diagrama de Pacotes. Fonte: Autor.</center>

## Diagrama de Comunicação

O diagrama de comunicação como vemos na Figura 8, mostra como os objetos
interagem, mostrando como as mensagens são transmitidas de um objeto para o outro, é
utilizado na etapa arquitetural do projeto.

![Digrama Comunicação](https://github.com/track-cooler/app_track_cooler/blob/docs/docs/assets/Diagrama_de_Comunica%C3%A7%C3%A3o.png?raw=true)

<center>Figura 8 – Diagrama de Comunicação. Fonte: Autor.</center>


## Referências

> * ARAÚJO, M. A. P. Modelagem de dados – teoria e prática. 2008. Acessado em
2020-10-11. Disponível em: <https://www.cin.ufpe.br/~rrbs/pronatec/Introdu%e7%
e3o%20a%20Modelagem%20de%20Dados.pdf>.

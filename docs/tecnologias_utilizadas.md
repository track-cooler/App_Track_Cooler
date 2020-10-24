---
id: tecUtilizadas
title: Tecnologias Utilizadas
---

As tecnologias utilizadas neste projeto estão listadas abaixo.

## React Native

React Native é um framework javascript para o desenvolvimento de aplicativos em
múltiplas plataformas, como Android e IOS. Ele combina componentes do React - outro
framework javascript, mas para desenvolvimento web - com os componentes nativos de
cada plataforma para o qual está sendo desenvolvido. Esse framework foi escolhido, pois
alguns membros já têm familiaridade com a tecnologia, além de ser fácil de aprender e
ser amplamente usado, inclusive por grandes empresas, como o Facebook.

## Android

Android é um dos sistemas operacionais móveis mais usados e por isso foi escolhido
como plataforma para o aplicativo, além de ser mais fácil e barato de desenvolver, já que
não tem tantos requisitos, como o IOS, por exemplo. Mais especificamente, serão usados
as API 23 (Android Marshmallow) à 28 (Android Pie) que, de acordo com o site oficial
do Android, são as mais utilizadas.

## Travis CI

Travis CI é uma ferramenta de teste e deploy integrada com o Github que executa
os testes desenvolvidos a cada commit feito. Será utilizado para garantir que novas features
ou correções feitas não gere novos bugs e comportamentos inesperados.

## Bluetooth

Bluetooth é uma tecnologia que permite a conexão e comunicação entre dois dispositivos através de rádio frequência. Nos últimos anos o Bluetooth se tornou uma das principais formas de conectar e trocar informações entre dispositivos sem fio. Fones de
ouvido, mouse, teclado, celular, relógios inteligentes são alguns exemplos de dispositivos
que usam essa tecnologia e, por esse amplo uso e crescimento, foi escolhida essa tecnologia
para fazer a comunicação entre o aplicativo e o Track Cooler.

## Reconhecimento de voz

O aplicativo permitirá que o usuário o utilize por meio de comandos de voz e para
isso será usado o pacote @react-native-community/voice do React Native, que utiliza os
motores de reconhecimento de fala presentes no dispositivo.

## AsyncStorage

Por não haver necessidade de guardar muitos dados, uma estrutura de banco de
dados não será utilizada. Ao invés, será utilizado o AsyncStorage, um sistema chave-valor
que armazena diferentes tipos de dados de forma simples e fácil.


## Comunicação das Tecnologias

### Travis CI e github

Ao commitar uma nova modificação do código no repositório do github será feita
uma verificação através de uma build que possui os testes que irão validar o código, é
possível fazer diversas alterações na build para que os testes sejam mais eficientes.

###  Integração React Native e AsyncStorage

O AsyncStorage é um banco que utiliza o esquema de chave-valor para armazenar
e persistir dados em dispositivos Android. O armazenamento é feito apenas com dados no
formato string necessitando da conversão dos objetos que compõem nome e senha de cada
usuário em tipo string por meio da função JSON.stringfy() durante o armazenamento e
JSON.parse() durante a leitura.

### Integração bluetooth entre celular e sistema embarcado

Para fazer a comunicação será utilizada a biblioteca ‘react-native-ble-plx’ que faz
toda a manipulação de escrita e leitura dos dados transmitidos. A transmissão dos dados é
feita através do método Base64 para codificação de dados, sendo necessário a codificação
e decodificação das informações transmitidas. Nessa biblioteca é utilizado o conceito de
streams que consiste em uma geração de objetos dinâmicos, em outras palavras, objetos
pelos quais contêm um conjunto de informações, aparecem e desaparecem de acordo com
as operações que ocorrem durante um determinado processo, que será gerenciado pelo
React.

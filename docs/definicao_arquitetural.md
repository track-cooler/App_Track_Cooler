---
id: definicaoArquitetural
title: Definicao Arquitetural
---

Uma arquitetura monolítica é o modelo unificado tradicional para o design de
um programa de software. A escolha se deu visto que o escopo do projeto está bem
acoplado e que vamos utilizar bibliotecas externas e pacotes do próprio React Native para
as funcionalidades da aplicação.
O software monolítico é projetado para ser independente, os componentes do programa são interconectados e interdependentes, em vez de fracamente acoplados, como é
o caso dos programas de software modulares. Em uma arquitetura bem acoplada, cada componente e seus componentes associados devem estar presentes para que o código seja
executado ou compilado.

Figura – Diagrama Arquitetural de Software.


##  Descrição do Sistema

Esses são os componentes que correspondem às necessidades de negócio identificadas para o projeto Track Cooler. Esse modelo é a forma de desenvolver um sistema a fim de que todas as funções estejam em um único processo.

* **Assets:** Componente do sistema, que exibe nossos recursos de folhas de estilo,
scripts, fontes e imagens, ou seja, de interface gráfica do sistema.

* **Monitoramento:** Os dados envidados pelo bluetooth como temperatura, tempo
de bateria e conexão, provendo as interfaces para controle, observação e notificação das mesmas. Será utilizado o pacote react-native-ble-plx para fazer a comunicação e manipulação de escrita e leitura dos dados transmitidos.

* **Comando de voz:** Pacote interno do React Native, que utiliza os motores de
reconhecimento de fala presentes no dispositivo.

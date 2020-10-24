---
id: casoUso
title: Especificação de Caso de Uso
---

## Visão de Casos de Uso

Caso de uso é a representação de uma unidade funcional que descreve um conjunto
de ações que devem ser exercidas pela aplicação, dada determinada ação de um ou mais
atores do sistema, que por sua vez recebem o retorno destas ações. É muito utilizado
na representação de requisitos funcionais de aplicações. Diagramas de caso de uso são
representações gráficas dos casos de uso e dos atores com os quais interagem.

![digramaCasoUso](https://github.com/track-cooler/app_track_cooler/blob/docs/docs/assets/casoDeUso.png?raw=true)

<center>Figura – Diagrama de casos de uso. Fonte: Autor.</center>

### UC01 - Cadastrar nome do usuário

* Descrição: Permitir o cadastro do nome do usuário para ter uma aplicação mais
personalizada.
* Atores: Usuário.
* Pré-condições: Aplicação instalada.
* Fluxo Principal:

      – 1. O Usuário toca no ícone “configurações” na tela inicial.
      – 2. O Usuário preenche o campo de texto "Seu nome".

* Fluxo Alternativo: Não se aplica.
* Fluxo de exceção: Não se aplica.

### UC02 - Ver informações do Cooler

* Descrição: Permitir a visualização das informações do cooler para monitorá-lo.
* Atores: Usuário
* Pré-condições: Estar conectado ao cooler.
* Fluxo Principal:

      - 1. O usuário toca no ícone de “Informações do Cooler”

*  Fluxo Alternativo: Não se aplica.
* Fluxo de exceção: Não se aplica.

### UC03 - Atualizar as informações do cooler

* Descrição: Permitir a visualização das informações mais atuais do cooler.
* Atores: Usuário
* Pré-condições: A aplicação deve estar conectada ao cooler.
* Fluxo Principal:

      – 1. Tocar no ícone Atualizar Cooler na tela inicial.
      – 2. Tocar no botão Informações Cooler.

* Fluxo Alternativo: Não se aplica.
* Fluxo de exceção: Se o sistema não conseguir atualizar as informações do cooler.

      – 1. Retornará um erro de comunicação.

###  UC04 - Conectar com o Bluetooth do Cooler

* Descrição: Permitir a conexão entre a aplicação e o cooler para a troca de informações.
* Atores: Usuário.
* Pré-condições: Ambos bluetooths do celular e do cooler devem estar ativados e
eles devem estar dentro da distância mínima de pareamento.
* Fluxo Principal:

      – 1. O usuário toca no ícone “Conectar Cooler”.
      – 2. O ator seleciona o cooler desejado.

* Fluxo Alternativo: Não se aplica.
* Fluxo de exceção: Se o sistema não conseguir se conectar ao bluetooth do cooler.

      – 1. Retornará uma mensagem de alerta ao usuário.

### UC05 - Ligar/Desligar o Cooler

* Descrição: Permitir que o usuário decida quando o cooler deve seguí-lo.
* Atores: Usuário.
* Pré-condições: O aplicativo deve estar conectado ao cooler.
* Fluxo Principal:

      – 1. Tocar no ícone de Configurações.
      – 2. Ativar/Desativar a opção Modo Seguir.

* Fluxo Alternativo: Não se aplica.
* Fluxo de exceção: Não se aplica.

###  UC06 - Abrir configurações GPS e Bluetooth

* Descrição: Ativar/Desativar GPS e Bluetooth.
* Atores: Usuário.
* Pré-condições: Estar conectado a aplicação.
* Fluxo Principal:

      – 1. Tocar no ícone de Configurações.
      – 2. Ativar/Desativar as opções de Bluetooth e GPS.

* Fluxo Alternativo: Não se aplica.
* Fluxo de exceção: Se o sistema não conseguir se conectar ao bluetooth do celular
e/ou GPS.

      – 1. Retornará uma mensagem de alerta ao usuário.

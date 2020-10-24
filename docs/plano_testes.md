---
id: planoTeste
title: Plano de Testes - Especificação das Histórias de Teste
sidebar_label: Plano de Testes
---


##  US01 - Cadastrar nome do usuário

* TS01 - Nome cadastrado com sucesso

    - **Descrição:** Este requisito de teste verificará se o nome do usuário foi cadastrado de maneira correta.
    - **Pré-condições:** O usuário deve estar na tela inicial.
    - **Pós-condições:** Mostrar o nome do usuário na tela principal.
    - **Dados necessários:** O nome do usuário.

* TS02 - Nome cadastrado com erro

    - **Descrição:** Este requisito de teste verificará se o nome do usuário foi cadastrado de maneira correta. Sem caracteres especiais.
    - **Pré-condições:** O usuário deve estar na tela inicial.
    - **Pós-condições:** O usuário deverá ser informado de que o nome é inválido.
    - **Dados necessários:** Possuir o nome válido.

## US02 - Ver informações do cooler

* TS03 - Consultar as informações do cooler

    - **Descrição:** Este requisito de teste verificará se as informações do cooler estão
    sendo apresentadas de maneira correta.
    - **Pré-condições:** Está conectado com o cooler.
    - **Pós-condições:** Visualizar a temperatura, a quantidade de bateria e o histórico de conexão com o cooler apresentando a data e hora de conexão.
    - **Dados necessários:** Temperatura, quantidade de bateria e histórico de conexão com o cooler.

* TS04 - Falha na consulta das informações do cooler

    - **Descrição:** Este requisito de teste verificará se as informações do cooler não
    estão sendo apresentadas de maneira correta.
    - **Pré-condições:** Usuário deve entrar na tela de informações do cooler.
    - **Pós-condições:** Usuário não conseguir verificar as informações do cooler.
    - **Dados necessários:** Não se aplica.

## US03 - Atualizar informações do cooler

* TS05 - Falha ao receber os dados via bluetooth

    - **Descrição:** Este requisito de teste verificará se as informações do cooler não
    estão sendo recebidas pelo dispositivo.
    - **Pré-condições:** Usuário deve entrar na tela de informações do cooler.
    - **Pós-condições:** Usuário não conseguir atualizar as informações do cooler.
    - Dados necessários: Não se aplica.

* TS06 - Falha ao atualizar os dados via bluetooth

    - **Descrição:** Este requisito de teste verificará se as informações do cooler não
    atualizadas com sucesso.
    - **Pré-condições:** Usuário deve entrar na tela de informações do cooler.
    - **Pós-condições:** Visualizar a temperatura, a quantidade de bateria e o histórico de conexão mais recentes possível.
    - **Dados necessários:** Temperatura, quantidade de bateria e histórico de conexão com o cooler.

## US04 - Conectar com bluetooth do cooler

* TS07 - Sucesso ao conectar com o bluetooth

    - **Descrição:** Este caso de teste verificará se a conexão bluetooth entre o celular
    e o cooler foi estabelecida com sucesso.
    - **Pré-condições:** Usuário deve abrir o aplicativo em um dispositivo android,
    selecionar a opção de conectar via bluetooth com o cooler próximo do mesmo.
    - **Pós-condições:** Usuário conseguir realizar operação de comandando do cooler
    ao seguí-lo.
    - **Dados necessários:** Não se aplica.

## US05 - Poder ligar/desligar o cooler

* TS08 - Falha ao enviar os dados de controle via bluetooth

    - **Descrição:** Este requisito de teste verificará se os dados de ligar/desligar foram
    enviados para o cooler com sucesso.
    - **Pré-condições:** Usuário deve entrar na tela de controle do cooler.
    - **Pós-condições:** Usuário não conseguir controlar o cooler.
    - **Dados necessários:** Não se aplica.

## US06 - Abrir configurações (gps e bluetooth)

* TS09 - Sucesso ao ligar o GPS

    - **Descrição:** Este caso de teste verificará se o GPS foi ativado com sucesso.
    - **Pré-condições:** Usuário deve abrir o aplicativo em um dispositivo android,
    abrir as configurações e ativar o GPS.
    - **Pós-condições:** O GPS está ativado.
    - **Dados necessários:** Não se aplica.

* TS10 - Falha ao ligar o GPS

    - **Descrição:** Este caso de teste verificará se ocorreu alguma falha ao ativar o
    GPS.
    - **Pré-condições:** Usuário deve abrir o aplicativo em um dispositivo android,
    abrir as configurações e ativar o GPS.
    - **Pós-condições:** O GPS não está ativado e uma mensagem de falha é apresentada ao usuário.
    - **Dados necessários:** Não se aplica.

* TS11 - Sucesso ao ligar o Bluetooth

    - **Descrição:** Este caso de teste verificará se o Bluetooth foi ativado com sucesso.
    - **Pré-condições:** Usuário deve abrir o aplicativo em um dispositivo android, abrir as configurações e ativar o Bluetooth.
    - **Pós-condições:** O Bluetooth está ativado.
    - **Dados necessários:** Não se aplica.

* TS12 - Falha ao ligar o Bluetooth

    - **Descrição:** Este caso de teste verificará se ocorreu alguma falha ao ativar o Bluetooth.
    - **Pré-condições:** Usuário deve abrir o aplicativo em um dispositivo android, abrir as configurações e ativar o Bluetooth.
    - **Pós-condições:** O Bluetooth não está ativado e uma mensagem de falha é
      apresentada ao usuário.
    - **Dados necessários:** Não se aplica.

##  US07 - Exibir alerta caso o cooler se desconecte

* TS13 - Exibir alerta ao desconectar do cooler abruptamente

    - **Descrição:** Este caso de teste verificará se o alerta foi exibido ao desconectar o dispositivo do cooler sem que o usuário tenha selecionado essa opção.
    - **Pré-condições:** Dispositivo deve estar conectado ao cooler e a conexão deve
      ser desfeita.
    - **Pós-condições:** Alerta informando que o cooler foi desconectado.
    - **Dados necessários:** Não se aplica.

##  US08 - Exibir alerta caso o cooler não consiga seguir a pessoa

* TS14 - Exibir alerta ao após cooler informar que não é possível acompanhar o
usuário

    - **Descrição:** Este caso de teste verificará se o alerta foi exibido após o cooler informar que encontrou um obstáculo e não é possível contorná-lo.
    - **Pré-condições:** Dispositivo deve estar conectado ao cooler e este informar que não é possível prosseguir.
    - **Pós-condições:** Alerta informando que o cooler não está seguindo o usuário.
    - **Dados necessários:** Informação do cooler de que não é possível continuar.

## US09 - Mudança de contraste no aplicativo

* TS15 - Modo Daltonico

    - **Descrição:** Este caso de teste verificará se a mudança de contraste de cores da aplicação ocorreu de maneira correta.
    - **Pré-condições:** Usuário deve abrir o aplicativo em um dispositivo android, abrir as configurações e escolher a opção de mudar o contraste da aplicação.
    - **Pós-condições:** As cores e contraste da aplicação mudam, e uma mensagem
      é exibida ao usuário para mostrar que as mudanças foram feitas.
    - **Dados necessários:** Não se aplica.

## US10 - Alterar tamanho da fonte da letra

* TS16 - Alterar tamanho da fonte da letra

    - **Descrição:** Este caso de teste verificará se o tamanho da fonte do aplicativo foi alterada após escolha de mudança do tamanho da fonte.
    - **Pré-condições:** Usuário deve abrir o aplicativo em um dispositivo android e escolher nas configurações a opção de alterar tamanho da fonte.
    - **Pós-condições:** O tamanho da fonte no aplicativo deve ter sido alterada.
    - **Dados necessários:** Não se aplica.

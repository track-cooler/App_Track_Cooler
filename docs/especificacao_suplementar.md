---
id: espSuplementar
title: Especificação Suplementar
---

## Introdução

Este tópico procura identificar principalmente os requisitos não funcionais, estes
não tratados na especificação de caso de uso, entre outros requisitos dentro do domínio
de atuação do projeto Track Cooler. Com isso busca-se uma ampliação da visão para que
não seja focada simplesmente em funcionalidades (requisitos funcionais), mas também
pelo que ocorre colaborativamente para sucesso da aplicação.

## Escopo

O Track Cooler é um projeto que visa a criação de um cooler que seguirá o usuário de forma automática. O projeto é composto por dois componentes, o cooler com os
sensores e mecanismos necessários, e um aplicativo que se conectará ao cooler por meio
de bluetooth.

## Objetivo

O objetivo deste tópico é levantar os requisitos não funcionais do aplicativo, o
componente do cooler não será tratado aqui. Serão elicitados requisitos de usabilidade,
confiabilidade, desempenho e suportabilidade, pois dizem respeito à qualidade e experiência de usuário.

## Metodologia   

O grupo se reuniu a fim de definir quais as áreas nas quais esses requisitos poderiam
estar inseridos, dentro do domínio do aplicativo Track Cooler.

## Módulos

### Usabilidade

A aplicação deve se importar com sua usabilidade, que é a facilidade com a qual
pessoa consegue realizar e se familiarizar cada tarefa e fluxo no aplicativo.

#### Requisito de Usabilidade 1:

A aplicação possibilitará que as pessoas com deficiência visual tenham um recurso
de áudio, que as auxiliem na utilização de recursos da aplicação.

#### Requisito de Usabilidade 2:

A aplicação permitirá que o usuário mude a cor da aplicação (máximo de 3 padrões
pré-definidos), para que adequação haja ao tipo de leitura dele.

#### Requisito de Usabilidade 3:

A aplicação permitirá que o usuário ajuste o tamanho da fonte, adequando-a para
a opção que mais o agrade.

### Confiabilidade

#### Requisito de Confiabilidade 1:

O sistema deve deixar o usuário mais confortável ao utilizá-lo, evitando preocupações
como a segurança da comunicação entre o celular e o cooler, e evitar que mais de uma pessoa consiga se conectar. Para isso, a aplicação irá utilizar o PIN do bluetooth
a fim de garantir que apenas o usuário tenha o controle do Track Cooler.

### Desempenho  

O sistema deve ser o mais otimizado possível, para rodar de forma mais veloz em
qualquer dispositivo.

#### Requisito de Desempenho 1:

O sistema deve comunicar ao usuário que ele foi desconectado do cooler ou que o
cooler encontrou um impedimento e não pode seguí-lo. Para isso, a aplicação enviará
uma notificação e tentará reconectar ao cooler a cada 10 segundos.

### Suportabilidade

#### Requisito de Suportabilidade 1:

A aplicação deve ter suporte na plataforma Android (a partir da versão 6.0 Marshmallow), para que a grande maioria de usuários de smartphones possam utilizar o
aplicativo.

## Conclusão

Podemos perceber que os requisitos não funcionais, apesar de muitas vezes não
serem citados, são muito importantes. Contemplam contextos específicos e na verdade
possuem grande impacto no sucesso e funcionamento de uma aplicação. Aqui, com a
especificação suplementar, pudemos ver como o projeto Track Cooler é impactado por eles e sua relevância.

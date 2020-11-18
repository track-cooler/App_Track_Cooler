---
id: inovacao
title: Inovação
---


O aplicativo para o Track Cooler visa facilitar a locomoção do usuário e ter uma maior comodidade nos momentos de lazer.

A inovação do sistema se dará através da acessibilidade para usuário com deficiência visual, no que diz respeito à deficiência visual (DV), a Organização Mundial de Saúde (OMS) estima que em países como o Brasil, 1 a 1,5% apresenta tal necessidade [SONZA E SANTAROSA, 2003]. “Assim, no Brasil haveria cerca de 1,6 milhão de pessoas com algum tipo de deficiência visual, sendo a maioria delas com baixa visão” [GIL, 2000].  Além do  daltonismo que é uma discromatopsia (deficiência na visão que dificulta a percepção das cores), segundo o Conselho Federal de Medicina o daltonismo acomete cerca de 5% da população mundial.

Portanto, a solução foi pensada e contempla o recurso de acessibilidade para ajudar pessoas com deficiência visual a selecionarem as opções presentes em menus do aplicativo. O sistema contará com o comando de voz, para ajudar na navegação e  auxiliará o usuário interagir com o aplicativo. Será possível que o usuário mude a cor da aplicação, assim como ajustar o tamanho da fonte da letra, para melhor visualização das informações.

## Comando de Voz

Com o propósito de minimizar a carência à acessibilidade para o usuário com
problema de visão, o APP Track Cooler proporciona um ambiente de integrativo com o
usuário, que dá ao deficiente visual a praticidade na comunicação e condução total de sua
navegação pelo aplicativo sem a necessidade de qualquer outro tipo de auxílio. O usuário
com deficiente visual é capaz de acionar os recursos, interagir e comunica-se no ambiente
pelo modo tradicional ou apenas por comandos vocais realizados pelo microfone do seu smartphone (LIMA, 2015).

Para o reconhecimento de voz no React Native ou também podemos dizer que
para a conversão de voz em texto vamos usar o "Voicecomponent"fornecido pela biblioteca
"react-native-voice"que possui uma série de eventos que podem ser usados para iniciar ou
parar o reconhecimento de voz e para obter o status de reconhecimento de voz. Quando
inicializamos a tela, definimos alguns retornos de chamada de evento no construtor, que
serão chamados automaticamente quando o evento acontecer.

Para a conversão de texto em fala com vozes naturais no React Native, usamos
a biblioteca react-native-tts pela facilidade de integração com os componentes podemos
ver na Figura 1. O componente Tts fornece suporte para diferentes vozes e tem ouvintes
para cada estado de evento que o usuário precise como iniciar e parar.

![Comando de Voz]()

<center>Figura 1 – Comando de Voz. Fonte: Autor.</center>

## Mudar o Tamanho da Letra

Segundo PASSOS (2018), Para pessoas com baixa visão, as principais dificuldades são com o
tamanho da fonte e a cor do texto. Elas podem usar softwares e programas de ampliação
de texto, que facilitam em muito a leitura de conteúdo. Um comando muito utilizado para
auxiliar a leitura é SHIFT+ALT+PRINT SCREEN que coloca a tela do computador em
auto contraste.

Para pessoas com uma deficiência visual mais severa, uma medida importante a ser
feita é deixar o conteúdo em formato de texto. Por mais que as tecnologias extraia o texto
de uma imagem, isso não garante que haja uma boa identificação do que está escrito,
porque isso depende da resolução da foto. Ao fazer a extração do texto, é preciso ter
uma resolução mínima de 300 dpi – que são “pontos por polegada”. Entretanto, quanto
maior ‘dpi’ de uma digitalização, maior o volume do arquivo. Geralmente, quem faz a
digitalização de um documento para PDF ou imagem não se preocupa com este tipo de
coisa, por isso é comum o uso de uma resolução de 150 dpi por ser mais leve. Só que isso
diminui a qualidade do documento e consequentemente dificulta a leitura dos softwares.
Às vezes a qualidade é tão ruim que até quem enxerga bem tem dificuldade. Também
é importante uma legenda descritiva das imagens, como “foto de uma homem, sentado
em uma cadeira, à beira mar, no fim de tarde”. É uma descrição básica e objetiva, sem
necessidade de detalhes, mas que permite uma boa visualização da imagem (PASSOS, 2018).

A AsyncStorage é uma API nativa do React Native, utilizada para armazenar
dados persistentes no dispositivo. É uma forma de salvar dados no formato chave e valor.
A AsyncStorage se torna indispensável quando precisamos armazenar dados em nosso
dispositivo de forma definitiva e não temporária, um exemplo disso, quando temos uma
página de login e gostaríamos de guardar o login ou id do usuário para que o mesmo seja
exibido sem a necessidade do usuário informar esse login ao retornar para o app (GARCIA, 2019).

O tamanho da letra é padronizada e guardada na AsyncStorage, quando o usuário altera o tamanho da letra na página de configurações é emitido um evento para a
AsyncStorage fazer a troca da letra e assim atualizando o estado do sistema como mostra
a Figura 2.

![Mudar o Tamanho da Letra]()

<center>Figura 2 – Mudar o Tamanho da Letra. Fonte: Autor.</center>

## Mudar de Contraste

Daltonismo consiste em um distúrbio de visão que afeta a percepção das cores.
Mas como, exatamente, essas pessoas enxergam? Dentre muitas variações, existem três
que são mais comuns: a protanomalia, a deuteranomalia, e a tritanomalia. Esses distúrbios
consistem na ausência de percepção do vermelho, do verde e do azul, respectivamente (SAMPAIO).

A nossa retina possui bastonetes, que captam luminosidade, e cones, que reconhecem as cores. 3 tipos de cones — especializados em reconhecer azul, verde e vermelho —
são responsáveis por formar todo o espectro de cores visíveis (BRAGA, 2015).

Daltonismo não é o único motivo para levar a sério a escolha das cores em uma
interface: existem outras deficiências visuais, como a catarata e baixa visão, comuns na
terceira idade, que é uma fatia cada vez maior de usuários; e, mesmo com uma visão
normal, o contexto afeta como alguém percebe e enxerga as cores: brilho e contraste do
monitor, a iluminação do ambiente e a hora do dia (BRAGA, 2015).

Para sanar esse problema e deixar o nosso aplicativo mais acessível, foi implementado a mudança de contraste de cores. O processo é muito parecido com a de alteração
do tamanho da letra. O contraste é padronizado e guardado na AsyncStorage, quando o
usuário altera o contraste de cores na página de configurações é emitido um evento para a
AsyncStorage fazer essa troca de contraste e assim atualizando o estado do sistema como
mostra a Figura 3.

![Mudar de Contraste de Cores]()

<center>Figura 3 – Mudar de Contraste de Cores. Fonte: Autor.</center>

## Referências

> * SONZA, A. e SANTAROSA, L. M. C. (2003) “Ambientes Digitais Virtuais: Acessibilidade aos Deficientes Visuais”. Disponível em http://www.cinted.ufrgs.br/eventos/cicloartigosfev2003/andrea.pdf, acessado em 30/12/2010.

> * GIL, M. (2000) “Deficiência Visual. Ministério da Educação. Secretaria de Educação à Distância, n° 1/2000”. Disponível em http://www.dominiopublico.gov.br/download/texto/me000344.pdf, acessado em 30/12/2010.

> * Conselho Federal de Medicina (2004 ). Disponivel em https://portal.cfm.org.br/index.php?option=com_content&view=article&id=1519:&catid=3

> * LIMA J. R., e. a. Reconhecimento de voz para inclusão de deficientes visuais em
ambientes virtuais de aprendizagem. 2015. Acessado em 2020-12-11. Disponível em:
<http://www.tise.cl/volumen11/TISE2015/23-29.pdf>.

> * PASSOS, A. Acessibilidade em periódicos para pessoas com deficiência visual. 2018.
Acessado em 2020-12-11. Disponível em: <https://www.periodicosdeminas.ufmg.br/
acessibilidade-em-periodicos-para-pessoas-com-deficiencia-visual/>.

> * GARCIA, E. O que é asyncstorage no react native. 2019. Acessado em
2020-12-11. Disponível em: <https://medium.com/@eduardo.diogo/o-que-%C3%
A9-asyncstorage-6771ad252754>.

> * SAMPAIO, M. Como tornar o seu site acessível para daltônicos. Acessado em
2020-12-11. Disponível em: <http://blog.handtalk.me/acessibilidade-daltonicos/>.

> * BRAGA, C. Acessibilidade: o impacto das cores. 2015. Acessado em 2020-12-11. Disponível em: <https://brasil.uxdesign.cc/
acessibilidade-o-impacto-das-cores-bfc0d60420db>.

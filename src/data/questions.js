export const questions = [
    {
        id: 1,
        chapter: 1,
        text: "Qual das seguintes afirmações descreve um objetivo de teste válido?",
        options: [
            { id: 'a', text: "Provar que não existem defeitos por corrigir no sistema sob teste" },
            { id: 'b', text: "Provar que não irão ocorrer falhas após a implementação do sistema em produção" },
            { id: 'c', text: "Reduzir o nível de risco do objeto de teste e aumentar a confiança no nível de qualidade" },
            { id: 'd', text: "Verificar que não existem combinações de entradas não testadas" }
        ],
        correctAnswer: 'c',
        explanation: "Os testes encontram defeitos e falhas que reduzem o nível de risco e, ao mesmo tempo, aumentam a confiança no nível de qualidade do objeto de teste. É impossível provar a ausência total de defeitos (Princípio 1)."
    },
    {
        id: 2,
        chapter: 1,
        text: "Qual das seguintes opções mostra um exemplo das atividades de teste que contribuem para o sucesso?",
        options: [
            { id: 'a', text: "O envolvimento dos testadores durante as várias atividades do ciclo de vida do desenvolvimento de software (SDLC) irá ajudar a detetar os defeitos nos produtos de trabalho" },
            { id: 'b', text: "Os testadores tentam não perturbar os programadores enquanto estão a codificar, para que os mesmos possam escrever um código melhor" },
            { id: 'c', text: "Os testadores colaboram com os utilizadores finais para ajudar a melhorar a qualidade dos relatórios de defeitos durante os testes de integração de componentes e os testes de sistema" },
            { id: 'd', text: "Os testadores certificados irão conceber casos de teste muito melhores do que os testadores não certificados" }
        ],
        correctAnswer: 'a',
        explanation: "O envolvimento antecipado dos testadores (Shift-Left) aumenta a compreensão das decisões de conceção e permite a deteção antecipada de defeitos."
    },
    {
        id: 3,
        chapter: 1,
        text: "Foi-lhe atribuída a função de testador numa equipa que está a produzir um novo sistema de forma incremental. No entanto, reparou que não foram efetuadas alterações aos casos de teste de regressão existentes após várias iterações e também não foram identificados novos defeitos resultantes dos testes de regressão. O seu gestor está contente com a situação, mas você não. Qual dos seguintes princípios de testes explica o seu ceticismo?",
        options: [
            { id: 'a', text: "Os testes desgastam (Paradoxo do Pesticida)" },
            { id: 'b', text: "A falácia da ausência de defeitos" },
            { id: 'c', text: "Os defeitos agrupam-se" },
            { id: 'd', text: "Os testes exaustivos são impossíveis" }
        ],
        correctAnswer: 'a',
        explanation: "Este princípio refere que, tendencialmente, a repetição exaustiva dos mesmos casos de teste leva à não deteção de novos defeitos."
    },
    {
        id: 4,
        chapter: 1,
        text: "Está a trabalhar numa equipa que está a desenvolver uma aplicação móvel de encomenda de refeições. Na iteração atual, a equipa decidiu implementar a funcionalidade de pagamento. Qual das seguintes atividades pertence à análise de teste?",
        options: [
            { id: 'a', text: "Calcular a estimativa de que efetuar testes da integração com o serviço de pagamento irá demorar cerca de 8 pessoas-dia" },
            { id: 'b', text: "Decidir se a equipa deve efetuar testes, para verificar se é possível partilhar o pagamento entre vários utilizadores" },
            { id: 'c', text: "Utilizar a análise de valor fronteira (BVA) para derivar os dados dos casos de teste, que verificam o correto processamento de pagamento para o montante mínimo permitido" },
            { id: 'd', text: "Analisar a discrepância entre o resultado atual e esperado após a execução do caso de teste que verifica o processo de pagamento com um cartão de crédito e comunicar um defeito" }
        ],
        correctAnswer: 'b',
        explanation: "Decidir 'o que' testar (definir condições de teste) pertence à análise de teste. (a) é planeamento, (c) é conceção, (d) é execução."
    },
    {
        id: 5,
        chapter: 1,
        text: "Qual dos seguintes fatores (i-v) têm uma influência SIGNIFICATIVA no processo de teste?<br/>i. O SDLC<br/>ii. O número de defeitos detetados em projetos anteriores<br/>iii. Os riscos de produto identificados<br/>iv. A aplicação de novos requisitos regulamentares<br/>v. O número de testadores certificados na organização",
        options: [
            { id: 'a', text: "i, ii têm influência significativa; iii, iv, v não têm influência" },
            { id: 'b', text: "i, iii, iv têm influência significativa; ii, v não têm influência" },
            { id: 'c', text: "ii, iv, v têm influência significativa; i, iii não têm influência" },
            { id: 'd', text: "iii, v têm influência significativa; i, ii, iv não têm influência" }
        ],
        correctAnswer: 'b',
        explanation: "O SDLC (i), os riscos de produto (iii) e os requisitos regulamentares (iv) são fatores fundamentais que influenciam o processo."
    },
    {
        id: 6,
        chapter: 1,
        text: "Qual das DUAS seguintes tarefas pertencem PRINCIPALMENTE a uma função de teste? (Selecione duas opções)",
        type: 'multiple',
        options: [
            { id: 'a', text: "Configurar ambientes de teste" },
            { id: 'b', text: "Manter o backlog do produto" },
            { id: 'c', text: "Conceber soluções para novos requisitos" },
            { id: 'd', text: "Criar o plano de testes" },
            { id: 'e', text: "Analisar a base de testes" }
        ],
        correctAnswer: ['a', 'e'],
        explanation: "Configurar ambientes (a) e analisar a base de testes (e) são tarefas típicas do testador. O backlog é do PO, soluções são da equipa de dev, plano de testes é do Gestor de Teste."
    },
    {
        id: 7,
        chapter: 1,
        text: "Quais das seguintes competências (i-v) são as competências MAIS importantes de um testador?<br/>i. Ter conhecimento do domínio<br/>ii. Criar uma visão do produto<br/>iii. Ter um bom espírito de equipa<br/>iv. Planear e organizar o trabalho da equipa<br/>v. Pensamento crítico",
        options: [
            { id: 'a', text: "ii, iv são importantes" },
            { id: 'b', text: "i, iii, v são importantes" },
            { id: 'c', text: "i, ii, v são importantes" },
            { id: 'd', text: "iii, iv são importantes" }
        ],
        correctAnswer: 'b',
        explanation: "Conhecimento do domínio (i), espírito de equipa (iii) e pensamento crítico (v) são cruciais. Visão do produto e planeamento de equipa são de gestão/PO."
    },
    {
        id: 8,
        chapter: 1,
        text: "Como é que o Whole Team Approach está presente nas interações entre os testadores e os representantes do negócio?",
        options: [
            { id: 'a', text: "Os representantes do negócio decidem as abordagens à automação de testes" },
            { id: 'b', text: "Os testadores ajudam os representantes do negócio a definir uma estratégia de teste" },
            { id: 'c', text: "Os representantes do negócio não pertencem à Whole Team Approach" },
            { id: 'd', text: "Os testadores ajudam os representantes do negócio a criar testes de aceitação adequados" }
        ],
        correctAnswer: 'd',
        explanation: "Os testadores colaboram com os representantes do negócio para garantir que os níveis de qualidade pretendidos são alcançados e criar testes de aceitação."
    },
    {
        id: 9,
        chapter: 2,
        text: "Considere a seguinte regra: 'para cada atividade do SDLC existe uma atividade de teste correspondente.' Em que modelos do SDLC é que esta regra se aplica?",
        options: [
            { id: 'a', text: "Apenas nos SDLC com modelos de desenvolvimento sequencial" },
            { id: 'b', text: "Apenas nos SDLC com modelos de desenvolvimento iterativo" },
            { id: 'c', text: "Apenas nos SDLC com modelos de desenvolvimento incremental e iterativo" },
            { id: 'd', text: "Nos SDLC com modelos de desenvolvimento sequencial, incremental e iterativo" }
        ],
        correctAnswer: 'd',
        explanation: "Esta é uma regra fundamental que se aplica a todos os modelos de ciclo de vida."
    },
    {
        id: 10,
        chapter: 2,
        text: "Qual das seguintes afirmações descreve MELHOR a abordagem de desenvolvimento orientado para testes de aceitação (ATDD)?",
        options: [
            { id: 'a', text: "No ATDD, os critérios de aceitação são normalmente criados com base no formato 'Given/When/Then'" },
            { id: 'b', text: "No ATDD, os casos de teste são principalmente criados nos testes de componentes e estão orientados para o código" },
            { id: 'c', text: "No ATDD, os testes são criados, com base nos critérios de aceitação para impulsionar o desenvolvimento de software relacionado" },
            { id: 'd', text: "No ATDD, os testes são baseados no comportamento do software pretendido, o que simplifica a sua compreensão pelos membros da equipa" }
        ],
        correctAnswer: 'c',
        explanation: "No ATDD, os testes são elaborados como parte do processo de conceção, antes do código."
    },
    {
        id: 11,
        chapter: 2,
        text: "Qual das seguintes respostas NÃO corresponde a uma abordagem Shift-Left?",
        options: [
            { id: 'a', text: "Rever os requisitos do utilizador antes de serem formalmente aceites pelos Stakeholders" },
            { id: 'b', text: "Elaborar um teste de componentes antes de escrever o código correspondente" },
            { id: 'c', text: "Efetuar um teste de eficiência de desempenho para um componente durante o teste de componentes" },
            { id: 'd', text: "Elaborar um script de teste antes de definir o processo de gestão de configurações" }
        ],
        correctAnswer: 'd',
        explanation: "Não faz sentido criar scripts antes de configurar o processo (não é shift-left, é apenas má gestão). As outras opções (revisão, TDD, teste não-funcional antecipado) são exemplos de shift-left."
    },
    {
        id: 12,
        chapter: 2,
        text: "Qual dos argumentos indicados abaixo pode ser utilizado para convencer o seu gestor a organizar retrospetivas no fim de cada ciclo de lançamento?",
        options: [
            { id: 'a', text: "Atualmente, as retrospetivas são muito populares e os clientes ficariam agradados por serem adicionados aos processos" },
            { id: 'b', text: "A organização de retrospetivas irá poupar dinheiro à organização, uma vez que os representantes/utilizadores finais não fornecem feedback imediato sobre o produto" },
            { id: 'c', text: "As deficiências identificadas no processo durante a retrospetiva podem ser analisadas e utilizadas como uma lista de tarefas para o programa de melhoria contínua" },
            { id: 'd', text: "As retrospetivas abrangem cinco valores, incluindo coragem e respeito, que são cruciais para manter a melhoria contínua da organização" }
        ],
        correctAnswer: 'c',
        explanation: "A realização regular de retrospetivas é essencial para a melhoria contínua do desenvolvimento e dos testes."
    },
    {
        id: 13,
        chapter: 2,
        text: "Que tipos de falhas (1-4) se adequam MELHOR aos níveis de teste (A-D)?<br/>1. Falhas no comportamento do sistema (desvio necessidades negócio)<br/>2. Falhas na comunicação entre componentes<br/>3. Falhas na lógica do módulo<br/>4. Falhas em regras de negócio implementadas incorretamente<br/><br/>A. Testes de componentes<br/>B. Testes de integração de componentes<br/>C. Testes de sistema<br/>D. Testes de aceitação",
        options: [
            { id: 'a', text: "1D, 2B, 3A, 4C" },
            { id: 'b', text: "1D, 2B, 3C, 4A" },
            { id: 'c', text: "1B, 2A, 3D, 4C" },
            { id: 'd', text: "1C, 2B, 3A, 4D" }
        ],
        correctAnswer: 'a',
        explanation: "1-Aceitação (D), 2-Integração (B), 3-Componentes (A), 4-Sistema (C)."
    },
    {
        id: 14,
        chapter: 2,
        text: "Considere o histórico: TC1 falhou na v1, passou na v2. TC2 passou na v1, falhou na v2. TC3 falhou na v1 e v2. Na v3 (Execução 3), todos passaram. Quais testes na Execução 3 foram testes de REGRESSÃO?",
        options: [
            { id: 'a', text: "Apenas 4, 7, 8 e 9" },
            { id: 'b', text: "Apenas 5 e 7" },
            { id: 'c', text: "Apenas 4, 6, 8 e 9" },
            { id: 'd', text: "Apenas 5 e 6" }
        ],
        correctAnswer: 'b',
        explanation: "Nota: No enunciado original (tabela), TC1 passou na v2 (teste 4) e TC2 falhou na v2 (teste 5). Testes de regressão são aqueles que já passaram e voltamos a executar. TC1 passou na v2, logo na v3 (teste 7) é regressão. TC2 passou na v1, logo na v2 (teste 5) era regressão (embora tenha falhado)."
    },
    {
        id: 15,
        chapter: 3,
        text: "Qual das seguintes afirmações NÃO é uma vantagem dos testes estáticos?",
        options: [
            { id: 'a', text: "Ter uma gestão de defeitos menos dispendiosa devido à facilidade de detetar defeitos mais tarde no SDLC" },
            { id: 'b', text: "Corrigir defeitos encontrados durante os testes estáticos é normalmente muito menos dispendioso do que corrigir defeitos encontrados durante os testes dinâmicos" },
            { id: 'c', text: "Encontrar defeitos no código que podem não ter sido encontrados apenas com a execução dos testes dinâmicos" },
            { id: 'd', text: "Detetar lacunas e inconsistências nos requisitos" }
        ],
        correctAnswer: 'a',
        explanation: "A opção A é falsa porque encontrar defeitos 'mais tarde' é *mais* dispendioso, não menos. O objetivo é encontrar cedo."
    },
    {
        id: 16,
        chapter: 3,
        text: "Qual das seguintes afirmações é uma vantagem do feedback antecipado e frequente?",
        options: [
            { id: 'a', text: "Melhora o processo de teste dos projetos futuros" },
            { id: 'b', text: "Obriga os clientes a estabelecer as prioridades dos requisitos com base nos riscos acordados" },
            { id: 'c', text: "É a única forma de medir a qualidade das alterações" },
            { id: 'd', text: "Ajuda a evitar equívocos sobre os requisitos" }
        ],
        correctAnswer: 'd',
        explanation: "O feedback antecipado e frequente permite comunicar potenciais problemas de qualidade e mal-entendidos mais cedo."
    },
    {
        id: 17,
        chapter: 3,
        text: "As revisões na organização têm: função de redator, finalidade de avaliar qualidade, reunião liderada pelo autor, preparação individual e relatório. Qual o tipo de revisão?",
        options: [
            { id: 'a', text: "Revisão informal" },
            { id: 'b', text: "Walkthrough" },
            { id: 'c', text: "Revisão técnica" },
            { id: 'd', text: "Inspeção" }
        ],
        correctAnswer: 'b',
        explanation: "A reunião liderada pelo autor é a característica chave do Walkthrough. Inspeções não são lideradas pelo autor."
    },
    {
        id: 18,
        chapter: 3,
        text: "Qual das seguintes afirmações NÃO é um fator que contribui para o sucesso das revisões?",
        options: [
            { id: 'a', text: "Os participantes devem dedicar tempo suficiente para a revisão" },
            { id: 'b', text: "É recomendado dividir os produtos de trabalho de grandes dimensões em pequenas partes" },
            { id: 'c', text: "Os participantes devem evitar comportamentos que podem indicar tédio ou hostilidade" },
            { id: 'd', text: "As falhas encontradas devem ser reconhecidas, avaliadas e geridas de forma objetiva" }
        ],
        correctAnswer: 'd',
        explanation: "Nas revisões encontram-se 'defeitos', não 'falhas'. Falhas ocorrem na execução dinâmica."
    },
    {
        id: 19,
        chapter: 4,
        text: "Qual das seguintes afirmações é uma característica das técnicas de teste baseadas na experiência?",
        options: [
            { id: 'a', text: "Os casos de teste são criados com base nas informações detalhadas de conceção" },
            { id: 'b', text: "Os itens testados na secção do código de interface são utilizados para medir a cobertura" },
            { id: 'c', text: "As técnicas dependem em grande medida do conhecimento do software e do domínio de negócio do testador" },
            { id: 'd', text: "Os casos de teste são utilizados para identificar os desvios em relação aos requisitos" }
        ],
        correctAnswer: 'c',
        explanation: "Baseiam-se no conhecimento e intuição do testador (Ex: Antecipação de erros, Teste exploratório)."
    },
    {
        id: 20,
        chapter: 4,
        text: "Cenário: Apartamentos com 'Piso' (4 opções: Rés-do-chão, 1º, 2º, Topo) e 'Jardim' (3 opções: Sem, Pequeno, Grande). Regra: Apenas Rés-do-chão pode ter jardim. Qual o número mínimo de casos de teste para 100% de cobertura de Particionamento de Equivalência (EP) válido?",
        options: [
            { id: 'a', text: "3" },
            { id: 'b', text: "4" },
            { id: 'c', text: "5" },
            { id: 'd', text: "6" }
        ],
        correctAnswer: 'b',
        explanation: "Precisamos de 4 testes: 1) R/C + J.Peq, 2) R/C + J.Grande, 3) 1º + Sem Jardim, 4) 2º (ou Topo) + Sem Jardim para cobrir todas as partições válidas de inputs."
    },
    {
        id: 21,
        chapter: 4,
        text: "Sistema de notas: 0-50 (Reprovado), 51-60 (Razoável), 61-70 (Suficiente), 71-80 (Bom), 81-90 (Muito Bom), 91-100 (Excelente).<br/>Casos de teste executados com valores: 91, 50, 81, 60, 70, 80.<br/>Qual a cobertura de Análise de Valor Fronteira (BVA de 2 valores) alcançada?",
        options: [
            { id: 'a', text: "50%" },
            { id: 'b', text: "60%" },
            { id: 'c', text: "33,3%" },
            { id: 'd', text: "100%" }
        ],
        correctAnswer: 'a',
        explanation: "Fronteiras: 0, 50, 51, 60, 61, 70, 71, 80, 81, 90, 91, 100 (12 fronteiras). Os valores testados (91, 50, 81, 60, 70, 80) cobrem 6 fronteiras. 6/12 = 50%."
    },
    {
        id: 22,
        chapter: 4,
        text: "Tabela de Decisão:<br/>Regras: Membro? (V/F) | Prazo falhado? (V/F) | 15º aluguer? (V/F)<br/>R4: Membro=V, Prazo Falhado=F, 15º Aluguer=V -> Ações: Desconto 20% + T-shirt.<br/>R8: Membro=F, Prazo Falhado=V, 15º Aluguer=V -> Ações: T-shirt.<br/>Com base na descrição 'Membros recebem t-shirt após 15 alugueres', qual regra descreve uma situação IMPOSSÍVEL ou errada?",
        options: [
            { id: 'a', text: "R4" },
            { id: 'b', text: "R2" },
            { id: 'c', text: "R6" },
            { id: 'd', text: "R8" }
        ],
        correctAnswer: 'd',
        explanation: "R8 indica um 'Não membro' recebendo uma T-shirt. A regra diz 'apenas membros recebem um presente'. Logo R8 está incorreto."
    },
    {
        id: 23,
        chapter: 4,
        text: "Transição de Estados:<br/>INIT -> (testar) -> MODO DEBUG -> (concluído) -> OFF<br/>INIT -> (executar) -> EM FUNCIONAMENTO <-> (pausar/retomar) <-> EM ESPERA<br/>EM FUNCIONAMENTO -> (erro) -> MODO DEBUG<br/>EM ESPERA -> (concluído) -> OFF<br/>Qual o número MÍNIMO de casos de teste para cobrir todas as transições válidas?",
        options: [
            { id: 'a', text: "4" },
            { id: 'b', text: "2" },
            { id: 'c', text: "7" },
            { id: 'd', text: "3" }
        ],
        correctAnswer: 'd',
        explanation: "Necessários 3 caminhos: 1) INIT->Testar->Debug->Concluído. 2) INIT->Executar->Erro->Debug. 3) INIT->Executar->Pausar->Retomar->Pausar->Concluído (via Espera)."
    },
    {
        id: 24,
        chapter: 4,
        text: "A sua bateria de testes obtém 100% cobertura de instruções. Qual é a consequência deste facto?",
        options: [
            { id: 'a', text: "Cada uma das instruções no código que contêm um defeito foram avaliadas, pelo menos, uma vez" },
            { id: 'b', text: "Qualquer bateria de testes com mais casos de teste do que a sua bateria de testes também irá obter 100% cobertura de instruções" },
            { id: 'c', text: "Cada caminho no código foi executado, pelo menos, uma vez" },
            { id: 'd', text: "Cada combinação dos valores de entrada foi testada, pelo menos, uma vez" }
        ],
        correctAnswer: 'a',
        explanation: "Se cobriu 100% das instruções, todas as linhas de código (incluindo as com bugs) foram executadas."
    },
    {
        id: 25,
        chapter: 4,
        text: "Qual das seguintes afirmações NÃO é verdadeira para o teste caixa-branca?",
        options: [
            { id: 'a', text: "Durante o teste caixa-branca, toda a implementação de software é considerada" },
            { id: 'b', text: "As métricas da cobertura caixa-branca podem ajudar a identificar testes adicionais" },
            { id: 'c', text: "As técnicas de teste caixa-branca podem ser utilizadas nos testes estáticos" },
            { id: 'd', text: "Os testes caixa-branca podem ajudar a identificar lacunas na implementação dos requisitos" }
        ],
        correctAnswer: 'd',
        explanation: "Caixa-branca baseia-se na estrutura, não nos requisitos. Não consegue identificar funcionalidades em falta (lacunas na implementação face aos requisitos)."
    },
    {
        id: 26,
        chapter: 4,
        text: "Qual das seguintes afirmações descreve MELHOR o conceito subjacente à antecipação de erros (Error Guessing)?",
        options: [
            { id: 'a', text: "A antecipação de erros implica utilizar o conhecimento e a experiência dos defeitos encontrados no passado e os erros típicos cometidos pelos programadores" },
            { id: 'b', text: "A antecipação de erros implica utilizar a experiência pessoal de desenvolvimento e os erros cometidos enquanto programador" },
            { id: 'c', text: "A antecipação de erros requer imaginar que é o utilizador do objeto de teste e antecipar os erros que podem ser cometidos por esse utilizador" },
            { id: 'd', text: "A antecipação de erros requer duplicar rapidamente a tarefa de desenvolvimento para identificar o tipo de erros que podem ser cometidos" }
        ],
        correctAnswer: 'a',
        explanation: "Baseia-se na experiência do testador sobre onde os defeitos costumam surgir."
    },
    {
        id: 27,
        chapter: 4,
        text: "Atraso no lançamento. Tem conhecimento do domínio, mas os requisitos não estão completos. A gestão quer resultados JÁ. Qual a melhor técnica?",
        options: [
            { id: 'a', text: "Teste baseado em checklists" },
            { id: 'b', text: "Antecipação de erros" },
            { id: 'c', text: "Teste exploratório" },
            { id: 'd', text: "Teste de ramos" }
        ],
        correctAnswer: 'c',
        explanation: "Testes exploratórios são ideais quando há pouca especificação e urgência, alavancando o conhecimento do domínio."
    },
    {
        id: 28,
        chapter: 4,
        text: "Qual das seguintes afirmações descreve MELHOR a forma como os critérios de aceitação podem ser documentados?",
        options: [
            { id: 'a', text: "Efetuar retrospetivas para determinar as necessidades reais dos stakeholders" },
            { id: 'b', text: "Utilizar o formato 'Considerando/Quando/Então' (Given/When/Then) para descrever um exemplo de condição de teste" },
            { id: 'c', text: "Utilizar a comunicação verbal para reduzir o risco de má interpretação" },
            { id: 'd', text: "Documentar os riscos relacionados com uma determinada user story num plano de testes" }
        ],
        correctAnswer: 'b',
        explanation: "Gherkin (Given/When/Then) é o formato padrão para documentar critérios de aceitação em BDD/ATDD."
    },
    {
        id: 29,
        chapter: 4,
        text: "User Story: 'Como Editor, quero rever conteúdo...'. Critérios: Editor pode editar, guardar, reatribuir ao Proprietário. Qual o melhor teste ATDD?",
        options: [
            { id: 'a', text: "Efetuar um teste para verificar se o editor pode guardar o documento após editar o conteúdo de uma página" },
            { id: 'b', text: "Efetuar um teste para verificar se o proprietário do conteúdo pode iniciar sessão e atualizar o conteúdo" },
            { id: 'c', text: "Efetuar um teste para verificar se o editor pode agendar a publicação do conteúdo acabado de editar" },
            { id: 'd', text: "Efetuar um teste para verificar se o editor pode reatribuir a tarefa de atualização a outro editor" }
        ],
        correctAnswer: 'a',
        explanation: "Cobre diretamente os critérios de aceitação definidos (Editar e Guardar)."
    },
    {
        id: 30,
        chapter: 5,
        text: "Como é que os testadores acrescentam valor ao planeamento da iteração e ao planeamento de entrega?",
        options: [
            { id: 'a', text: "Os testadores determinam a prioridade das user stories a desenvolver" },
            { id: 'b', text: "Os testadores concentram-se apenas nos aspetos funcionais do sistema a ser testado" },
            { id: 'c', text: "Os testadores participam na identificação de riscos detalhada e na avaliação de riscos das user stories" },
            { id: 'd', text: "Os testadores asseguram o lançamento de software de alta qualidade através da conceção de teste antecipada durante o planeamento de entrega" }
        ],
        correctAnswer: 'c',
        explanation: "A participação na análise de riscos das User Stories é uma contribuição chave."
    },
    {
        id: 31,
        chapter: 5,
        text: "Qual das DUAS opções seguintes são os critérios de saída para efetuar o teste de um sistema? (Selecione duas opções)",
        type: 'multiple',
        options: [
            { id: 'a', text: "Prontidão do ambiente de teste" },
            { id: 'b', text: "Capacidade de o testador poder iniciar sessão no objeto de teste" },
            { id: 'c', text: "Estimativa de densidade de defeitos é atingida" },
            { id: 'd', text: "Requisitos traduzidos no formato 'Considerando/Quando/Então'" },
            { id: 'e', text: "Testes de regressão automatizados" }
        ],
        correctAnswer: ['c', 'e'],
        explanation: "Ambiente pronto (a) é critério de entrada. Atingir métricas de defeitos (c) e conclusão de automação (e) são critérios de saída."
    },
    {
        id: 32,
        chapter: 5,
        text: "Estimativa de três pontos: Otimista=2, Mais Provável=11, Pessimista=14. Qual é a estimativa final?",
        options: [
            { id: 'a', text: "9" },
            { id: 'b', text: "14" },
            { id: 'c', text: "11" },
            { id: 'd', text: "10" }
        ],
        correctAnswer: 'd',
        explanation: "Fórmula: (Otimista + 4*Provável + Pessimista) / 6. (2 + 44 + 14) / 6 = 60 / 6 = 10."
    },
    {
        id: 33,
        chapter: 5,
        text: "Dependências: TC001 -> TC002. TC002 é pré-requisito para TC003, TC004, TC005. Prioridades: TC003(1), TC004(2), TC005(3). Qual deve ser executado em terceiro lugar?",
        options: [
            { id: 'a', text: "TC 003" },
            { id: 'b', text: "TC 005" },
            { id: 'c', text: "TC 002" },
            { id: 'd', text: "TC 001" }
        ],
        correctAnswer: 'a',
        explanation: "Ordem lógica: TC001 (sem dep), TC002 (dep de 001). Agora podemos correr os restantes. Pela prioridade: TC003 é o primeiro destes. Logo a sequência é 001, 002, 003."
    },
    {
        id: 34,
        chapter: 5,
        text: "Quadrantes Agile. 1.Usabilidade, 2.Componentes, 3.Funcionais, 4.Confiabilidade. Mapeamento com Q1(Tecnologia/Equipa), Q2(Negócio/Equipa), Q3(Negócio/Produto), Q4(Tecnologia/Produto).",
        options: [
            { id: 'a', text: "1C (Q3), 2A (Q1), 3B (Q2), 4D (Q4)" },
            { id: 'b', text: "1D, 2A, 3C, 4B" },
            { id: 'c', text: "1C, 2B, 3D, 4A" },
            { id: 'd', text: "1D, 2B, 3C, 4A" }
        ],
        correctAnswer: 'a',
        explanation: "Componentes -> Q1 (Tech/Team). Funcionais -> Q2 (Business/Team). Usabilidade -> Q3 (Business/Product). Confiabilidade -> Q4 (Tech/Product)."
    },
    {
        id: 35,
        chapter: 5,
        text: "Risco: Tempo de resposta longo. Ação definida: equipa independente faz testes de desempenho. Que tipo de medida é esta?",
        options: [
            { id: 'a', text: "Aceitação do risco" },
            { id: 'b', text: "Plano de contingência" },
            { id: 'c', text: "Mitigação do risco" },
            { id: 'd', text: "Transferência do risco" }
        ],
        correctAnswer: 'c',
        explanation: "Testar para reduzir a probabilidade ou impacto (encontrar o problema antes de ir para produção) é mitigação."
    },
    {
        id: 36,
        chapter: 5,
        text: "Que produto de trabalho pode ser utilizada por uma equipa Agile para mostrar a quantidade de trabalho já concluída e a quantidade de trabalho total remanescente para uma determinada iteração?",
        options: [
            { id: 'a', text: "Critérios de aceitação" },
            { id: 'b', text: "Relatório de defeitos" },
            { id: 'c', text: "Relatório de conclusão do teste" },
            { id: 'd', text: "Gráfico de burndown" }
        ],
        correctAnswer: 'd',
        explanation: "Burndown chart é a ferramenta visual padrão para progresso em iterações Agile."
    },
    {
        id: 37,
        chapter: 5,
        text: "É necessário atualizar um dos scripts de teste automatizados para estar em conformidade com um novo requisito. Que processo indica que criou uma versão do script de teste no repositório?",
        options: [
            { id: 'a', text: "Gestão da rastreabilidade" },
            { id: 'b', text: "Testes de manutenção" },
            { id: 'c', text: "Gestão de configurações" },
            { id: 'd', text: "Engenharia de requisitos" }
        ],
        correctAnswer: 'c',
        explanation: "Gestão de configurações lida com versões, repositórios e integridade dos artefactos."
    },
    {
        id: 38,
        chapter: 5,
        text: "Recebeu um relatório de defeito: 'Aplicação suspensa após input X. Defeito rejeitado pelos devs (não reproduzível)'. O relatório tem logs, passos, autor. Que informação crítica está EM FALTA?",
        options: [
            { id: 'a', text: "Resultado esperado e resultado observado" },
            { id: 'b', text: "Referências e estado do defeito" },
            { id: 'c', text: "Ambiente de teste e item de teste" },
            { id: 'd', text: "Prioridade e gravidade" }
        ],
        correctAnswer: 'c',
        explanation: "Sem saber a versão exata do software (item) e o ambiente (SO, Browser, Configuração), o programador não consegue reproduzir o erro."
    },
    {
        id: 39,
        chapter: 6,
        text: "Uma ferramenta de preparação de dados de teste suporta que atividade de teste?",
        options: [
            { id: 'a', text: "Monitorização e controlo de testes" },
            { id: 'b', text: "Análise de teste" },
            { id: 'c', text: "Conceção e implementação de teste" },
            { id: 'd', text: "Conclusão do teste" }
        ],
        correctAnswer: 'c',
        explanation: "A criação ou aquisição de dados de teste ocorre durante a implementação do teste."
    },
    {
        id: 40,
        chapter: 6,
        text: "Qual das seguintes afirmações identifica corretamente um risco potencial por efetuar automação de testes?",
        options: [
            { id: 'a', text: "Pode introduzir regressões desconhecidas em produção" },
            { id: 'b', text: "Podem não ser atribuídos esforços suficientes para manter o testware" },
            { id: 'c', text: "As ferramentas de teste e o testware associado podem não ser suficientemente confiáveis" },
            { id: 'd', text: "Pode reduzir o tempo atribuído para os testes manuais" }
        ],
        correctAnswer: 'b',
        explanation: "A manutenção do código de teste é muitas vezes subestimada, tornando a automação insustentável a longo prazo."
    },
    {
        id: 41,
        chapter: 3,
        text: "Qual é a principal diferença entre testes estáticos e testes dinâmicos?",
        options: [
            { id: 'a', text: "Os testes estáticos encontram falhas executando o código, enquanto os testes dinâmicos encontram defeitos sem executar o código." },
            { id: 'b', text: "Os testes estáticos focam-se na verificação de requisitos e design sem execução, enquanto os testes dinâmicos requerem a execução do software." },
            { id: 'c', text: "Os testes estáticos são realizados apenas pelos programadores, enquanto os testes dinâmicos são realizados apenas pelos clientes." },
            { id: 'd', text: "Os testes estáticos são usados apenas para medir a cobertura de código, enquanto os testes dinâmicos validam a usabilidade." }
        ],
        correctAnswer: 'b',
        explanation: "O teste estático não envolve a execução do software (ex: revisões), enquanto o teste dinâmico obriga à execução do código para observar falhas."
    },
    {
        id: 42,
        chapter: 3,
        text: "Numa revisão formal, qual é o papel principal do 'Moderador' (ou Facilitador)?",
        options: [
            { id: 'a', text: "Documentar todos os defeitos encontrados durante a reunião." },
            { id: 'b', text: "Corrigir os defeitos encontrados no produto de trabalho." },
            { id: 'c', text: "Assegurar o bom funcionamento das reuniões e mediar discussões." },
            { id: 'd', text: "Escrever o código que está a ser revisto." }
        ],
        correctAnswer: 'c',
        explanation: "O Moderador (Facilitador) lidera a revisão, gere o tempo e assegura que a reunião segue a agenda. O Escriba (Relator) é quem documenta."
    },
    {
        id: 43,
        chapter: 4,
        text: "Considere um campo de entrada que aceita números inteiros de 1 a 100 (inclusive). Usando a Análise de Valor Fronteira (BVA) de 2 valores, quais são os valores de teste corretos?",
        options: [
            { id: 'a', text: "0, 1, 100, 101" },
            { id: 'b', text: "1, 50, 100" },
            { id: 'c', text: "0, 1, 2, 99, 100, 101" },
            { id: 'd', text: "-1, 1, 100, 102" }
        ],
        correctAnswer: 'a',
        explanation: "Na BVA de 2 valores, testamos o valor na fronteira (válido) e o valor imediatamente fora (inválido). Para 1 a 100: Min(1), Min-1(0), Max(100), Max+1(101)."
    },
    {
        id: 44,
        chapter: 4,
        text: "Qual das seguintes afirmações sobre o teste de transição de estados é VERDADEIRA?",
        options: [
            { id: 'a', text: "É uma técnica de caixa-branca usada para testar loops no código." },
            { id: 'b', text: "É mais eficaz para sistemas que têm um fluxo de processos linear e sem estados definidos." },
            { id: 'c', text: "É usada para testar a capacidade do sistema de entrar e sair de estados definidos através de transições válidas e inválidas." },
            { id: 'd', text: "Garante 100% de cobertura de instruções e ramos." }
        ],
        correctAnswer: 'c',
        explanation: "A transição de estados foca-se no comportamento do sistema com base em estados e eventos. É uma técnica de caixa-preta."
    },
    {
        id: 45,
        chapter: 4,
        text: "O que mede a 'Cobertura de Instruções' (Statement Coverage)?",
        options: [
            { id: 'a', text: "A percentagem de decisões (branches) executadas." },
            { id: 'b', text: "A percentagem de instruções executáveis do código que foram exercitadas pelos testes." },
            { id: 'c', text: "A quantidade de defeitos encontrados por hora." },
            { id: 'd', text: "A percentagem de requisitos de utilizador validados." }
        ],
        correctAnswer: 'b',
        explanation: "Cobertura de instruções mede que percentagem das linhas de código executáveis foram corridas. É uma métrica de caixa-branca."
    },
    {
        id: 46,
        chapter: 1,
        text: "Qual é um dos principais benefícios da independência nos testes?",
        options: [
            { id: 'a', text: "Os testadores independentes são mais baratos que os programadores." },
            { id: 'b', text: "Os testadores independentes podem ver outros tipos de defeitos e são imparciais, pois não criaram o código." },
            { id: 'c', text: "A independência garante que não existem atrasos no projeto." },
            { id: 'd', text: "Os testadores independentes conhecem o código melhor que os programadores." }
        ],
        correctAnswer: 'b',
        explanation: "A independência permite encontrar defeitos que o autor do código pode ignorar devido a viés de confirmação."
    },
    {
        id: 47,
        chapter: 5,
        text: "No contexto de riscos de produto vs. riscos de projeto, qual dos exemplos abaixo é um RISCO DE PROJETO?",
        options: [
            { id: 'a', text: "O software pode falhar ao calcular os impostos corretamente." },
            { id: 'b', text: "O tempo de resposta do sistema é demasiado lento para o utilizador final." },
            { id: 'c', text: "A equipa de testes não tem o ambiente de testes pronto a tempo." },
            { id: 'd', text: "A interface do utilizador é confusa e difícil de navegar." }
        ],
        correctAnswer: 'c',
        explanation: "Riscos de projeto afetam a capacidade de entregar (prazos, recursos, ferramentas). Os outros são riscos de produto (qualidade do software)."
    },
    {
        id: 48,
        chapter: 4,
        text: "Qual é o objetivo principal de um 'Test Charter' (Carta de Teste) nos testes exploratórios?",
        options: [
            { id: 'a', text: "Substituir completamente os casos de teste formais." },
            { id: 'b', text: "Definir a missão, o escopo e os objetivos de uma sessão de teste exploratório." },
            { id: 'c', text: "Listar passo-a-passo todas as ações que o testador deve realizar." },
            { id: 'd', text: "Automatizar a execução dos testes de regressão." }
        ],
        correctAnswer: 'b',
        explanation: "O Test Charter guia a sessão de teste exploratório, definindo o que testar e como, sem prescrever passos exatos."
    },
    {
        id: 49,
        chapter: 6,
        text: "Qual das seguintes ferramentas seria mais útil para apoiar a Integração Contínua (CI/CD)?",
        options: [
            { id: 'a', text: "Ferramenta de gestão de defeitos." },
            { id: 'b', text: "Ferramenta de automação de construção (Build) e execução de testes unitários." },
            { id: 'c', text: "Ferramenta de modelação de dados." },
            { id: 'd', text: "Ferramenta de teste de usabilidade." }
        ],
        correctAnswer: 'b',
        explanation: "Em CI/CD, ferramentas que compilam o código e correm testes automaticamente a cada commit (como Jenkins ou GitLab CI) são essenciais."
    },
    {
        id: 50,
        chapter: 2,
        text: "O que distingue o 'Teste de Confirmação' do 'Teste de Regressão'?",
        options: [
            { id: 'a', text: "O teste de confirmação verifica se um defeito foi corrigido; o teste de regressão verifica se a correção não introduziu novos problemas." },
            { id: 'b', text: "O teste de confirmação é sempre automatizado; o teste de regressão é sempre manual." },
            { id: 'c', text: "O teste de confirmação é feito no sistema todo; o teste de regressão é feito apenas no módulo alterado." },
            { id: 'd', text: "Não existe diferença, são sinónimos." }
        ],
        correctAnswer: 'a',
        explanation: "Confirmação = re-testar a falha original. Regressão = testar o resto do sistema para garantir que nada partiu inadvertidamente."
    },
    {
        id: 51,
        chapter: 1,
        text: "Qual é uma potencial desvantagem de ter uma equipa de testes totalmente independente?",
        options: [
            { id: 'a', text: "Os testadores independentes são demasiado otimistas em relação à qualidade do software." },
            { id: 'b', text: "Pode haver uma falta de comunicação e isolamento entre a equipa de testes e a equipa de desenvolvimento." },
            { id: 'c', text: "Os testadores independentes não conseguem encontrar defeitos na documentação." },
            { id: 'd', text: "A independência impede o uso de ferramentas de automação." }
        ],
        correctAnswer: 'b',
        explanation: "Embora a independência traga objetividade, o risco de isolamento ('nós contra eles') e atrasos na comunicação é uma desvantagem reconhecida."
    },
    {
        id: 52,
        chapter: 2,
        text: "Qual dos seguintes é um exemplo de um Teste Não-Funcional?",
        options: [
            { id: 'a', text: "Verificar se o botão 'Guardar' grava os dados corretamente na base de dados." },
            { id: 'b', text: "Verificar se o sistema calcula o IVA correto de 23%." },
            { id: 'c', text: "Medir quantos utilizadores simultâneos o sistema suporta antes de ficar lento." },
            { id: 'd', text: "Garantir que o fluxo de login redireciona para a página inicial." }
        ],
        correctAnswer: 'c',
        explanation: "Testes de carga/performance (como o sistema se comporta) são não-funcionais. Os outros (a, b, d) validam o que o sistema *faz* (funcionais)."
    },
    {
        id: 53,
        chapter: 2,
        text: "Na estrutura da 'Pirâmide de Testes' (frequentemente usada em Agile), qual camada deve ter a maior quantidade de testes?",
        options: [
            { id: 'a', text: "Testes de Sistema (UI / End-to-End)." },
            { id: 'b', text: "Testes de Aceitação do Utilizador." },
            { id: 'c', text: "Testes Unitários (Componentes)." },
            { id: 'd', text: "Testes Manuais Exploratórios." }
        ],
        correctAnswer: 'c',
        explanation: "A pirâmide sugere ter uma base larga de testes unitários (rápidos e baratos) e uma quantidade menor de testes de UI/Sistema (lentos e caros) no topo."
    },
    {
        id: 54,
        chapter: 4,
        text: "Se tivermos um bloco de código com uma decisão simples: `SE (Idade > 18) ENTÃO Acesso=Permitido SENÃO Acesso=Negado`. Quantos casos de teste são necessários para atingir 100% de Cobertura de Ramos (Decision Coverage)?",
        options: [
            { id: 'a', text: "1" },
            { id: 'b', text: "2" },
            { id: 'c', text: "3" },
            { id: 'd', text: "4" }
        ],
        correctAnswer: 'b',
        explanation: "Para cobrir ramos, precisamos testar o resultado VERDADEIRO (Idade > 18) e o FALSO (Idade <= 18). Logo, 2 testes."
    },
    {
        id: 55,
        chapter: 5,
        text: "Durante a execução do teste, um testador encontra uma discrepância entre o resultado esperado e o resultado atual. Qual é a primeira ação que deve tomar?",
        options: [
            { id: 'a', text: "Escrever imediatamente um relatório de defeito detalhado." },
            { id: 'b', text: "Investigar e tentar reproduzir a falha para garantir que não é um erro do próprio teste ou do ambiente." },
            { id: 'c', text: "Chamar o programador para corrigir o código." },
            { id: 'd', text: "Parar todos os testes até o problema ser resolvido." }
        ],
        correctAnswer: 'b',
        explanation: "Antes de reportar, deve-se confirmar a falha (reproduzir) para evitar 'falsos positivos' causados por dados errados, ambiente ou erro do testador."
    },
    {
        id: 56,
        chapter: 5,
        text: "Qual é o principal objetivo do 'Plano de Testes'?",
        options: [
            { id: 'a', text: "Descrever passo-a-passo como executar cada teste." },
            { id: 'b', text: "Registar os resultados da execução dos testes." },
            { id: 'c', text: "Documentar a estratégia, o escopo, os recursos, o cronograma e os riscos das atividades de teste." },
            { id: 'd', text: "Listar todos os defeitos encontrados no projeto anterior." }
        ],
        correctAnswer: 'c',
        explanation: "O Plano de Testes é o documento de gestão que define 'o quê', 'como', 'quando' e 'quem' vai testar (Planeamento)."
    },
    {
        id: 57,
        chapter: 6,
        text: "O que significa o termo 'Intrusão da Ferramenta' (Probe Effect) nos testes?",
        options: [
            { id: 'a', text: "Quando a ferramenta de teste é demasiado cara para o projeto." },
            { id: 'b', text: "Quando a ferramenta de teste altera o comportamento ou a performance do sistema que está a ser testado." },
            { id: 'c', text: "Quando a ferramenta encontra defeitos que não existem." },
            { id: 'd', text: "Quando os testadores manuais recusam usar a ferramenta." }
        ],
        correctAnswer: 'b',
        explanation: "O efeito sonda/intrusão ocorre quando o próprio ato de medir (ex: ferramentas de performance ou cobertura) afeta o resultado do teste."
    },
    {
        id: 58,
        chapter: 5,
        text: "Qual das seguintes opções descreve corretamente a diferença entre 'Critérios de Aceitação' e 'Critérios de Saída'?",
        options: [
            { id: 'a', text: "Não há diferença, são o mesmo conceito." },
            { id: 'b', text: "Critérios de Aceitação definem quando uma User Story está 'Feita'; Critérios de Saída definem quando uma fase de teste (ex: Teste de Sistema) está completa." },
            { id: 'c', text: "Critérios de Aceitação são para programadores; Critérios de Saída são para clientes." },
            { id: 'd', text: "Critérios de Saída são definidos no início do projeto; Critérios de Aceitação são definidos no fim." }
        ],
        correctAnswer: 'b',
        explanation: "Aceitação foca-se na funcionalidade/requisito (produto). Saída foca-se no processo de teste (se já testámos o suficiente para parar)."
    },
    {
        id: 59,
        chapter: 5,
        text: "Numa abordagem baseada em riscos, como é determinado o 'Nível de Risco'?",
        options: [
            { id: 'a', text: "Pela complexidade do código fonte." },
            { id: 'b', text: "Pela combinação da Probabilidade de ocorrência e do Impacto (Dano) se o risco se materializar." },
            { id: 'c', text: "Pelo tempo disponível para testar." },
            { id: 'd', text: "Pelo número de testadores disponíveis." }
        ],
        correctAnswer: 'b',
        explanation: "Risco = Probabilidade x Impacto. Esta é a fórmula padrão para avaliar e priorizar riscos."
    },
    {
        id: 60,
        chapter: 5,
        text: "Qual destas atividades pertence à fase de 'Conclusão dos Testes'?",
        options: [
            { id: 'a', text: "Criar os dados de teste para a execução." },
            { id: 'b', text: "Escrever os casos de teste automatizados." },
            { id: 'c', text: "Verificar se todos os relatórios de defeito foram fechados ou diferidos e criar o Relatório de Resumo de Teste." },
            { id: 'd', text: "Priorizar os casos de teste com base no risco." }
        ],
        correctAnswer: 'c',
        explanation: "A conclusão ocorre no final. Envolve verificar se o trabalho terminou, arquivar testware e reportar o resumo final."
    },
    {
        id: 61,
        chapter: 1,
        text: "Qual é a principal diferença entre 'Garantia da Qualidade' (QA) e 'Teste'?",
        options: [
            { id: 'a', text: "O Teste é focado na prevenção de defeitos, enquanto o QA é focado na deteção de defeitos." },
            { id: 'b', text: "O QA foca-se na implementação de processos adequados (prevenção), enquanto o Teste foca-se na execução para encontrar falhas (deteção)." },
            { id: 'c', text: "O QA é realizado apenas por gestores, enquanto o Teste é realizado por estagiários." },
            { id: 'd', text: "Não existe diferença, são termos intermutáveis para a mesma atividade." }
        ],
        correctAnswer: 'b',
        explanation: "QA é orientado ao processo e prevenção (confiança de que a qualidade será atingida). Teste é orientado ao produto e deteção de problemas."
    },
    {
        id: 62,
        chapter: 2,
        text: "Ao realizar uma análise de impacto durante o teste de manutenção, o que estamos a tentar determinar?",
        options: [
            { id: 'a', text: "Quantos programadores são necessários para corrigir um defeito." },
            { id: 'b', text: "Qual a parte do sistema que foi alterada e quais as partes não alteradas que podem ter sido afetadas (efeitos colaterais)." },
            { id: 'c', text: "O custo total do projeto inicial." },
            { id: 'd', text: "A causa raiz de um defeito encontrado em produção." }
        ],
        correctAnswer: 'b',
        explanation: "A análise de impacto identifica as consequências pretendidas e não pretendidas de uma alteração para selecionar os testes de regressão adequados."
    },
    {
        id: 63,
        chapter: 5,
        text: "Qual das seguintes opções é um benefício chave da rastreabilidade entre a base de testes (requisitos) e os casos de teste?",
        options: [
            { id: 'a', text: "Permite avaliar a cobertura dos requisitos e analisar o impacto de alterações nos requisitos." },
            { id: 'b', text: "Garante que o código é escrito sem erros de sintaxe." },
            { id: 'c', text: "Reduz a necessidade de documentação no projeto." },
            { id: 'd', text: "Permite aos programadores corrigir defeitos automaticamente." }
        ],
        correctAnswer: 'a',
        explanation: "A rastreabilidade (Traceability) liga requisitos a testes, permitindo saber o que já foi testado e o que precisa de ser re-testado se um requisito mudar."
    },
    {
        id: 64,
        chapter: 2,
        text: "Em que nível de teste o foco principal são as interações entre diferentes sistemas ou entre hardware e software?",
        options: [
            { id: 'a', text: "Teste de Componentes." },
            { id: 'b', text: "Teste de Integração de Sistemas." },
            { id: 'c', text: "Teste de Aceitação Alfa." },
            { id: 'd', text: "Teste Unitário." }
        ],
        correctAnswer: 'b',
        explanation: "O Teste de Integração de Sistemas (System Integration Testing) foca-se nas interfaces e interações entre sistemas distintos ou microserviços."
    },
    {
        id: 65,
        chapter: 2,
        text: "Qual é o termo usado para descrever o teste que confirma que um defeito reportado foi corrigido com sucesso?",
        options: [
            { id: 'a', text: "Teste de Regressão." },
            { id: 'b', text: "Teste de Confirmação (Re-teste)." },
            { id: 'c', text: "Teste de Sanidade." },
            { id: 'd', text: "Teste Estático." }
        ],
        correctAnswer: 'b',
        explanation: "O teste de confirmação (ou re-teste) serve especificamente para validar a correção de um defeito. Regressão é para o resto do sistema."
    },
    {
        id: 66,
        chapter: 4,
        text: "Numa Tabela de Decisão, se tivermos 3 condições booleanas (Sim/Não), qual é o número máximo de regras (colunas) possíveis antes de qualquer simplificação?",
        options: [
            { id: 'a', text: "6" },
            { id: 'b', text: "8" },
            { id: 'c', text: "9" },
            { id: 'd', text: "3" }
        ],
        correctAnswer: 'b',
        explanation: "O cálculo é 2 elevado ao número de condições (2^3). 2 * 2 * 2 = 8 regras possíveis."
    },
    {
        id: 67,
        chapter: 6,
        text: "Qual das seguintes ferramentas é tipicamente usada para armazenar e gerir casos de teste, planos de teste e resultados de execução?",
        options: [
            { id: 'a', text: "Ferramenta de Análise Estática." },
            { id: 'b', text: "Ferramenta de Gestão de Testes (Test Management Tool)." },
            { id: 'c', text: "Framework de Testes Unitários." },
            { id: 'd', text: "Ferramenta de Teste de Performance." }
        ],
        correctAnswer: 'b',
        explanation: "Ferramentas de Gestão de Testes (como Jira com Xray, TestRail, ALM) servem para organizar todo o processo de teste."
    },
    {
        id: 68,
        chapter: 4,
        text: "O que caracteriza a técnica de teste 'Use Case Testing' (Teste de Casos de Uso)?",
        options: [
            { id: 'a', text: "Testar transações e fluxos de processo do início ao fim, baseados na interação dos atores com o sistema." },
            { id: 'b', text: "Testar a estrutura interna do código fonte." },
            { id: 'c', text: "Testar apenas entradas aleatórias sem cenário definido." },
            { id: 'd', text: "Rever o código linha a linha." }
        ],
        correctAnswer: 'a',
        explanation: "Baseia-se em cenários de utilização real (atores e sistema) para validar fluxos de negócio e tratamento de erros previstos nos casos de uso."
    },
    {
        id: 69,
        chapter: 1,
        text: "Qual das seguintes afirmações sobre a psicologia do teste é VERDADEIRA?",
        options: [
            { id: 'a', text: "Os testadores e os programadores pensam exatamente da mesma forma." },
            { id: 'b', text: "Um certo grau de independência evita o viés de confirmação do autor, tornando o teste mais eficaz." },
            { id: 'c', text: "O objetivo do testador deve ser provar que o programador é incompetente." },
            { id: 'd', text: "Os programadores nunca devem testar o seu próprio código." }
        ],
        correctAnswer: 'b',
        explanation: "A mentalidade do testador (curiosidade, pessimismo profissional, atenção ao detalhe) difere da do criador (construtiva), ajudando a encontrar falhas que o autor ignora."
    },
    {
        id: 70,
        chapter: 4,
        text: "Se tivermos 100% de 'Cobertura de Ramos' (Branch/Decision Coverage), que percentagem de 'Cobertura de Instruções' (Statement Coverage) garantimos automaticamente?",
        options: [
            { id: 'a', text: "0%" },
            { id: 'b', text: "50%" },
            { id: 'c', text: "100%" },
            { id: 'd', text: "Não existe relação entre as duas." }
        ],
        correctAnswer: 'c',
        explanation: "A cobertura de ramos é mais forte (subsume) a cobertura de instruções. Se testou todos os ramos (Sim/Não), obrigatoriamente executou todas as instruções."
    },
    {
        id: 71,
        chapter: 2,
        text: "Qual é o propósito principal dos 'Testes de Fumo' (Smoke Tests)?",
        options: [
            { id: 'a', text: "Encontrar defeitos profundos na lógica do sistema." },
            { id: 'b', text: "Verificar se as funções críticas do sistema funcionam minimamente antes de iniciar testes mais profundos (Rejeitar ou aceitar a build)." },
            { id: 'c', text: "Testar a resistência do hardware ao fogo." },
            { id: 'd', text: "Testar a performance máxima do sistema." }
        ],
        correctAnswer: 'b',
        explanation: "Smoke tests são testes superficiais e rápidos para garantir que a 'build' é estável o suficiente para prosseguir com o ciclo de testes."
    },
    {
        id: 72,
        chapter: 5,
        text: "Num relatório de defeito, qual informação é CRÍTICA para que o programador consiga corrigir o problema?",
        options: [
            { id: 'a', text: "O nome do Gestor de Projeto." },
            { id: 'b', text: "Passos para reproduzir (Steps to Reproduce) e o ambiente de teste." },
            { id: 'c', text: "A data prevista para o lançamento." },
            { id: 'd', text: "O salário do testador que encontrou o defeito." }
        ],
        correctAnswer: 'b',
        explanation: "Sem os passos exatos para reproduzir a falha e o contexto do ambiente, o programador dificilmente conseguirá entender ou corrigir o erro."
    },
    {
        id: 73,
        chapter: 6,
        text: "Em que situação a 'Automação de Testes' é MENOS recomendada?",
        options: [
            { id: 'a', text: "Testes de Regressão executados frequentemente." },
            { id: 'b', text: "Testes de Carga e Performance." },
            { id: 'c', text: "Testes executados apenas uma vez (ad-hoc) ou onde os requisitos mudam constantemente (instabilidade)." },
            { id: 'd', text: "Cálculos matemáticos complexos propensos a erro humano." }
        ],
        correctAnswer: 'c',
        explanation: "Se o teste corre uma só vez ou a funcionalidade muda todos os dias, o custo de criar e manter o script de automação é superior ao benefício."
    },
    {
        id: 74,
        chapter: 4,
        text: "Qual das seguintes é uma técnica de teste Caixa-Branca?",
        options: [
            { id: 'a', text: "Particionamento de Equivalência." },
            { id: 'b', text: "Análise de Valor Fronteira." },
            { id: 'c', text: "Cobertura de Instruções (Statement Testing)." },
            { id: 'd', text: "Teste de Transição de Estados." }
        ],
        correctAnswer: 'c',
        explanation: "Caixa-branca implica olhar para a estrutura interna (código). As outras opções (A, B, D) são técnicas de Caixa-preta (comportamentais)."
    },
    {
        id: 75,
        chapter: 1,
        text: "O que é um 'Oráculo de Teste'?",
        options: [
            { id: 'a', text: "Uma ferramenta de IA que escreve código." },
            { id: 'b', text: "Uma fonte usada para determinar o resultado esperado e compará-lo com o resultado atual (ex: requisitos, sistema antigo, especialista)." },
            { id: 'c', text: "Uma base de dados da Oracle." },
            { id: 'd', text: "O gestor de testes que decide tudo." }
        ],
        correctAnswer: 'b',
        explanation: "O oráculo é a fonte da verdade. Pode ser um documento, um sistema legado, ou o conhecimento de um especialista, usado para validar se o teste passou."
    },
    {
        id: 76,
        chapter: 1,
        text: "Qual é a principal diferença entre um 'Erro' (Mistake), um 'Defeito' (Fault/Bug) e uma 'Falha' (Failure)?",
        options: [
            { id: 'a', text: "O utilizador comete um erro, que cria uma falha no código, que leva a um defeito na execução." },
            { id: 'b', text: "O ser humano comete um erro, que introduz um defeito no código; se executado, o defeito pode causar uma falha." },
            { id: 'c', text: "Não há diferença, são sinónimos." },
            { id: 'd', text: "A falha é no código, o defeito é na documentação e o erro é no hardware." }
        ],
        correctAnswer: 'b',
        explanation: "Cadeia causal correta: Ação humana (Erro) -> Bug no software (Defeito) -> Comportamento incorreto visível (Falha)."
    },
    {
        id: 77,
        chapter: 5,
        text: "O que deve acontecer se os Critérios de Saída (Exit Criteria) de um nível de teste não forem atingidos?",
        options: [
            { id: 'a', text: "O teste deve parar imediatamente e o projeto ser cancelado." },
            { id: 'b', text: "O software deve ser lançado de qualquer forma." },
            { id: 'c', text: "O teste continua ou, se o lançamento for forçado, deve-se comunicar aos stakeholders o risco associado aos testes não concluídos." },
            { id: 'd', text: "Os critérios devem ser apagados do plano de testes." }
        ],
        correctAnswer: 'c',
        explanation: "Se os critérios não forem atingidos, não se deve avançar cegamente. Deve-se estender o teste ou obter aprovação dos stakeholders aceitando o risco."
    },
    {
        id: 78,
        chapter: 2,
        text: "Nos métodos Ágeis, qual é a vantagem da 'Integração Contínua' para os testes?",
        options: [
            { id: 'a', text: "Permite feedback rápido sobre a qualidade do código a cada alteração, facilitando a deteção e correção imediata de defeitos." },
            { id: 'b', text: "Elimina a necessidade de testadores manuais." },
            { id: 'c', text: "Garante que o cliente aceita o produto automaticamente." },
            { id: 'd', text: "Aumenta o tempo necessário para lançar o software." }
        ],
        correctAnswer: 'a',
        explanation: "CI executa testes automáticos a cada commit, avisando logo o programador se ele 'partiu' alguma coisa."
    },
    {
        id: 79,
        chapter: 3,
        text: "Qual é o objetivo da 'Revisão Técnica' (Technical Review)?",
        options: [
            { id: 'a', text: "Apenas encontrar erros de ortografia." },
            { id: 'b', text: "Avaliação por pares qualificados (técnicos) para detetar defeitos, obter consenso e tomar decisões técnicas sobre o produto de trabalho." },
            { id: 'c', text: "Treinar participantes juniores (objetivo principal do Walkthrough)." },
            { id: 'd', text: "Recolher métricas estatísticas para gestão (objetivo da Inspeção)." }
        ],
        correctAnswer: 'b',
        explanation: "A revisão técnica é menos formal que a inspeção mas foca-se na conformidade técnica e consenso entre especialistas."
    },
    {
        id: 80,
        chapter: 4,
        text: "Qual é uma estratégia comum para testar sistemas legados com pouca documentação?",
        options: [
            { id: 'a', text: "Recusar testar até que a documentação seja escrita." },
            { id: 'b', text: "Utilizar apenas testes de caixa-branca." },
            { id: 'c', text: "Utilizar Testes Exploratórios para aprender sobre o sistema enquanto se testa e criar casos de teste gradualmente." },
            { id: 'd', text: "Assumir que o sistema funciona bem porque é antigo." }
        ],
        correctAnswer: 'c',
        explanation: "Testes exploratórios são ideais para aprender o comportamento da aplicação e descobrir defeitos quando as especificações são escassas."
    },
    {
        id: 81,
        chapter: 1,
        text: "Qual é a diferença fundamental entre 'Depuração' (Debugging) e 'Teste'?",
        options: [
            { id: 'a', text: "O Teste é feito por máquinas; a Depuração é feita por humanos." },
            { id: 'b', text: "O Teste mostra falhas causadas por defeitos; a Depuração encontra, analisa e remove a causa dessas falhas (o defeito)." },
            { id: 'c', text: "O Teste remove defeitos; a Depuração apenas os localiza." },
            { id: 'd', text: "O Teste é feito na fase de codificação; a Depuração é feita na fase de aceitação." }
        ],
        correctAnswer: 'b',
        explanation: "Teste é a atividade de verificar o sistema para encontrar falhas. Depuração é a atividade de desenvolvimento para corrigir o código."
    },
    {
        id: 82,
        chapter: 1,
        text: "Qual das seguintes atividades é tipicamente responsabilidade de um 'Gestor de Testes'?",
        options: [
            { id: 'a', text: "Preparar e adquirir os dados de teste." },
            { id: 'b', text: "Escrever scripts de automação." },
            { id: 'c', text: "Definir a estratégia de teste, planear as atividades e monitorizar o progresso." },
            { id: 'd', text: "Executar os testes manuais de regressão." }
        ],
        correctAnswer: 'c',
        explanation: "O Gestor planeia, monitoriza e controla. O Testador executa, cria dados e escreve scripts."
    },
    {
        id: 83,
        chapter: 4,
        text: "Um campo aceita valores inteiros de 10 a 20 (inclusive). Usando Particionamento de Equivalência, quais são os valores mínimos para testar todas as partições (válidas e inválidas)?",
        options: [
            { id: 'a', text: "15 (Válido)" },
            { id: 'b', text: "9, 15, 21" },
            { id: 'c', text: "10, 20" },
            { id: 'd', text: "5, 15, 25, 30" }
        ],
        correctAnswer: 'b',
        explanation: "Partições: Inválida Baixa (<10), Válida (10-20), Inválida Alta (>20). Valores representativos: 9, 15, 21 cobrem as três partições."
    },
    {
        id: 84,
        chapter: 2,
        text: "Em que consiste a abordagem de 'Integração Incremental'?",
        options: [
            { id: 'a', text: "Integrar todos os componentes de uma só vez (Big Bang)." },
            { id: 'b', text: "Integrar componentes um a um (ou em pequenos grupos), testando as interfaces à medida que se avança." },
            { id: 'c', text: "Testar apenas a interface gráfica." },
            { id: 'd', text: "Testar o sistema apenas quando este for instalado no cliente." }
        ],
        correctAnswer: 'b',
        explanation: "Incremental (Top-down ou Bottom-up) permite isolar falhas nas interfaces mais facilmente do que a abordagem Big Bang."
    },
    {
        id: 85,
        chapter: 2,
        text: "Quando deve ocorrer o 'Teste de Manutenção'?",
        options: [
            { id: 'a', text: "Apenas quando um novo sistema é construído do zero." },
            { id: 'b', text: "Após alterações (correções/melhorias), migração de plataforma ou reforma (retire) do sistema." },
            { id: 'c', text: "Antes de escrever os requisitos." },
            { id: 'd', text: "Diariamente, às 9 da manhã." }
        ],
        correctAnswer: 'b',
        explanation: "O teste de manutenção é acionado por modificações, migrações ou descontinuação de software em produção."
    },
    {
        id: 86,
        chapter: 6,
        text: "Qual destas ferramentas é classificada como uma 'Ferramenta de Execução de Testes'?",
        options: [
            { id: 'a', text: "Jira (Gestão de defeitos)." },
            { id: 'b', text: "Selenium ou Cypress (Execução de scripts automatizados)." },
            { id: 'c', text: "Git (Gestão de configuração)." },
            { id: 'd', text: "SonarQube (Análise estática)." }
        ],
        correctAnswer: 'b',
        explanation: "Ferramentas como Selenium/Cypress correm scripts que simulam ações no software, classificando-se como execução."
    },
    {
        id: 87,
        chapter: 1,
        text: "O princípio 'Os testes dependem do contexto' significa que:",
        options: [
            { id: 'a', text: "Devemos testar sempre da mesma forma, independentemente do projeto." },
            { id: 'b', text: "Um software de segurança crítica (avião) é testado de forma diferente de um site de e-commerce." },
            { id: 'c', text: "O contexto não importa, apenas o código importa." },
            { id: 'd', text: "Os testes automatizados são sempre melhores que os manuais." }
        ],
        correctAnswer: 'b',
        explanation: "A estratégia, rigor e técnicas usadas variam consoante o risco e o tipo de negócio (Princípio 6)."
    },
    {
        id: 88,
        chapter: 3,
        text: "Qual é a principal característica de uma 'Revisão Informal'?",
        options: [
            { id: 'a', text: "Segue um processo definido com métricas de entrada e saída." },
            { id: 'b', text: "É liderada por um moderador treinado." },
            { id: 'c', text: "Não tem processo formal documentado e baseia-se frequentemente em 'Buddy Check' ou 'Pair Programming'." },
            { id: 'd', text: "É usada apenas para documentos de alto risco." }
        ],
        correctAnswer: 'c',
        explanation: "Revisões informais são rápidas, baratas e não requerem documentação formal ou papéis definidos."
    },
    {
        id: 89,
        chapter: 4,
        text: "O que distingue um teste 'Caixa-Preta' de um teste 'Caixa-Branca'?",
        options: [
            { id: 'a', text: "A cor da interface do utilizador." },
            { id: 'b', text: "Caixa-Preta baseia-se na especificação/comportamento sem ver o código; Caixa-Branca baseia-se na estrutura interna do código." },
            { id: 'c', text: "Caixa-Preta é feito por developers; Caixa-Branca por testadores." },
            { id: 'd', text: "Caixa-Branca é para requisitos funcionais apenas." }
        ],
        correctAnswer: 'b',
        explanation: "A distinção principal é a visibilidade: Caixa-Preta (Input/Output) vs. Caixa-Branca (Lógica interna/Estrutura)."
    },
    {
        id: 90,
        chapter: 5,
        text: "Num relatório de defeito, qual a diferença entre 'Gravidade' (Severity) e 'Prioridade' (Priority)?",
        options: [
            { id: 'a', text: "São a mesma coisa." },
            { id: 'b', text: "Gravidade é o impacto técnico no sistema; Prioridade é a urgência de correção para o negócio." },
            { id: 'c', text: "Gravidade é decidida pelo cliente; Prioridade pelo programador." },
            { id: 'd', text: "Prioridade é técnica; Gravidade é política." }
        ],
        correctAnswer: 'b',
        explanation: "Um erro ortográfico no logótipo da empresa tem Baixa Gravidade (o sistema não cai) mas Alta Prioridade (dano à imagem)."
    },
    {
        id: 91,
        chapter: 4,
        text: "O que acontece numa Tabela de Decisão quando colapsamos/simplificamos regras?",
        options: [
            { id: 'a', text: "Removemos os casos de teste que falharam." },
            { id: 'b', text: "Combinamos colunas onde as ações são iguais e as diferenças nas condições não afetam o resultado." },
            { id: 'c', text: "Apagamos as colunas pares." },
            { id: 'd', text: "Transformamos a tabela num gráfico de estados." }
        ],
        correctAnswer: 'b',
        explanation: "Se o resultado é o mesmo independentemente de uma condição ser Verdadeira ou Falsa, podemos simplificar essas colunas."
    },
    {
        id: 92,
        chapter: 2,
        text: "Qual é o objetivo principal dos 'Testes de Aceitação do Utilizador' (UAT)?",
        options: [
            { id: 'a', text: "Encontrar bugs no código que os programadores falharam." },
            { id: 'b', text: "Construir confiança de que o sistema está pronto para uso e cumpre os requisitos de negócio." },
            { id: 'c', text: "Testar a carga máxima do servidor." },
            { id: 'd', text: "Verificar a sintaxe das queries SQL." }
        ],
        correctAnswer: 'b',
        explanation: "O foco do UAT é a validação pelo utilizador final e a confiança para o 'Go-Live', não a deteção técnica de defeitos."
    },
    {
        id: 93,
        chapter: 4,
        text: "Se um programa tem o código: `IF (A > 5 OR B < 3) THEN Print('Olá')`. Quantos casos de teste mínimos são precisos para 100% Cobertura de Instruções?",
        options: [
            { id: 'a', text: "1" },
            { id: 'b', text: "2" },
            { id: 'c', text: "3" },
            { id: 'd', text: "4" }
        ],
        correctAnswer: 'a',
        explanation: "Basta UM teste onde A=6 (True) para entrar no IF e executar o 'Print'. Isso garante 100% de instruções executadas."
    },
    {
        id: 94,
        chapter: 5,
        text: "O que é 'Timeboxing' nos testes exploratórios?",
        options: [
            { id: 'a', text: "Testar apenas durante a noite." },
            { id: 'b', text: "Definir um período de tempo fixo e ininterrupto (ex: 60 a 120 min) para focar numa sessão de teste específica." },
            { id: 'c', text: "Medir quanto tempo o sistema demora a responder." },
            { id: 'd', text: "Uma técnica para estimar custos." }
        ],
        correctAnswer: 'b',
        explanation: "Timeboxing ajuda a manter o foco e gerir o esforço em sessões de teste exploratório (Session-Based Testing)."
    },
    {
        id: 95,
        chapter: 5,
        text: "Por que razão a 'Gestão de Configuração' é importante para os testes?",
        options: [
            { id: 'a', text: "Para saber qual a versão exata do software e dos testes (testware) que estão a ser usados, garantindo a integridade." },
            { id: 'b', text: "Para configurar os monitores dos testadores." },
            { id: 'c', text: "Para gerir as férias da equipa." },
            { id: 'd', text: "Não é importante, é uma tarefa administrativa opcional." }
        ],
        correctAnswer: 'a',
        explanation: "Sem gestão de configuração, não sabemos se estamos a testar a versão correta ou se os resultados são reproduzíveis."
    },
    {
        id: 96,
        chapter: 6,
        text: "Qual é um risco comum na introdução de ferramentas de teste (ex: automação)?",
        options: [
            { id: 'a', text: "As ferramentas reduzem o trabalho repetitivo." },
            { id: 'b', text: "Subestimar o tempo, custo e esforço necessários para manter os artefactos de teste (manutenção)." },
            { id: 'c', text: "As ferramentas são sempre gratuitas." },
            { id: 'd', text: "A ferramenta melhora a consistência dos testes." }
        ],
        correctAnswer: 'b',
        explanation: "Muitos projetos falham porque ignoram que o código de teste precisa de tanta manutenção como o código de produção."
    },
    {
        id: 97,
        chapter: 1,
        text: "O que é a 'Verificação' vs 'Validação'?",
        options: [
            { id: 'a', text: "Verificação: 'Estamos a construir o produto corretamente?'; Validação: 'Estamos a construir o produto correto?'" },
            { id: 'b', text: "Verificação é feita pelo cliente; Validação pelo programador." },
            { id: 'c', text: "Verificação é teste dinâmico; Validação é teste estático." },
            { id: 'd', text: "São sinónimos exatos." }
        ],
        correctAnswer: 'a',
        explanation: "Verificação confirma conformidade com requisitos (técnico). Validação confirma que satisfaz as necessidades do utilizador (negócio)."
    },
    {
        id: 98,
        chapter: 1,
        text: "Num ciclo de vida Ágil, quem é responsável pela qualidade?",
        options: [
            { id: 'a', text: "Apenas os testadores." },
            { id: 'b', text: "Apenas o Product Owner." },
            { id: 'c', text: "A equipa inteira (Whole Team Approach)." },
            { id: 'd', text: "O Scrum Master." }
        ],
        correctAnswer: 'c',
        explanation: "Em Agile, a qualidade é responsabilidade partilhada de todos (devs, testers, PO, etc.)."
    },
    {
        id: 99,
        chapter: 4,
        text: "Qual destas NÃO é uma técnica de teste baseada na estrutura (Caixa-Branca)?",
        options: [
            { id: 'a', text: "Cobertura de Instruções." },
            { id: 'b', text: "Teste de Transição de Estados." },
            { id: 'c', text: "Cobertura de Decisões." },
            { id: 'd', text: "Cobertura de Caminhos." }
        ],
        correctAnswer: 'b',
        explanation: "Transição de Estados baseia-se no comportamento observável do sistema (Caixa-Preta), não na estrutura interna."
    },
    {
        id: 100,
        chapter: 5,
        text: "Qual é o principal critério para decidir parar os testes (Critério de Saída)?",
        options: [
            { id: 'a', text: "Quando o tempo acaba, independentemente da qualidade." },
            { id: 'b', text: "Quando os critérios de saída definidos no plano (ex: cobertura, risco, defeitos) são atingidos." },
            { id: 'c', text: "Quando o testador está cansado." },
            { id: 'd', text: "Quando todos os testes tiverem passado a 100% sem exceção." }
        ],
        correctAnswer: 'b',
        explanation: "Parar testes baseia-se em critérios acordados (risco mitigado, orçamento, cobertura). Esperar por 100% de sucesso é muitas vezes irrealista."
    }
];

/**
 * Generates a weighted exam following official ISTQB v4.0 distribution
 * Total: 40 questions
 * Chapter 1: 8 questions (Fundamentos do Teste)
 * Chapter 2: 6 questions (Testes ao longo do Ciclo de Vida)
 * Chapter 3: 4 questions (Teste Estático)
 * Chapter 4: 11 questions (Análise e Desenho de Testes)
 * Chapter 5: 9 questions (Gestão das Atividades de Teste)
 * Chapter 6: 2 questions (Ferramentas de Teste)
 */
export function generateWeightedExam() {
    // Chapter distribution per ISTQB v4.0
    const distribution = {
        1: 8,  // Fundamentos
        2: 6,  // SDLC
        3: 4,  // Estático
        4: 11, // Técnicas
        5: 9,  // Gestão
        6: 2   // Ferramentas
    };

    // Group questions by chapter
    const questionsByChapter = {};
    questions.forEach(q => {
        if (!questionsByChapter[q.chapter]) {
            questionsByChapter[q.chapter] = [];
        }
        questionsByChapter[q.chapter].push(q);
    });

    // Fisher-Yates shuffle helper
    // Randomizes array in-place with O(n) complexity
    function shuffle(array) {
        const shuffled = [...array];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    }

    // Select questions for each chapter
    const selectedQuestions = [];
    Object.entries(distribution).forEach(([chapter, count]) => {
        const chapterNumber = parseInt(chapter);
        const availableQuestions = questionsByChapter[chapterNumber] || [];

        // 1. Shuffle available questions for this chapter
        const shuffled = shuffle(availableQuestions);

        // 2. Select the required number of questions (e.g., 8 for Chapter 1)
        const selected = shuffled.slice(0, count);

        selectedQuestions.push(...selected);
    });

    // Final shuffle to mix chapters so they don't appear sequentially
    return shuffle(selectedQuestions);
}

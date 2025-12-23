export const questions = [
    // ==========================================
    // EXAM SET A - Version 1.7
    // ==========================================
    {
        id: 1,
        chapter: 1,
        kLevel: 'K1',
        lo: 'FL-1.1.1',
        text: "Qual das seguintes afirmações descreve um objetivo de teste válido?",
        options: [
            { id: 'a', text: "Provar que não existem defeitos não corrigidos no sistema sob teste" },
            { id: 'b', text: "Provar que não ocorrerão falhas após a implementação do sistema em produção" },
            { id: 'c', text: "Reduzir o nível de risco do objeto de teste e aumentar a confiança no nível de qualidade" },
            { id: 'd', text: "Verificar se não existem combinações de entradas não testadas" }
        ],
        correctAnswer: 'c',
        explanation: "c) Está correta. O teste encontra defeitos e falhas, o que reduz o nível de risco e, ao mesmo tempo, dá mais confiança no nível de qualidade do objeto de teste. É impossível provar a ausência de defeitos (Princípio 1)."
    },
    {
        id: 2,
        chapter: 1,
        kLevel: 'K2',
        lo: 'FL-1.2.1',
        text: "Qual das seguintes opções apresenta um exemplo de atividades de teste que contribuem para o sucesso?",
        options: [
            { id: 'a', text: "Ter os testadores envolvidos durante várias atividades do ciclo de vida de desenvolvimento de software (SDLC) ajudará a detetar defeitos em produtos de trabalho" },
            { id: 'b', text: "Os testadores tentam não incomodar os programadores enquanto estes estão a programar, para que os programadores possam escrever melhor código" },
            { id: 'c', text: "Os testadores, ao colaborarem com os utilizadores finais, ajudam a melhorar a qualidade dos relatórios de defeitos durante a integração de componentes e o teste de sistema" },
            { id: 'd', text: "Testadores certificados conceberão casos de teste muito melhores do que testadores não certificados" }
        ],
        correctAnswer: 'a',
        explanation: "a) Está correta. O envolvimento do testador desde o início do SDLC aumenta a compreensão das decisões de conceção e permite a deteção precoce de defeitos."
    },
    {
        id: 3,
        chapter: 1,
        kLevel: 'K2',
        lo: 'FL-1.3.1',
        text: "Foi atribuído como testador a uma equipa que produz um novo sistema de forma incremental. Notou que não foram feitas alterações aos casos de teste de regressão existentes durante várias iterações e que não foram identificados novos defeitos de regressão. O seu gestor está satisfeito, mas o utilizador não. Qual o princípio de teste que explica o seu ceticismo?",
        options: [
            { id: 'a', text: "Os testes desgastam-se" },
            { id: 'b', text: "Falácia da ausência de defeitos" },
            { id: 'c', text: "Os defeitos agrupam-se" },
            { id: 'd', text: "O teste exaustivo é impossível" }
        ],
        correctAnswer: 'a',
        explanation: "a) Está correta. Este princípio significa que, se os mesmos testes forem repetidos vezes sem conta, eventualmente esses testes deixarão de encontrar novos defeitos."
    },
    {
        id: 4,
        chapter: 1,
        kLevel: 'K2',
        lo: 'FL-1.4.1',
        text: "Trabalha numa equipa que desenvolve uma aplicação móvel para encomenda de refeições. Na iteração atual, a equipa decidiu implementar a funcionalidade de pagamento. Qual das seguintes atividades faz parte da análise de teste?",
        options: [
            { id: 'a', text: "Estimar que o teste da integração com o serviço de pagamento levará 8 pessoas-dia" },
            { id: 'b', text: "Decidir que a equipa deve testar se é possível partilhar corretamente o pagamento entre vários utilizadores" },
            { id: 'c', text: "Utilizar a análise de valor limite (BVA) para derivar os dados de teste para os casos de teste que verificam o processamento correto do pagamento para o montante mínimo permitido" },
            { id: 'd', text: "Analisar a discrepância entre o resultado real e o resultado esperado após a execução de um caso de teste que verifica o processo de pagamento com cartão de crédito, e reportar um defeito" }
        ],
        correctAnswer: 'b',
        explanation: "b) Está correta. Este é um exemplo de definição de condições de teste, que faz parte da análise de teste."
    },
    {
        id: 5,
        chapter: 1,
        kLevel: 'K2',
        lo: 'FL-1.4.2',
        text: "Quais dos seguintes fatores têm uma influência SIGNIFICATIVA na abordagem de teste?\n\ni. O SDLC\nii. O número de defeitos detetados em projetos anteriores\niii. Os riscos de produto identificados\niv. Novos requisitos regulamentares que forçam o teste formal de caixa-branca\nv. A configuração do ambiente de teste",
        options: [
            { id: 'a', text: "i, ii têm influência significativa" },
            { id: 'b', text: "i, iii, iv têm influência significativa" },
            { id: 'c', text: "ii, iv, v têm influência significativa" },
            { id: 'd', text: "iii, v têm influência significativa" }
        ],
        correctAnswer: 'b',
        explanation: "b) Está correta. O SDLC (i), os riscos de produto (iii) e os requisitos regulamentares (iv) têm influência significativa na abordagem de teste."
    },
    {
        id: 6,
        chapter: 1,
        kLevel: 'K2',
        lo: 'FL-1.4.5',
        text: "Quais DUAS das seguintes tarefas pertencem PRINCIPALMENTE a uma função de teste?",
        type: 'multiple',
        options: [
            { id: 'a', text: "Configurar ambientes de teste" },
            { id: 'b', text: "Manter o product backlog" },
            { id: 'c', text: "Conceber soluções para novos requisitos" },
            { id: 'd', text: "Criar o plano de teste" },
            { id: 'e', text: "Analisar a base de teste" }
        ],
        correctAnswer: ['a', 'e'],
        explanation: "As opções a) e e) estão corretas. Configurar ambientes e analisar a base de teste são tarefas técnicas realizadas pelos testadores."
    },
    {
        id: 7,
        chapter: 1,
        kLevel: 'K2',
        lo: 'FL-1.5.1',
        text: "Quais das seguintes competências (i-v) são as competências MAIS importantes de um testador?\n\ni. Ter conhecimento do domínio\nii. Criar uma visão de produto\niii. Ser um bom elemento de equipa\niv. Planear e organizar o trabalho da equipa\nv. Pensamento crítico",
        options: [
            { id: 'a', text: "ii e iv são importantes" },
            { id: 'b', text: "i, iii e v são importantes" },
            { id: 'c', text: "i, ii e v são importantes" },
            { id: 'd', text: "iii e iv são importantes" }
        ],
        correctAnswer: 'b',
        explanation: "b) Está correta. Conhecimento do domínio (i), trabalho em equipa (iii) e pensamento crítico (v) são competências fundamentais do testador."
    },
    {
        id: 8,
        chapter: 1,
        kLevel: 'K1',
        lo: 'FL-1.5.2',
        text: "Como é que a abordagem de equipa inteira está presente nas interações entre testadores e representantes de negócio?",
        options: [
            { id: 'a', text: "Os representantes de negócio decidem sobre as abordagens de automação de teste" },
            { id: 'b', text: "Os testadores ajudam os representantes de negócio a definir uma estratégia de teste" },
            { id: 'c', text: "Os representantes de negócio não fazem parte da abordagem de equipa inteira" },
            { id: 'd', text: "Os testadores ajudam os representantes de negócio a criar testes de aceitação adequados" }
        ],
        correctAnswer: 'd',
        explanation: "d) Está correta. Os testadores trabalham em estreita colaboração com os representantes de negócio para apoiar e colaborar na criação de testes de aceitação adequados."
    },
    {
        id: 9,
        chapter: 2,
        kLevel: 'K1',
        lo: 'FL-2.1.2',
        text: "Considere a seguinte regra: \"para cada atividade de SDLC existe uma atividade de teste correspondente\". Em que modelos de SDLC se aplica esta regra?",
        options: [
            { id: 'a', text: "Apenas em modelos de desenvolvimento sequenciais" },
            { id: 'b', text: "Apenas em modelos de desenvolvimento iterativos" },
            { id: 'c', text: "Apenas em modelos de desenvolvimento iterativos e incrementais" },
            { id: 'd', text: "Em modelos de desenvolvimento sequenciais, incrementais e iterativos" }
        ],
        correctAnswer: 'd',
        explanation: "d) Está correta. Esta regra aplica-se a todos os modelos de SDLC."
    },
    {
        id: 10,
        chapter: 2,
        kLevel: 'K1',
        lo: 'FL-2.1.3',
        text: "Qual das seguintes afirmações MELHOR descreve a abordagem de desenvolvimento orientado a testes de aceitação (ATDD)?",
        options: [
            { id: 'a', text: "No ATDD, os critérios de aceitação são tipicamente criados com base no formato dado/quando/então" },
            { id: 'b', text: "No ATDD, os casos de teste são criados principalmente no teste de componentes e são orientados ao código" },
            { id: 'c', text: "No ATDD, os testes são criados com base nos critérios de aceitação para orientar o desenvolvimento do software relacionado" },
            { id: 'd', text: "No ATDD, os testes baseiam-se no comportamento desejado do software, o que facilita a sua compreensão pelos membros da equipa" }
        ],
        correctAnswer: 'c',
        explanation: "c) Está correta. No ATDD, os testes são escritos a partir dos critérios de aceitação como parte do processo de conceção para orientar o desenvolvimento."
    },
    {
        id: 11,
        chapter: 2,
        kLevel: 'K2',
        lo: 'FL-2.1.5',
        text: "Qual das seguintes opções NÃO é um exemplo da abordagem shift-left?",
        options: [
            { id: 'a', text: "Rever os requisitos do utilizador antes de serem formalmente aceites pelos stakeholders" },
            { id: 'b', text: "Escrever um teste de componente antes de o código correspondente ser escrito" },
            { id: 'c', text: "Executar um teste de eficiência de desempenho para um componente durante o teste de componentes" },
            { id: 'd', text: "Escrever um script de teste antes de configurar o processo de gestão de configuração" }
        ],
        correctAnswer: 'd',
        explanation: "d) Está correta. Os scripts de teste devem estar sujeitos à gestão de configuração; criá-los antes do processo estar configurado não faz parte do shift-left."
    },
    {
        id: 12,
        chapter: 2,
        kLevel: 'K2',
        lo: 'FL-2.1.6',
        text: "Que argumentos utilizaria para convencer o seu gestor a organizar retrospetivas no final de cada ciclo de libertação (release)?",
        options: [
            { id: 'a', text: "As retrospetivas são muito populares hoje em dia e os clientes apreciariam se as adicionássemos aos nossos processos" },
            { id: 'b', text: "Organizar retrospetivas poupará dinheiro à organização porque, sem elas, os representantes dos utilizadores finais não fornecem feedback imediato sobre o produto" },
            { id: 'c', text: "As fraquezas do processo identificadas durante a retrospetiva podem ser analisadas e servir como uma lista de tarefas para o programa de melhoria contínua do processo da organização" },
            { id: 'd', text: "As retrospetivas abrangem cinco valores, incluindo coragem e respeito, que são cruciais para manter a melhoria contínua na organização" }
        ],
        correctAnswer: 'c',
        explanation: "c) Está correta. Retrospetivas regulares com atividades de acompanhamento são críticas para a melhoria contínua do desenvolvimento e do teste."
    },
    {
        id: 13,
        chapter: 2,
        kLevel: 'K2',
        lo: 'FL-2.2.1',
        text: "Que tipos de falhas (1-4) se ajustam MELHOR a que níveis de teste (A-D)?\n\n1. Falhas no comportamento do sistema ao desviar-se das necessidades de negócio do utilizador\n2. Falhas na comunicação entre componentes\n3. Falhas na lógica do código\n4. Falhas em regras de negócio não implementadas corretamente\n\nA. Teste de componentes\nB. Teste de integração de componentes\nC. Teste de sistema\nD. Teste de aceitação",
        tableHtml: `<div class="overflow-x-auto my-4 p-2 rounded border border-slate-300 bg-white text-black">
          <table class="w-full text-sm text-black">
            <tr class="font-bold border-b bg-gray-50"><td class="p-2 border-r border-gray-200">Tipo de Falha</td><td class="p-2">Nível de Teste</td></tr>
            <tr><td class="p-2 border-r border-gray-200">1. Desvio das necessidades de negócio</td><td class="p-2">D. Teste de aceitação</td></tr>
            <tr><td class="p-2 border-r border-gray-200">2. Comunicação entre componentes</td><td class="p-2">B. Teste de integração de componentes</td></tr>
            <tr><td class="p-2 border-r border-gray-200">3. Lógica no código</td><td class="p-2">A. Teste de componentes</td></tr>
            <tr><td class="p-2 border-r border-gray-200">4. Regras de negócio incorretas</td><td class="p-2">C. Teste de sistema</td></tr>
          </table>
        </div>`,

        options: [
            { id: 'a', text: "1D, 2B, 3A, 4C" },
            { id: 'b', text: "1D, 2B, 3C, 4A" },
            { id: 'c', text: "1B, 2A, 3D, 4C" },
            { id: 'd', text: "1C, 2B, 3A, 4D" }
        ],
        correctAnswer: 'a',
        explanation: "a) Está correta. 1-D (Aceitação), 2-B (Integração de Componentes), 3-A (Componente), 4-C (Sistema)."
    },
    {
        id: 14,
        chapter: 2,
        kLevel: 'K2',
        lo: 'FL-2.2.3',
        text: "Está a testar uma história de utilizador (user story) com três critérios de aceitação: AC1, AC2 e AC3. AC1 é coberto pelo caso de teste TC1, AC2 pelo TC2 e AC3 pelo TC3. O histórico de execução de testes teve três execuções em três versões consecutivas do software da seguinte forma:",
        tableHtml: `<div class="overflow-x-auto my-4 p-2 rounded border border-slate-300 bg-white text-black">
          <table class="min-w-full text-center text-sm">
            <tr class="font-bold border-b border-gray-300 bg-gray-100">
              <th class="p-2"></th>
              <th class="p-2 border-l border-gray-300">Execução 1</th>
              <th class="p-2 border-l border-gray-300">Execução 2</th>
              <th class="p-2 border-l border-gray-300">Execução 3</th>
            </tr>
            <tr class="border-b border-gray-200">
              <td class="p-2 font-bold">TC1</td>
              <td class="p-2 border-l border-gray-300">(1) Falhou</td>
              <td class="p-2 border-l border-gray-300">(4) Passou</td>
              <td class="p-2 border-l border-gray-300">(7) Passou</td>
            </tr>
            <tr class="border-b border-gray-200">
              <td class="p-2 font-bold">TC2</td>
              <td class="p-2 border-l border-gray-300">(2) Passou</td>
              <td class="p-2 border-l border-gray-300">(5) Falhou</td>
              <td class="p-2 border-l border-gray-300">(8) Passou</td>
            </tr>
            <tr>
              <td class="p-2 font-bold">TC3</td>
              <td class="p-2 border-l border-gray-300">(3) Falhou</td>
              <td class="p-2 border-l border-gray-300">(6) Falhou</td>
              <td class="p-2 border-l border-gray-300">(9) Passou</td>
            </tr>
          </table>
        </div>\nOs testes são repetidos assim que for informado de que todos os defeitos encontrados na execução do teste foram corrigidos e uma nova versão do software está disponível. Quais dos testes acima são executados como testes de regressão?`,

        options: [
            { id: 'a', text: "Apenas 4, 7, 8, 9" },
            { id: 'b', text: "Apenas 5, 7" },
            { id: 'c', text: "Apenas 4, 6, 8, 9" },
            { id: 'd', text: "Apenas 5, 6" }
        ],
        correctAnswer: 'b',
        explanation: "b) Está correta. O TC2 passou na Execução 1, logo (5) é um teste de regressão. O TC1 passou na Execução 2, logo (7) é um teste de regressão."
    },
    {
        id: 15,
        chapter: 3,
        kLevel: 'K2',
        lo: 'FL-3.1.2',
        text: "Qual das seguintes opções NÃO é um benefício do teste estático?",
        options: [
            { id: 'a', text: "Ter uma gestão de defeitos menos dispendiosa devido à facilidade de detetar defeitos mais tarde no SDLC" },
            { id: 'b', text: "Corrigir defeitos encontrados durante o teste estático é geralmente muito menos dispendioso do que corrigir defeitos encontrados durante o teste dinâmico" },
            { id: 'c', text: "Encontrar defeitos de programação que podem não ter sido encontrados apenas através da realização de testes dinâmicos" },
            { id: 'd', text: "Detetar lacunas e inconsistências nos requisitos" }
        ],
        correctAnswer: 'a',
        explanation: "a) Está correta. Encontrar e corrigir defeitos mais tarde no SDLC é mais dispendioso; o teste estático visa a deteção precoce."
    },
    {
        id: 16,
        chapter: 3,
        kLevel: 'K1',
        lo: 'FL-3.2.1',
        text: "Qual das seguintes opções é um benefício do feedback precoce e frequente?",
        options: [
            { id: 'a', text: "Melhora o processo de teste para projetos futuros" },
            { id: 'b', text: "Obriga os clientes a priorizar os seus requisitos com base nos riscos acordados" },
            { id: 'c', text: "Fornece uma medida para a qualidade das alterações" },
            { id: 'd', text: "Ajuda a evitar mal-entendidos nos requisitos" }
        ],
        correctAnswer: 'd',
        explanation: "d) Está correta. O feedback precoce e frequente pode prevenir mal-entendidos sobre os requisitos."
    },
    {
        id: 17,
        chapter: 3,
        kLevel: 'K2',
        lo: 'FL-3.2.4',
        text: "As revisões que estão a ser utilizadas na sua organização têm os seguintes atributos:\n\n- Existe a função de escriba\n- O objetivo principal é avaliar a qualidade\n- A reunião é liderada pelo autor do produto de trabalho\n- Existe preparação individual\n- É produzido um relatório de revisão\n\nQual dos seguintes tipos de revisão está MAIS provavelmente a ser utilizado?",
        options: [
            { id: 'a', text: "Revisão informal" },
            { id: 'b', text: "Walkthrough" },
            { id: 'c', text: "Revisão técnica" },
            { id: 'd', text: "Inspeção" }
        ],
        correctAnswer: 'b',
        explanation: "b) Está correta. Avaliar a qualidade e ter o autor a liderar a reunião são objetivos fundamentais de um walkthrough."
    },
    {
        id: 18,
        chapter: 3,
        kLevel: 'K1',
        lo: 'FL-3.2.5',
        text: "Qual destas afirmações NÃO é um fator que contribui para o sucesso das revisões?",
        options: [
            { id: 'a', text: "Os participantes devem dedicar tempo adequado à revisão" },
            { id: 'b', text: "Dividir produtos de trabalho grandes em partes pequenas para tornar o esforço necessário menos intenso" },
            { id: 'c', text: "Os participantes devem evitar comportamentos que possam indicar tédio, exasperação ou hostilidade para com os outros participantes" },
            { id: 'd', text: "As falhas encontradas devem ser reconhecidas, apreciadas e tratadas objetivamente" }
        ],
        correctAnswer: 'd',
        explanation: "d) Está correta. Durante as revisões podem encontrar-se defeitos, não falhas."
    },
    {
        id: 19,
        chapter: 4,
        kLevel: 'K2',
        lo: 'FL-4.1.1',
        text: "Qual das seguintes opções é uma característica das técnicas de teste baseadas na experiência?",
        options: [
            { id: 'a', text: "Os casos de teste são criados com base em informações detalhadas de conceção" },
            { id: 'b', text: "Os itens testados na secção de código da interface são utilizados para medir a cobertura" },
            { id: 'c', text: "As técnicas de teste dependem fortemente do conhecimento do testador sobre o software e o domínio de negócio" },
            { id: 'd', text: "Os casos de teste são utilizados para identificar desvios em relação aos requisitos" }
        ],
        correctAnswer: 'c',
        explanation: "c) Está correta. As técnicas baseadas na experiência utilizam o conhecimento do testador sobre o software, o ambiente e os defeitos prováveis."
    },
    {
        id: 20,
        chapter: 4,
        kLevel: 'K3',
        lo: 'FL-4.2.1',
        text: "Está a testar um formulário simplificado de pesquisa de apartamentos que tem apenas dois critérios de pesquisa:\n\n- andar (com três opções possíveis: rés-do-chão; primeiro andar; segundo andar ou superior)\n- tipo de jardim (com três opções possíveis: sem jardim; jardim pequeno; jardim grande)\n\nCada um dos apartamentos no rés-do-chão tem um jardim, os apartamentos nos andares superiores não têm. O formulário tem um mecanismo de validação integrado que não lhe permitirá utilizar os critérios de pesquisa que violem esta regra. Cada teste tem dois valores de entrada: andar e tipo de jardim. Pretende aplicar o particionamento de equivalência (EP) para cobrir cada andar e cada tipo de jardim nos seus testes. Qual é o número mínimo de casos de teste para atingir 100% de cobertura de EP para partições válidas?",
        options: [
            { id: 'a', text: "3" },
            { id: 'b', text: "4" },
            { id: 'c', text: "5" },
            { id: 'd', text: "6" }
        ],
        correctAnswer: 'b',
        explanation: "b) Está correta. Precisamos de 4 testes: TC1 (rés-do-chão, pequeno), TC2 (rés-do-chão, grande), TC3 (primeiro andar, sem jardim), TC4 (andar superior, sem jardim)."
    },
    {
        id: 21,
        chapter: 4,
        kLevel: 'K3',
        lo: 'FL-4.2.2',
        text: "Está a testar um sistema que calcula a nota final do curso para um determinado aluno. A nota final é atribuída com base no resultado final, de acordo com as seguintes regras:\n\n- 0-50 pontos: reprovado\n- 51-60 pontos: medíocre\n- 61-70 pontos: satisfatório\n- 71-80 pontos: bom\n- 81-90 pontos: muito bom\n- 91-100 pontos: excelente\n\nPreparou o seguinte conjunto de casos de teste:",
        tableHtml: `<div class= "overflow-x-auto my-4 p-2 rounded border border-slate-300 bg-white text-black" >
            <table class="min-w-full text-center text-sm">
                <tr class="font-bold border-b border-gray-300 bg-gray-100">
                    <th class="p-2"></th>
                    <th class="p-2 border-l border-gray-300">Resultado Final</th>
                    <th class="p-2 border-l border-gray-300">Nota Final</th>
                </tr>
                <tr class="border-b border-gray-200"><td class="p-2 font-bold">TC1</td><td class="p-2 border-l border-gray-300">91</td><td class="p-2 border-l border-gray-300">excelente</td></tr>
                <tr class="border-b border-gray-200"><td class="p-2 font-bold">TC2</td><td class="p-2 border-l border-gray-300">50</td><td class="p-2 border-l border-gray-300">reprovado</td></tr>
                <tr class="border-b border-gray-200"><td class="p-2 font-bold">TC3</td><td class="p-2 border-l border-gray-300">81</td><td class="p-2 border-l border-gray-300">muito bom</td></tr>
                <tr class="border-b border-gray-200"><td class="p-2 font-bold">TC4</td><td class="p-2 border-l border-gray-300">60</td><td class="p-2 border-l border-gray-300">medíocre</td></tr>
                <tr class="border-b border-gray-200"><td class="p-2 font-bold">TC5</td><td class="p-2 border-l border-gray-300">70</td><td class="p-2 border-l border-gray-300">satisfatório</td></tr>
                <tr><td class="p-2 font-bold">TC6</td><td class="p-2 border-l border-gray-300">80</td><td class="p-2 border-l border-gray-300">bom</td></tr>
            </table>
        </div >\nQual é a cobertura da análise de valor limite(BVA) de 2 valores para o resultado final que é atingida com os casos de teste existentes ? `,

        options: [
            { id: 'a', text: "50%" },
            { id: 'b', text: "60%" },
            { id: 'c', text: "33.3%" },
            { id: 'd', text: "100%" }
        ],
        correctAnswer: 'a',
        explanation: "a) Está correta. Existem 12 pontos limite (0, 50, 51, 60, 61, 70, 71, 80, 81, 90, 91, 100). Os 6 casos de teste cobrem 6 pontos (50%)."
    },
    {
        id: 22,
        chapter: 4,
        kLevel: 'K3',
        lo: 'FL-4.2.3',
        text: "Tabela de decisão que descreve as funcionalidades de aluguer de bicicletas:",
        tableHtml: `<div class="overflow-x-auto my-4 p-2 rounded border border-slate-300 bg-white text-black">
          <table class="min-w-full text-xs text-center border-collapse">
            <tr class="font-bold border-b border-gray-300 bg-gray-100">
              <th class="p-1 border-r">Condições</th><th class="p-1">R1</th><th class="p-1">R2</th><th class="p-1">R3</th><th class="p-1">R4</th><th class="p-1">R5</th><th class="p-1">R6</th><th class="p-1">R7</th><th class="p-1">R8</th>
            </tr>
            <tr class="border-b"><td class="p-1 font-bold border-r">Ser membro</td><td>V</td><td>V</td><td>V</td><td>V</td><td>F</td><td>F</td><td>F</td><td>F</td></tr>
            <tr class="border-b"><td class="p-1 font-bold border-r">Prazo ultrapassado</td><td>V</td><td>F</td><td>V</td><td>F</td><td>V</td><td>F</td><td>F</td><td>V</td></tr>
            <tr class="border-b"><td class="p-1 font-bold border-r">15º aluguer</td><td>F</td><td>F</td><td>V</td><td>V</td><td>F</td><td>F</td><td>V</td><td>V</td></tr>
            <tr class="bg-blue-50 font-bold italic"><td class="p-1 border-r text-blue-800">Ações</td><td colspan="8"></td></tr>
            <tr class="border-b"><td class="p-1 font-bold border-r">Desconto de 20%</td><td></td><td>X</td><td></td><td>X</td><td></td><td></td><td></td><td></td></tr>
            <tr><td class="p-1 font-bold border-r">T-Shirt de oferta</td><td></td><td></td><td>X</td><td>X</td><td></td><td></td><td></td><td>X</td></tr>
          </table>
        </div>\nCom base APENAS na descrição da funcionalidade (Os membros têm desconto, os prazos ultrapassados cancelam-no, oferta após o 15º aluguer para membros), qual a regra impossível?`,

        options: [
            { id: 'a', text: "R4" },
            { id: 'b', text: "R2" },
            { id: 'c', text: "R6" },
            { id: 'd', text: "R8" }
        ],
        correctAnswer: 'd',
        explanation: "d) Está correta. A regra R8 está incorreta porque apenas membros podem receber uma T-shirt de oferta, mas aqui o utilizador não é membro (F)."
    },
    {
        id: 23,
        chapter: 4,
        kLevel: 'K3',
        lo: 'FL-4.2.4',
        text: "Está a testar um sistema modelado pelo diagrama de transição de estados (Estados: INIT, DEBUG MODE, IN OPERATION, ON HOLD, OFF). Qual é o número MÍNIMO de casos de teste para atingir a cobertura de transições válidas?",
        diagramImage: "/images/q23-state-diagram.png",
        options: [
            { id: 'a', text: "4" },
            { id: 'b', text: "2" },
            { id: 'c', text: "7" },
            { id: 'd', text: "3" }
        ],
        correctAnswer: 'd',
        explanation: "d) Está correta. Precisamos de pelo menos três casos de teste para cobrir todas as transições válidas."
    },
    {
        id: 24,
        chapter: 4,
        kLevel: 'K2',
        lo: 'FL-4.3.1',
        text: "O seu conjunto de testes atingiu 100% de cobertura de instruções. Qual é a consequência deste facto?",
        options: [
            { id: 'a', text: "Cada instrução no código que contém um defeito foi executada pelo menos uma vez" },
            { id: 'b', text: "Qualquer conjunto de testes que contenha mais casos de teste do que o seu conjunto de testes também atingirá 100% de cobertura de instruções" },
            { id: 'c', text: "Cada caminho no código foi executado pelo menos uma vez" },
            { id: 'd', text: "Cada combinação de valores de entrada foi testada pelo menos uma vez" }
        ],
        correctAnswer: 'a',
        explanation: "a) Está correta. 100% de cobertura de instruções significa que cada instrução, incluindo as defeituosas, deve ter sido executada pelo menos uma vez."
    },
    {
        id: 25,
        chapter: 4,
        kLevel: 'K2',
        lo: 'FL-4.3.3',
        text: "Qual das seguintes opções NÃO é verdadeira para o teste de caixa-branca?",
        options: [
            { id: 'a', text: "Durante o teste de caixa-branca, toda a implementação do software é considerada" },
            { id: 'b', text: "As métricas de cobertura de caixa-branca podem ajudar a identificar testes adicionais para aumentar a cobertura do código" },
            { id: 'c', text: "As técnicas de teste de caixa-branca podem ser utilizadas no teste estático" },
            { id: 'd', text: "O teste de caixa-branca pode ajudar a identificar lacunas na implementação dos requisitos" }
        ],
        correctAnswer: 'd',
        explanation: "d) Está correta. As técnicas de caixa-branca não conseguem identificar a falta de implementação porque se baseiam na estrutura existente, não nos requisitos."
    },
    {
        id: 26,
        chapter: 4,
        kLevel: 'K2',
        lo: 'FL-4.4.1',
        text: "Qual das seguintes opções MELHOR descreve o conceito subjacente à adivinhação de erros (error guessing)?",
        options: [
            { id: 'a', text: "A adivinhação de erros envolve a utilização do seu conhecimento e experiência de defeitos encontrados no passado e de erros típicos cometidos pelos programadores" },
            { id: 'b', text: "A adivinhação de erros envolve a utilização da sua experiência pessoal de desenvolvimento e dos erros que cometeu como programador" },
            { id: 'c', text: "A adivinhação de erros exige que imagine que é o utilizador do objeto de teste e que adivinhe os erros que o utilizador poderá cometer ao interagir com ele" },
            { id: 'd', text: "A adivinhação de erros exige que duplique rapidamente a tarefa de desenvolvimento para identificar o tipo de erros que um programador poderá cometer" }
        ],
        correctAnswer: 'a',
        explanation: "a) Está correta. O testador tenta adivinhar os erros dos programadores e os defeitos do objeto com base na experiência passada."
    },
    {
        id: 27,
        chapter: 4,
        kLevel: 'K2',
        lo: 'FL-4.4.2',
        text: "No seu projeto, verificou-se um atraso na libertação de uma aplicação totalmente nova e a execução dos testes começou tarde, mas possui conhecimentos detalhados do domínio. Os requisitos não foram partilhados, mas os resultados são necessários agora. Qual a técnica que MELHOR se adequa?",
        options: [
            { id: 'a', text: "Teste baseado em checklists" },
            { id: 'b', text: "Adivinhação de erros" },
            { id: 'c', text: "Teste exploratório" },
            { id: 'd', text: "Teste de ramos (branch testing)" }
        ],
        correctAnswer: 'c',
        explanation: "c) Está correta. O teste exploratório é mais útil quando existem poucas especificações conhecidas e prazos apertados."
    },
    {
        id: 28,
        chapter: 4,
        kLevel: 'K2',
        lo: 'FL-4.5.2',
        text: "Qual das seguintes opções MELHOR descreve a forma como os critérios de aceitação podem ser documentados?",
        options: [
            { id: 'a', text: "Realizar retrospetivas para determinar as necessidades reais dos stakeholders relativamente a uma determinada história de utilizador" },
            { id: 'b', text: "Utilizar o formato dado/quando/então para descrever um exemplo de condição de teste relacionada com uma determinada história de utilizador" },
            { id: 'c', text: "Utilizar a comunicação verbal para reduzir o risco de má compreensão dos critérios de aceitação por parte dos outros" },
            { id: 'd', text: "Documentar os riscos relacionados com uma determinada história de utilizador num plano de teste para facilitar o teste baseado no risco" }
        ],
        correctAnswer: 'b',
        explanation: "b) Está correta. Dado/Quando/Então é a forma padrão de documentar critérios de aceitação."
    },
    {
        id: 29,
        chapter: 4,
        kLevel: 'K3',
        lo: 'FL-4.5.3',
        text: "Considere a seguinte história de utilizador:\nComo Editor\nQuero rever o conteúdo antes de ser publicado\npara que possa garantir que a gramática está correta\n\ne os seus critérios de aceitação:\n• O utilizador pode iniciar sessão no sistema de gestão de conteúdos com a função de \"Editor\"\n• O editor pode visualizar as páginas de conteúdo existentes\n• O editor pode editar o conteúdo da página\n• O editor pode adicionar comentários de marcação\n• O editor pode guardar as alterações\n• O editor pode reatribuir à função de \"proprietário do conteúdo\" para efetuar atualizações\n\nQual das seguintes opções é o MELHOR exemplo de um teste ATDD para esta história de utilizador?",
        options: [
            { id: 'a', text: "Testar se o editor pode guardar o documento depois de editar o conteúdo da página" },
            { id: 'b', text: "Testar se o proprietário do conteúdo pode iniciar sessão e efetuar atualizações no conteúdo" },
            { id: 'c', text: "Testar se o editor pode agendar o conteúdo editado para publicação" },
            { id: 'd', text: "Testar se o editor pode reatribuir a outro editor para efetuar atualizações" }
        ],
        correctAnswer: 'a',
        explanation: "a) Está correta. Este teste cobre dois critérios de aceitação: editar o conteúdo e guardar as alterações."
    },
    {
        id: 30,
        chapter: 5,
        kLevel: 'K1',
        lo: 'FL-5.1.2',
        text: "Como é que os testadores acrescentam valor ao planeamento da iteração e da libertação (release)?",
        options: [
            { id: 'a', text: "Os testadores determinam a prioridade das histórias de utilizador a serem desenvolvidas" },
            { id: 'b', text: "Os testadores focam-se apenas nos aspetos funcionais do sistema a ser testado" },
            { id: 'c', text: "Os testadores participam na identificação detalhada e na avaliação de riscos das histórias de utilizador" },
            { id: 'd', text: "Os testadores garantem a libertação de software de alta qualidade através da conceção antecipada de testes durante o planeamento da libertação" }
        ],
        correctAnswer: 'c',
        explanation: "c) Está correta. De acordo com o syllabus, esta é uma das formas como os testadores acrescentam valor ao planeamento."
    },
    {
        id: 31,
        chapter: 5,
        kLevel: 'K2',
        lo: 'FL-5.1.3',
        text: "Quais DUAS das seguintes opções são critérios de saída para o teste de um sistema?",
        type: 'multiple',
        options: [
            { id: 'a', text: "Prontidão do ambiente de teste" },
            { id: 'b', text: "A capacidade de o testador iniciar sessão no objeto de teste" },
            { id: 'c', text: "A densidade de defeitos estimada é atingida" },
            { id: 'd', text: "Os requisitos são traduzidos no formato dado/quando/então" },
            { id: 'e', text: "Os testes de regressão estão automatizados" }
        ],
        correctAnswer: ['c', 'e'],
        explanation: "As opções c) e e) estão corretas. A densidade de defeitos estimada e a automação de testes de regressão são medidas de dilidência/conclusão para critérios de saída."
    },
    {
        id: 32,
        chapter: 5,
        kLevel: 'K3',
        lo: 'FL-5.1.4',
        text: "A sua equipa utiliza a técnica de estimativa de três pontos para estimar o esforço de teste de uma nova funcionalidade de alto risco. Foram feitas as seguintes estimativas:\n• Estimativa mais otimista: 2 pessoas-hora\n• Estimativa mais provável: 11 pessoas-hora\n• Estimativa mais pessimista: 14 pessoas-hora\n\nQual é a estimativa final?",
        options: [
            { id: 'a', text: "9 pessoas-hora" },
            { id: 'b', text: "14 pessoas-hora" },
            { id: 'c', text: "11 pessoas-hora" },
            { id: 'd', text: "10 pessoas-hora" }
        ],
        correctAnswer: 'd',
        explanation: "d) Está correta. (2 + 4*11 + 14) / 6 = 60 / 6 = 10."
    },
    {
        id: 33,
        chapter: 5,
        kLevel: 'K3',
        lo: 'FL-5.1.5',
        text: "Considere a seguinte lista de casos de teste, prioridades (um número menor significa uma prioridade mais alta) e dependências:",
        tableHtml: `<div class="overflow-x-auto my-4 p-2 rounded border border-slate-300 bg-white text-black" >
        <table class="min-w-full text-center text-sm">
            <tr class="font-bold border-b border-gray-300 bg-gray-100">
                <th class="p-2 border-r">Nº TC</th><th class="p-2 border-r">Condição</th><th class="p-2 border-r">Prioridade</th><th class="p-2">Dependência</th>
            </tr>
            <tr class="border-b"><td>TC 001</td><td>Selecionar comida</td><td>3</td><td>nenhuma</td></tr>
            <tr class="border-b"><td>TC 002</td><td>Selecionar restaurante</td><td>2</td><td>TC 001</td></tr>
            <tr class="border-b"><td>TC 003</td><td>Obter direção</td><td>1</td><td>TC 002</td></tr>
            <tr class="border-b"><td>TC 004</td><td>Ligar para o restaurante</td><td>2</td><td>TC 002</td></tr>
            <tr><td>TC 005</td><td>Fazer reserva</td><td>3</td><td>TC 002</td></tr>
        </table>
        </div >\nQual o caso de teste que deve ser executado em TERCEIRO lugar ? `,

        options: [
            { id: 'a', text: "TC 003" },
            { id: 'b', text: "TC 005" },
            { id: 'c', text: "TC 002" },
            { id: 'd', text: "TC 001" }
        ],
        correctAnswer: 'a',
        explanation: "a) Está correta. TC 001 (1º) e depois TC 002 (2º) devido às dependências. Depois disso, o TC 003 tem a prioridade mais alta (1)."
    },
    {
        id: 34,
        chapter: 5,
        kLevel: 'K2',
        lo: 'FL-5.1.7',
        text: "Mapeie as categorias de teste para os quadrantes ágeis (Q1: Tecnol./Equipa, Q2: Negócio/Equipa, Q3: Negócio/Crítica, Q4: Tecnol./Crítica):\n\n1. Teste de usabilidade\n2. Teste de componentes\n3. Teste funcional\n4. Teste de fiabilidade",
        options: [
            { id: 'a', text: "1C, 2A, 3B, 4D" },
            { id: 'b', text: "1D, 2A, 3C, 4B" },
            { id: 'c', text: "1C, 2B, 3D, 4A" },
            { id: 'd', text: "1D, 2B, 3C, 4A" }
        ],
        correctAnswer: 'a',
        explanation: "a) Está correta. Usabilidade (Q3-C), Componentes (Q1-A), Funcional (Q2-B), Fiabilidade (Q4-D)."
    },
    {
        id: 35,
        chapter: 5,
        kLevel: 'K2',
        lo: 'FL-5.2.4',
        text: "Risco: tempo de resposta demasiado longo. Medida: Uma equipa independente realiza testes de eficiência de desempenho durante o teste de sistema. Que medida é proposta?",
        options: [
            { id: 'a', text: "Aceitação do risco" },
            { id: 'b', text: "Plano de contingência" },
            { id: 'c', text: "Mitigação do risco" },
            { id: 'd', text: "Transferência do risco" }
        ],
        correctAnswer: 'c',
        explanation: "c) Está correta. O teste é uma forma de mitigação de risco."
    },
    {
        id: 36,
        chapter: 5,
        kLevel: 'K2',
        lo: 'FL-5.3.3',
        text: "Qual o produto de trabalho que pode ser utilizado por uma equipa ágil para mostrar a quantidade de trabalho que foi concluída e o total de trabalho restante?",
        options: [
            { id: 'a', text: "Critérios de aceitação" },
            { id: 'b', text: "Relatório de defeitos" },
            { id: 'c', text: "Relatório de conclusão de teste" },
            { id: 'd', text: "Gráfico de burndown" }
        ],
        correctAnswer: 'd',
        explanation: "d) Está correta. Os gráficos de burndown são atualizados diariamente e mostram continuamente o progresso do trabalho."
    },
    {
        id: 37,
        chapter: 5,
        kLevel: 'K2',
        lo: 'FL-5.4.1',
        text: "Precisa de atualizar um dos scripts de teste automatizados para estar em conformidade com um novo requisito. Qual o processo que indica que cria uma nova versão do script de teste no repositório de teste?",
        options: [
            { id: 'a', text: "Gestão da rastreabilidade" },
            { id: 'b', text: "Teste de manutenção" },
            { id: 'c', text: "Gestão de configuração" },
            { id: 'd', text: "Engenharia de requisitos" }
        ],
        correctAnswer: 'c',
        explanation: "c) Está correta. A gestão de configuração envolve o controlo de versões de todos os itens de teste."
    },
    {
        id: 38,
        chapter: 5,
        kLevel: 'K3',
        lo: 'FL-5.5.1',
        text: "Recebeu o seguinte relatório de defeitos dos programadores afirmando que a anomalia descrita neste relatório de teste não é reprodutível. Que informação crítica está EM FALTA neste relatório de teste que teria sido útil para os program?",
        tableHtml: `<div class="border border-slate-300 p-4 rounded bg-white text-black text-sm font-mono text-left shadow-sm">
      <div class="border-b border-slate-200 pb-2 mb-2 font-bold text-lg">Aplicação bloqueia</div>
      <div class="text-xs text-gray-600 mb-2">2022-Mai-03 – John Doe – Rejeitado</div>
      <p class="mb-2">A aplicação bloqueia depois de introduzir \"Test input: $ä\" no campo Nome no ecrã de criação de novo utilizador.</p>
      <p class="mb-2">Tentei terminar sessão, iniciar sessão com a conta test_admin01, mesmo problema. Tentei com outras contas de administrador de teste, mesmo problema.</p>
      <p class="mb-2">Nenhuma mensagem de erro recebida; o log (ver anexo) contém a notificação de erro fatal.</p>
      <p class="mb-2">Com base no caso de teste TC-1305, a aplicação deve aceitar a entrada fornecida e criar o utilizador.</p>
      <p class="font-semibold text-red-600">Por favor, corrija com prioridade alta, esta funcionalidade está relacionada com o REQ-0012, que é um novo requisito de negócio crítico.</p>
    </div>`,

        options: [
            { id: 'a', text: "Resultado esperado e resultado real" },
            { id: 'b', text: "Referências e estado do defeito" },
            { id: 'c', text: "Ambiente de teste e o item de teste" },
            { id: 'd', text: "Prioridade e severidade" }
        ],
        correctAnswer: 'c',
        explanation: "c) Está correta. O relatório carece de informação sobre qual o ambiente de teste utilizado e qual a versão da aplicação (item de teste) afetada."
    },
    {
        id: 39,
        chapter: 6,
        kLevel: 'K2',
        lo: 'FL-6.1.1',
        text: "Que atividade de teste é apoiada por uma ferramenta de preparação de dados?",
        options: [
            { id: 'a', text: "Monitorização e controlo de teste" },
            { id: 'b', text: "Análise de teste" },
            { id: 'c', text: "Conceção e implementação de teste" },
            { id: 'd', text: "Conclusão de teste" }
        ],
        correctAnswer: 'c',
        explanation: "c) Está correta. A conceção e implementação de teste incluem a criação ou aquisição de testware, como dados de teste."
    },
    {
        id: 40,
        chapter: 6,
        kLevel: 'K1',
        lo: 'FL-6.2.1',
        text: "Qual dos itens identifica corretamente um risco potencial de realizar a automação de teste?",
        options: [
            { id: 'a', text: "Pode introduzir regressões desconhecidas na produção" },
            { id: 'b', text: "Podem não ser atribuídos adequadamente esforços suficientes para manter o testware" },
            { id: 'c', text: "As ferramentas de teste e o testware associado podem não ser suficientemente fiáveis" },
            { id: 'd', text: "Pode reduzir o tempo atribuído ao teste manual" }
        ],
        correctAnswer: 'b',
        explanation: "b) Está correta. A alocação incorreta de esforço para manter o testware é um risco primário."
    },

    // ==========================================
    // EXAM SET B - Version 1.7
    // ==========================================
    {
        id: 41,
        chapter: 1,
        kLevel: 'K2',
        lo: 'FL-1.2.1',
        text: "Qual das seguintes opções é um exemplo de porque é que o teste é necessário?",
        options: [
            { id: 'a', text: "O teste dinâmico aumenta a qualidade ao fazer com que os objetos de teste falhem de formas que nunca poderiam ser alcançadas pelos utilizadores" },
            { id: 'b', text: "O teste estático é utilizado pelos programadores para identificar falhas no seu código mais cedo do que pode ser alcançado através do teste dinâmico" },
            { id: 'c', text: "A análise estática fornece provas aos clientes de que os elementos do sistema que não fornecem saídas (outputs) estão aptos para serem libertados" },
            { id: 'd', text: "As revisões aumentam a qualidade das especificações de requisitos e levam a que sejam necessárias menos alterações nos produtos de trabalho derivados" }
        ],
        correctAnswer: 'd',
        explanation: "d) Está correta. As revisões são uma forma de teste estático que pode ser aplicada desde o início do ciclo de vida de desenvolvimento de software e são utilizadas para encontrar defeitos que podem ser removidos antes que as atividades de desenvolvimento subsequentes desperdicem esforço em requisitos defeituosos."
    },
    {
        id: 42,
        chapter: 1,
        kLevel: 'K1',
        lo: 'FL-1.2.2',
        text: "Qual das seguintes afirmações sobre a garantia da qualidade (QA) e/ou controlo da qualidade (QC) está correta?",
        options: [
            { id: 'a', text: "A QA é realizada como parte do teste" },
            { id: 'b', text: "O teste é realizado como parte do QC" },
            { id: 'c', text: "O teste é outro termo para QC" },
            { id: 'd', text: "O teste é realizado como parte da QA" }
        ],
        correctAnswer: 'b',
        explanation: "b) Está correta. O QC visa atingir níveis adequados de qualidade, focando-se na identificação e correção de defeitos do produto. O teste é uma parte significativa do QC e ajuda a descobrir esses defeitos."
    },
    {
        id: 43,
        chapter: 1,
        kLevel: 'K2',
        lo: 'FL-1.3.1',
        text: "Um dos 'princípios do teste' afirma que o teste exaustivo é impossível. Qual das seguintes opções é um exemplo de como abordar este princípio na prática?",
        options: [
            { id: 'a', text: "Criar casos de teste que cubram todas as saídas (outputs) especificadas possíveis" },
            { id: 'b', text: "Documentar todas as variações possíveis de entrada de teste e priorizá-las com base na importância" },
            { id: 'c', text: "Iniciar o teste o mais cedo possível com revisões e outras abordagens de teste estático" },
            { id: 'd', text: "Utilizar o particionamento de equivalência e a análise de valor limite para gerar casos de teste" }
        ],
        correctAnswer: 'd',
        explanation: "d) Está correta. A utilização do particionamento de equivalência e da análise de valor limite para gerar casos de teste é uma forma de abordar o princípio, uma vez que estas técnicas de teste fornecem uma forma sistemática de derivar um subconjunto finito de todos os casos de teste possíveis."
    },
    {
        id: 44,
        chapter: 1,
        kLevel: 'K2',
        lo: 'FL-1.4.1',
        text: "Qual a atividade de teste que envolve trabalhar com requisitos de dados de teste, condições de teste, requisitos de ambiente de teste e casos de teste?",
        options: [
            { id: 'a', text: "Conceção de teste (Test design)" },
            { id: 'b', text: "Execução de teste" },
            { id: 'c', text: "Análise de teste" },
            { id: 'd', text: "Implementação de teste" }
        ],
        correctAnswer: 'a',
        explanation: "a) Está correta. A conceção de teste envolve a utilização de condições de teste para criar casos de teste e outro testware necessário, como requisitos de dados de teste e cartas de teste (test charters) para testes exploratórios."
    },
    {
        id: 45,
        chapter: 1,
        kLevel: 'K2',
        lo: 'FL-1.4.2',
        text: "Qual das seguintes opções tem MAIOR probabilidade de impactar a forma como o teste é realizado para um determinado objeto de teste?",
        options: [
            { id: 'a', text: "O nível médio de experiência da equipa de marketing da organização" },
            { id: 'b', text: "O conhecimento dos utilizadores de que um novo sistema está a ser desenvolvido para eles" },
            { id: 'c', text: "O número de anos de experiência dos membros da equipa de teste" },
            { id: 'd', text: "A estrutura organizacional do utilizador final para uma aplicação comercial de streaming de música" }
        ],
        correctAnswer: 'c',
        explanation: "c) Está correta. O número de anos de experiência dos membros da equipa de teste de eficiência de desempenho ajudará a determinar as capacidades e conhecimentos que os membros da equipa aplicarão quando estiverem a testar."
    },
    {
        id: 46,
        chapter: 1,
        kLevel: 'K2',
        lo: 'FL-1.4.4',
        text: "Qual das seguintes afirmações é um exemplo CORRETO do valor da rastreabilidade?",
        options: [
            { id: 'a', text: "A rastreabilidade entre os riscos mitigados e os casos de teste que passaram fornece um meio de determinar o nível de risco residual" },
            { id: 'b', text: "A rastreabilidade entre os requisitos do utilizador e os resultados dos testes fornece um meio de medir o progresso do projeto em relação aos objetivos de negócio" },
            { id: 'c', text: "A rastreabilidade entre os testadores e os casos de teste que falharam fornece um meio de determinar o nível de competência dos testadores" },
            { id: 'd', text: "A rastreabilidade entre os riscos identificados e as condições de teste escritas fornece um meio de determinar quais os riscos que vale a pena testar" }
        ],
        correctAnswer: 'b',
        explanation: "b) Está correta. A rastreabilidade entre os requisitos do utilizador e os resultados dos testes fornece uma indicação de quais os requisitos do utilizador que foram testados e, assim, fornece um meio de medir o progresso do projeto em relação aos objetivos de negócio."
    },
    {
        id: 47,
        chapter: 1,
        kLevel: 'K2',
        lo: 'FL-1.5.1',
        text: "Qual das seguintes opções é MAIS provável ser um exemplo de um testador a utilizar uma competência genérica ao testar?",
        options: [
            { id: 'a', text: "O profundo conhecimento do testador sobre uma variedade de jogos de computador fez com que se desse bem com um dos programadores que também gostava de jogos" },
            { id: 'b', text: "O testador era um antigo piloto e foi mais capaz de compreender os critérios de aceitação para o sistema de controlo de helicópteros" },
            { id: 'c', text: "O testador trabalhou anteriormente como programador e utilizou as suas competências nesta área para comunicar melhor com os analistas de negócio" },
            { id: 'd', text: "O testador teve muito cuidado para não cometer erros quando gerou metodicamente casos de teste antes de iniciar a sua sessão de teste exploratório" }
        ],
        correctAnswer: 'b',
        explanation: "b) Está correta. O conhecimento do domínio que pode ser utilizado para compreender e comunicar com os utilizadores finais e representantes de negócio é uma das competências genéricas exigidas aos testadores."
    },
    {
        id: 48,
        chapter: 1,
        kLevel: 'K1',
        lo: 'FL-1.5.2',
        text: "Qual das seguintes opções é uma vantagem da abordagem de equipa inteira (whole-team approach)?",
        options: [
            { id: 'a', text: "Permite que os membros da equipa assumam qualquer função em qualquer altura" },
            { id: 'b', text: "Apenas necessita de uma única equipa para apoiar o projeto de desenvolvimento completo" },
            { id: 'c', text: "Incorpora representantes de negócio juntamente com programadores na mesma equipa" },
            { id: 'd', text: "Gera uma sinergia de equipa que beneficia todo o projeto" }
        ],
        correctAnswer: 'd',
        explanation: "d) Está correta. Ao alavancar os diversos conjuntos de competências de cada membro da equipa de forma mais eficaz, a abordagem de equipa inteira promove uma dinâmica de equipa superior, promove uma comunicação e colaboração robustas e gera uma sinergia de equipa que beneficia todo o projeto."
    },
    {
        id: 49,
        chapter: 2,
        kLevel: 'K2',
        lo: 'FL-2.1.1',
        text: "Qual das seguintes afirmações sobre o ciclo de vida de desenvolvimento de software escolhido está CORRETA?",
        options: [
            { id: 'a', text: "Se for utilizado o desenvolvimento de software ágil, a automação dos testes de sistema substitui a necessidade de testes de regressão" },
            { id: 'b', text: "Se for utilizado um modelo de desenvolvimento sequencial, o teste dinâmico é tipicamente restrito a fases mais tardias do ciclo de vida" },
            { id: 'c', text: "Se for utilizado um modelo de desenvolvimento iterativo, o teste de componentes é tipicamente realizado manualmente pelos programadores" },
            { id: 'd', text: "Se for utilizado um modelo de desenvolvimento incremental, o teste estático é feito nos primeiros incrementos e o teste dinâmico nos incrementos posteriores" }
        ],
        correctAnswer: 'b',
        explanation: "b) Está correta. Se for utilizado um modelo de desenvolvimento sequencial, no início do ciclo de vida não existe código disponível para execução, pelo que é realizado o teste estático. Mais tarde, quando o código estiver disponível, o teste dinâmico é possível."
    },
    {
        id: 50,
        chapter: 2,
        kLevel: 'K1',
        lo: 'FL-2.1.2',
        text: "Qual das seguintes é uma boa prática de teste que se aplica a todos os ciclos de vida de desenvolvimento de software?",
        options: [
            { id: 'a', text: "Os testadores devem rever os produtos de trabalho como parte da fase de desenvolvimento seguinte" },
            { id: 'b', text: "Os testadores devem rever os produtos de trabalho assim que os rascunhos estejam disponíveis" },
            { id: 'c', text: "Os testadores devem rever os produtos de trabalho antes de a análise e a conceção de teste começarem" },
            { id: 'd', text: "Os testadores devem rever os produtos de trabalho imediatamente após serem publicados" }
        ],
        correctAnswer: 'b',
        explanation: "b) Está correta. Os testadores devem rever os produtos de trabalho logo que os rascunhos estejam disponíveis para permitir o teste precoce como parte de uma abordagem shift-left."
    },
    {
        id: 51,
        chapter: 2,
        kLevel: 'K1',
        lo: 'FL-2.1.3',
        text: "Qual das seguintes opções é um exemplo de uma abordagem de desenvolvimento orientada primeiro ao teste (test-first approach)?",
        options: [
            { id: 'a', text: "Desenvolvimento Orientado a Testes (TDD)" },
            { id: 'b', text: "Desenvolvimento Orientado à Cobertura" },
            { id: 'c', text: "Desenvolvimento Orientado à Qualidade" },
            { id: 'd', text: "Desenvolvimento Orientado às Funcionalidades" }
        ],
        correctAnswer: 'a',
        explanation: "a) Está correta. O Desenvolvimento Orientado a Testes (TDD) é um exemplo bem conhecido de uma abordagem de desenvolvimento test-first."
    },
    {
        id: 52,
        chapter: 2,
        kLevel: 'K2',
        lo: 'FL-2.1.4',
        text: "Qual das seguintes afirmações sobre DevOps está CORRETA?",
        options: [
            { id: 'a', text: "Para acelerar as libertações, a integração contínua é utilizada para encorajar os programadores a submeter código rapidamente sem a necessidade de completar o teste de componentes" },
            { id: 'b', text: "Para ser capaz de atualizar e libertar sistemas com uma frequência maior, são necessários muitos testes de regressão automatizados para reduzir o risco de regressão" },
            { id: 'c', text: "Para tratar de forma igual programadores e operações, os testadores atribuirão mais esforço ao teste de libertação pelas operações utilizando uma abordagem shift-right" },
            { id: 'd', text: "Para criar uma maior sinergia entre testadores, programadores e operações, o teste deve tornar-se totalmente automatizado, sem testes manuais" }
        ],
        correctAnswer: 'b',
        explanation: "b) Está correta. O DevOps melhora o teste ao fornecer testes de regressão automatizados que minimizam o risco de regressão, promovendo libertações frequentes e fiáveis."
    },
    {
        id: 53,
        chapter: 2,
        kLevel: 'K2',
        lo: 'FL-2.2.1',
        text: "Qual das seguintes opções tem MAIOR probabilidade de ser realizada como parte do teste de sistema?",
        options: [
            { id: 'a', text: "Teste de segurança de um sistema de gestão de crédito por uma equipa de teste independente" },
            { id: 'b', text: "Testar a interface de um sistema de câmbio de moeda com um sistema bancário externo" },
            { id: 'c', text: "Teste beta de um sistema de aprendizagem remota por programadores de conteúdos programáticos" },
            { id: 'd', text: "Testar as interações entre a interface de utilizador e a base de dados de um sistema de recursos humanos" }
        ],
        correctAnswer: 'a',
        explanation: "a) Está correta. O teste de sistema examina o comportamento e as capacidades do sistema completo e abrange o teste não funcional, como o teste de segurança, muitas vezes realizado por uma equipa independente."
    },
    {
        id: 54,
        chapter: 2,
        kLevel: 'K2',
        lo: 'FL-2.2.3',
        text: "Qual das seguintes afirmações está CORRETA?",
        options: [
            { id: 'a', text: "Os testes de regressão aumentam em número à medida que o projeto avança, enquanto o número de testes de confirmação diminui à medida que o projeto avança" },
            { id: 'b', text: "Os testes de regressão são criados e executados quando o objeto de teste é corrigido, enquanto os testes de confirmação são executados sempre que o objeto de teste é melhorado" },
            { id: 'c', text: "O teste de regressão preocupa-se em verificar se o ambiente operacional permanece inalterado, enquanto o teste de confirmação preocupa-se em testar as alterações ao objeto de teste" },
            { id: 'd', text: "O teste de regressão preocupa-se com efeitos adversos em código não alterado, enquanto o teste de confirmação preocupa-se com o teste de código alterado" }
        ],
        correctAnswer: 'd',
        explanation: "d) Está correta. O teste de regressão garante que as alterações não têm efeitos negativos no software não alterado. O teste de confirmação verifica se um defeito foi corrigido no código alterado."
    },
    {
        id: 55,
        chapter: 3,
        kLevel: 'K2',
        lo: 'FL-3.1.3',
        text: "Qual das seguintes opções é um exemplo de um defeito que pode ser encontrado pelo teste estático, mas <b>NÃO</b> pelo teste dinâmico?",
        options: [
            { id: 'a', text: "Falta de usabilidade fornecida através da interface de utilizador" },
            { id: 'b', text: "Código sem nenhum caminho que o alcance" },
            { id: 'c', text: "Tempos de resposta fracos para a maioria dos utilizadores esperados" },
            { id: 'd', text: "Funcionalidades requeridas que não estão implementadas no código" }
        ],
        correctAnswer: 'b',
        explanation: "b) Está correta. Uma revisão de código (estática) pode detetar código que não pode ser alcançado por nenhum caminho, enquanto os testes dinâmicos apenas podem exercitar código alcançável."
    },
    {
        id: 56,
        chapter: 3,
        kLevel: 'K1',
        lo: 'FL-3.2.1',
        text: "Qual das seguintes opções é um benefício do feedback precoce e frequente dos stakeholders?",
        options: [
            { id: 'a', text: "Os gestores sabem quais os programadores que são menos produtivos" },
            { id: 'b', text: "Permite aos gestores de projeto priorizar as suas interações com os stakeholders" },
            { id: 'c', text: "Facilita a comunicação precoce de potenciais problemas de qualidade" },
            { id: 'd', text: "Os utilizadores finais compreendem melhor porque é que a entrega do produto de trabalho está atrasada" }
        ],
        correctAnswer: 'c',
        explanation: "c) Está correta. Obter feedback dos stakeholders cedo e com frequência facilita a comunicação precoce de potenciais problemas de qualidade e evita mal-entendidos."
    },
    {
        id: 57,
        chapter: 3,
        kLevel: 'K2',
        lo: 'FL-3.2.2',
        text: "Dadas as seguintes descrições de tarefas:\n1. As características de qualidade a serem avaliadas e os critérios de saída são selecionados\n2. Todos têm acesso ao produto de trabalho\n3. As anomalias são identificadas no produto de trabalho\n4. As anomalias são discutidas\n\nE as seguintes atividades de revisão:\nA. Revisão individual\nB. Iniciação da revisão\nC. Planeamento\nD. Comunicação e análise\n\nQual das seguintes opções MELHOR associa as descrições das tarefas e as atividades?",
        options: [
            { id: 'a', text: "1B, 2C, 3D, 4A" },
            { id: 'b', text: "1B, 2D, 3C, 4A" },
            { id: 'c', text: "1C, 2A, 3B, 4D" },
            { id: 'd', text: "1C, 2B, 3A, 4D" }
        ],
        correctAnswer: 'd',
        explanation: "d) Está correta. 1-Planeamento (C), 2-Iniciação da revisão (B), 3-Revisão individual (A), 4-Comunicação e análise (D)."
    },
    {
        id: 58,
        chapter: 3,
        kLevel: 'K1',
        lo: 'FL-3.2.3',
        text: "Dadas as seguintes funções (roles) nas revisões:\n1. Escriba\n2. Líder da revisão\n3. Facilitador\n4. Gestor\n\nE as seguintes responsabilidades nas revisões:\nA. Garante a execução eficaz das reuniões de revisão e a criação de um ambiente seguro\nB. Regista informações da revisão, tais como decisões e novas anomalias encontradas\nC. Decide o que deve ser revisto e fornece recursos (pessoal/tempo)\nD. Assume a responsabilidade global pela revisão (organizar quando/onde)\n\nQual das seguintes opções MELHOR associa as funções e as responsabilidades?",
        options: [
            { id: 'a', text: "1A, 2B, 3D, 4C" },
            { id: 'b', text: "1A, 2C, 3B, 4D" },
            { id: 'c', text: "1B, 2D, 3A, 4C" },
            { id: 'd', text: "1B, 2D, 3C, 4A" }
        ],
        correctAnswer: 'c',
        explanation: "c) Está correta. 1-Escriba (B), 2-Líder da revisão (D), 3-Facilitador (A), 4-Gestor (C)."
    },
    {
        id: 59,
        chapter: 4,
        kLevel: 'K2',
        lo: 'FL-4.1.1',
        text: "Qual das seguintes afirmações MELHOR descreve a diferença entre o teste de tabela de decisão e o teste de ramos (branch testing)?",
        options: [
            { id: 'a', text: "No teste de tabela de decisão, os casos de teste são derivados das instruções de decisão no código. No teste de ramos, os casos de teste são derivados do conhecimento do fluxo de controlo." },
            { id: 'b', text: "No teste de tabela de decisão, os casos de teste são derivados da especificação. No teste de ramos os casos de teste baseiam-se na antecipação de potenciais defeitos." },
            { id: 'c', text: "No teste de tabela de decisão, os casos de teste são derivados do conhecimento do fluxo de controlo. No teste de ramos, os casos de teste são derivados da especificação." },
            { id: 'd', text: "No teste de tabela de decisão, os casos de teste são independentes de como o software é implementado. No teste de ramos, os casos de teste podem ser criados apenas após a conceção ou implementação." }
        ],
        correctAnswer: 'd',
        explanation: "d) Está correta. O teste de tabela de decisão é uma técnica de caixa-preta (independente da implementação). O teste de ramos é uma técnica de caixa-branca (dependente da conceção e do código)."
    },
    {
        id: 60,
        chapter: 4,
        kLevel: 'K3',
        lo: 'FL-4.2.1',
        text: "Os clientes da cadeia de lavagem de carros TestWash têm cartões com o registo do número de lavagens que compraram até agora. O valor inicial é 0. Após entrar na lavagem, o sistema aumenta o número no cartão em um. Para cada décima lavagem o sistema dá um desconto de 10%, e para cada vigésima lavagem, o sistema dá um desconto adicional de 40% (ou seja, um desconto total de 50%). Qual dos seguintes conjuntos de dados de entrada (números da lavagem atual) atinge a maior cobertura de partição de equivalência?",
        options: [
            { id: 'a', text: "19, 20, 30" },
            { id: 'b', text: "11, 12, 20" },
            { id: 'c', text: "1, 10, 50" },
            { id: 'd', text: "10, 29, 30, 31" }
        ],
        correctAnswer: 'a',
        explanation: "a) Está correta. 19 cobre 'sem desconto', 20 cobre '50% de desconto' e 30 cobre '10% de desconto'. Estes três cobrem todas as partições de equivalência válidas."
    },
    {
        id: 61,
        chapter: 4,
        kLevel: 'K3',
        lo: 'FL-4.2.2',
        text: "Está a testar um formulário que verifica se o comprimento da palavra-passe está correto. O comprimento da palavra-passe está correto se tiver entre 6 e 12 caracteres inclusive. Inicialmente, o formulário está vazio (comprimento=0). O seu conjunto de casos de teste atinge 100% de cobertura de valor limite de 2 valores. A equipa decidiu passar para 100% de cobertura de valor limite de 3 valores. Quais comprimentos de palavra-passe adicionais devem ser testados?",
        options: [
            { id: 'a', text: "4, 5, 13, 14" },
            { id: 'b', text: "7, 11" },
            { id: 'c', text: "1, 5, 13" },
            { id: 'd', text: "1, 4, 7, 11, 14" }
        ],
        correctAnswer: 'd',
        explanation: "d) Está correta. O BVA de 3 valores para as partições {0-5}, {6-12}, {13+} requer os valores {0,1,4,5,6,7,11,12,13,14}. Como o de 2 valores já cobre {0,5,6,12,13}, precisamos de {1,4,7,11,14}."
    },
    {
        id: 62,
        chapter: 4,
        kLevel: 'K3',
        lo: 'FL-4.2.3',
        text: "A seguinte tabela de decisão contém as regras para determinar o risco de aterosclerose:",
        tableHtml: `<div class="overflow-x-auto my-4 p-2 rounded border border-slate-300 bg-white text-black">
          <table class="min-w-full text-xs text-center border-collapse">
            <tr class="font-bold border-b border-gray-300 bg-gray-100">
              <th class="p-1 border-r text-left">Condições</th><th>Regra 1</th><th>Regra 2</th><th>Regra 3</th><th>Regra 4</th><th>Regra 5</th>
            </tr>
            <tr class="border-b"><td class="p-1 border-r text-left font-bold">Colesterol (mg/dl)</td><td>≤ 124</td><td>≤ 124</td><td>125-200</td><td>125-200</td><td>≥ 201</td></tr>
            <tr class="border-b"><td class="p-1 border-r text-left font-bold">Pressão arterial (mmHg)</td><td>≤ 140</td><td>> 140</td><td>≤ 140</td><td>> 140</td><td>-</td></tr>
            <tr class="bg-blue-50 font-bold italic"><td class="p-1 border-r text-left text-blue-800">Nível de Risco</td><td colspan="5"></td></tr>
            <tr><td class="p-1 border-r text-left font-bold">Ação</td><td>muito baixo</td><td>baixo</td><td>médio</td><td>alto</td><td>muito alto</td></tr>
          </table>
        </div>\nCasos de teste: TC1(125, 141), TC2(200, 201), TC3(124, 201), TC4(109, 200), TC5(201, 140). Qual a cobertura atingida?`,

        options: [
            { id: 'a', text: "40%" },
            { id: 'b', text: "60%" },
            { id: 'c', text: "80%" },
            { id: 'd', text: "100%" }
        ],
        correctAnswer: 'b',
        explanation: "b) Está correta. TC1 e TC2 cobrem a Regra 4. TC3 e TC4 cobrem a Regra 2. TC5 cobre a Regra 5. Total de 3 em 5 regras cobertas = 60%."
    },
    {
        id: 63,
        chapter: 4,
        kLevel: 'K3',
        lo: 'FL-4.2.4',
        text: "Um sistema de armazenamento pode guardar até três elementos e é modelado pelo seguinte diagrama de transição de estados. Qual sequência de eventos atinge o nível mais alto de cobertura de transições válidas?",
        diagramImage: "/images/q63-state-diagram-set-b.png",
        options: [
            { id: 'a', text: "Adicionar, Remover, Adicionar, Adicionar, Adicionar" },
            { id: 'b', text: "Adicionar, Adicionar, Adicionar, Adicionar, Remover, Remover" },
            { id: 'c', text: "Adicionar, Adicionar, Adicionar, Remover, Remover" },
            { id: 'd', text: "Adicionar, Adicionar, Adicionar, Remover, Adicionar" }
        ],
        correctAnswer: 'c',
        explanation: "c) Está correta. O teste c) cobre todas as 5 transições válidas (100% de cobertura). O teste b) é inviável após o terceiro 'Adicionar'."
    },
    {
        id: 64,
        chapter: 4,
        kLevel: 'K2',
        lo: 'FL-4.3.1',
        text: "Executa dois casos de teste, T1 e T2, no mesmo código. T1 atingiu 40% de cobertura de instruções e T2 atingiu 65%. Qual frase deve ser necessariamente verdadeira?",
        options: [
            { id: 'a', text: "O conjunto de testes composto pelos testes T1 e T2 atinge 105% de cobertura de instruções" },
            { id: 'b', text: "Existe pelo menos uma instrução que deve ter sido executada tanto por T1 como por T2" },
            { id: 'c', text: "Pelo menos 5% das instruções no código que foi testado não são executáveis" },
            { id: 'd', text: "O conjunto de testes composto pelos testes T1 e T2 atinge a cobertura total de ramos" }
        ],
        correctAnswer: 'b',
        explanation: "b) Está correta. Se as instruções fossem disjuntas, a cobertura total seria de 105%, o que é impossível. Assim, pelo menos 5% devem ter sido executados por ambos."
    },
    {
        id: 65,
        chapter: 4,
        kLevel: 'K2',
        lo: 'FL-4.3.2',
        text: "Seja a métrica de cobertura de ramos definida como BCov = (X/Y)*100%. O que representam X e Y?",
        options: [
            { id: 'a', text: "X = número de resultados de decisão exercitados; Y = número total de resultados de decisão" },
            { id: 'b', text: "X = número de ramos condicionais exercitados; Y = número total de ramos" },
            { id: 'c', text: "X = número de ramos exercitados; Y = número total de ramos" },
            { id: 'd', text: "X = número de ramos condicionais exercitados; Y = número total de resultados de decisão" }
        ],
        correctAnswer: 'c',
        explanation: "c) Está correta. A cobertura de ramos é o número de ramos exercitados dividido pelo número total de ramos (condicionais e incondicionais)."
    },
    {
        id: 66,
        chapter: 4,
        kLevel: 'K2',
        lo: 'FL-4.4.2',
        text: "Quais DUAS das seguintes afirmações fornecem o MELHOR racional para a utilização de testes exploratórios?",
        type: 'multiple',
        options: [
            { id: 'a', text: "Os testadores não tiveram tempo suficiente atribuído para a conceção e execução de testes" },
            { id: 'b', text: "A estratégia de teste existente exige que os testadores utilizem técnicas de teste formais de caixa-preta" },
            { id: 'c', text: "A especificação está escrita numa linguagem formal que pode ser processada por uma ferramenta" },
            { id: 'd', text: "Os testadores são membros de uma equipa ágil e têm boas competências de programação" },
            { id: 'e', text: "Os testadores têm experiência no domínio de negócio e boas competências analíticas" }
        ],
        correctAnswer: ['a', 'e'],
        explanation: "As opções a) e e) estão corretas. O teste exploratório é útil sob pressão de tempo (a) e é mais eficaz com testadores experientes/analíticos (e)."
    },
    {
        id: 67,
        chapter: 4,
        kLevel: 'K2',
        lo: 'FL-4.4.3',
        text: "Qual das seguintes opções MELHOR se enquadra como um elemento da checklist utilizada no teste baseado em checklists?",
        options: [
            { id: 'a', text: "\"O programador cometeu um erro ao implementar o código\"" },
            { id: 'b', text: "\"A cobertura de instruções atingida excede 85%\"" },
            { id: 'c', text: "\"O programa funciona corretamente em relação aos requisitos funcionais e não funcionais\"" },
            { id: 'd', text: "\"As mensagens de erro estão escritas numa linguagem que o utilizador consegue compreender\"" }
        ],
        correctAnswer: 'd',
        explanation: "d) Está correta. Este é um exemplo de uma condição de teste específica que pode ser verificada por um humano."
    },
    {
        id: 68,
        chapter: 4,
        kLevel: 'K2',
        lo: 'FL-4.5.2',
        text: "Considere os seguintes critérios de aceitação: Dado que o utilizador iniciou sessão... Quando o utilizador clica... Então o formulário deve aparecer... Em que formato estão escritos estes critérios de aceitação?",
        options: [
            { id: 'a', text: "Orientado às regras" },
            { id: 'b', text: "Orientado ao cenário" },
            { id: 'c', text: "Orientado ao produto" },
            { id: 'd', text: "Orientado ao processo" }
        ],
        correctAnswer: 'b',
        explanation: "b) Está correta. O formato Dado/Quando/Então é orientado ao cenário, pois descreve um cenário a ser verificado."
    },
    {
        id: 69,
        chapter: 4,
        kLevel: 'K3',
        lo: 'FL-4.5.3',
        text: "História de Utilizador: Cliente registado visualiza encomendas anteriores. Qual o caso de teste que <b>NÃO</b> será relevante?",
        options: [
            { id: 'a', text: "Entrada: o cliente inicia sessão na sua conta e clica no botão \"ver histórico de encomendas\"\nResultado esperado: o sistema mostra uma lista de todas as encomendas anteriores" },
            { id: 'b', text: "Entrada: o cliente clica numa encomenda da lista de encomendas\nResultado esperado: o sistema apresenta os itens individuais comprados" },
            { id: 'c', text: "Entrada: o cliente clica no botão \"Ordenar ascendente\"\nResultado esperado: o histórico é apresentado ordenado por número de encomenda" },
            { id: 'd', text: "Entrada: um cliente não registado regista-se como novo cliente com um e-mail válido\nResultado esperado: o sistema aceita o registo e cria a conta" }
        ],
        correctAnswer: 'd',
        explanation: "d) Está correta. O registo não faz parte desta história de utilizador, que é especificamente sobre a visualização de encomendas anteriores."
    },
    {
        id: 70,
        chapter: 5,
        kLevel: 'K2',
        lo: 'FL-5.1.3',
        text: "A sua equipa segue os passos de DevOps: (1) Desenv. de código, (2) Submeter código/merge, (3) Teste de componentes. Qual é o MELHOR critério de entrada para o passo (2)?",
        options: [
            { id: 'a', text: "A análise estática não devolve avisos de gravidade alta para o código submetido" },
            { id: 'b', text: "O controlo de versões do sistema não reporta conflitos ao fundir o código no ramo de \"teste\"" },
            { id: 'c', text: "Os testes de componentes estão compilados e prontos para serem executados" },
            { id: 'd', text: "A cobertura de instruções é de pelo menos 80%" }
        ],
        correctAnswer: 'a',
        explanation: "a) Está correta. Isto deve ser verificado antes de o código ser submetido ao sistema de controlo de versões."
    },
    {
        id: 71,
        chapter: 5,
        kLevel: 'K3',
        lo: 'FL-5.1.4',
        text: "Pretende estimar o esforço de teste para um novo projeto utilizando uma estimativa baseada em rácios. Para isso, calcula o rácio entre o esforço de teste e o esforço de desenvolvimento utilizando os dados médios de ambos os esforços de quatro projetos históricos semelhantes ao novo.\n\nA tabela apresenta estes dados históricos.\n\nO esforço de desenvolvimento estimado para o novo projeto é de 800.000€. Qual é a sua estimativa para o esforço de teste neste projeto?",
        tableHtml: `<div class="overflow-x-auto my-4 p-2 rounded border border-slate-300 bg-white text-black">
      <table class="min-w-full text-center text-sm border-collapse">
        <tr class="font-bold bg-gray-50 border-b">
          <th class="p-2 border-r">Projeto</th>
          <th class="p-2 border-r">Esforço de desenvolvimento (€)</th>
          <th class="p-2">Esforço de teste (€)</th>
        </tr>
        <tr class="border-b">
          <td class="p-2 border-r">P1</td>
          <td class="p-2 border-r">800.000</td>
          <td class="p-2">40.000</td>
        </tr>
        <tr class="border-b">
          <td class="p-2 border-r">P2</td>
          <td class="p-2 border-r">1.200.000</td>
          <td class="p-2">130.000</td>
        </tr>
        <tr class="border-b">
          <td class="p-2 border-r">P3</td>
          <td class="p-2 border-r">600.000</td>
          <td class="p-2">70.000</td>
        </tr>
        <tr>
          <td class="p-2 border-r">P4</td>
          <td class="p-2 border-r">1.000.000</td>
          <td class="p-2">120.000</td>
        </tr>
      </table>
    </div>`,
        options: [
            { id: 'a', text: "40.000 €" },
            { id: 'b', text: "80.000 €" },
            { id: 'c', text: "81.250 €" },
            { id: 'd', text: "82.500 €" }
        ],
        correctAnswer: 'b',
        explanation: "b) Está correta. O esforço médio de desenvolvimento é de 900.000€ [(800k+1200k+600k+1000k)/4] e o esforço médio de teste é de 90.000€ [(40k+130k+70k+120k)/4]. O rácio médio entre teste e desenvolvimento é de 1:10 (90.000€ : 900.000€), o que significa que o esforço de teste representa 10% do esforço de desenvolvimento. Para um novo projeto de 800.000€, a estimativa é de 80.000€ (10% de 800.000€)."
    },
    {
        id: 72,
        chapter: 5,
        kLevel: 'K3',
        lo: 'FL-5.1.5',
        text: "Sequência de Casos de Teste (Pesquisar antes de Ver, Ver antes de Adicionar, Adicionar antes de Encomendar). O Produto B tem maior prioridade que o A. TCs: TC2(Pesquisar B, prio 4), TC4(Ver B, prio 2), TC6(Adicionar B, prio 1). Qual o 4º teste a executar?",
        options: [
            { id: 'a', text: "TC3" },
            { id: 'b', text: "TC1" },
            { id: 'c', text: "TC7" },
            { id: 'd', text: "TC2" }
        ],
        correctAnswer: 'b',
        explanation: "b) Está correta. Fluxo para B: TC2 -> TC4 -> TC6 (1º, 2º, 3º). O 4º deve ser o próximo início de fluxo para A: TC1."
    },
    {
        id: 73,
        chapter: 5,
        kLevel: 'K2',
        lo: 'FL-5.1.7',
        text: "De acordo com o modelo de quadrantes de teste, qual das seguintes opções se enquadra no quadrante Q1 (\"voltado para a tecnologia\" e \"apoio à equipa\")?",
        options: [
            { id: 'a', text: "Teste de usabilidade" },
            { id: 'b', text: "Teste funcional" },
            { id: 'c', text: "Teste de aceitação do utilizador" },
            { id: 'd', text: "Teste de integração de componentes" }
        ],
        correctAnswer: 'd',
        explanation: "d) Está correta. O teste de integração de componentes é voltado para a tecnologia e apoia a equipa (guia o desenvolvimento)."
    },
    {
        id: 74,
        chapter: 5,
        kLevel: 'K2',
        lo: 'FL-5.2.4',
        text: "Associe Riscos a Mitigação: 1. Resposta longa (B-Desempenho), 2. Mudança de preferência (A-Aceitação), 3. Inundação (D-Transferência), 4. Relatórios imprecisos no limite de idade (C-BVA).",
        options: [
            { id: 'a', text: "1C, 2D, 3A, 4B" },
            { id: 'b', text: "1B, 2D, 3A, 4C" },
            { id: 'c', text: "1B, 2A, 3D, 4C" },
            { id: 'd', text: "1C, 2A, 3D, 4B" }
        ],
        correctAnswer: 'c',
        explanation: "c) Está correta. Correspondência: 1B, 2A, 3D, 4C."
    },
    {
        id: 75,
        chapter: 5,
        kLevel: 'K1',
        lo: 'FL-5.3.1',
        text: "Qual das seguintes opções é uma métrica de qualidade do produto?",
        options: [
            { id: 'a', text: "Tempo médio entre falhas" },
            { id: 'b', text: "Número de defeitos encontrados" },
            { id: 'c', text: "Cobertura de requisitos" },
            { id: 'd', text: "Percentagem de deteção de defeitos" }
        ],
        correctAnswer: 'a',
        explanation: "a) Está correta. O tempo médio entre falhas mede a maturidade, que é uma característica de qualidade do produto."
    },
    {
        id: 76,
        chapter: 5,
        kLevel: 'K2',
        lo: 'FL-5.3.3',
        text: "Equipa de Teste na América do Norte, Cliente na Europa, Agile/DevOps. Qual a forma MENOS eficaz de comunicar o progresso dos testes?",
        options: [
            { id: 'a', text: "Presencial (face-to-face)" },
            { id: 'b', text: "Dashboards" },
            { id: 'c', text: "E-mail" },
            { id: 'd', text: "Videoconferência" }
        ],
        correctAnswer: 'a',
        explanation: "a) Está correta. Localizações em fusos horários diferentes tornam a comunicação presencial a menos eficaz."
    },
    {
        id: 77,
        chapter: 5,
        kLevel: 'K2',
        lo: 'FL-5.4.1',
        text: "Qual das seguintes opções MELHOR descreve um exemplo de como a gestão de configuração (CM) apoia o teste?",
        options: [
            { id: 'a', text: "Tendo o número da versão do ambiente, a ferramenta de CM pode recuperar os números da versão de stubs/drivers" },
            { id: 'b', text: "Tendo valores de entradas, a ferramenta de CM pode executar casos de teste e calcular a cobertura" },
            { id: 'c', text: "Tendo dados de compra de licença, a ferramenta de CM informa quando esta está a terminar" },
            { id: 'd', text: "Tendo a versão do caso de teste, a ferramenta de CM gera dados de teste" }
        ],
        correctAnswer: 'a',
        explanation: "a) Está correta. A CM regista os itens, relações e versões de itens complexos como ambientes de teste."
    },
    {
        id: 78,
        chapter: 5,
        kLevel: 'K3',
        lo: 'FL-5.5.1',
        text: "Está a testar uma função de ordenação que recebe um conjunto de números como entrada e devolve o mesmo conjunto de números ordenados em ordem crescente. O registo (log) da execução do teste é o seguinte:",
        tableHtml: `<div class="border border-slate-300 p-4 rounded bg-white text-black text-xs font-mono shadow-sm my-4">
          <p class="mb-1 font-bold">Configuração do ambiente: função de ordenação build 2.002.2182, conjunto de casos de teste: TCS-3</p>
          <p class="mb-1">12:43:21.003 Execução do TC1. Entrada: 3. Saída: 3. Resultado: passou</p>
          <p class="mb-1">12:43:21.003 Execução do TC2. Entrada: 3 11 6 5. Saída: 3 5 6 11. Resultado: passou</p>
          <p class="mb-1">12:43:21.004 Execução do TC3. Entrada: 8 7 3 7 1. Saída: 1 3 7 8. Resultado: falhou</p>
          <p class="mb-1">12:43:21.005 Execução do TC4. Entrada: -2 -2 -2 -3 -3. Saída: -3 -2. Resultado: falhou</p>
          <p class="mb-1">12:43:21.005 Execução do TC5. Entrada: 0 -2 0 3 4 4. Saída: -2 0 3 4. Resultado: falhou</p>
        </div>`,
        textAfterTable: "Qual das seguintes opções fornece a MELHOR descrição da falha que pode ser utilizada num relatório de defeito?",
        options: [
            { id: 'a', text: "O sistema falha ao ordenar vários conjuntos de números. Referência: TC3, TC4, TC5." },
            { id: 'b', text: "O sistema parece ignorar duplicados durante a ordenação. Referência: TC3, TC4, TC5." },
            { id: 'c', text: "O sistema falha ao ordenar números negativos. Referência: TC4, TC5." },
            { id: 'd', text: "Os casos TC3, TC4 e TC5 têm defeitos (dados de entrada duplicados) e devem ser corrigidos." }
        ],
        correctAnswer: 'b',
        explanation: "b) Está correta. A partir dos resultados dos testes, parece que o sistema ignora os duplicados e ordena a lista desconsiderando as repetições (ex: no TC4, a saída é -3 -2 em vez de -3 -3 -2 -2 -2). Esta informação ajuda o programador a encontrar a causa do defeito de forma mais eficiente."
    },
    {
        id: 79,
        chapter: 6,
        kLevel: 'K2',
        lo: 'FL-6.1.1',
        text: "Dadas as seguintes descrições:\n1. Apoiar o acompanhamento do fluxo de trabalho\n2. Facilitar a comunicação\n3. Máquinas virtuais\n4. Apoiar as revisões\n\nE as seguintes categorias de ferramentas de teste:\nA. Ferramentas de teste estático\nB. Ferramentas de apoio à escalabilidade e normalização da implementação\nC. Ferramentas de DevOps\nD. Ferramentas de colaboração\n\nQual das seguintes opções MELHOR associa as descrições às categorias?",
        options: [
            { id: 'a', text: "1A, 2B, 3C, 4D" },
            { id: 'b', text: "1B, 2D, 3C, 4A" },
            { id: 'c', text: "1C, 2D, 3B, 4A" },
            { id: 'd', text: "1D, 2C, 3A, 4B" }
        ],
        correctAnswer: 'c',
        explanation: "c) Está correta. De acordo com o syllabus:\n• C. Ferramentas de DevOps - apoiam a pipeline de entrega DevOps, o acompanhamento do fluxo de trabalho, processo(s) de build automatizado(s), integração contínua/entrega contínua (CI/CD) (1)\n• D. Ferramentas de colaboração - facilitam a comunicação (2)\n• B. Ferramentas de apoio à escalabilidade e normalização da implementação - Por exemplo, máquinas virtuais, ferramentas de contentorização (3)\n• A. Ferramentas de teste estático - apoiam o testador na realização de revisões e análise estática (4)\n\nA associação correta é: 1C, 2D, 3B, 4A."
    },
    {
        id: 80,
        chapter: 6,
        kLevel: 'K1',
        lo: 'FL-6.2.1',
        text: "Qual das seguintes opções é MAIS provável ser um benefício da automação de teste?",
        options: [
            { id: 'a', text: "Fornece medidas de cobertura que são demasiado complicadas para serem derivadas por humanos" },
            { id: 'b', text: "Partilha a responsabilidade do teste com o fornecedor da ferramenta" },
            { id: 'c', text: "Remove a necessidade de pensamento crítico ao analisar os resultados dos testes" },
            { id: 'd', text: "Gera casos de teste a partir de uma análise do código do programa" }
        ],
        correctAnswer: 'a',
        explanation: "a) Está correta. A automação pode fornecer métricas complexas, como a cobertura de caixa-branca, que seriam impossíveis ou demorariam demasiado tempo manualmente."
    },

    // ==========================================
    // EXAM SET C - Version 1.6
    // ==========================================
    {
        id: 81,
        chapter: 1,
        kLevel: 'K1',
        lo: 'FL-1.1.1',
        text: "Qual das seguintes opções é um objetivo de teste típico?",
        options: [
            { id: 'a', text: "Validar se os requisitos documentados são cumpridos" },
            { id: 'b', text: "Causar falhas e identificar defeitos" },
            { id: 'c', text: "Iniciar erros e identificar causas raiz" },
            { id: 'd', text: "Verificar se o objeto de teste cumpre as expectativas do utilizador" }
        ],
        correctAnswer: 'b',
        explanation: "b) Está correta. Causar falhas e identificar defeitos é provavelmente o objetivo mais comum do teste dinâmico."
    },
    {
        id: 82,
        chapter: 1,
        kLevel: 'K2',
        lo: 'FL-1.1.2',
        text: "Qual das seguintes afirmações MELHOR descreve a diferença entre teste e depuração (debugging)?",
        options: [
            { id: 'a', text: "O teste causa falhas enquanto a depuração corrige falhas" },
            { id: 'b', text: "O teste é uma atividade negativa enquanto a depuração é uma atividade positiva" },
            { id: 'c', text: "O teste determina que existem defeitos enquanto a depuração remove defeitos" },
            { id: 'd', text: "O teste encontra a causa dos defeitos enquanto a depuração corrige a causa dos defeitos" }
        ],
        correctAnswer: 'c',
        explanation: "c) Está correta. O teste determina que existem defeitos, quer diretamente através da observação em revisões, quer indiretamente ao causar falhas no teste dinâmico. A depuração é uma atividade separada preocupada em localizar e corrigir defeitos."
    },
    {
        id: 83,
        chapter: 1,
        kLevel: 'K2',
        lo: 'FL-1.3.1',
        text: "A 'falácia da ausência de defeitos' é um dos princípios do teste. Qual das seguintes opções é um exemplo de abordagem a este princípio na prática?",
        options: [
            { id: 'a', text: "Explicar que não é possível o teste mostrar a ausência de defeitos" },
            { id: 'b', text: "Apoiar os utilizadores finais na realização do teste de aceitação" },
            { id: 'c', text: "Garantir que não permanecem defeitos de implementação no sistema entregue" },
            { id: 'd', text: "Modificar os testes que não causam falhas para garantir que permanecem poucos defeitos" }
        ],
        correctAnswer: 'b',
        explanation: "b) Está correta. Para abordar a falácia da ausência de defeitos, é necessário validar se o sistema satisfaz as necessidades e expectativas dos utilizadores. Apoiar o teste de aceitação ajuda a atingir este objetivo."
    },
    {
        id: 84,
        chapter: 1,
        kLevel: 'K2',
        lo: 'FL-1.4.1',
        text: "Quais das seguintes atividades de teste têm MAIOR probabilidade de envolver a aplicação da análise de valor limite e do particionamento de equivalência?",
        type: 'multiple',
        options: [
            { id: 'a', text: "Implementação de teste" },
            { id: 'b', text: "Conceção de teste" },
            { id: 'c', text: "Execução de teste" },
            { id: 'd', text: "Monitorização de teste" },
            { id: 'e', text: "Análise de teste" }
        ],
        correctAnswer: ['b', 'e'],
        explanation: "As opções b) e e) estão corretas. As técnicas de teste como BVA e EP são frequentemente utilizadas durante a análise de teste para identificar condições de teste e durante a conceção de teste para criar casos de teste."
    },
    {
        id: 85,
        chapter: 1,
        kLevel: 'K2',
        lo: 'FL-1.4.3',
        text: "Dados os seguintes testware:\n1. Itens de cobertura\n2. Pedidos de alteração\n3. Cronograma de execução de testes\n4. Condições de teste priorizadas\n\nE as seguintes atividades de teste:\nA. Análise de teste\nB. Conceção de teste\nC. Implementação de teste\nD. Conclusão de teste\n\nQual das seguintes opções MELHOR apresenta o testware produzido pelas atividades?",
        options: [
            { id: 'a', text: "1B, 2D, 3C, 4A" },
            { id: 'b', text: "1B, 2D, 3A, 4C" },
            { id: 'c', text: "1D, 2C, 3A, 4B" },
            { id: 'd', text: "1D, 2C, 3B, 4A" }
        ],
        correctAnswer: 'a',
        explanation: "a) Está correta. 1-B (A conceção produz itens de cobertura), 2-D (A conclusão produz pedidos de alteração), 3-C (A implementação produz o cronograma), 4-A (A análise produz condições priorizadas)."
    },
    {
        id: 86,
        chapter: 1,
        kLevel: 'K2',
        lo: 'FL-1.4.5',
        text: "Qual das seguintes afirmações sobre as diferentes funções de teste tem MAIOR probabilidade de estar CORRETA?",
        options: [
            { id: 'a', text: "No desenvolvimento de software Ágil, a função de gestão de teste é a responsabilidade principal da equipa, enquanto a função de teste é principalmente a responsabilidade de um único indivíduo externo à equipa" },
            { id: 'b', text: "A função de teste é a principal responsável pela monitorização e controlo de teste, enquanto a função de gestão de teste é a principal responsável pelo planeamento e conclusão de teste" },
            { id: 'c', text: "No desenvolvimento de software Ágil, as atividades de gestão de teste que abrangem várias equipas são tratadas por um gestor de teste externo à equipa, enquanto algumas tarefas de gestão de teste são tratadas pela própria equipa" },
            { id: 'd', text: "A função de gestão de teste é a principal responsável pela análise e conceção de teste, enquanto a função de teste é a principal responsável pela implementação e execução de teste" }
        ],
        correctAnswer: 'c',
        explanation: "c) Está correta. No Ágil, as equipas tratam frequentemente da sua própria gestão, mas atividades a nível organizacional que abrangem várias equipas podem ser tratadas por um gestor de teste externo."
    },
    {
        id: 87,
        chapter: 1,
        kLevel: 'K1',
        lo: 'FL-1.5.2',
        text: "Qual das seguintes é uma vantagem da abordagem de equipa inteira?",
        options: [
            { id: 'a', text: "Equipas sem testadores" },
            { id: 'b', text: "Melhoria na dinâmica da equipa" },
            { id: 'c', text: "Membros de equipa especialistas" },
            { id: 'd', text: "Tamanhos de equipa maiores" }
        ],
        correctAnswer: 'b',
        explanation: "b) Está correta. A abordagem de equipa inteira promove uma dinâmica de equipa, comunicação e colaboração superiores."
    },
    {
        id: 88,
        chapter: 1,
        kLevel: 'K2',
        lo: 'FL-1.5.3',
        text: "Qual das seguintes afirmações sobre a independência do teste está CORRETA?",
        options: [
            { id: 'a', text: "Os testadores independentes encontrarão defeitos devido à sua perspetiva técnica diferente dos programadores, mas a sua independência pode levar a uma relação de confrontação com os programadores" },
            { id: 'b', text: "A familiaridade dos programadores com o seu próprio código significa que apenas encontram alguns defeitos nele, no entanto, o seu percurso de software partilhado com os testadores significa que estes defeitos também seriam encontrados pelos testadores" },
            { id: 'c', text: "O teste independente requer testadores externos à equipa do programador e, idealmente, externos à organização, no entanto, estes testadores têm dificuldade em compreender o domínio da aplicação" },
            { id: 'd', text: "Os testadores externos à equipa do programador são mais independentes do que os testadores internos à equipa, mas os testadores internos à equipa têm maior probabilidade de serem responsabilizados por atrasos na libertação do produto" }
        ],
        correctAnswer: 'a',
        explanation: "a) Está correta. Os testadores independentes têm maior probabilidade de identificar diferentes tipos de falhas, mas podem tornar-se isolados ou enfrentar problemas de comunicação."
    },
    {
        id: 89,
        chapter: 2,
        kLevel: 'K1',
        lo: 'FL-2.1.2',
        text: "Qual das seguintes é uma boa prática de teste que se aplica a todos os ciclos de vida de desenvolvimento de software?",
        options: [
            { id: 'a', text: "Para cada nível de teste, existe um nível de desenvolvimento correspondente" },
            { id: 'b', text: "Para cada objetivo de teste, existe um objetivo de desenvolvimento correspondente" },
            { id: 'c', text: "Para cada atividade de teste, existe uma atividade de utilizador correspondente" },
            { id: 'd', text: "Para cada atividade de desenvolvimento, existe uma atividade de teste correspondente" }
        ],
        correctAnswer: 'd',
        explanation: "d) Está correta. O controlo de qualidade aplica-se a todas as atividades de desenvolvimento, o que significa que cada atividade de desenvolvimento de software tem uma atividade de teste correspondente."
    },
    {
        id: 90,
        chapter: 2,
        kLevel: 'K1',
        lo: 'FL-2.1.3',
        text: "Qual das seguintes opções é um exemplo de uma abordagem de desenvolvimento orientada primeiro ao teste (test-first)?",
        options: [
            { id: 'a', text: "Desenvolvimento Orientado a Testes de Componentes" },
            { id: 'b', text: "Desenvolvimento Orientado a Testes de Integração" },
            { id: 'c', text: "Desenvolvimento Orientado a Testes de Sistema" },
            { id: 'd', text: "Desenvolvimento Orientado a Testes de Aceitação" }
        ],
        correctAnswer: 'd',
        explanation: "d) Está correta. O Desenvolvimento Orientado a Testes de Aceitação (ATDD) é um exemplo bem conhecido de uma abordagem test-first."
    },
    {
        id: 91,
        chapter: 2,
        kLevel: 'K2',
        lo: 'FL-2.1.5',
        text: "Qual das seguintes opções fornece a MELHOR descrição de shift-left?",
        options: [
            { id: 'a', text: "Quando acordado pelos programadores, as atividades manuais do lado esquerdo do processo de teste são automatizadas para apoiar o princípio 'o teste precoce poupa tempo e dinheiro'" },
            { id: 'b', text: "Onde for rentável, as atividades de teste são movidas para fases mais precoces do ciclo de vida de desenvolvimento de software (SDLC) para reduzir o custo total da qualidade" },
            { id: 'c', text: "Quando têm tempo livre disponível, os testadores são obrigados a automatizar testes para testes de regressão, começando pelos testes de componentes" },
            { id: 'd', text: "Quando disponíveis, os testadores são formados para realizar tarefas cedo no SDLC para permitir que mais atividades de teste sejam automatizadas mais tarde no SDLC" }
        ],
        correctAnswer: 'b',
        explanation: "b) Está correta. O shift-left enfatiza o início do teste mais cedo no SDLC para obter poupanças globais mais elevadas."
    },
    {
        id: 92,
        chapter: 2,
        kLevel: 'K2',
        lo: 'FL-2.1.6',
        text: "Qual das seguintes opções tem MENOR probabilidade de ocorrer como resultado de uma retrospetiva?",
        options: [
            { id: 'a', text: "A qualidade dos futuros objetos de teste melhora ao identificar melhorias nas práticas de desenvolvimento" },
            { id: 'b', text: "A eficiência do teste melhora ao acelerar a configuração dos ambientes de teste através da automação" },
            { id: 'c', text: "A compreensão dos utilizadores finais sobre os processos de desenvolvimento e teste é melhorada" },
            { id: 'd', text: "Os scripts de teste automatizados são melhorados através do feedback dos programadores" }
        ],
        correctAnswer: 'c',
        explanation: "c) Está correta. Os utilizadores finais raramente são convidados para as retrospetivas, pelo que é muito pouco provável que aprendam mais sobre os processos através delas."
    },
    {
        id: 93,
        chapter: 2,
        kLevel: 'K2',
        lo: 'FL-2.2.1',
        text: "Qual dos seguintes níveis de teste está MAIS provavelmente a ser realizado se o teste estiver focado na validação e não estiver a ser realizado por testadores?",
        options: [
            { id: 'a', text: "Teste de componentes" },
            { id: 'b', text: "Teste de integração de componentes" },
            { id: 'c', text: "Teste de integração de sistemas" },
            { id: 'd', text: "Teste de aceitação" }
        ],
        correctAnswer: 'd',
        explanation: "d) Está correta. O teste de aceitação foca-se na validação face às necessidades de negócio e é idealmente realizado pelos utilizadores finais."
    },
    {
        id: 94,
        chapter: 2,
        kLevel: 'K2',
        lo: 'FL-2.2.3',
        text: "O software do sistema de navegação foi atualizado devido ao facto de sugerir rotas que violam as leis de trânsito, tais como conduzir em contramão em ruas de sentido único. Qual das seguintes opções MELHOR descreve o teste que será realizado?",
        options: [
            { id: 'a', text: "Apenas teste de confirmação" },
            { id: 'b', text: "Teste de confirmação e depois teste de regressão" },
            { id: 'c', text: "Apenas teste de regressão" },
            { id: 'd', text: "Teste de regressão e depois teste de confirmação" }
        ],
        correctAnswer: 'b',
        explanation: "b) Está correta. O teste de confirmação verifica a correção e o teste de regressão garante que não foram introduzidos novos defeitos em áreas não alteradas."
    },
    {
        id: 95,
        chapter: 3,
        kLevel: 'K2',
        lo: 'FL-3.1.3',
        text: "Dados os seguintes exemplos de defeitos:\ni. Duas partes diferentes da especificação de conceção discordam devido à complexidade da conceção\nii. Um tempo de resposta é demasiado longo e faz com que os utilizadores percam a paciência\niii. Um caminho no código não pode ser alcançado durante a execução\niv. Uma variável é declarada mas nunca utilizada posteriormente no programa\nv. A quantidade de memória necessária pelo programa para gerar um relatório é demasiado elevada\n\nQual das seguintes opções MELHOR identifica exemplos de defeitos que poderiam ser encontrados pelo teste estático (em vez do teste dinâmico)?",
        options: [
            { id: 'a', text: "ii, v" },
            { id: 'b', text: "iii, v" },
            { id: 'c', text: "i, ii, iv" },
            { id: 'd', text: "i, iii, iv" }
        ],
        correctAnswer: 'd',
        explanation: "d) Está correta. Inconsistências de especificação (i), código inalcançável (iii) e variáveis não utilizadas (iv) são facilmente encontrados via teste estático. Tempo de resposta (ii) e uso de memória (v) requerem teste dinâmico."
    },
    {
        id: 96,
        chapter: 3,
        kLevel: 'K1',
        lo: 'FL-3.2.1',
        text: "Qual das seguintes opções é um benefício do feedback precoce e frequente dos stakeholders?",
        options: [
            { id: 'a', text: "As alterações aos requisitos são compreendidas e implementadas mais cedo" },
            { id: 'b', text: "Garante que os stakeholders de negócio compreendem os requisitos do utilizador" },
            { id: 'c', text: "Permite que os proprietários do produto alterem os seus requisitos as vezes que quiserem" },
            { id: 'd', text: "Os utilizadores finais são informados sobre quais os requisitos que não serão implementados antes da libertação" }
        ],
        correctAnswer: 'a',
        explanation: "a) Está correta. Obter feedback cedo facilita a comunicação precoce de problemas de qualidade e evita mal-entendidos nos requisitos."
    },
    {
        id: 97,
        chapter: 3,
        kLevel: 'K2',
        lo: 'FL-3.2.4',
        text: "Dados os seguintes tipos de revisão:\n1. Revisão técnica\n2. Revisão informal\n3. Inspeção\n4. Walkthrough\n\nAnd the following descriptions:\nA. Inclui objetivos tais como obter consenso, gerar novas ideias e motivar os autores a melhorar\nB. Inclui objetivos tais como educar os revisores, obter consenso, gerar novas ideias e detetar potenciais defeitos\nC. O objetivo principal é detetar potenciais defeitos e requer a recolha de métricas para apoiar a melhoria do processo\nD. O objetivo principal é detetar potenciais defeitos e não gera qualquer saída formal documentada\n\nQual das seguintes opções MELHOR associa os tipos de revisão e as descrições?",
        options: [
            { id: 'a', text: "1A, 2B, 3C, 4D" },
            { id: 'b', text: "1A, 2D, 3C, 4B" },
            { id: 'c', text: "1B, 2C, 3D, 4A" },
            { id: 'd', text: "1C, 2D, 3A, 4B" }
        ],
        correctAnswer: 'b',
        explanation: "b) Está correta. 1-A (Revisão Técnica), 2-D (Informal), 3-C (Inspeção), 4-B (Walkthrough)."
    },
    {
        id: 98,
        chapter: 3,
        kLevel: 'K1',
        lo: 'FL-3.2.5',
        text: "Qual das seguintes opções é um fator que contribui para uma revisão bem-sucedida?",
        options: [
            { id: 'a', text: "Garantir que a gestão participa como revisores" },
            { id: 'b', text: "Dividir produtos de trabalho grandes em partes menores" },
            { id: 'c', text: "Definir a avaliação do revisor como um objetivo" },
            { id: 'd', text: "Planear a cobertura de um documento por revisão" }
        ],
        correctAnswer: 'b',
        explanation: "b) Está correta. Dividir produtos de trabalho grandes evita que os revisores percam o foco."
    },
    {
        id: 99,
        chapter: 4,
        kLevel: 'K2',
        lo: 'FL-4.1.1',
        text: "Qual é a PRINCIPAL diferença entre as técnicas de teste de caixa-preta e as técnicas de teste baseadas na experiência?",
        options: [
            { id: 'a', text: "O objeto de teste" },
            { id: 'b', text: "O nível de teste no qual a técnica de teste é utilizada" },
            { id: 'c', text: "A base de teste (test basis)" },
            { id: 'd', text: "O ciclo de vida de desenvolvimento de software (SDLC) no qual a técnica pode ser utilizada" }
        ],
        correctAnswer: 'c',
        explanation: "c) Está correta. As técnicas de caixa-preta baseiam-se em especificações (base de teste), enquanto as baseadas na experiência utilizam o conhecimento do testador."
    },
    {
        id: 100,
        chapter: 4,
        kLevel: 'K3',
        lo: 'FL-4.2.1',
        text: "Está a testar um validador de PIN, que aceita PINs válidos e rejeita PINs inválidos. Um PIN é uma sequência de dígitos. Um PIN é válido se consistir em quatro dígitos, que não sejam todos o mesmo dígito. Identificou as seguintes partições de equivalência válidas:\n\nVariável: Comprimento do código PIN\n- A partição \"comprimento correto\" - PINs de quatro dígitos\n- A partição \"comprimento incorreto\" - PINs com comprimento diferente de 4\n\nVariável: Número de dígitos diferentes\n- PINs com pelo menos dois dígitos diferentes - A partição \"número de dígitos diferentes correto\"\n- PINs com todos os dígitos iguais - A partição \"número de dígitos diferentes incorreto\"\n\nQual dos seguintes é o MELHOR conjunto de dados de teste de entrada para cobrir as partições de equivalência identificadas?",
        options: [
            { id: 'a', text: "12, 1111, 1234, 12345" },
            { id: 'b', text: "1, 123, 1111, 1234" },
            { id: 'c', text: "11, 12, 1111, 12345" },
            { id: 'd', text: "123, 1222, 12345" }
        ],
        correctAnswer: 'a',
        explanation: "a) Está correta. O valor \"12\" cobre comprimento curto; \"1111\" cobre comprimento correto mas dígitos incorretos; \"1234\" cobre comprimento e dígitos corretos; \"12345\" cobre comprimento longo."
    },
    {
        id: 101,
        chapter: 4,
        kLevel: 'K3',
        lo: 'FL-4.2.2',
        text: "Um programador foi solicitado a implementar a seguinte regra de negócio:\n\nENTRADA: valor (número inteiro)\nSE (valor ≤ 100 OU valor ≥ 200) ENTÃO escrever \"valor incorreto\"\nSENÃO escrever \"valor OK\"\n\nConcebe os casos de teste utilizando a análise de valor limite de 2 valores. Qual dos seguintes conjuntos de entradas de teste atinge a maior cobertura?",
        options: [
            { id: 'a', text: "100, 150, 200, 201" },
            { id: 'b', text: "99, 100, 200, 201" },
            { id: 'c', text: "98, 99, 100, 101" },
            { id: 'd', text: "101, 150, 199, 200" }
        ],
        correctAnswer: 'd',
        explanation: "d) Está correta. As partições de equivalência são: {..., 99, 100}, {101, 102, ..., 198, 199}, {200, 201, ...}. Os valores limite são 100, 101, 199 e 200. A opção d contém três destes (101, 199, 200), atingindo 75% de cobertura."
    },
    {
        id: 102,
        chapter: 4,
        kLevel: 'K3',
        lo: 'FL-4.2.3',
        text: "Está a trabalhar num projeto para desenvolver um sistema para analisar resultados de exames de condução. Foi-lhe solicitado que concebesse casos de teste com base na seguinte tabela de decisão.",
        tableHtml: `<div class="overflow-x-auto my-4 p-2 rounded border border-slate-300 bg-white text-black" >
        <table class="w-full text-sm border-collapse">
            <thead>
                <tr class="bg-gray-100 border-b">
                    <th class="p-2 border-r text-left">Condições/Ações</th>
                    <th class="p-2 border-r text-center">R1</th>
                    <th class="p-2 border-r text-center">R2</th>
                    <th class="p-2 text-center">R3</th>
                </tr>
            </thead>
            <tbody>
                <tr class="border-b">
                    <td class="p-2 border-r">C1: Primeira tentativa no exame?</td>
                    <td class="p-2 border-r text-center"></td>
                    <td class="p-2 border-r text-center"></td>
                    <td class="p-2 text-center">F</td>
                </tr>
                <tr class="border-b">
                    <td class="p-2 border-r">C2: Exame teórico aprovado?</td>
                    <td class="p-2 border-r text-center">V</td>
                    <td class="p-2 border-r text-center">F</td>
                    <td class="p-2 text-center"></td>
                </tr>
                <tr class="border-b">
                    <td class="p-2 border-r">C3: Exame prático aprovado?</td>
                    <td class="p-2 border-r text-center">V</td>
                    <td class="p-2 border-r text-center"></td>
                    <td class="p-2 text-center">F</td>
                </tr>
                <tr class="border-b bg-blue-50">
                    <td class="p-2 border-r font-semibold">Emitir carta de condução?</td>
                    <td class="p-2 border-r text-center">X</td>
                    <td class="p-2 border-r text-center"></td>
                    <td class="p-2 text-center"></td>
                </tr>
                <tr class="border-b bg-blue-50">
                    <td class="p-2 border-r font-semibold">Solicitar lições adicionais?</td>
                    <td class="p-2 border-r text-center"></td>
                    <td class="p-2 border-r text-center"></td>
                    <td class="p-2 text-center">X</td>
                </tr>
                <tr class="bg-blue-50">
                    <td class="p-2 border-r font-semibold">Solicitar novo exame?</td>
                    <td class="p-2 border-r text-center"></td>
                    <td class="p-2 border-r text-center">X</td>
                    <td class="p-2 text-center"></td>
                </tr>
            </tbody>
        </table>
    </div >\n\nQue dados de teste mostrarão que existem regras contraditórias na tabela de decisão ? `,

        options: [
            { id: 'a', text: "C1=V, C2=V, C3=F" },
            { id: 'b', text: "C1=V, C2=F, C3=V" },
            { id: 'c', text: "C1=V, C2=V, C3=V e C1=F, C2=V, C3=V" },
            { id: 'd', text: "C1=F, C2=F, C3=F" }
        ],
        correctAnswer: 'd',
        explanation: "d) Está correta. A combinação (F, F, F) corresponde tanto à R2 (Exame teórico aprovado? F) como à R3 (Exame prático aprovado? F e Primeira tentativa? F). Como R2 e R3 têm ações diferentes, isto mostra uma contradição."
    },
    {
        id: 103,
        chapter: 4,
        kLevel: 'K3',
        lo: 'FL-4.2.4',
        text: "Está a conceber casos de teste com base no seguinte diagrama de transição de estados:",
        diagramImage: "/images/q103-state-diagram-set-c.png",
        options: [
            { id: 'a', text: "3" },
            { id: 'b', text: "2" },
            { id: 'c', text: "5" },
            { id: 'd', text: "6" }
        ],
        correctAnswer: 'a',
        explanation: "a) Está correta. São necessários três casos de teste para uma cobertura de 100% das transições válidas: \nTC1: START → REQUESTING → CONFIRMED → END\nTC2: START → REQUESTING → WAITING LIST → CONFIRMED → END\nTC3: START → REQUESTING → WAITING LIST → END"
    },
    {
        id: 104,
        chapter: 4,
        kLevel: 'K2',
        lo: 'FL-4.3.2',
        text: "Pretende aplicar o teste de ramos (branch testing) ao código representado pelo seguinte gráfico de fluxo de controlo.",
        diagramImage: "/images/q104-diagram-set-c.png",
        options: [
            { id: 'a', text: "2" },
            { id: 'b', text: "4" },
            { id: 'c', text: "8" },
            { id: 'd', text: "7" }
        ],
        correctAnswer: 'c',
        explanation: "c) Está correta. No teste de ramos, os itens de cobertura são ramos representados pelas arestas de um gráfico de fluxo de controlo. Existem 8 arestas no gráfico."
    },
    {
        id: 105,
        chapter: 4,
        kLevel: 'K2',
        lo: 'FL-4.3.3',
        text: "Como pode o teste de caixa-branca ser útil no apoio ao teste de caixa-preta?",
        options: [
            { id: 'a', text: "As medidas de cobertura de caixa-branca podem ajudar os testadores a avaliar os testes de caixa-preta em termos da cobertura de código atingida por estes testes" },
            { id: 'b', text: "A análise de cobertura de caixa-branca pode ajudar os testadores a identificar fragmentos inalcançáveis do código-fonte" },
            { id: 'c', text: "O teste de ramos engloba as técnicas de teste de caixa-preta, pelo que atingir a cobertura total de ramos garante atingir a cobertura total de qualquer técnica de caixa-preta" },
            { id: 'd', text: "As técnicas de teste de caixa-branca podem fornecer itens de cobertura para as técnicas de caixa-preta" }
        ],
        correctAnswer: 'a',
        explanation: "a) Está correta. As medidas de cobertura de caixa-branca fornecem uma medição objetiva da cobertura atingida pelos testes de caixa-preta e permitem gerar testes adicionais para aumentar esta cobertura."
    },
    {
        id: 106,
        chapter: 4,
        kLevel: 'K2',
        lo: 'FL-4.4.1',
        text: "Considere a seguinte lista:\n\n- Entrada correta não aceite\n- Entrada incorreta aceite\n- Formato de saída errado\n- Divisão por zero\n\nQue técnica de teste é MAIS PROVAVELMENTE utilizada pelo testador que utiliza esta lista ao realizar o teste?",
        options: [
            { id: 'a', text: "Teste exploratório" },
            { id: 'b', text: "Ataque de falhas (Fault attack)" },
            { id: 'c', text: "Teste baseado em checklists" },
            { id: 'd', text: "Análise de valor limite" }
        ],
        correctAnswer: 'b',
        explanation: "b) Está correta. Esta é uma lista de falhas possíveis. Os ataques de falhas são uma implementação metódica da adivinhação de erros e exigem que o testador utilize uma lista de possíveis erros, defeitos e falhas."
    },
    {
        id: 107,
        chapter: 4,
        kLevel: 'K2',
        lo: 'FL-4.4.3',
        text: "Qual das seguintes opções MELHOR descreve como a utilização do teste baseado em checklists pode resultar num aumento de cobertura?",
        options: [
            { id: 'a', text: "Os itens da checklist podem ser definidos com um nível de detalhe suficientemente baixo, para que o testador possa implementar e executar casos de teste detalhados com base nestes itens" },
            { id: 'b', text: "As checklists podem ser automatizadas, de modo que cada vez que uma execução de teste automatizada cobre os itens da checklist, isso resulta em cobertura adicional" },
            { id: 'c', text: "Cada item da checklist deve ser testado separadamente e de forma independente, de modo a que os elementos cubram diferentes áreas do software" },
            { id: 'd', text: "Dois testadores que concebem e executam testes com base nos mesmos itens de checklist de alto nível realizarão tipicamente o teste de formas ligeiramente diferentes" }
        ],
        correctAnswer: 'd',
        explanation: "d) Está correta. Os itens de checklist de alto nível levam a uma variabilidade no teste real, uma vez que diferentes testadores utilizarão diferentes dados e passos, resultando numa cobertura potencialmente maior."
    },
    {
        id: 108,
        chapter: 4,
        kLevel: 'K2',
        lo: 'FL-4.5.2',
        text: "Qual das seguintes opções fornece o MELHOR exemplo de um critério de aceitação orientado ao cenário?",
        options: [
            { id: 'a', text: "A aplicação deve permitir que os utilizadores eliminem a sua conta e todos os dados associados mediante pedido" },
            { id: 'b', text: "Quando um cliente adiciona um item ao seu carrinho e prossegue para o checkout, deve ser solicitado a iniciar sessão ou a criar uma conta, caso ainda não o tenha feito" },
            { id: 'c', text: "SE (contem(produto(23). Nome, carrinho.produtos())) ENTÃO devolver FALSO" },
            { id: 'd', text: "O website deve cumprir as normas de Acessibilidade das TIC e garantir que todo o conteúdo é acessível a utilizadores com deficiência" }
        ],
        correctAnswer: 'b',
        explanation: "b) Está correta. Isto descreve um exemplo de cenário (Quando... deve ser solicitado...) que deve ser concretizado pelo sistema."
    },
    {
        id: 109,
        chapter: 4,
        kLevel: 'K3',
        lo: 'FL-4.5.3',
        text: "Está a utilizar o desenvolvimento orientado a testes de aceitação (ATDD) e a conceber casos de teste com base na seguinte história de utilizador:\n\nComo um utilizador Regular ou Especial, quero poder utilizar o meu cartão eletrónico de andar, para aceder a andares específicos.\n\nCritérios de Aceitação:\nAC1: Os utilizadores Regulares têm acesso aos andares 1 a 3\nAC2: O andar 4 só é acessível a utilizadores Especiais\nAC3: Os utilizadores Especiais têm todos os direitos de acesso dos utilizadores Regulares\n\nQual o caso de teste que é o MAIS razoável para testar o AC3?",
        options: [
            { id: 'a', text: "Verificar se um utilizador Regular pode aceder aos andares 1 e 3" },
            { id: 'b', text: "Verificar se um utilizador Regular não pode aceder ao andar 4" },
            { id: 'c', text: "Verificar se um utilizador Especial pode aceder ao andar 5" },
            { id: 'd', text: "Verificar se um utilizador Especial pode aceder aos andares 1, 2 e 3" }
        ],
        correctAnswer: 'd',
        explanation: "d) Está correta. Para verificar se os utilizadores Especiais têm os direitos dos utilizadores Regulares (AC3), devemos testar se um utilizador Especial consegue aceder aos andares atribuídos a um utilizador Regular."
    },
    {
        id: 110,
        chapter: 5,
        kLevel: 'K2',
        lo: 'FL-5.1.1',
        text: "Qual das seguintes opções <b>NÃO</b> é um objetivo de um plano de teste?",
        options: [
            { id: 'a', text: "Definir dados de teste e resultados esperados para testes de componentes e testes de integração de componentes" },
            { id: 'b', text: "Definir como critérios de saída do nível de teste de componentes que 'deve ser atingida 100% de cobertura de instruções e 100% de cobertura de ramos'" },
            { id: 'c', text: "Descrever quais os campos que o relatório de progresso do teste deve conter e qual deve ser a forma deste relatório" },
            { id: 'd', text: "Explicar porque é que o teste de integração de sistemas será excluído do teste, embora a estratégia de teste exija este nível de teste" }
        ],
        correctAnswer: 'a',
        explanation: "a) Está correta. Os dados de teste detalhados e os resultados esperados fazem parte dos casos de teste, não do plano de teste."
    },
    {
        id: 111,
        chapter: 5,
        kLevel: 'K3',
        lo: 'FL-5.1.4',
        text: "No início de cada iteração, a equipa estima a quantidade de trabalho (em pessoas-dia) que precisará de concluir durante a iteração.\n\nSeja E(n) a quantidade estimada de trabalho para a iteração n, e seja A(n) a quantidade real de trabalho realizado na iteração n.\n\nA partir da terceira iteração, a equipa utiliza o seguinte modelo de estimativa baseado em extrapolação:\n\nE(n) = (3*A(n-1) + A(n-2)) / 4\n\nO gráfico mostra a quantidade estimada e real de trabalho para as primeiras quatro iterações.",
        diagramImage: "/images/q111-graph-set-c.png",
        options: [
            { id: 'a', text: "10.5 pessoas-dia" },
            { id: 'b', text: "8.25 pessoas-dia" },
            { id: 'c', text: "6.5 pessoas-dia" },
            { id: 'd', text: "9.4 pessoas-dia" }
        ],
        correctAnswer: 'c',
        explanation: "c) Está correta. A partir do gráfico: A(4)=6 e A(3)=8. Utilizando a fórmula: E(5) = (3*6 + 8) / 4 = 26 / 4 = 6.5 pessoas-dia."
    },
    {
        id: 112,
        chapter: 5,
        kLevel: 'K3',
        lo: 'FL-5.1.5',
        text: "Está a preparar um cronograma de execução de testes para executar sete casos de teste TC 1 a TC 7. A figura seguinte inclui as prioridades destes casos de teste (1 = prioridade mais alta, 3 = prioridade mais baixa). A figura mostra também as dependências entre os casos de teste utilizando setas. Por exemplo, a seta do TC 4 para o TC 5 significa que o TC 5 só pode ser executado se o TC 4 tiver sido executado anteriormente.",
        diagramImage: "/images/q112-figure-set-c.png",
        options: [
            { id: 'a', text: "TC 3" },
            { id: 'b', text: "TC 5" },
            { id: 'c', text: "TC 6" },
            { id: 'd', text: "TC 2" }
        ],
        correctAnswer: 'a',
        explanation: "a) Está correta. Com base nas prioridades e dependências, a ordem de execução é: TC 4 → TC 7 → TC 1 → TC 2 → TC 5. O TC 3 segue-se por ter prioridade 2, que é superior à do TC 6 (prioridade 3)."
    },
    {
        id: 113,
        chapter: 5,
        kLevel: 'K1',
        lo: 'FL-5.1.6',
        text: "O que mostra o modelo da pirâmide de testes?",
        options: [
            { id: 'a', text: "Que os testes podem ter prioridades diferentes" },
            { id: 'b', text: "Que os testes podem ter granularidades diferentes" },
            { id: 'c', text: "Que os testes podem exigir critérios de cobertura diferentes" },
            { id: 'd', text: "Que os testes podem depender de outros testes" }
        ],
        correctAnswer: 'b',
        explanation: "b) Está correta. O modelo da pirâmide de testes mostra que os diferentes testes têm diferentes níveis de granularidade."
    },
    {
        id: 114,
        chapter: 5,
        kLevel: 'K2',
        lo: 'FL-5.1.7',
        text: "Qual é a relação entre os quadrantes de teste, os níveis de teste e os tipos de teste?",
        options: [
            { id: 'a', text: "Os quadrantes de teste representam combinações específicas de níveis e tipos de teste, definindo a sua localização no ciclo de vida" },
            { id: 'b', text: "Os quadrantes de teste descrevem o grau de granularidade dos tipos de teste individuais realizados em cada nível de teste" },
            { id: 'c', text: "Os quadrantes de teste atribuem os tipos de teste que podem ser realizados aos níveis de teste" },
            { id: 'd', text: "Os quadrantes de teste agrupam os níveis e tipos de teste por vários critérios, tais como a orientação para stakeholders específicos" }
        ],
        correctAnswer: 'd',
        explanation: "d) Está correta. Os quadrantes de teste agrupam testes por critérios como orientação para o negócio vs orientação para a tecnologia e apoio à equipa vs crítica do produto."
    },
    {
        id: 115,
        chapter: 5,
        kLevel: 'K2',
        lo: 'FL-5.2.3',
        text: "Qual das seguintes opções é um exemplo de como a análise de riscos de produto pode influenciar o rigor e o âmbito do teste?",
        options: [
            { id: 'a', text: "A monitorização contínua de riscos permite-nos identificar um risco emergente o mais cedo possível" },
            { id: 'b', text: "A identificação de riscos permite-nos implementar atividades de mitigação e reduzir o nível de risco" },
            { id: 'c', text: "O nível de risco avaliado ajuda-nos a selecionar o rigor do teste" },
            { id: 'd', text: "A análise de riscos permite-nos derivar itens de cobertura" }
        ],
        correctAnswer: 'c',
        explanation: "c) Está correta. Este é um exemplo de como a análise de risco influencia o rigor (profundidade) do teste."
    },
    {
        id: 116,
        chapter: 5,
        kLevel: 'K2',
        lo: 'FL-5.3.2',
        text: "Qual das seguintes atividades no processo de teste faz o MAIOR uso dos relatórios de progresso de teste?",
        options: [
            { id: 'a', text: "Conceção de teste" },
            { id: 'b', text: "Conclusão de teste" },
            { id: 'c', text: "Análise de teste" },
            { id: 'd', text: "Planeamento de teste" }
        ],
        correctAnswer: 'b',
        explanation: "b) Está correta. Um relatório de conclusão de teste utiliza informações dos relatórios de progresso de teste."
    },
    {
        id: 117,
        chapter: 5,
        kLevel: 'K2',
        lo: 'FL-5.4.1',
        text: "Qual das seguintes opções <b>NÃO</b> é um exemplo de como a gestão de configuração apoia o teste?",
        options: [
            { id: 'a', text: "Todos os commits para o repositório são identificados de forma única e controlados por versão" },
            { id: 'b', text: "Todas as alterações nos elementos do ambiente de teste são rastreadas" },
            { id: 'c', text: "Todas as especificações de requisitos são referenciadas de forma inequívoca nos planos de teste" },
            { id: 'd', text: "Todos os defeitos identificados têm um estado atribuído" }
        ],
        correctAnswer: 'd',
        explanation: "d) Está correta. A atribuição de estado aos defeitos é garantida pela gestão de defeitos, não pela gestão de configuração."
    },
    {
        id: 118,
        chapter: 5,
        kLevel: 'K3',
        lo: 'FL-5.5.1',
        text: "Considere o seguinte relatório de defeito para uma aplicação de compras baseada na web:",
        tableHtml: `<div class="border border-slate-300 p-4 rounded bg-white text-black font-mono text-sm shadow-sm" >
        <strong>Aplicação:</strong> WebShop v0.99 <br>
            <strong>Defeito:</strong> Botão de login não funciona <br> <br>
                <strong>Passos para Reproduzir:</strong><br>
                    1. Lançar o website<br>
                        2. Clicar no botão de login<br><br>
                            <strong>Resultado esperado:</strong> O utilizador deve ser redirecionado para a página de login.<br>
                                <strong>Resultado real:</strong> O botão de login não responde quando clicado.<br><br>
                                    <strong>Severidade:</strong> Alta<br>
                                        <strong>Prioridade:</strong> Urgente
                                    </div>\n\nQual é a informação MAIS importante que está em falta neste relatório de defeito?`,

        options: [
            { id: 'a', text: "Nome do testador e data" },
            { id: 'b', text: "Elementos do ambiente de teste e os seus números de versão" },
            { id: 'c', text: "Identificação do objeto de teste" },
            { id: 'd', text: "Impacto nos interesses dos stakeholders" }
        ],
        correctAnswer: 'b',
        explanation: "b) Está correta. A falta de informação sobre o browser e o dispositivo (ambiente) é crítica, uma vez que tal defeito pode ser específico de certos ambientes."
    },
    {
        id: 119,
        chapter: 6,
        kLevel: 'K2',
        lo: 'FL-6.1.1',
        text: "Ferramentas de qual das seguintes categorias ajudam na organização de casos de teste, defeitos detetados e gestão de configuração?",
        options: [
            { id: 'a', text: "Ferramentas de execução de teste e cobertura" },
            { id: 'b', text: "Ferramentas de conceção e implementação de teste" },
            { id: 'c', text: "Ferramentas de gestão de defeitos" },
            { id: 'd', text: "Ferramentas de gestão de teste" }
        ],
        correctAnswer: 'd',
        explanation: "d) Está correta. As ferramentas de gestão de teste facilitam a gestão do SDLC, requisitos, testes, defeitos e configuração."
    },
    {
        id: 120,
        chapter: 6,
        kLevel: 'K1',
        lo: 'FL-6.2.1',
        text: "Qual das seguintes opções tem MAIOR probabilidade de ser um benefício da automação de teste?",
        options: [
            { id: 'a', text: "A capacidade de gerar casos de teste sem acesso à base de teste" },
            { id: 'b', text: "A obtenção de maior cobertura através de uma avaliação mais objetiva" },
            { id: 'c', text: "O aumento dos tempos de execução de teste disponíveis com maior poder de processamento" },
            { id: 'd', text: "A prevenção de erros humanos através de maior consistência e repetibilidade" }
        ],
        correctAnswer: 'd',
        explanation: "d) Está correta. A automação de teste previne erros humanos ao garantir que os testes são executados de forma consistente e na mesma ordem."
    },

    // ==========================================
    // EXAM SET D - Version 1.5
    // ==========================================
    {
        id: 121,
        chapter: 1,
        kLevel: 'K1',
        lo: 'FL-1.1.1',
        text: "Qual das seguintes opções é um objetivo de teste típico?",
        options: [
            { id: 'a', text: "Encontrar e corrigir defeitos no objeto de teste" },
            { id: 'b', text: "Manter comunicações eficazes com os programadores" },
            { id: 'c', text: "Validar que os requisitos legais foram cumpridos" },
            { id: 'd', text: "Aumentar a confiança na qualidade do objeto de teste" }
        ],
        correctAnswer: 'd',
        explanation: "d) Está correta. Aumentar a confiança na qualidade do objeto de teste é alcançado através da execução de testes que passaram (sem falhas)."
    },
    {
        id: 122,
        chapter: 1,
        kLevel: 'K2',
        lo: 'FL-1.2.3',
        text: "Um designer documenta a conceção de um interface de utilizador que não aborda adequadamente os utilizadores com deficiência porque o designer está cansado. O programador implementa o interface de utilizador de acordo com a conceção mas, como está a trabalhar sob forte pressão de tempo, não inclui o tratamento de exceções adequado no seu código para o cálculo de bónus. Quando o sistema operacional é utilizado, são feitas queixas por alguns utilizadores com deficiência sobre o interface e a empresa é posteriormente multada pela autoridade reguladora relevante. Ninguém nota que os cálculos de bónus estão por vezes incorretos.\n\nQual das seguintes afirmações está CORRETA?",
        options: [
            { id: 'a', text: "O erro de cálculo dos bónus é um defeito que ocorre ocasionalmente" },
            { id: 'b', text: "A multa recebida por não abordar alguns utilizadores com deficiência é uma falha" },
            { id: 'c', text: "O programador trabalhar sob forte pressão de tempo é uma causa raiz" },
            { id: 'd', text: "A conceção do interface de utilizador inclui um erro do designer" }
        ],
        correctAnswer: 'c',
        explanation: "c) Está correta. O erro (engano) é cometido pelo programador e este engano é causado pelo facto de ele estar a trabalhar sob forte pressão de tempo, o que é a causa raiz do defeito subsequente no código."
    },
    {
        id: 123,
        chapter: 1,
        kLevel: 'K2',
        lo: 'FL-1.3.1',
        text: "As condições de teste estão a ser utilizadas pelos testadores para gerar casos de teste e executar testes. Embora as condições de teste permaneçam as mesmas, os casos de teste são variados de cada vez.\n\nQual dos seguintes 'princípios de teste' está a ser abordado através da variação dos casos de teste?",
        options: [
            { id: 'a', text: "Os testes desgastam-se" },
            { id: 'b', text: "Falácia da ausência de defeitos" },
            { id: 'c', text: "O teste precoce poupa tempo e dinheiro" },
            { id: 'd', text: "Os defeitos agrupam-se" }
        ],
        correctAnswer: 'a',
        explanation: "a) Está correta. O princípio 'os testes desgastam-se' (também conhecido como paradoxo do pesticida) refere-se à ideia de que repetir os mesmos testes dificilmente revelará novos defeitos, sendo necessário variar os testes."
    },
    {
        id: 124,
        chapter: 1,
        kLevel: 'K2',
        lo: 'FL-1.4.1',
        text: "Dadas as seguintes tarefas de teste:\n1. Derivar casos de teste a partir de condições de teste\n2. Identificar testware reutilizável\n3. Organizar casos de teste em procedimentos de teste\n4. Avaliar a base de teste e o objeto de teste\n\nE as seguintes atividades de teste:\nA. Análise de teste\nB. Conceção de teste\nC. Implementação de teste\nD. Conclusão de teste\n\nQual das seguintes opções MELHOR associa as tarefas às atividades?",
        options: [
            { id: 'a', text: "1B, 2A, 3D, 4C" },
            { id: 'b', text: "1B, 2D, 3C, 4A" },
            { id: 'c', text: "1C, 2A, 3B, 4D" },
            { id: 'd', text: "1C, 2D, 3A, 4B" }
        ],
        correctAnswer: 'b',
        explanation: "b) Está correta. 1-B (Conceção), 2-D (Conclusão/Encerramento), 3-C (Implementação), 4-A (Análise)."
    },
    {
        id: 125,
        chapter: 1,
        kLevel: 'K2',
        lo: 'FL-1.4.3',
        text: "Dado o seguinte testware:\ni. Relatório de conclusão de teste\nii. Dados contidos numa base de dados utilizados para entradas de teste e resultados esperados\niii. A lista de elementos necessários para construir o ambiente de teste\niv. Sequências documentadas de casos de teste em ordem de execução\nv. Casos de teste\n\nQual das seguintes opções MELHOR apresenta o testware produzido como resultado da realização da IMPLEMENTAÇÃO de teste?",
        options: [
            { id: 'a', text: "ii, iv" },
            { id: 'b', text: "iii, v" },
            { id: 'c', text: "i, ii, v" },
            { id: 'd', text: "i, iii, iv" }
        ],
        correctAnswer: 'a',
        explanation: "a) Está correta. A implementação de teste produz os procedimentos de teste (iv) e prepara os dados de teste (ii)."
    },
    {
        id: 126,
        chapter: 1,
        kLevel: 'K2',
        lo: 'FL-1.4.5',
        text: "Qual das seguintes opções tem MAIOR probabilidade de descrever uma tarefa realizada por alguém numa função de GESTÃO de teste?",
        options: [
            { id: 'a', text: "Avaliar a base de teste e o objeto de teste" },
            { id: 'b', text: "Definir os requisitos do ambiente de teste" },
            { id: 'c', text: "Avaliar a testabilidade do objeto de teste" },
            { id: 'd', text: "Criar o relatório de conclusão de teste" }
        ],
        correctAnswer: 'd',
        explanation: "d) Está correta. O relatório de conclusão de teste é uma tarefa de encerramento gerida pela função de gestão de teste."
    },
    {
        id: 127,
        chapter: 1,
        kLevel: 'K1',
        lo: 'FL-1.5.2',
        text: "Qual das seguintes opções é uma vantagem da abordagem de equipa inteira (whole team approach)?",
        options: [
            { id: 'a', text: "Melhoria da comunicação entre os membros da equipa" },
            { id: 'b', text: "Diminuição da responsabilidade individual pela qualidade" },
            { id: 'c', text: "Implementação mais rápida de entregas para os utilizadores finais" },
            { id: 'd', text: "Redução da colaboração com utilizadores de negócio externos" }
        ],
        correctAnswer: 'a',
        explanation: "a) Está correta. A equipa inteira promove sinergia, comunicação aberta e colaboração constante."
    },
    {
        id: 128,
        chapter: 1,
        kLevel: 'K2',
        lo: 'FL-1.5.3',
        text: "Dados os seguintes benefícios e desvantagens da independência do teste:\ni. Os testadores trabalham num local diferente dos programadores\nii. Os testadores questionam os pressupostos feitos pelos programadores ao escreverem código\niii. Estabeleceu-se uma dinâmica de confrontação entre testadores e programadores\niv. Os programadores convenceram-se de que os testadores são os principais responsáveis pela qualidade\nv. Os testadores têm preconceitos (biases) diferentes dos detidos pelos programadores\n\nQuais têm MAIOR probabilidade de serem considerados BENEFÍCIOS?",
        options: [
            { id: 'a', text: "i, iv" },
            { id: 'b', text: "ii, v" },
            { id: 'c', text: "i, iii, iv" },
            { id: 'd', text: "ii, iii, v" }
        ],
        correctAnswer: 'b',
        explanation: "b) Está correta. Questionar pressupostos (ii) e ter diferentes enviesamentos cognitivos (v) são vantagens críticas da independência."
    },
    {
        id: 129,
        chapter: 2,
        kLevel: 'K1',
        lo: 'FL-2.1.2',
        text: "Qual das seguintes é uma boa prática de teste que se aplica a todos os ciclos de vida de desenvolvimento de software?",
        options: [
            { id: 'a', text: "Cada nível de teste tem objetivos de teste específicos e distintos" },
            { id: 'b', text: "A implementação e execução de testes para um determinado nível de teste deve começar durante a fase de desenvolvimento correspondente" },
            { id: 'c', text: "Os testadores devem iniciar a conceção de testes assim que os rascunhos dos produtos de trabalho relevantes estiverem disponíveis" },
            { id: 'd', text: "Cada atividade de teste dinâmico tem uma atividade de teste estático correspondente" }
        ],
        correctAnswer: 'a',
        explanation: "a) Está correta. Ter objetivos distintos por nível evita redundâncias e garante que diferentes tipos de defeitos são capturados."
    },
    {
        id: 130,
        chapter: 2,
        kLevel: 'K1',
        lo: 'FL-2.1.3',
        text: "Qual das seguintes opções é um exemplo de uma abordagem de desenvolvimento orientada primeiro ao teste (test-first)?",
        options: [
            { id: 'a', text: "Desenvolvimento Orientado por Comportamento (BDD)" },
            { id: 'b', text: "Desenvolvimento Orientado por Nível de Teste" },
            { id: 'c', text: "Desenvolvimento Orientado por Função" },
            { id: 'd', text: "Desenvolvimento Orientado pelo Desempenho" }
        ],
        correctAnswer: 'a',
        explanation: "a) Está correta. O Behavior-Driven Development (BDD) utiliza testes (cenários) para guiar a codificação."
    },
    {
        id: 131,
        chapter: 2,
        kLevel: 'K2',
        lo: 'FL-2.1.4',
        text: "Qual das seguintes opções tem MAIOR probabilidade de ser um desafio encontrado ao implementar DevOps?",
        options: [
            { id: 'a', text: "Garantir que as características de qualidade não funcionais não são negligenciadas" },
            { id: 'b', text: "Gerir ambientes de teste que mudam continuamente" },
            { id: 'c', text: "A necessidade de mais testadores manuais com experiência adequada" },
            { id: 'd', text: "Configurar a automação de testes como parte da pipeline de entrega" }
        ],
        correctAnswer: 'd',
        explanation: "d) Está correta. A integração da automação na pipeline de CI/CD é um dos desafios técnicos e culturais mais comuns do DevOps."
    },
    {
        id: 132,
        chapter: 2,
        kLevel: 'K2',
        lo: 'FL-2.1.6',
        text: "Qual das seguintes opções MELHOR descreve as retrospetivas?",
        options: [
            { id: 'a', text: "As retrospetivas permitem aos membros da equipa identificar outros membros que não contribuíram totalmente para atingir a qualidade" },
            { id: 'b', text: "As retrospetivas dão aos testadores a oportunidade de identificar atividades que foram bem-sucedidas para que estas sejam mantidas no futuro" },
            { id: 'c', text: "As retrospetivas são onde os membros da equipa ágil podem expressar as suas preocupações sobre a gestão e os clientes num ambiente com culpas" },
            { id: 'd', text: "As retrospetivas dão aos membros da equipa ágil um fórum onde se focam na discussão do plano e das decisões técnicas para a próxima iteração" }
        ],
        correctAnswer: 'b',
        explanation: "b) Está correta. O objetivo da retrospetiva é a melhoria contínua do processo, reforçando o que funcionou e corrigindo o que falhou."
    },
    {
        id: 133,
        chapter: 2,
        kLevel: 'K2',
        lo: 'FL-2.2.2',
        text: "Qual dos seguintes testes tem MAIOR probabilidade de ser realizado como parte de um teste FUNCIONAL?",
        options: [
            { id: 'a', text: "O teste verifica que a função de ordenação coloca os elementos da lista ou array por ordem crescente" },
            { id: 'b', text: "O teste verifica se a função de ordenação conclui a ordenação no prazo de um segundo após o início" },
            { id: 'c', text: "O teste verifica com que facilidade a função de ordenação pode ser alterada de ordenação crescente para decrescente" },
            { id: 'd', text: "O teste verifica se a função de ordenação continua a funcionar corretamente quando movida de uma arquitetura de 32 bits para 64 bits" }
        ],
        correctAnswer: 'a',
        explanation: "a) Está correta. A funcionalidade diz respeito ao 'o quê' o sistema faz (ex: ordenar corretamente). As outras opções referem-se a desempenho, manutenibilidade e portabilidade."
    },
    {
        id: 134,
        chapter: 2,
        kLevel: 'K2',
        lo: 'FL-2.3.1',
        text: "Qual das seguintes opções tem MAIOR probabilidade de ser um gatilho (trigger) que leva ao teste de MANUTENÇÃO de um sistema de câmbio de moeda?",
        options: [
            { id: 'a', text: "Os programadores reportaram que alterar o sistema era difícil e os testadores decidiram verificar se isso era verdade" },
            { id: 'b', text: "A opção de reembolso do sistema de câmbio foi removida porque nem sempre devolvia o montante correto aos clientes" },
            { id: 'c', text: "A equipa ágil começou a desenvolver uma história de utilizador que adiciona uma nova funcionalidade de fidelização de clientes" },
            { id: 'd', text: "A opção de suporte de idioma do sistema foi utilizada para permitir transações em inglês e no idioma local" }
        ],
        correctAnswer: 'b',
        explanation: "b) Está correta. A manutenção ocorre devido a modificações num sistema já operacional, como a remoção de uma funcionalidade defeituosa."
    },
    {
        id: 135,
        chapter: 3,
        kLevel: 'K1',
        lo: 'FL-3.1.1',
        text: "Qual das seguintes opções <b>NÃO PODE</b> ser examinada pelo teste estático?",
        options: [
            { id: 'a', text: "Contrato" },
            { id: 'b', text: "Plano de teste" },
            { id: 'c', text: "Código encriptado" },
            { id: 'd', text: "Carta de teste (test charter)" }
        ],
        correctAnswer: 'c',
        explanation: "c) Está correta. O teste estático baseia-se na leitura e análise de documentação ou código. Código encriptado é ininteligível para análise humana ou de ferramentas estáticas."
    },
    {
        id: 136,
        chapter: 3,
        kLevel: 'K2',
        lo: 'FL-3.1.2',
        text: "Qual das seguintes afirmações sobre o valor do teste estático está CORRETA?",
        options: [
            { id: 'a', text: "Os tipos de defeitos encontrados pelo teste estático são diferentes dos tipos de defeitos que podem ser encontrados pelo teste dinâmico" },
            { id: 'b', text: "O teste dinâmico pode detetar os tipos de defeitos encontrados pelo teste estático e mais alguns tipos adicionais" },
            { id: 'c', text: "O teste dinâmico pode identificar alguns dos defeitos encontrados pelo teste estático, mas não todos" },
            { id: 'd', text: "O teste estático pode identificar os tipos de defeitos encontrados pelo teste dinâmico, bem como alguns tipos extras" }
        ],
        correctAnswer: 'c',
        explanation: "c) Está correta. Embora haja sobreposição, certos defeitos (como código morto ou vulnerabilidades de segurança específicas) são muito mais fáceis de encontrar via estático."
    },
    {
        id: 137,
        chapter: 3,
        kLevel: 'K2',
        lo: 'FL-3.2.2',
        text: "Dadas as seguintes descrições de atividades de revisão:\n1. As anomalias detetadas são deliberadas e são tomadas decisões sobre o seu estado e propriedade\n2. Os defeitos são registados e as atualizações necessárias são tratadas antes da aceitação do produto\n3. Os revisores utilizam técnicas para sugerir questões sobre o produto e detetar anomalias\n4. O objetivo da revisão e o seu cronograma são estabelecidos para garantir eficiência\n5. É fornecido aos participantes o acesso ao item que está a ser revisto\n\nQual é a sequência CORRETA das atividades no processo de revisão que correspondem às descrições?",
        options: [
            { id: 'a', text: "4-3-5-2-1" },
            { id: 'b', text: "4-5-3-1-2" },
            { id: 'c', text: "5-4-1-3-2" },
            { id: 'd', text: "5-4-3-2-1" }
        ],
        correctAnswer: 'b',
        explanation: "b) Está correta. A ordem é: Planeamento (4), Iniciação (5), Revisão Individual (3), Comunicação e Análise (1), Correção e Reporte (2)."
    },
    {
        id: 138,
        chapter: 3,
        kLevel: 'K1',
        lo: 'FL-3.2.3',
        text: "Qual o participante no processo de revisão que é responsável por garantir que as reuniões de revisão decorrem de forma eficaz e que todos podem expressar livremente as suas opiniões?",
        options: [
            { id: 'a', text: "Gestor" },
            { id: 'b', text: "Moderador" },
            { id: 'c', text: "Presidente (Chairperson)" },
            { id: 'd', text: "Líder da Revisão" }
        ],
        correctAnswer: 'b',
        explanation: "b) Está correta. O moderador (facilitador) gere o tempo, a dinâmica da reunião e o ambiente seguro de feedback."
    },
    {
        id: 139,
        chapter: 4,
        kLevel: 'K2',
        lo: 'FL-4.1.1',
        text: "Realiza o teste de sistema de uma aplicação web e recebe o seguinte requisito:\n\nREQ 05-017. Se o custo total das compras exceder os 100$, o cliente recebe um desconto de 5% em compras subsequentes. Caso contrário, o cliente não recebe desconto.\n\nQuais as técnicas de teste que serão MAIS úteis na conceção de casos de teste baseados neste requisito?",
        options: [
            { id: 'a', text: "Técnicas de teste de caixa-branca" },
            { id: 'b', text: "Técnicas de teste de caixa-preta" },
            { id: 'c', text: "Técnicas de teste baseadas na experiência" },
            { id: 'd', text: "Técnicas de teste baseadas no risco" }
        ],
        correctAnswer: 'b',
        explanation: "b) Está correta. Como se trata de um requisito de lógica de negócio e comportamento, as técnicas de caixa-preta (EP, BVA) são as indicadas."
    },
    {
        id: 140,
        chapter: 4,
        kLevel: 'K3',
        lo: 'FL-4.2.1',
        text: "O sistema de venda de bilhetes de cinema calcula o tipo de desconto com base no ano de nascimento (BY) do cliente e no ano atual (CY):\n\nSeja D a diferença entre CY e BY (D = CY - BY)\n• Se D < 0 então imprime o erro \"ano de nascimento não pode ser superior ao atual\"\n• Se 0 ≤ D < 18 então aplica o desconto de estudante\n• Se 18 ≤ D < 65 então não aplica desconto\n• Se D ≥ 65 então aplica o desconto de pensionista\n\nO seu conjunto de testes já contém:\n- BY = 1990, CY = 2020 (D=30: sem desconto)\n- BY = 2030, CY = 2029 (D=-1: erro)\n\nQuais os conjuntos de dados de teste que devem ser adicionados para atingir a cobertura total de partição de equivalência válida?",
        type: 'multiple',
        options: [
            { id: 'a', text: "BY = 2001, CY = 2065" },
            { id: 'b', text: "BY = 1900, CY = 1965" },
            { id: 'c', text: "BY = 1965, CY = 1900" },
            { id: 'd', text: "BY = 2011, CY = 2029" },
            { id: 'e', text: "BY = 2000, CY = 2000" }
        ],
        correctAnswer: ['b', 'e'],
        explanation: "As opções b) e e) estão corretas. Falta cobrir a partição Pensionista (D >= 65) - conjunto b dá D=65; e Estudante (0 <= D < 18) - conjunto e dá D=0."
    },
    {
        id: 141,
        chapter: 4,
        kLevel: 'K3',
        lo: 'FL-4.2.2',
        text: "Está a testar um sistema de controlo de temperatura. Se a temperatura estiver entre 0 e 2 graus inclusive, apresenta \"temperatura OK\". Para temperaturas inferiores, apresenta \"temperatura demasiado baixa\" e para superiores \"temperatura demasiado alta\".\n\nUtilizando a análise de valor limite de DOIS valores, qual o conjunto de entradas que fornece a maior cobertura?",
        options: [
            { id: 'a', text: "-1, 3" },
            { id: 'b', text: "0, 2" },
            { id: 'c', text: "-1, 0, 2, 3" },
            { id: 'd', text: "-2, 0, 2, 4" }
        ],
        correctAnswer: 'c',
        explanation: "c) Está correta. Os valores limite (2-value) para os limites 0 e 2 são: o próprio valor (0, 2) e o vizinho imediato fora do intervalo (-1, 3)."
    },
    {
        id: 142,
        chapter: 4,
        kLevel: 'K3',
        lo: 'FL-4.2.3',
        text: "Está a conceber casos de teste com base na seguinte tabela de decisão.",
        tableHtml: `
    <div class="overflow-x-auto my-4 p-2 rounded border border-slate-300 bg-white text-black">
      <table class="min-w-full text-center text-sm border-collapse">
        <thead>
          <tr class="font-bold bg-gray-50 border-b">
            <th class="p-2 border-r text-left">Condições/Ações</th>
            <th class="p-2 border-r">R1</th>
            <th class="p-2 border-r">R2</th>
            <th class="p-2 border-r">R3</th>
            <th class="p-2 border-r">R4</th>
            <th class="p-2 border-r">R5</th>
            <th class="p-2 border-r">R6</th>
            <th class="p-2">R7</th>
          </tr>
        </thead>
        <tbody>
          <tr class="border-b">
            <td class="p-2 border-r text-left">C1: Idade</td>
            <td class="p-2 border-r">0-18</td>
            <td class="p-2 border-r">19-65</td>
            <td class="p-2 border-r">19-65</td>
            <td class="p-2 border-r">>65</td>
            <td class="p-2 border-r">0-18</td>
            <td class="p-2 border-r">19-65</td>
            <td class="p-2 border-r">>65</td>
          </tr>
          <tr class="border-b">
            <td class="p-2 border-r text-left">C2: Experiência</td>
            <td class="p-2 border-r"></td>
            <td class="p-2 border-r">0-4</td>
            <td class="p-2 border-r">>4</td>
            <td class="p-2 border-r"></td>
            <td class="p-2 border-r"></td>
            <td class="p-2 border-r"></td>
            <td class="p-2 border-r"></td>
          </tr>
          <tr class="border-b">
            <td class="p-2 border-r text-left">C3: Registado?</td>
            <td class="p-2 border-r">NÃO</td>
            <td class="p-2 border-r">NÃO</td>
            <td class="p-2 border-r">NÃO</td>
            <td class="p-2 border-r">NÃO</td>
            <td class="p-2 border-r">SIM</td>
            <td class="p-2 border-r">SIM</td>
            <td class="p-2 border-r">SIM</td>
          </tr>
          <tr class="bg-blue-50 font-semibold">
            <td class="p-2 border-r text-left">Categoria</td>
            <td class="p-2 border-r">A</td>
            <td class="p-2 border-r">A</td>
            <td class="p-2 border-r">B</td>
            <td class="p-2 border-r">B</td>
            <td class="p-2 border-r">B</td>
            <td class="p-2 border-r">D</td>
            <td class="p-2 border-r">C</td>
          </tr>
        </tbody>
      </table>
    </div>`,
        textAfterTable: "Até agora, concebeu os seguintes casos de teste:\nTC1: Homem de 19 anos, não registado, sem experiência; resultado esperado: categoria A\nTC2: Mulher de 65 anos, não registada, com 5 anos de experiência; resultado esperado: categoria B\nTC3: Homem de 66 anos, registado, sem experiência; resultado esperado: categoria C\nTC4: Mulher de 65 anos, registada, com 4 anos de experiência; resultado esperado: categoria D\n\nQual dos seguintes casos de teste, quando adicionado ao conjunto de casos de teste existente, aumentará a cobertura da tabela de decisão?",
        options: [
            { id: 'a', text: "Homem de 66 anos, não registado, sem experiência; resultado esperado: categoria B" },
            { id: 'b', text: "Mulher de 55 anos, não registada, com 2 anos de experiência; resultado esperado: categoria A" },
            { id: 'c', text: "Mulher de 19 anos, registada, com 5 anos de experiência; resultado esperado: categoria D" },
            { id: 'd', text: "Nenhum caso de teste adicional pode aumentar a cobertura da tabela de decisão já alcançada" }
        ],
        correctAnswer: 'a',
        explanation: "a) Está correta. De acordo com o gabarito oficial:\n- O TC1 cobre a regra R2.\n- O TC2 cobre a regra R3.\n- O TC3 cobre a regra R7.\n- O TC4 cobre a regra R6.\nO novo caso de teste (Homem de 66 anos, não registado) cobre a regra R4, aumentando assim a cobertura. As opções (b) e (c) cobrem regras já testadas (R2 e R6, respetivamente)."
    },
    {
        id: 143,
        chapter: 4,
        kLevel: 'K3',
        lo: 'FL-4.2.4',
        text: "Está a aplicar os testes de transição de estados ao sistema de reserva de quartos de hotel modelado pela seguinte tabela de estados, com 4 estados e 5 eventos diferentes:",
        tableHtml: `
    <div class="overflow-x-auto my-4 p-2 rounded border border-slate-300 bg-white text-black text-sm">
      <table class="min-w-full text-center border-collapse">
        <thead>
          <tr class="font-bold border-b">
            <th class="p-2 border-r text-left">Estado</th>
            <th colspan="5" class="p-2">Eventos</th>
          </tr>
          <tr class="font-bold border-b bg-gray-50">
            <th class="p-2 border-r"></th>
            <th class="p-2 border-r">Disponível</th>
            <th class="p-2 border-r">NãoDisponível</th>
            <th class="p-2 border-r">AlterarQuarto</th>
            <th class="p-2 border-r">Cancelar</th>
            <th class="p-2">Pagar</th>
          </tr>
        </thead>
        <tbody>
          <tr class="border-b">
            <td class="p-2 border-r font-semibold text-left">S1: Solicitando</td>
            <td class="p-2 border-r">S2</td>
            <td class="p-2 border-r">S3</td>
            <td class="p-2 border-r"></td>
            <td class="p-2 border-r"></td>
            <td class="p-2"></td>
          </tr>
          <tr class="border-b">
            <td class="p-2 border-r font-semibold text-left">S2: Confirmado</td>
            <td class="p-2 border-r"></td>
            <td class="p-2 border-r"></td>
            <td class="p-2 border-r">S1</td>
            <td class="p-2 border-r">S4</td>
            <td class="p-2">S4</td>
          </tr>
          <tr class="border-b">
            <td class="p-2 border-r font-semibold text-left">S3: Lista de espera</td>
            <td class="p-2 border-r">S2</td>
            <td class="p-2 border-r"></td>
            <td class="p-2 border-r"></td>
            <td class="p-2 border-r">S4</td>
            <td class="p-2"></td>
          </tr>
          <tr class="border-b">
            <td class="p-2 border-r font-semibold text-left">S4: Fim</td>
            <td class="p-2 border-r"></td>
            <td class="p-2 border-r"></td>
            <td class="p-2 border-r"></td>
            <td class="p-2 border-r"></td>
            <td class="p-2"></td>
          </tr>
        </tbody>
      </table>
    </div>`,
        textAfterTable: "Assumindo que todos os casos de teste começam no estado 'Solicitando', qual dos seguintes casos de teste, representados como sequências de eventos, atinge a maior cobertura de transições válidas?",
        options: [
            { id: 'a', text: "NãoDisponível, Disponível, AlterarQuarto, NãoDisponível, Cancelar" },
            { id: 'b', text: "Disponível, AlterarQuarto, NãoDisponível, Disponível, Pagar" },
            { id: 'c', text: "Disponível, AlterarQuarto, Disponível, AlterarQuarto, NãoDisponível" },
            { id: 'd', text: "NãoDisponível, Cancelar, Pagar, AlterarQuarto, Disponível" }
        ],
        correctAnswer: 'b',
        explanation: "b) Está correta. Esta sequência cobre 5 transições diferentes: (S1->S2, S2->S1, S1->S3, S3->S2, S2->S4), o que representa a cobertura mais elevada de transições únicas entre as opções apresentadas."
    },
    {
        id: 144,
        chapter: 4,
        kLevel: 'K2',
        lo: 'FL-4.3.1',
        text: "O seu conjunto de testes S atinge 100% de cobertura de instruções. Consiste em três casos de teste, cada um atingindo 50%.\n\nQual das seguintes afirmações está CORRETA?",
        options: [
            { id: 'a', text: "Executar S causará todas as falhas possíveis em P" },
            { id: 'b', text: "S atinge 100% de cobertura de ramos para P" },
            { id: 'c', text: "Cada instrução executável em P que contenha um defeito foi executada pelo menos uma vez durante S" },
            { id: 'd', text: "Após remover um caso de teste de S, os dois restantes ainda atingirão 100% de cobertura" }
        ],
        correctAnswer: 'c',
        explanation: "c) Está correta. 100% de cobertura de instruções garante que cada linha de código executável foi 'tocada' pelo menos uma vez."
    },
    {
        id: 145,
        chapter: 4,
        kLevel: 'K2',
        lo: 'FL-4.3.3',
        text: "Porque é que o teste de caixa-branca facilita a deteção de defeitos mesmo quando a especificação é vaga ou incompleta?",
        options: [
            { id: 'a', text: "Os casos de teste baseiam-se na estrutura do objeto de teste e não na especificação" },
            { id: 'b', text: "A cobertura para cada técnica de caixa-branca pode ser bem definida e facilmente medida" },
            { id: 'c', text: "As técnicas de caixa-branca estão muito bem desenhadas para detetar omissões nos requisitos" },
            { id: 'd', text: "As técnicas de caixa-branca podem ser usadas tanto no teste estático como no dinâmico" }
        ],
        correctAnswer: 'a',
        explanation: "a) Está correta. Ao testar o que foi efetivamente construído (código), não dependemos da qualidade da especificação para encontrar falhas de implementação."
    },
    {
        id: 146,
        chapter: 4,
        kLevel: 'K2',
        lo: 'FL-4.4.1',
        text: "Qual das seguintes opções <b>NÃO</b> é antecipada pelo testador ao aplicar a adivinhação de erros (error guessing)?",
        options: [
            { id: 'a', text: "O programador compreendeu mal a fórmula na história de utilizador" },
            { id: 'b', text: "O programador escreveu mal uma expressão no código-fonte" },
            { id: 'c', text: "O programador faltou ao seminário sobre a nova legislação bancária" },
            { id: 'd', text: "A precisão do cálculo feito pelo sistema não é suficientemente exata" }
        ],
        correctAnswer: 'c',
        explanation: "c) Está correta. Faltar a um seminário é uma causa raiz organizacional/pessoal, não é um erro ou defeito técnico que um testador consiga 'adivinhar' na aplicação."
    },
    {
        id: 147,
        chapter: 4,
        kLevel: 'K2',
        lo: 'FL-4.4.2',
        text: "Qual das seguintes afirmações sobre o teste exploratório é verdadeira?",
        options: [
            { id: 'a', text: "Os casos de teste são concebidos antes do início da sessão de teste exploratório" },
            { id: 'b', text: "O testador pode realizar a execução, mas não pode realizar a conceção de testes" },
            { id: 'c', text: "Os resultados do teste exploratório são bons preditores do número de defeitos remanescentes" },
            { id: 'd', text: "Durante o teste exploratório, o testador pode utilizar técnicas de teste de caixa-preta" }
        ],
        correctAnswer: 'd',
        explanation: "d) Está correta. No teste exploratório, o testador pode e deve utilizar quaisquer técnicas (como EP ou BVA) para guiar a sua exploração."
    },
    {
        id: 148,
        chapter: 4,
        kLevel: 'K2',
        lo: 'FL-4.5.1',
        text: "Qual a prática colaborativa de escrita de histórias de utilizador que permite à equipa obter uma compreensão coletiva do que deve ser entregue?",
        options: [
            { id: 'a', text: "Planning poker, para que a equipa obtenha consenso sobre o esforço necessário" },
            { id: 'b', text: "Revisões, para que a equipa detete inconsistências na história de utilizador" },
            { id: 'c', text: "Planeamento da iteração, para que as histórias com maior valor de negócio sejam priorizadas" },
            { id: 'd', text: "Conversação, para que os membros da equipa compreendam como o software será usado" }
        ],
        correctAnswer: 'd',
        explanation: "d) Está correta. A conversação (os '3 Cs': Cartão, Conversação, Confirmação) é o que gera a compreensão partilhada."
    },
    {
        id: 149,
        chapter: 4,
        kLevel: 'K3',
        lo: 'FL-4.5.3',
        text: "User Story: Como cliente, quero filtrar por preço para encontrar produtos no meu orçamento. Precondição: A($100) e B($110). Qual o MELHOR exemplo de caso de teste?",
        options: [
            { id: 'a', text: "Definir filtro entre $90 e $100. Esperado: mostra apenas A. Alterar máximo para $110. Esperado: mostra A e B" },
            { id: 'b', text: "Entrar na página. Esperado: preços padrão são $100 e $110. Adicionar produto C($120). Esperado: máximo altera para $120" },
            { id: 'c', text: "Definir filtro entre $90 e $115. Alterar moeda de USD para EUR. Esperado: filtro converte valores corretamente" },
            { id: 'd', text: "Testar em browsers Edge, Chrome e Opera. Em cada um, definir filtro entre $90 e $110. Esperado: mesmo layout em todos" }
        ],
        correctAnswer: 'a',
        explanation: "a) Está correta. Valida os critérios de aceitação fundamentais da funcionalidade de filtragem dinâmica."
    },
    {
        id: 150,
        chapter: 5,
        kLevel: 'K2',
        lo: 'FL-5.1.3',
        text: "Quais das seguintes opções MELHOR definem critérios de SAÍDA (EXIT criteria) num projeto de teste?",
        type: 'multiple',
        options: [
            { id: 'a', text: "O orçamento é aprovado" },
            { id: 'b', text: "O orçamento esgota-se" },
            { id: 'c', text: "A base de teste está disponível" },
            { id: 'd', text: "Os casos de teste atingiram pelo menos 80% de cobertura de instruções" },
            { id: 'e', text: "Todos os analistas de teste têm certificação ISTQB" }
        ],
        correctAnswer: ['b', 'd'],
        explanation: "As opções b) e d) estão corretas. O fim do orçamento (b) e metas de cobertura (d) são condições de paragem típicas."
    },
    {
        id: 151,
        chapter: 5,
        kLevel: 'K3',
        lo: 'FL-5.1.4',
        text: "Estimativa de três pontos para executar 4 casos de teste. Por caso: Otimista (1h), Pior (8h), Provável (3h). Qual a estimativa total?",
        options: [
            { id: 'a', text: "14 horas" },
            { id: 'b', text: "3,5 horas" },
            { id: 'c', text: "16 horas" },
            { id: 'd', text: "12 horas" }
        ],
        correctAnswer: 'a',
        explanation: "a) Está correta. Por caso: (1 + 4*3 + 8) / 6 = 3,5h. Para 4 casos: 3,5 * 4 = 14 horas."
    },
    {
        id: 152,
        chapter: 5,
        kLevel: 'K3',
        lo: 'FL-5.1.5',
        text: "A tabela apresenta a matriz de rastreabilidade dos casos de teste para os requisitos. 'X' significa que um determinado caso de teste cobre o requisito correspondente.",
        tableHtml: `
    <div class="overflow-x-auto my-4 p-2 rounded border border-slate-300 bg-white text-black text-sm">
      <table class="min-w-full text-center border-collapse">
        <thead>
          <tr class="font-bold border-b bg-gray-50">
            <th class="p-2 border-r"></th>
            <th class="p-2 border-r">Req1</th>
            <th class="p-2 border-r">Req2</th>
            <th class="p-2 border-r">Req3</th>
            <th class="p-2 border-r">Req4</th>
            <th class="p-2 border-r">Req5</th>
            <th class="p-2 border-r">Req6</th>
            <th class="p-2">Req7</th>
          </tr>
        </thead>
        <tbody>
          <tr class="border-b">
            <td class="p-2 border-r font-semibold">TC1</td>
            <td class="p-2 border-r">X</td>
            <td class="p-2 border-r"></td>
            <td class="p-2 border-r">X</td>
            <td class="p-2 border-r">X</td>
            <td class="p-2 border-r"></td>
            <td class="p-2 border-r"></td>
            <td class="p-2">X</td>
          </tr>
          <tr class="border-b">
            <td class="p-2 border-r font-semibold">TC2</td>
            <td class="p-2 border-r">X</td>
            <td class="p-2 border-r"></td>
            <td class="p-2 border-r"></td>
            <td class="p-2 border-r"></td>
            <td class="p-2 border-r">X</td>
            <td class="p-2 border-r"></td>
            <td class="p-2">X</td>
          </tr>
          <tr class="border-b">
            <td class="p-2 border-r font-semibold">TC3</td>
            <td class="p-2 border-r"></td>
            <td class="p-2 border-r"></td>
            <td class="p-2 border-r"></td>
            <td class="p-2 border-r"></td>
            <td class="p-2 border-r">X</td>
            <td class="p-2 border-r">X</td>
            <td class="p-2"></td>
          </tr>
          <tr>
            <td class="p-2 border-r font-semibold">TC4</td>
            <td class="p-2 border-r"></td>
            <td class="p-2 border-r">X</td>
            <td class="p-2 border-r"></td>
            <td class="p-2 border-r"></td>
            <td class="p-2 border-r"></td>
            <td class="p-2 border-r"></td>
            <td class="p-2"></td>
          </tr>
        </tbody>
      </table>
    </div>`,
        textAfterTable: "Pretende-se priorizar os casos de teste seguindo a técnica de priorização por cobertura adicional. Executa os quatro casos de teste.\n\nQual o caso de teste que deve ser executado em ÚLTIMO lugar?",
        options: [
            { id: 'a', text: "TC1" },
            { id: 'b', text: "TC2" },
            { id: 'c', text: "TC3" },
            { id: 'd', text: "TC4" }
        ],
        correctAnswer: 'b',
        explanation: "b) Está correta. De acordo com a técnica de priorização por cobertura adicional:\n1. O TC1 é o primeiro porque cobre o maior número de requisitos (4: R1, R3, R4, R7).\n2. Requisitos que faltam cobrir: R2, R5, R6.\n3. Dos restantes, o TC3 adiciona a maior cobertura nova (2 requisitos: R5, R6), logo é o segundo.\n4. Requisito que falta cobrir: R2.\n5. O TC4 cobre o R2 (1 requisito novo), logo é o terceiro.\n6. O TC2 não adiciona qualquer requisito novo aos já cobertos (R1, R5 e R7 já foram testados pelo TC1 e TC3), sendo, por isso, o último a ser executado.\nA ordem é: TC1, TC3, TC4 e TC2."
    },
    {
        id: 153,
        chapter: 5,
        kLevel: 'K2',
        lo: 'FL-5.1.7',
        text: "Como podem os quadrantes de teste ser benéficos para o teste?",
        options: [
            { id: 'a', text: "Dividindo o processo em fases (componente, integração, sistema, aceitação)" },
            { id: 'b', text: "Ajudando a avaliar a cobertura de alto nível baseada no código" },
            { id: 'c', text: "Ajudando stakeholders não técnicos a compreender que alguns tipos de teste são mais relevantes que outros" },
            { id: 'd', text: "Desenvolvendo estratégias de comunicação baseadas em tipos psicológicos" }
        ],
        correctAnswer: 'c',
        explanation: "c) Está correta. Os quadrantes facilitam a comunicação sobre o 'porquê' de cada teste (orientado ao negócio vs tecnologia)."
    },
    {
        id: 154,
        chapter: 5,
        kLevel: 'K1',
        lo: 'FL-5.2.1',
        text: "Risco: Nível = 1.000€, Probabilidade = 50%. Qual é o impacto?",
        options: [
            { id: 'a', text: "500€" },
            { id: 'b', text: "2.000€" },
            { id: 'c', text: "50.000€" },
            { id: 'd', text: "200€" }
        ],
        correctAnswer: 'b',
        explanation: "b) Está correta. Nível = Probabilidade * Impacto. Logo, Impacto = 1.000 / 0,5 = 2.000€."
    },
    {
        id: 155,
        chapter: 5,
        kLevel: 'K2',
        lo: 'FL-5.2.2',
        text: "Quais das seguintes opções são riscos de PRODUTO?",
        type: 'multiple',
        options: [
            { id: 'a', text: "Aumento do âmbito (scope creep)" },
            { id: 'b', text: "Arquitetura pobre" },
            { id: 'c', text: "Cortes orçamentais" },
            { id: 'd', text: "Fraco suporte de ferramentas" },
            { id: 'e', text: "Tempo de resposta demasiado longo" }
        ],
        correctAnswer: ['b', 'e'],
        explanation: "As opções b) e e) referem-se à qualidade do software em si (objeto de teste)."
    },
    {
        id: 156,
        chapter: 5,
        kLevel: 'K2',
        lo: 'FL-5.3.2',
        text: "Qual das seguintes opções <b>NÃO</b> é um objetivo válido para um relatório de teste?",
        options: [
            { id: 'a', text: "Acompanhar o progresso e identificar áreas que requerem atenção" },
            { id: 'b', text: "Fornecer informação sobre testes executados e resultados" },
            { id: 'c', text: "Fornecer os passos para reproduzir cada defeito" },
            { id: 'd', text: "Fornecer informação sobre o teste planeado para o período seguinte" }
        ],
        correctAnswer: 'c',
        explanation: "c) Está correta. Os passos de reprodução pertencem ao relatório de DEFEITO, não ao relatório de teste (que é um resumo de atividades)."
    },
    {
        id: 157,
        chapter: 5,
        kLevel: 'K2',
        lo: 'FL-5.4.1',
        text: "A equipa conseguiu reunir todos os ficheiros de uma release antiga para corrigir um defeito reportado por um utilizador. O que permitiu esta atividade?",
        options: [
            { id: 'a', text: "Gestão de risco" },
            { id: 'b', text: "Monitorização e controlo" },
            { id: 'c', text: "Abordagem de equipa inteira" },
            { id: 'd', text: "Gestão de configuração" }
        ],
        correctAnswer: 'd',
        explanation: "d) Está correta. A gestão de configuração garante a identificação, controlo e rastreabilidade de todas as versões dos produtos de trabalho."
    },
    {
        id: 158,
        chapter: 5,
        kLevel: 'K3',
        lo: 'FL-5.5.1',
        text: "Relatório de Defeito: 'Impossível devolver livro'. O que ajudará o programador a reproduzir a falha MAIS RAPIDAMENTE?",
        options: [
            { id: 'a', text: "Adicionar informação sobre quais os utilizadores e quais os livros que a falha afeta" },
            { id: 'b', text: "Preencher o campo da prioridade" },
            { id: 'c', text: "Adicionar dumps de memória após cada passo" },
            { id: 'd', text: "Escrever relatórios separados para cada browser" }
        ],
        correctAnswer: 'a',
        explanation: "a) Está correta. Dados de teste específicos (inputs) são fundamentais para a reprodução rápida de uma falha."
    },
    {
        id: 159,
        chapter: 6,
        kLevel: 'K2',
        lo: 'FL-6.1.1',
        text: "Dadas as categorias: i. Colaboração, ii. DevOps, iii. Gestão, iv. Teste não funcional, v. Conceção. Quais facilitam a EXECUÇÃO de testes?",
        options: [
            { id: 'a', text: "i, v" },
            { id: 'b', text: "ii, iv" },
            { id: 'c', text: "i, iii, v" },
            { id: 'd', text: "ii, iii, iv" }
        ],
        correctAnswer: 'b',
        explanation: "b) Está correta. DevOps (automação/pipelines) e Ferramentas Não Funcionais (carga, segurança) são focadas na execução."
    },
    {
        id: 160,
        chapter: 6,
        kLevel: 'K1',
        lo: 'FL-6.2.1',
        text: "Qual das seguintes opções é MAIS provavelmente um risco da automação de teste?",
        options: [
            { id: 'a', text: "Deteção de defeitos adicionais de gravidade alta" },
            { id: 'b', text: "Fornecer medidas demasiado complexas para humanos" },
            { id: 'c', text: "Incompatibilidade com a plataforma de desenvolvimento" },
            { id: 'd', text: "Redução substancial do tempo de execução" }
        ],
        correctAnswer: 'c',
        explanation: "c) Está correta. A incompatibilidade técnica é um risco grave; as outras opções são benefícios da automação."
    }
];
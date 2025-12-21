export const questions = [
    {
        id: 1,
        chapter: 1,
        kLevel: 'K1',
        lo: 'FL-1.1.1',
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
        kLevel: 'K2',
        lo: 'FL-1.2.1',
        text: "Qual das seguintes opções mostra um exemplo das atividades de teste que contribuem para o sucesso?",
        options: [
            { id: 'a', text: "O envolvimento dos testadores durante as várias atividades do ciclo de vida do desenvolvimento de software (SDLC) irá ajudar a detetar os defeitos nos produtos de trabalho" },
            { id: 'b', text: "Os testadores tentam não perturbar os programadores enquanto estão a codificar, para que os mesmos possam escrever um código melhor" },
            { id: 'c', text: "Os testadores colaboram com os utilizadores finais para ajudar a melhorar a qualidade dos relatórios de defeitos durante os testes de integração de componentes e os testes de sistema" },
            { id: 'd', text: "Os testadores certificados irão conceber casos de teste muito melhores do que os testadores não certificados" }
        ],
        correctAnswer: 'a',
        explanation: "O envolvimento antecipado (Shift-Left) ajuda a prevenir a introdução de defeitos nos requisitos e no design."
    },
    {
        id: 3,
        chapter: 1,
        kLevel: 'K2',
        lo: 'FL-1.3.1',
        text: "Foi-lhe atribuída a função de testador numa equipa que está a produzir um novo sistema de forma incremental. Reparou que não foram efetuadas alterações aos casos de teste de regressão existentes após várias iterações e também não foram identificados novos defeitos. Qual princípio explica o seu ceticismo?",
        options: [
            { id: 'a', text: "Os testes desgastam (Paradoxo do Pesticida)" },
            { id: 'b', text: "A falácia da ausência de defeitos" },
            { id: 'c', text: "Os defeitos agrupam-se" },
            { id: 'd', text: "Os testes exaustivos são impossíveis" }
        ],
        correctAnswer: 'a',
        explanation: "Se os mesmos testes forem repetidos vezes sem conta, eventualmente deixam de encontrar novos defeitos."
    },
    {
        id: 4,
        chapter: 1,
        kLevel: 'K2',
        lo: 'FL-1.4.1',
        text: "Está a trabalhar numa equipa que está a desenvolver uma aplicação móvel de encomenda de refeições. Na iteração atual, a equipa decidiu implementar a funcionalidade de pagamento. Qual das seguintes atividades pertence à análise de teste?",
        options: [
            { id: 'a', text: "Calcular a estimativa de que efetuar testes da integração com o serviço de pagamento irá demorar cerca de 8 pessoas-dia" },
            { id: 'b', text: "Decidir se a equipa deve efetuar testes, para verificar se é possível partilhar o pagamento entre vários utilizadores" },
            { id: 'c', text: "Utilizar a análise de valor fronteira (BVA) para derivar os dados dos casos de teste" },
            { id: 'd', text: "Analisar a discrepância entre o resultado atual e esperado após a execução" }
        ],
        correctAnswer: 'b',
        explanation: "A análise de teste identifica as condições de teste ('o que' testar) baseando-se na base de teste."
    },
    {
        id: 5,
        chapter: 1,
        kLevel: 'K2',
        lo: 'FL-1.4.2',
        text: "Qual dos seguintes fatores têm uma influência SIGNIFICATIVA no processo de teste?\ni. O SDLC\nii. O número de defeitos detetados em projetos anteriores\niii. Os riscos de produto identificados\niv. A aplicação de novos requisitos regulamentares\nv. O número de testadores certificados",
        options: [
            { id: 'a', text: "i, ii têm influência significativa; iii, iv, v não têm influência" },
            { id: 'b', text: "i, iii, iv têm influência significativa; ii, v não têm influência" },
            { id: 'c', text: "ii, iv, v têm influência significativa; i, iii não têm influência" },
            { id: 'd', text: "iii, v têm influência significativa; i, ii, iv não têm influência" }
        ],
        correctAnswer: 'b',
        explanation: "O processo de teste é influenciado pelo modelo de desenvolvimento, riscos e obrigações legais/regulamentares."
    },
    {
        id: 6,
        chapter: 1,
        kLevel: 'K2',
        lo: 'FL-1.4.5',
        text: "Qual das DUAS seguintes tarefas pertencem PRINCIPALMENTE a uma função de teste?",
        type: 'multiple',
        options: [
            { id: 'a', text: "Configurar ambientes de teste" },
            { id: 'b', text: "Manter o backlog do produto" },
            { id: 'c', text: "Conceber soluções para novos requisitos" },
            { id: 'd', text: "Criar o plano de testes" },
            { id: 'e', text: "Analisar a base de testes" }
        ],
        correctAnswer: ['a', 'e'],
        explanation: "Configurar ambientes e analisar a base de testes são responsabilidades do testador. O plano é do gestor."
    },
    {
        id: 7,
        chapter: 1,
        kLevel: 'K2',
        lo: 'FL-1.5.1',
        text: "Quais das seguintes competências são as MAIS importantes de um testador?\ni. Ter conhecimento do domínio\nii. Criar uma visão do produto\niii. Ter um bom espírito de equipa\niv. Planear o trabalho da equipa\nv. Pensamento crítico",
        options: [
            { id: 'a', text: "ii, iv são importantes" },
            { id: 'b', text: "i, iii, v são importantes" },
            { id: 'c', text: "i, ii, v são importantes" },
            { id: 'd', text: "iii, iv são importantes" }
        ],
        correctAnswer: 'b',
        explanation: "Conhecimento de negócio, colaboração e pensamento analítico são fundamentais para o sucesso do testador."
    },
    {
        id: 8,
        chapter: 1,
        kLevel: 'K1',
        lo: 'FL-1.5.2',
        text: "Como é que o Whole Team Approach está presente nas interações entre os testadores e os representantes do negócio?",
        options: [
            { id: 'a', text: "Os representantes do negócio decidem as abordagens à automação de testes" },
            { id: 'b', text: "Os testadores ajudam os representantes do negócio a definir uma estratégia de teste" },
            { id: 'c', text: "Os representantes do negócio não pertencem à Whole Team Approach" },
            { id: 'd', text: "Os testadores ajudam os representantes do negócio a criar testes de aceitação adequados" }
        ],
        correctAnswer: 'd',
        explanation: "A colaboração entre testadores e negócio garante que os testes de aceitação refletem as necessidades reais."
    },
    {
        id: 9,
        chapter: 2,
        kLevel: 'K1',
        lo: 'FL-2.1.2',
        text: "Considere a seguinte regra: 'para cada atividade do SDLC existe uma atividade de teste correspondente.' Em que modelos do SDLC é que esta regra se aplica?",
        options: [
            { id: 'a', text: "Apenas nos SDLC com modelos de desenvolvimento sequencial" },
            { id: 'b', text: "Apenas nos SDLC com modelos de desenvolvimento iterativo" },
            { id: 'c', text: "Apenas nos SDLC com modelos de desenvolvimento incremental" },
            { id: 'd', text: "Nos SDLC com modelos de desenvolvimento sequencial, incremental e iterativo" }
        ],
        correctAnswer: 'd',
        explanation: "Independentemente do modelo, cada desenvolvimento deve ter uma validação correspondente."
    },
    {
        id: 10,
        chapter: 2,
        kLevel: 'K1',
        lo: 'FL-2.1.3',
        text: "Qual das seguintes afirmações descreve MELHOR a abordagem de desenvolvimento orientado para testes de aceitação (ATDD)?",
        options: [
            { id: 'a', text: "Os critérios de aceitação são normalmente criados com base no formato 'Given/When/Then'" },
            { id: 'b', text: "Os casos de teste são principalmente criados nos testes de componentes" },
            { id: 'c', text: "Os testes são criados com base nos critérios de aceitação para impulsionar o desenvolvimento" },
            { id: 'd', text: "Os testes baseiam-se no comportamento, o que simplifica a compreensão" }
        ],
        correctAnswer: 'c',
        explanation: "No ATDD, os testes são desenhados colaborativamente antes do código para guiar o desenvolvimento."
    },
    {
        id: 11,
        chapter: 2,
        kLevel: 'K2',
        lo: 'FL-2.1.5',
        text: "Qual das seguintes respostas NÃO corresponde a uma abordagem Shift-Left?",
        options: [
            { id: 'a', text: "Rever os requisitos do utilizador antes de serem formalmente aceites" },
            { id: 'b', text: "Elaborar um teste de componentes antes de escrever o código correspondente" },
            { id: 'c', text: "Efetuar um teste de eficiência de desempenho durante o teste de componentes" },
            { id: 'd', text: "Elaborar um script de teste antes de definir o processo de gestão de configurações" }
        ],
        correctAnswer: 'd',
        explanation: "Criar scripts antes de organizar a gestão de configuração é má prática, não é Shift-Left."
    },
    {
        id: 12,
        chapter: 2,
        kLevel: 'K2',
        lo: 'FL-2.1.6',
        text: "Argumento para convencer o gestor a organizar retrospetivas no fim de cada ciclo de lançamento:",
        options: [
            { id: 'a', text: "Atualmente, as retrospetivas são muito populares" },
            { id: 'b', text: "A organização de retrospetivas irá poupar dinheiro imediatamente" },
            { id: 'c', text: "As deficiências identificadas podem ser utilizadas como lista de tarefas para melhoria contínua" },
            { id: 'd', text: "As retrospetivas abrangem cinco valores cruciais como coragem e respeito" }
        ],
        correctAnswer: 'c',
        explanation: "As retrospetivas permitem aprender com os erros e melhorar os processos para o próximo ciclo."
    },
    {
        id: 13,
        chapter: 2,
        kLevel: 'K2',
        lo: 'FL-2.2.1',
        text: "Mapeamento Níveis de Teste vs Falhas:\n1. Comportamento do sistema | 2. Comunicação entre componentes | 3. Lógica do módulo | 4. Regras de negócio incorretas\nA. Componentes | B. Integração | C. Sistema | D. Aceitação",
        options: [
            { id: 'a', text: "1D, 2B, 3A, 4C" },
            { id: 'b', text: "1D, 2B, 3C, 4A" },
            { id: 'c', text: "1B, 2A, 3D, 4C" },
            { id: 'd', text: "1C, 2B, 3A, 4D" }
        ],
        correctAnswer: 'a',
        explanation: "A-3 (Componentes foca na lógica interna), B-2 (Integração nas interfaces), C-4 (Sistema nas regras), D-1 (Aceitação no comportamento)."
    },
    {
        id: 14,
        chapter: 2,
        kLevel: 'K2',
        lo: 'FL-2.2.3',
        text: "Histórico: TC1 falhou na v1, passou na v2. TC2 passou na v1, falhou na v2. TC3 falhou na v1 e v2. Na v3, todos passaram. Quais testes na Execução 3 foram testes de REGRESSÃO?",
        options: [
            { id: 'a', text: "Apenas 4, 7, 8 e 9" },
            { id: 'b', text: "Apenas 5 e 7" },
            { id: 'c', text: "Apenas 4, 6, 8 e 9" },
            { id: 'd', text: "Apenas 5 e 6" }
        ],
        correctAnswer: 'b',
        explanation: "Regressão são testes de funcionalidades que já passaram anteriormente e que repetimos após alterações."
    },
    {
        id: 15,
        chapter: 3,
        kLevel: 'K2',
        lo: 'FL-3.1.2',
        text: "Qual das seguintes afirmações NÃO é uma vantagem dos testes estáticos?",
        options: [
            { id: 'a', text: "Ter uma gestão de defeitos menos dispendiosa devido à deteção tardia no SDLC" },
            { id: 'b', text: "Corrigir defeitos encontrados é menos dispendioso do que nos testes dinâmicos" },
            { id: 'c', text: "Encontrar defeitos no código que podem não ser encontrados apenas dinamicamente" },
            { id: 'd', text: "Detetar lacunas e inconsistências nos requisitos" }
        ],
        correctAnswer: 'a',
        explanation: "A deteção tardia é MAIS dispendiosa. O teste estático visa a deteção precoce."
    },
    {
        id: 16,
        chapter: 3,
        kLevel: 'K1',
        lo: 'FL-3.2.1',
        text: "Qual das seguintes afirmações é uma vantagem do feedback antecipado e frequente?",
        options: [
            { id: 'a', text: "Melhora o processo de teste dos projetos futuros" },
            { id: 'b', text: "Obriga os clientes a estabelecer prioridades" },
            { id: 'c', text: "É a única forma de medir a qualidade" },
            { id: 'd', text: "Ajuda a evitar equívocos sobre os requisitos" }
        ],
        correctAnswer: 'd',
        explanation: "O feedback constante alinha stakeholders e equipa, evitando interpretações erradas."
    },
    {
        id: 17,
        chapter: 3,
        kLevel: 'K2',
        lo: 'FL-3.2.4',
        text: "Revisão com função de redator, avaliação de qualidade, reunião liderada pelo autor, preparação individual. Qual o tipo de revisão?",
        options: [
            { id: 'a', text: "Revisão informal" },
            { id: 'b', text: "Walkthrough" },
            { id: 'c', text: "Revisão técnica" },
            { id: 'd', text: "Inspeção" }
        ],
        correctAnswer: 'b',
        explanation: "A reunião liderada pelo autor é a marca registada do Walkthrough."
    },
    {
        id: 18,
        chapter: 3,
        kLevel: 'K1',
        lo: 'FL-3.2.5',
        text: "Qual das seguintes afirmações NÃO é um fator que contribui para o sucesso das revisões?",
        options: [
            { id: 'a', text: "Os participantes devem dedicar tempo suficiente" },
            { id: 'b', text: "Dividir os produtos de grandes dimensões em pequenas partes" },
            { id: 'c', text: "Evitar comportamentos que podem indicar hostilidade" },
            { id: 'd', text: "As falhas encontradas devem ser geridas de forma objetiva" }
        ],
        correctAnswer: 'd',
        explanation: "Nas revisões detetamos 'defeitos'. Falhas ocorrem apenas na execução dinâmica."
    },
    {
        id: 19,
        chapter: 4,
        kLevel: 'K2',
        lo: 'FL-4.1.1',
        text: "Qual das seguintes afirmações é uma característica das técnicas de teste baseadas na experiência?",
        options: [
            { id: 'a', text: "Casos de teste criados com base na conceção detalhada" },
            { id: 'b', text: "Utilização da interface para medir a cobertura" },
            { id: 'c', text: "Dependência do conhecimento do software e domínio do testador" },
            { id: 'd', text: "Utilização para identificar desvios em relação aos requisitos" }
        ],
        correctAnswer: 'c',
        explanation: "Baseiam-se no 'feeling', intuição e experiência acumulada pelo testador."
    },
    {
        id: 20,
        chapter: 4,
        kLevel: 'K3',
        lo: 'FL-4.2.1',
        text: "Cenário: Apartamentos (Piso: R/C, 1º, 2º, Topo) e Jardim (Sem, Peq, Grande). Regra: Só R/C tem jardim. Qual o número mínimo de testes para 100% cobertura EP válida?",
        options: [
            { id: 'a', text: "3" },
            { id: 'b', text: "4" },
            { id: 'c', text: "5" },
            { id: 'd', text: "6" }
        ],
        correctAnswer: 'b',
        explanation: "Precisamos de 4 testes: R/C+Peq, R/C+Grande, 1º+Sem, e um para 2º ou Topo + Sem."
    },
    {
        id: 21,
        chapter: 4,
        kLevel: 'K3',
        lo: 'FL-4.2.2',
        text: "Notas: 0-50, 51-60, 61-70, 71-80, 81-90, 91-100. Valores testados: 91, 50, 81, 60, 70, 80. Cobertura BVA (2 valores) alcançada?",
        options: [
            { id: 'a', text: "50%" },
            { id: 'b', text: "60%" },
            { id: 'c', text: "33,3%" },
            { id: 'd', text: "100%" }
        ],
        correctAnswer: 'a',
        explanation: "Existem 12 fronteiras e apenas 6 foram testadas, logo a cobertura é de 50%."
    },
    {
        id: 22,
        chapter: 4,
        kLevel: 'K3',
        lo: 'FL-4.2.3',
        text: "Tabela de Decisão: 'Membros recebem presente após 15 alugueres'. Qual regra indica uma falha na tabela se mostrar um Não-membro a receber presente?",
        options: [
            { id: 'a', text: "R4" },
            { id: 'b', text: "R2" },
            { id: 'c', text: "R6" },
            { id: 'd', text: "R8" }
        ],
        correctAnswer: 'd',
        explanation: "Se o presente é apenas para membros, um não-membro nunca deve recebê-lo na tabela."
    },
    {
        id: 23,
        chapter: 4,
        kLevel: 'K3',
        lo: 'FL-4.2.4',
        text: "Transição de Estados: Sistema com fluxos de Execução, Erro e Pausa. Qual o número MÍNIMO de testes para cobrir todas as transições válidas?",
        options: [
            { id: 'a', text: "4" },
            { id: 'b', text: "2" },
            { id: 'c', text: "7" },
            { id: 'd', text: "3" }
        ],
        correctAnswer: 'd',
        explanation: "Três caminhos cobrem todos os estados e transições principais deste cenário."
    },
    {
        id: 24,
        chapter: 4,
        kLevel: 'K2',
        lo: 'FL-4.3.1',
        text: "A sua bateria de testes obtém 100% cobertura de instruções. Qual é a consequência deste facto?",
        options: [
            { id: 'a', text: "Cada instrução com defeito foi avaliada pelo menos uma vez" },
            { id: 'b', text: "Qualquer bateria maior também obteria 100%" },
            { id: 'c', text: "Cada caminho no código foi executado" },
            { id: 'd', text: "Cada combinação de entrada foi testada" }
        ],
        correctAnswer: 'a',
        explanation: "A cobertura de instruções garante que passámos por todas as linhas de código existentes."
    },
    {
        id: 25,
        chapter: 4,
        kLevel: 'K2',
        lo: 'FL-4.3.3',
        text: "Qual das seguintes afirmações NÃO é verdadeira para o teste caixa-branca?",
        options: [
            { id: 'a', text: "Toda a implementação de software é considerada" },
            { id: 'b', text: "Métricas ajudam a identificar testes adicionais" },
            { id: 'c', text: "Técnicas podem ser utilizadas nos testes estáticos" },
            { id: 'd', text: "Pode ajudar a identificar lacunas na implementação dos requisitos" }
        ],
        correctAnswer: 'd',
        explanation: "O teste estrutural não vê o que falta em relação aos requisitos, apenas o que lá está."
    },
    {
        id: 26,
        chapter: 4,
        kLevel: 'K2',
        lo: 'FL-4.4.1',
        text: "Qual afirmação descreve melhor a antecipação de erros (Error Guessing)?",
        options: [
            { id: 'a', text: "Utilizar conhecimento de defeitos passados e erros típicos" },
            { id: 'b', text: "Utilizar experiência pessoal de desenvolvimento" },
            { id: 'c', text: "Imaginar que é o utilizador final" },
            { id: 'd', text: "Duplicar tarefas para identificar erros" }
        ],
        correctAnswer: 'a',
        explanation: "Baseia-se no histórico de problemas comuns detetados anteriormente em sistemas similares."
    },
    {
        id: 27,
        chapter: 4,
        kLevel: 'K2',
        lo: 'FL-4.4.2',
        text: "Lançamento urgente, requisitos incompletos, testador experiente. Qual a melhor técnica?",
        options: [
            { id: 'a', text: "Baseado em checklists" },
            { id: 'b', text: "Antecipação de erros" },
            { id: 'c', text: "Teste exploratório" },
            { id: 'd', text: "Teste de ramos" }
        ],
        correctAnswer: 'c',
        explanation: "O teste exploratório permite aprender e testar simultaneamente em cenários de alta pressão."
    },
    {
        id: 28,
        chapter: 4,
        kLevel: 'K2',
        lo: 'FL-4.5.2',
        text: "Qual afirmação descreve MELHOR como documentar critérios de aceitação?",
        options: [
            { id: 'a', text: "Efetuar retrospetivas" },
            { id: 'b', text: "Utilizar o formato 'Considerando/Quando/Então'" },
            { id: 'c', text: "Utilizar comunicação verbal" },
            { id: 'd', text: "Documentar riscos no plano de testes" }
        ],
        correctAnswer: 'b',
        explanation: "Gherkin (Considerando/Quando/Então) é a linguagem padrão para critérios de aceitação legíveis."
    },
    {
        id: 29,
        chapter: 4,
        kLevel: 'K3',
        lo: 'FL-4.5.3',
        text: "User Story: Editor revê conteúdo. Critérios: Guardar, Editar, Reatribuir. Qual o melhor teste ATDD?",
        options: [
            { id: 'a', text: "Verificar se o editor pode guardar após editar" },
            { id: 'b', text: "Verificar se o proprietário pode iniciar sessão" },
            { id: 'c', text: "Verificar se o editor pode agendar publicação" },
            { id: 'd', text: "Verificar se o editor pode reatribuir a outro editor" }
        ],
        correctAnswer: 'a',
        explanation: "O teste valida diretamente os critérios funcionais definidos na User Story."
    },
    {
        id: 30,
        chapter: 5,
        kLevel: 'K1',
        lo: 'FL-5.1.2',
        text: "Como é que os testadores acrescentam valor ao planeamento da iteração?",
        options: [
            { id: 'a', text: "Determinam a prioridade das user stories" },
            { id: 'b', text: "Concentram-se apenas no funcional" },
            { id: 'c', text: "Participam na identificação e avaliação de riscos das user stories" },
            { id: 'd', text: "Asseguram o lançamento através de conceção antecipada" }
        ],
        correctAnswer: 'c',
        explanation: "O contributo do testador na análise de riscos é vital para definir o esforço de teste."
    },
    {
        id: 31,
        chapter: 5,
        kLevel: 'K2',
        lo: 'FL-5.1.3',
        text: "Qual das DUAS opções seguintes são os critérios de saída?",
        type: 'multiple',
        options: [
            { id: 'a', text: "Prontidão do ambiente de teste" },
            { id: 'b', text: "Capacidade de iniciar sessão" },
            { id: 'c', text: "Estimativa de densidade de defeitos atingida" },
            { id: 'd', text: "Requisitos em Given/When/Then" },
            { id: 'e', text: "Testes de regressão automatizados concluídos" }
        ],
        correctAnswer: ['c', 'e'],
        explanation: "Status de bugs e conclusão da automação definem se estamos prontos para parar (Saída)."
    },
    {
        id: 32,
        chapter: 5,
        kLevel: 'K3',
        lo: 'FL-5.1.4',
        text: "Estimativa 3 pontos: Otimista=2, Provável=11, Pessimista=14. Qual a estimativa final?",
        options: [
            { id: 'a', text: "9" },
            { id: 'b', text: "14" },
            { id: 'c', text: "11" },
            { id: 'd', text: "10" }
        ],
        correctAnswer: 'd',
        explanation: "A fórmula é (O + 4M + P) / 6. (2 + 44 + 14) / 6 = 10."
    },
    {
        id: 33,
        chapter: 5,
        kLevel: 'K3',
        lo: 'FL-5.1.5',
        text: "Dependências: 001 -> 002. 003, 004, 005 dependem de 002. Prioridades: 3(1), 4(2), 5(3). Qual corre em 3º?",
        options: [
            { id: 'a', text: "TC 003" },
            { id: 'b', text: "TC 005" },
            { id: 'c', text: "TC 002" },
            { id: 'd', text: "TC 001" }
        ],
        correctAnswer: 'a',
        explanation: "Ordem lógica: 001 -> 002. O próximo é o de maior prioridade (003)."
    },
    {
        id: 34,
        chapter: 5,
        kLevel: 'K2',
        lo: 'FL-5.1.7',
        text: "Quadrantes Agile: Mapear Componentes, Funcionais, Usabilidade, Confiabilidade.",
        options: [
            { id: 'a', text: "1C (Q3), 2A (Q1), 3B (Q2), 4D (Q4)" },
            { id: 'b', text: "1D, 2A, 3C, 4B" },
            { id: 'c', text: "1C, 2B, 3D, 4A" },
            { id: 'd', text: "1D, 2B, 3C, 4A" }
        ],
        correctAnswer: 'a',
        explanation: "Q1=Componentes, Q2=Funcionais, Q3=Usabilidade, Q4=Confiabilidade."
    },
    {
        id: 35,
        chapter: 5,
        kLevel: 'K2',
        lo: 'FL-5.2.4',
        text: "Risco: Resposta lenta. Medida: Equipa independente faz testes de desempenho. Isto é:",
        options: [
            { id: 'a', text: "Aceitação do risco" },
            { id: 'b', text: "Plano de contingência" },
            { id: 'c', text: "Mitigação do risco" },
            { id: 'd', text: "Transferência do risco" }
        ],
        correctAnswer: 'c',
        explanation: "A mitigação reduz a probabilidade de falhas críticas em produção."
    },
    {
        id: 36,
        chapter: 5,
        kLevel: 'K2',
        lo: 'FL-5.3.3',
        text: "Produto de trabalho Agile que mostra trabalho concluído vs remanescente:",
        options: [
            { id: 'a', text: "Critérios de aceitação" },
            { id: 'b', text: "Relatório de defeitos" },
            { id: 'c', text: "Relatório de conclusão" },
            { id: 'd', text: "Gráfico de burndown" }
        ],
        correctAnswer: 'd',
        explanation: "O Burndown chart é o indicador visual do progresso da sprint."
    },
    {
        id: 37,
        chapter: 5,
        kLevel: 'K2',
        lo: 'FL-5.4.1',
        text: "Processo que indica a versão do script de teste no repositório:",
        options: [
            { id: 'a', text: "Gestão da rastreabilidade" },
            { id: 'b', text: "Testes de manutenção" },
            { id: 'c', text: "Gestão de configurações" },
            { id: 'd', text: "Engenharia de requisitos" }
        ],
        correctAnswer: 'c',
        explanation: "A gestão de configuração garante o controlo de versões de todos os artefactos."
    },
    {
        id: 38,
        chapter: 5,
        kLevel: 'K3',
        lo: 'FL-5.5.1',
        text: "Relatório de defeito: Falta informação técnica para reprodução. O que falta?",
        options: [
            { id: 'a', text: "Resultado esperado e observado" },
            { id: 'b', text: "Referências e estado" },
            { id: 'c', text: "Ambiente de teste e item de teste" },
            { id: 'd', text: "Prioridade e gravidade" }
        ],
        correctAnswer: 'c',
        explanation: "Sem saber a versão do software e o SO/Browser, o dev não consegue isolar o erro."
    },
    {
        id: 39,
        chapter: 6,
        kLevel: 'K2',
        lo: 'FL-6.1.1',
        text: "Ferramenta de preparação de dados suporta que atividade?",
        options: [
            { id: 'a', text: "Monitorização e controlo" },
            { id: 'b', text: "Análise de teste" },
            { id: 'c', text: "Conceção e implementação" },
            { id: 'd', text: "Conclusão do teste" }
        ],
        correctAnswer: 'c',
        explanation: "A implementação de teste é a fase de criação/obtenção de testware (dados, scripts)."
    },
    {
        id: 40,
        chapter: 6,
        kLevel: 'K1',
        lo: 'FL-6.2.1',
        text: "Qual o risco potencial de efetuar automação de testes?",
        options: [
            { id: 'a', text: "Introduzir regressões desconhecidas" },
            { id: 'b', text: "Esforços insuficientes para manter o testware" },
            { id: 'c', text: "Ferramentas não serem suficientemente confiáveis" },
            { id: 'd', text: "Reduzir tempo de testes manuais" }
        ],
        correctAnswer: 'b',
        explanation: "A manutenção é o maior custo oculto e risco da automação a longo prazo."
    },
    {
        id: 41,
        chapter: 1,
        kLevel: 'K1',
        lo: 'FL-1.1.1',
        text: "Qual das seguintes opções descreve melhor um objetivo de teste?",
        options: [
            { id: 'a', text: "Aumentar os custos do projeto através da deteção de falhas" },
            { id: 'b', text: "Fornecer informações aos stakeholders sobre o nível de qualidade" },
            { id: 'c', text: "Impedir que o projeto mude de requisitos" },
            { id: 'd', text: "Garantir que a equipa de desenvolvimento trabalha horas extra" }
        ],
        correctAnswer: 'b',
        explanation: "O teste fornece feedback essencial aos stakeholders sobre a qualidade do produto e os riscos associados."
    },
    {
        id: 42,
        chapter: 1,
        kLevel: 'K2',
        lo: 'FL-1.1.2',
        text: "Qual é a relação correta entre erros, defeitos e falhas?",
        options: [
            { id: 'a', text: "Um defeito causa um erro, que por sua vez causa uma falha" },
            { id: 'b', text: "Um erro humano introduz um defeito, que pode causar uma falha durante a execução" },
            { id: 'c', text: "Uma falha causa sempre um erro no código" },
            { id: 'd', text: "Não existe relação entre estes termos" }
        ],
        correctAnswer: 'b',
        explanation: "A cadeia causal oficial é: Erro (ação humana) -> Defeito (no código/doc) -> Falha (comportamento visível)."
    },
    {
        id: 43,
        chapter: 1,
        kLevel: 'K2',
        lo: 'FL-1.3.1',
        text: "O princípio de teste 'Os defeitos agrupam-se' (Defect Clustering) sugere que:",
        options: [
            { id: 'a', text: "Os defeitos estão espalhados uniformemente por todo o sistema" },
            { id: 'b', text: "Uma pequena quantidade de módulos contém geralmente a maioria dos defeitos encontrados" },
            { id: 'c', text: "Testar exaustivamente é a única forma de encontrar todos os defeitos" },
            { id: 'd', text: "Os defeitos desaparecem se o código for ignorado" }
        ],
        correctAnswer: 'b',
        explanation: "Este princípio baseia-se na regra de Pareto: a maioria dos problemas concentra-se em áreas específicas e complexas do código."
    },
    {
        id: 44,
        chapter: 1,
        kLevel: 'K2',
        lo: 'FL-1.4.1',
        text: "Durante qual atividade do processo de teste são verificados os critérios de saída?",
        options: [
            { id: 'a', text: "Análise de teste" },
            { id: 'b', text: "Monitorização e controlo de teste" },
            { id: 'c', text: "Execução de teste" },
            { id: 'd', text: "Conclusão do teste" }
        ],
        correctAnswer: 'b',
        explanation: "A monitorização compara o progresso com os critérios de saída definidos no planeamento para decidir se o teste pode parar."
    },
    {
        id: 45,
        chapter: 1,
        kLevel: 'K2',
        lo: 'FL-1.4.3',
        text: "Qual a importância da rastreabilidade entre os requisitos e os casos de teste?",
        options: [
            { id: 'a', text: "Permite saber quais os testes que devem ser re-executados se um requisito mudar" },
            { id: 'b', text: "Garante que o cliente paga a fatura a tempo" },
            { id: 'c', text: "Substitui a necessidade de ter um gestor de projeto" },
            { id: 'd', text: "Torna os testes automáticos mais rápidos" }
        ],
        correctAnswer: 'a',
        explanation: "A rastreabilidade é crucial para a análise de impacto e para garantir a cobertura completa dos requisitos."
    },
    {
        id: 46,
        chapter: 1,
        kLevel: 'K2',
        lo: 'FL-1.5.1',
        text: "Qual das seguintes atitudes descreve melhor a mentalidade de um testador?",
        options: [
            { id: 'a', text: "Confiança cega de que o código está correto" },
            { id: 'b', text: "Curiosidade intelectual, pessimismo profissional e atenção ao detalhe" },
            { id: 'c', text: "Desejo de provar que o programador não sabe trabalhar" },
            { id: 'd', text: "Focar-se apenas na beleza da interface gráfica" }
        ],
        correctAnswer: 'b',
        explanation: "O testador deve questionar o sistema e procurar falhas de forma metódica e profissional."
    },
    {
        id: 47,
        chapter: 1,
        kLevel: 'K2',
        lo: 'FL-1.5.2',
        text: "Qual é o principal risco de ter testadores e programadores a trabalhar de forma isolada (independência total)?",
        options: [
            { id: 'a', text: "Os testadores ficam com demasiado trabalho" },
            { id: 'b', text: "Perda de comunicação e atraso no feedback sobre a qualidade" },
            { id: 'c', text: "O código torna-se impossível de ler" },
            { id: 'd', text: "O cliente desiste do projeto" }
        ],
        correctAnswer: 'b',
        explanation: "Embora a independência ajude a encontrar erros, o isolamento excessivo prejudica a agilidade e a colaboração necessária."
    },
    {
        id: 48,
        chapter: 2,
        kLevel: 'K1',
        lo: 'FL-2.1.1',
        text: "Num modelo de desenvolvimento sequencial, quando deve ser planeado o teste de aceitação?",
        options: [
            { id: 'a', text: "Apenas depois do teste de sistema terminar" },
            { id: 'b', text: "Durante a fase de análise de requisitos" },
            { id: 'c', text: "No final do projeto, antes da entrega" },
            { id: 'd', text: "Quando o hardware for entregue" }
        ],
        correctAnswer: 'b',
        explanation: "No V-Model, os testes de aceitação são planeados em paralelo com a definição dos requisitos de negócio."
    },
    {
        id: 49,
        chapter: 2,
        kLevel: 'K2',
        lo: 'FL-2.1.2',
        text: "Qual é o papel do testador numa equipa Agile (Whole Team Approach)?",
        options: [
            { id: 'a', text: "Testar apenas o que o programador pedir" },
            { id: 'b', text: "Colaborar com todos para garantir a qualidade desde o início da User Story" },
            { id: 'c', text: "Escrever o código de produção enquanto o dev descansa" },
            { id: 'd', text: "Ser o único responsável por todos os bugs encontrados" }
        ],
        correctAnswer: 'b',
        explanation: "Em Agile, a qualidade é responsabilidade de todos; o testador traz a perspetiva crítica para todas as tarefas."
    },
    {
        id: 50,
        chapter: 2,
        kLevel: 'K2',
        lo: 'FL-2.1.3',
        text: "O Test-Driven Development (TDD) foca-se principalmente em:",
        options: [
            { id: 'a', text: "Testes de aceitação do utilizador final" },
            { id: 'b', text: "Testes unitários escritos antes do código de produção" },
            { id: 'c', text: "Testes de performance de carga" },
            { id: 'd', text: "Testes manuais exploratórios" }
        ],
        correctAnswer: 'b',
        explanation: "TDD é uma prática de desenvolvimento onde os testes unitários guiam a implementação do código."
    },
    {
        id: 51,
        chapter: 2,
        kLevel: 'K2',
        lo: 'FL-2.2.1',
        text: "O nível de teste de integração foca-se em detetar defeitos em:",
        options: [
            { id: 'a', text: "Módulos de software isolados" },
            { id: 'b', text: "Interfaces e interações entre componentes ou sistemas" },
            { id: 'c', text: "Requisitos de negócio não documentados" },
            { id: 'd', text: "Erros de ortografia no manual" }
        ],
        correctAnswer: 'b',
        explanation: "Integração serve para validar se as partes comunicam corretamente entre si."
    },
    {
        id: 52,
        chapter: 2,
        kLevel: 'K2',
        lo: 'FL-2.2.1',
        text: "Qual a principal diferença entre testes de aceitação Beta e Alfa?",
        options: [
            { id: 'a', text: "Alfa é feito pelo cliente; Beta pelo programador" },
            { id: 'b', text: "Alfa ocorre no site do desenvolvedor; Beta ocorre no próprio ambiente do cliente" },
            { id: 'c', text: "Não há diferença, são sinónimos" },
            { id: 'd', text: "Alfa é automático; Beta é manual" }
        ],
        correctAnswer: 'b',
        explanation: "Testes Alfa são controlados pelo desenvolvedor; Beta são testes de campo feitos por utilizadores reais."
    },
    {
        id: 53,
        chapter: 2,
        kLevel: 'K2',
        lo: 'FL-2.3.1',
        text: "A análise de impacto é realizada para:",
        options: [
            { id: 'a', text: "Medir o desempenho do servidor sob carga" },
            { id: 'b', text: "Avaliar as consequências de uma alteração no software e selecionar testes de regressão" },
            { id: 'c', text: "Decidir qual o testador que deve ser promovido" },
            { id: 'd', text: "Calcular o bónus da equipa no final do ano" }
        ],
        correctAnswer: 'b',
        explanation: "Ajuda a identificar o que pode ter 'partido' inadvertidamente após uma correção ou melhoria."
    },
    {
        id: 54,
        chapter: 3,
        kLevel: 'K2',
        lo: 'FL-3.1.2',
        text: "Qual é uma vantagem significativa dos testes estáticos?",
        options: [
            { id: 'a', text: "Permitem encontrar falhas de memória durante a execução" },
            { id: 'b', text: "Reduzem o custo de correção ao encontrar defeitos antes da execução do código" },
            { id: 'c', text: "Substituem completamente a necessidade de testes dinâmicos" },
            { id: 'd', text: "São mais divertidos para os testadores" }
        ],
        correctAnswer: 'b',
        explanation: "Deteção precoce de defeitos em documentos de design ou código poupa tempo e dinheiro."
    },
    {
        id: 55,
        chapter: 3,
        kLevel: 'K1',
        lo: 'FL-3.2.1',
        text: "Num processo de revisão formal, qual é a atividade onde os participantes analisam individualmente o documento?",
        options: [
            { id: 'a', text: "Iniciação da revisão" },
            { id: 'b', text: "Preparação individual" },
            { id: 'c', text: "Reunião de revisão" },
            { id: 'd', text: "Acompanhamento (Follow-up)" }
        ],
        correctAnswer: 'b',
        explanation: "Cada revisor deve estudar o material sozinho antes da discussão em grupo."
    },
    {
        id: 56,
        chapter: 3,
        kLevel: 'K2',
        lo: 'FL-3.2.2',
        text: "Qual o papel do 'Relator' (ou Escriba) numa reunião de revisão?",
        options: [
            { id: 'a', text: "Corrigir os erros encontrados" },
            { id: 'b', text: "Registar todos os defeitos e pontos discutidos" },
            { id: 'c', text: "Liderar a reunião e controlar o tempo" },
            { id: 'd', text: "Aprovar a versão final do documento" }
        ],
        correctAnswer: 'b',
        explanation: "O relator documenta as descobertas para que o autor as possa processar mais tarde."
    },
    {
        id: 57,
        chapter: 3,
        kLevel: 'K2',
        lo: 'FL-3.2.4',
        text: "Uma Inspeção caracteriza-se por:",
        options: [
            { id: 'a', text: "Ser liderada pelo autor e sem preparação prévia" },
            { id: 'b', text: "Processo formal com papéis definidos, métricas e listas de verificação" },
            { id: 'c', text: "Ser apenas uma conversa informal sobre o código" },
            { id: 'd', text: "Ocorre apenas após o lançamento do produto" }
        ],
        correctAnswer: 'b',
        explanation: "A inspeção é o tipo de revisão mais rigoroso e estruturado definido pelo ISTQB."
    },
    {
        id: 58,
        chapter: 4,
        kLevel: 'K2',
        lo: 'FL-4.1.1',
        text: "As técnicas de teste de caixa-branca baseiam-se em:",
        options: [
            { id: 'a', text: "Especificações de requisitos e casos de uso" },
            { id: 'b', text: "Análise da estrutura interna do código e fluxo de controle" },
            { id: 'c', text: "Adivinhação de onde os bugs podem estar" },
            { id: 'd', text: "Opiniões de utilizadores externos" }
        ],
        correctAnswer: 'b',
        explanation: "Caixa-branca foca na arquitetura e implementação real do software."
    },
    {
        id: 59,
        chapter: 4,
        kLevel: 'K3',
        lo: 'FL-4.2.1',
        text: "Pretende testar um campo que aceita valores de '1' a '12'. Quais são os valores para cobertura de Particionamento por equivalências válidos e inválidos?",
        options: [
            { id: 'a', text: "6" },
            { id: 'b', text: "0, 6, 13" },
            { id: 'c', text: "1, 12" },
            { id: 'd', text: "0, 1, 12, 13" }
        ],
        correctAnswer: 'b',
        explanation: "Cobre a partição inválida inferior (0), a válida (6) e a inválida superior (13)."
    },
    {
        id: 60,
        chapter: 4,
        kLevel: 'K3',
        lo: 'FL-4.2.2',
        text: "Análise de Valor Fronteira (BVA) de 2 valores para o intervalo [10, 20]:",
        options: [
            { id: 'a', text: "10, 20" },
            { id: 'b', text: "9, 10, 20, 21" },
            { id: 'c', text: "10, 11, 19, 20" },
            { id: 'd', text: "0, 10, 20, 100" }
        ],
        correctAnswer: 'b',
        explanation: "Testamos o limite e o valor imediatamente fora dele para ambos os lados."
    },
    {
        id: 61,
        chapter: 4,
        kLevel: 'K3',
        lo: 'FL-4.2.3',
        text: "Se uma Tabela de Decisão tem 3 condições independentes, cada uma com 2 valores possíveis, quantas colunas terá a tabela completa?",
        options: [
            { id: 'a', text: "3" },
            { id: 'b', text: "6" },
            { id: 'c', text: "8" },
            { id: 'd', text: "9" }
        ],
        correctAnswer: 'c',
        explanation: "Cálculo: 2 elevado a 3 (2 x 2 x 2) = 8."
    },
    {
        id: 62,
        chapter: 4,
        kLevel: 'K3',
        lo: 'FL-4.2.4',
        text: "No teste de transição de estados, o que é um cenário de teste típico?",
        options: [
            { id: 'a', text: "Uma sequência de eventos que levam o sistema de um estado inicial a um final" },
            { id: 'b', text: "Testar todos os botões de uma página web aleatoriamente" },
            { id: 'c', text: "Verificar se a base de dados tem 1 milhão de registos" },
            { id: 'd', text: "Rever o código fonte à procura de variáveis não usadas" }
        ],
        correctAnswer: 'a',
        explanation: "Foca no fluxo de comportamento dinâmico do objeto de teste."
    },
    {
        id: 63,
        chapter: 4,
        kLevel: 'K2',
        lo: 'FL-4.2.5',
        text: "O teste de casos de uso é particularmente útil para encontrar defeitos em:",
        options: [
            { id: 'a', text: "Lógica interna de algoritmos matemáticos" },
            { id: 'b', text: "Fluxos de transações e interações entre componentes" },
            { id: 'c', text: "Configuração de rede e hardware" },
            { id: 'd', text: "Sintaxe do código SQL" }
        ],
        correctAnswer: 'b',
        explanation: "Ajuda a validar se os requisitos de negócio e cenários do utilizador são satisfeitos."
    },
    {
        id: 64,
        chapter: 4,
        kLevel: 'K3',
        lo: 'FL-4.3.1',
        text: "Para obter 100% de cobertura de instruções no código: IF (A > B) THEN X = 0, quantos casos de teste são necessários?",
        options: [
            { id: 'a', text: "1 (onde A > B)" },
            { id: 'b', text: "2 (onde A > B e A <= B)" },
            { id: 'c', text: "0" },
            { id: 'd', text: "4" }
        ],
        correctAnswer: 'a',
        explanation: "Basta entrar no IF para executar a instrução 'X = 0'. Para cobertura de instruções, não é obrigatório testar o cenário Falso se não houver um ELSE."
    },
    {
        id: 65,
        chapter: 4,
        kLevel: 'K3',
        lo: 'FL-4.3.2',
        text: "Para obter 100% de cobertura de ramos (decisões) no código: IF (A > B) THEN X = 0, quantos casos de teste são necessários?",
        options: [
            { id: 'a', text: "1" },
            { id: 'b', text: "2 (um Verdadeiro e um Falso)" },
            { id: 'c', text: "3" },
            { id: 'd', text: "Depende do valor de X" }
        ],
        correctAnswer: 'b',
        explanation: "Cobertura de ramos exige testar ambos os resultados da decisão (Verdadeiro e Falso)."
    },
    {
        id: 66,
        chapter: 4,
        kLevel: 'K2',
        lo: 'FL-4.4.1',
        text: "Qual das seguintes afirmações sobre a antecipação de erros (Error Guessing) é VERDADEIRA?",
        options: [
            { id: 'a', text: "Deve ser a única técnica usada no projeto" },
            { id: 'b', text: "Complementa outras técnicas formais usando a experiência do testador" },
            { id: 'c', text: "Só pode ser feita por programadores" },
            { id: 'd', text: "Baseia-se apenas em requisitos formais" }
        ],
        correctAnswer: 'b',
        explanation: "É uma técnica baseada na experiência que ajuda a encontrar erros que as técnicas formais podem ignorar."
    },
    {
        id: 67,
        chapter: 4,
        kLevel: 'K2',
        lo: 'FL-4.4.2',
        text: "No teste exploratório, a execução dos testes e a sua conceção ocorrem:",
        options: [
            { id: 'a', text: "Em meses diferentes" },
            { id: 'b', text: "Simultaneamente, permitindo aprendizagem contínua" },
            { id: 'c', text: "Apenas após a aprovação do plano de teste detalhado" },
            { id: 'd', text: "Apenas por ferramentas automáticas" }
        ],
        correctAnswer: 'b',
        explanation: "O testador desenha, executa e aprende sobre o sistema ao mesmo tempo."
    },
    {
        id: 68,
        chapter: 4,
        kLevel: 'K2',
        lo: 'FL-4.4.3',
        text: "O teste baseado em checklists utiliza:",
        options: [
            { id: 'a', text: "Uma lista de pontos a verificar baseada em experiências passadas ou normas" },
            { id: 'b', text: "O código fonte linha a linha" },
            { id: 'c', text: "Apenas a intuição do momento" },
            { id: 'd', text: "Modelos matemáticos complexos" }
        ],
        correctAnswer: 'a',
        explanation: "As checklists guiam o testador para garantir que pontos críticos não são esquecidos."
    },
    {
        id: 69,
        chapter: 5,
        kLevel: 'K2',
        lo: 'FL-5.1.1',
        text: "Um Plano de Teste deve incluir informações sobre:",
        options: [
            { id: 'a', text: "Apenas o código fonte" },
            { id: 'b', text: "Âmbito, recursos, cronograma e riscos das atividades de teste" },
            { id: 'c', text: "O salário individual de cada colaborador" },
            { id: 'd', text: "A lista de compras do escritório" }
        ],
        correctAnswer: 'b',
        explanation: "O plano de teste é o documento central de gestão das atividades de teste."
    },
    {
        id: 70,
        chapter: 5,
        kLevel: 'K2',
        lo: 'FL-5.1.3',
        text: "Qual das seguintes opções é um exemplo de um Critério de Saída?",
        options: [
            { id: 'a', text: "Disponibilidade do ambiente de teste" },
            { id: 'b', text: "Atingir a cobertura de requisitos planeada" },
            { id: 'c', text: "Entrega do manual de utilizador" },
            { id: 'd', text: "Contratação de um novo testador" }
        ],
        correctAnswer: 'b',
        explanation: "Critérios de saída definem quando já testámos o suficiente para considerar a fase concluída."
    },
    {
        id: 71,
        chapter: 5,
        kLevel: 'K3',
        lo: 'FL-5.1.4',
        text: "Estimativa de três pontos: Otimista = 4 dias, Mais Provável = 7 dias, Pessimista = 16 dias. Qual o valor estimado?",
        options: [
            { id: 'a', text: "7 dias" },
            { id: 'b', text: "8 dias" },
            { id: 'c', text: "9 dias" },
            { id: 'd', text: "10 dias" }
        ],
        correctAnswer: 'b',
        explanation: "Fórmula: (4 + (4*7) + 16) / 6 = 48 / 6 = 8."
    },
    {
        id: 72,
        chapter: 5,
        kLevel: 'K2',
        lo: 'FL-5.1.5',
        text: "Ao priorizar casos de teste baseados no risco, quais devem ser executados primeiro?",
        options: [
            { id: 'a', text: "Os mais fáceis de automatizar" },
            { id: 'b', text: "Os que cobrem as áreas de maior risco para o negócio" },
            { id: 'c', text: "Os que foram escritos pelo testador mais sénior" },
            { id: 'd', text: "A ordem não é importante" }
        ],
        correctAnswer: 'b',
        explanation: "Queremos detetar as falhas mais graves o mais cedo possível."
    },
    {
        id: 73,
        chapter: 5,
        kLevel: 'K2',
        lo: 'FL-5.2.1',
        text: "Qual destes é um exemplo de Risco de Produto?",
        options: [
            { id: 'a', text: "Falta de pessoal qualificado na equipa" },
            { id: 'b', text: "O software pode falhar em condições de carga elevada" },
            { id: 'c', text: "O fornecedor de hardware pode atrasar a entrega" },
            { id: 'd', text: "O orçamento do projeto pode ser cortado" }
        ],
        correctAnswer: 'b',
        explanation: "Riscos de produto referem-se à qualidade e comportamento do software em si."
    },
    {
        id: 74,
        chapter: 5,
        kLevel: 'K2',
        lo: 'FL-5.2.1',
        text: "Qual destes é um exemplo de Risco de Projeto?",
        options: [
            { id: 'a', text: "O software calcula mal os impostos" },
            { id: 'b', text: "Atrasos na entrega do ambiente de teste" },
            { id: 'c', text: "Interface de utilizador confusa" },
            { id: 'd', text: "Vulnerabilidade de segurança no sistema" }
        ],
        correctAnswer: 'b',
        explanation: "Riscos de projeto afetam a capacidade de gerir e executar o trabalho."
    },
    {
        id: 75,
        chapter: 5,
        kLevel: 'K2',
        lo: 'FL-5.2.4',
        text: "A mitigação de um risco implica:",
        options: [
            { id: 'a', text: "Ignorar o risco até que ele aconteça" },
            { id: 'b', text: "Tomar ações preventivas para reduzir a probabilidade ou o impacto do risco" },
            { id: 'c', text: "Transferir a culpa para outra equipa" },
            { id: 'd', text: "Pedir mais dinheiro ao cliente" }
        ],
        correctAnswer: 'b',
        explanation: "É uma estratégia proativa de gestão de riscos."
    },
    {
        id: 76,
        chapter: 5,
        kLevel: 'K2',
        lo: 'FL-5.5.1',
        text: "O que deve ser incluído obrigatoriamente num relatório de defeito para ajudar o programador?",
        options: [
            { id: 'a', text: "Apenas a data da descoberta" },
            { id: 'b', text: "Passos claros para reproduzir a falha e o ambiente de teste" },
            { id: 'c', text: "O nome do gestor de projeto" },
            { id: 'd', text: "Uma crítica ao estilo de escrita do programador" }
        ],
        correctAnswer: 'b',
        explanation: "Informação técnica precisa é vital para a resolução rápida de anomalias."
    },
    {
        id: 77,
        chapter: 5,
        kLevel: 'K2',
        lo: 'FL-5.4.1',
        text: "Qual é o objetivo da Gestão de Configuração no teste?",
        options: [
            { id: 'a', text: "Configurar as secretárias dos testadores" },
            { id: 'b', text: "Garantir a integridade e rastreabilidade de todos os itens de teste (código, docs, ferramentas)" },
            { id: 'c', text: "Acelerar a velocidade da rede" },
            { id: 'd', text: "Substituir o processo de controlo de defeitos" }
        ],
        correctAnswer: 'b',
        explanation: "Garante que sabemos exatamente o que estamos a testar e em que versão."
    },
    {
        id: 78,
        chapter: 6,
        kLevel: 'K2',
        lo: 'FL-6.2.1',
        text: "Qual é um risco potencial da introdução de uma nova ferramenta de automação?",
        options: [
            { id: 'a', text: "A ferramenta encontrar demasiados bugs" },
            { id: 'b', text: "Subestimar o esforço necessário para manter os scripts de teste" },
            { id: 'c', text: "Os programadores aprenderem a testar" },
            { id: 'd', text: "O software tornar-se demasiado rápido" }
        ],
        correctAnswer: 'b',
        explanation: "Muitos projetos de automação falham porque a manutenção é ignorada ou subestimada."
    },
    {
        id: 79,
        chapter: 6,
        kLevel: 'K1',
        lo: 'FL-6.1.1',
        text: "Qual destas ferramentas é usada para medir a percentagem de código exercitada pelos testes?",
        options: [
            { id: 'a', text: "Ferramenta de gestão de defeitos" },
            { id: 'b', text: "Ferramenta de cobertura de código (Code Coverage tool)" },
            { id: 'c', text: "Ferramenta de teste de carga" },
            { id: 'd', text: "Ferramenta de design de casos de teste" }
        ],
        correctAnswer: 'b',
        explanation: "Estas ferramentas analisam a execução para reportar quais as linhas ou ramos que foram testados."
    },
    {
        id: 80,
        chapter: 6,
        kLevel: 'K1',
        lo: 'FL-6.1.1',
        text: "Ferramentas que suportam a execução de testes automatizados são geralmente chamadas de:",
        options: [
            { id: 'a', text: "Test Management Tools" },
            { id: 'b', text: "Test Execution Tools (ou Frameworks)" },
            { id: 'c', text: "Debuggers" },
            { id: 'd', text: "Compiladores" }
        ],
        correctAnswer: 'b',
        explanation: "São ferramentas (como Selenium ou Cypress) que executam ações no software sem intervenção humana."
    },
    // ==========================================
    // EXAME OFICIAL C (Questões 81 - 120)
    // ==========================================
    {
        id: 81,
        chapter: 1,
        kLevel: 'K1',
        lo: 'FL-1.1.1',
        text: "Qual das seguintes opções descreve um objetivo de teste relacionado com a avaliação de produtos de trabalho?",
        options: [
            { id: 'a', text: "Verificar se o código foi escrito de acordo com as normas de estilo" },
            { id: 'b', text: "Avaliar requisitos e user stories para identificar inconsistências" },
            { id: 'c', text: "Garantir que o projeto termina dentro do orçamento" },
            { id: 'd', text: "Substituir a necessidade de testes de sistema" }
        ],
        correctAnswer: 'b',
        explanation: "Um dos objetivos do teste é avaliar produtos de trabalho (como requisitos e design) para prevenir a introdução de defeitos."
    },
    {
        id: 82,
        chapter: 1,
        kLevel: 'K2',
        lo: 'FL-1.2.1',
        text: "Como é que o teste estático contribui para a qualidade do software?",
        options: [
            { id: 'a', text: "Ao executar o código para encontrar falhas de segurança" },
            { id: 'b', text: "Ao identificar defeitos em documentos antes de serem transformados em código" },
            { id: 'c', text: "Ao medir o tempo de resposta da base de dados" },
            { id: 'd', text: "Ao testar a aplicação no ambiente de produção" }
        ],
        correctAnswer: 'b',
        explanation: "O teste estático permite encontrar defeitos nos requisitos e design, reduzindo o custo de re-trabalho posterior."
    },
    {
        id: 83,
        chapter: 1,
        kLevel: 'K2',
        lo: 'FL-1.3.1',
        text: "O princípio 'Os testes exaustivos são impossíveis' afirma que:",
        options: [
            { id: 'a', text: "Não vale a pena testar sistemas complexos" },
            { id: 'b', text: "Testar todas as combinações de entradas e condições é inviável, exceto para casos triviais" },
            { id: 'c', text: "Os testadores devem ser substituídos por inteligência artificial" },
            { id: 'd', text: "Só se deve testar o caminho feliz" }
        ],
        correctAnswer: 'b',
        explanation: "Devido ao número infinito de caminhos e dados, o esforço de teste deve focar-se na gestão de risco e prioridades."
    },
    {
        id: 84,
        chapter: 1,
        kLevel: 'K2',
        lo: 'FL-1.4.1',
        text: "Durante a atividade de análise de teste, o que é que o testador está a identificar?",
        options: [
            { id: 'a', text: "Os passos detalhados da execução" },
            { id: 'b', text: "As condições de teste baseadas na base de teste" },
            { id: 'c', text: "O orçamento total para ferramentas" },
            { id: 'd', text: "O número de programadores necessários" }
        ],
        correctAnswer: 'b',
        explanation: "A análise de teste foca em identificar 'o que' deve ser testado através da análise dos requisitos e design."
    },
    {
        id: 85,
        chapter: 1,
        kLevel: 'K2',
        lo: 'FL-1.4.2',
        text: "Qual dos seguintes fatores tem influência no processo de teste em termos de governação?",
        options: [
            { id: 'a', text: "A marca dos computadores utilizados" },
            { id: 'b', text: "Os requisitos regulamentares e normas da indústria" },
            { id: 'c', text: "O número de feriados no mês atual" },
            { id: 'd', text: "A localização geográfica dos servidores" }
        ],
        correctAnswer: 'b',
        explanation: "Fatores externos como leis e normas regulamentares definem o rigor e os artefactos obrigatórios no processo de teste."
    },
    {
        id: 86,
        chapter: 1,
        kLevel: 'K2',
        lo: 'FL-1.4.5',
        text: "Num projeto Agile, quem é tipicamente responsável por decidir a prioridade dos testes com base no valor de negócio?",
        options: [
            { id: 'a', text: "O Testador independente" },
            { id: 'b', text: "O Product Owner em colaboração com a equipa" },
            { id: 'c', text: "O Gestor de Infraestrutura" },
            { id: 'd', text: "O Departamento de RH" }
        ],
        correctAnswer: 'b',
        explanation: "O PO define o que é mais valioso para o negócio, o que orienta a priorização das atividades de teste."
    },
    {
        id: 87,
        chapter: 1,
        kLevel: 'K2',
        lo: 'FL-1.5.1',
        text: "A competência de 'Pensamento Crítico' num testador envolve:",
        options: [
            { id: 'a', text: "Aceitar todas as especificações sem questionar" },
            { id: 'b', text: "Analisar a informação de forma objetiva para identificar falhas lógicas e riscos" },
            { id: 'c', text: "Criticar os colegas de equipa em público" },
            { id: 'd', text: "Memorizar todo o manual do ISTQB" }
        ],
        correctAnswer: 'b',
        explanation: "O pensamento crítico permite ao testador ir além do óbvio e encontrar cenários de erro não previstos."
    },
    {
        id: 88,
        chapter: 1,
        kLevel: 'K1',
        lo: 'FL-1.5.2',
        text: "O que significa o conceito de 'Independência de Teste'?",
        options: [
            { id: 'a', text: "O testador trabalha sozinho sem falar com ninguém" },
            { id: 'b', text: "A separação de responsabilidades entre quem desenvolve e quem testa para evitar preconceitos" },
            { id: 'c', text: "O testador decide o seu próprio salário" },
            { id: 'd', text: "Os testes são feitos apenas por robôs" }
        ],
        correctAnswer: 'b',
        explanation: "A independência garante uma visão imparcial, sendo mais eficaz na deteção de defeitos."
    },
    {
        id: 89,
        chapter: 2,
        kLevel: 'K2',
        lo: 'FL-2.1.1',
        text: "No modelo em V (V-Model), qual é o nível de teste que valida tipicamente os requisitos de negócio?",
        options: [
            { id: 'a', text: "Teste de componentes" },
            { id: 'b', text: "Teste de integração" },
            { id: 'c', text: "Teste de sistema" },
            { id: 'd', text: "Teste de aceitação" }
        ],
        correctAnswer: 'd',
        explanation: "O teste de aceitação é o nível final que valida se o sistema cumpre as necessidades do negócio."
    },
    {
        id: 90,
        chapter: 2,
        kLevel: 'K1',
        lo: 'FL-2.1.2',
        text: "Qual é uma caraterística dos modelos de desenvolvimento iterativos?",
        options: [
            { id: 'a', text: "O software é entregue apenas uma vez no final do projeto" },
            { id: 'b', text: "O projeto é dividido em ciclos curtos, cada um resultando num incremento funcional" },
            { id: 'c', text: "Não é necessário realizar testes de regressão" },
            { id: 'd', text: "Os requisitos nunca podem mudar" }
        ],
        correctAnswer: 'b',
        explanation: "Modelos como Scrum permitem entregas frequentes e feedback contínuo através de iterações."
    },
    {
        id: 91,
        chapter: 2,
        kLevel: 'K1',
        lo: 'FL-2.1.3',
        text: "Na abordagem Test-First, o teste é criado:",
        options: [
            { id: 'a', text: "Depois do código estar pronto para produção" },
            { id: 'b', text: "Antes do código de produção ser escrito" },
            { id: 'c', text: "Apenas se sobrarem defeitos" },
            { id: 'd', text: "Pelo cliente após o lançamento" }
        ],
        correctAnswer: 'b',
        explanation: "Abordagens como TDD exigem a criação do teste antes da funcionalidade para guiar o design."
    },
    {
        id: 92,
        chapter: 2,
        kLevel: 'K2',
        lo: 'FL-2.1.4',
        text: "Qual das camadas da Pirâmide de Testes deve ser automatizada com maior prioridade devido ao seu baixo custo e execução rápida?",
        options: [
            { id: 'a', text: "Testes de Interface de Utilizador (UI)" },
            { id: 'b', text: "Testes de Unidade / Componentes" },
            { id: 'c', text: "Testes de Aceitação Manual" },
            { id: 'd', text: "Testes de Integração de Sistemas" }
        ],
        correctAnswer: 'b',
        explanation: "Os testes unitários formam a base da pirâmide e devem ser os mais numerosos e automatizados."
    },
    {
        id: 93,
        chapter: 2,
        kLevel: 'K2',
        lo: 'FL-2.2.1',
        text: "O teste de sistema foca-se em:",
        options: [
            { id: 'a', text: "Interfaces entre módulos isolados" },
            { id: 'b', text: "O comportamento do sistema completo e integrado" },
            { id: 'c', text: "Otimização da base de dados apenas" },
            { id: 'd', text: "Testar funções individuais sem contexto" }
        ],
        correctAnswer: 'b',
        explanation: "O teste de sistema avalia o produto como um todo face aos requisitos especificados."
    },
    {
        id: 94,
        chapter: 2,
        kLevel: 'K2',
        lo: 'FL-2.3.1',
        text: "Qual é o principal objetivo do teste de manutenção?",
        options: [
            { id: 'a', text: "Aprender como o sistema funciona" },
            { id: 'b', text: "Verificar alterações e garantir que o sistema continua a funcionar após correções ou melhorias" },
            { id: 'c', text: "Substituir a documentação em falta" },
            { id: 'd', text: "Treinar novos utilizadores" }
        ],
        correctAnswer: 'b',
        explanation: "A manutenção foca na preservação da qualidade após modificações no software operacional."
    },
    {
        id: 95,
        chapter: 3,
        kLevel: 'K2',
        lo: 'FL-3.1.1',
        text: "Qual a diferença fundamental entre teste estático e dinâmico?",
        options: [
            { id: 'a', text: "O estático é manual e o dinâmico é automático" },
            { id: 'b', text: "O estático analisa o código sem execução; o dinâmico requer a execução do software" },
            { id: 'c', text: "O estático é feito por clientes e o dinâmico por testadores" },
            { id: 'd', text: "Não há diferença entre os dois" }
        ],
        correctAnswer: 'b',
        explanation: "O teste estático foca em defeitos na documentação/código; o dinâmico foca em falhas durante o uso."
    },
    {
        id: 96,
        chapter: 3,
        kLevel: 'K2',
        lo: 'FL-3.1.2',
        text: "Uma vantagem de realizar testes estáticos cedo no ciclo de vida é:",
        options: [
            { id: 'a', text: "Permitir que os programadores não escrevam testes unitários" },
            { id: 'b', text: "Identificar lacunas nos requisitos que seriam muito caras de corrigir mais tarde" },
            { id: 'c', text: "Aumentar a complexidade do projeto" },
            { id: 'd', text: "Eliminar a necessidade de ambiente de teste" }
        ],
        correctAnswer: 'b',
        explanation: "Prevenir erros antes da codificação é a forma mais barata de garantir a qualidade."
    },
    {
        id: 97,
        chapter: 3,
        kLevel: 'K1',
        lo: 'FL-3.2.2',
        text: "Quem lidera tipicamente uma reunião de Walkthrough?",
        options: [
            { id: 'a', text: "O Moderador" },
            { id: 'b', text: "O Autor do produto de trabalho" },
            { id: 'c', text: "O Gestor de Qualidade" },
            { id: 'd', text: "O Cliente final" }
        ],
        correctAnswer: 'b',
        explanation: "No Walkthrough, o autor guia os participantes através do documento para explicar a lógica."
    },
    {
        id: 98,
        chapter: 3,
        kLevel: 'K2',
        lo: 'FL-3.2.4',
        text: "Qual o tipo de revisão que foca principalmente na obtenção de consenso e tomada de decisões técnicas?",
        options: [
            { id: 'a', text: "Revisão informal" },
            { id: 'b', text: "Inspeção" },
            { id: 'c', text: "Revisão Técnica" },
            { id: 'd', text: "Walkthrough" }
        ],
        correctAnswer: 'c',
        explanation: "A revisão técnica reúne especialistas para avaliar a viabilidade e conformidade técnica da solução."
    },
    {
        id: 99,
        chapter: 4,
        kLevel: 'K2',
        lo: 'FL-4.1.1',
        text: "As técnicas de teste de caixa-preta baseiam-se em:",
        options: [
            { id: 'a', text: "Análise do código fonte" },
            { id: 'b', text: "Análise da especificação de requisitos" },
            { id: 'c', text: "Conhecimento das vulnerabilidades de segurança" },
            { id: 'd', text: "Fórmulas de complexidade ciclomática" }
        ],
        correctAnswer: 'b',
        explanation: "A caixa-preta foca no comportamento funcional visível do sistema sem olhar para a estrutura interna."
    },
    {
        id: 100,
        chapter: 4,
        kLevel: 'K3',
        lo: 'FL-4.2.1',
        text: "Um campo de entrada aceita valores de 1 a 10. Pretende-se cobrir 100% de Particionamento por equivalências (EP). Quais são os valores mínimos necessários?",
        options: [
            { id: 'a', text: "5" },
            { id: 'b', text: "0, 5, 11" },
            { id: 'c', text: "1, 10" },
            { id: 'd', text: "0, 1, 10, 11" }
        ],
        correctAnswer: 'b',
        explanation: "Necessários 3 valores: um inválido abaixo (0), um válido (5) e um inválido acima (11)."
    },
    {
        id: 101,
        chapter: 4,
        kLevel: 'K3',
        lo: 'FL-4.2.2',
        text: "Análise de Valor Fronteira (BVA) de 2 valores para o intervalo de preços [10.00€ - 50.00€]:",
        options: [
            { id: 'a', text: "10.00, 50.00" },
            { id: 'b', text: "9.99, 10.00, 50.00, 50.01" },
            { id: 'c', text: "10.00, 11.00, 49.00, 50.00" },
            { id: 'd', text: "0, 10.00, 50.00, 100.00" }
        ],
        correctAnswer: 'b',
        explanation: "Testamos o valor exato no limite e o primeiro valor imediatamente fora desse limite."
    },
    {
        id: 102,
        chapter: 4,
        kLevel: 'K3',
        lo: 'FL-4.2.3',
        text: "Uma Tabela de Decisão tem 3 condições binárias (Sim/Não). Qual o número total de regras possíveis sem simplificação?",
        options: [
            { id: 'a', text: "3" },
            { id: 'b', text: "6" },
            { id: 'c', text: "8" },
            { id: 'd', text: "9" }
        ],
        correctAnswer: 'c',
        explanation: "Cálculo: $2^3 = 8$ regras (colunas)."
    },
    {
        id: 103,
        chapter: 4,
        kLevel: 'K3',
        lo: 'FL-4.2.4',
        text: "No teste de transição de estados, um caso de teste representa:",
        options: [
            { id: 'a', text: "Uma linha isolada de código" },
            { id: 'b', text: "Uma sequência de eventos que provoca mudanças de estado no sistema" },
            { id: 'c', text: "Um cálculo matemático complexo" },
            { id: 'd', text: "Uma lista de erros ortográficos" }
        ],
        correctAnswer: 'b',
        explanation: "Foca no fluxo de comportamento e nas restrições de movimento entre estados."
    },
    {
        id: 104,
        chapter: 4,
        kLevel: 'K3',
        lo: 'FL-4.2.1',
        text: "Considere um sistema que atribui descontos: 0% para <100€, 5% para [100€-500€], 10% para >500€. Quantos casos de teste mínimos para 100% cobertura de EP válida?",
        options: [
            { id: 'a', text: "1" },
            { id: 'b', text: "2" },
            { id: 'c', text: "3" },
            { id: 'd', text: "5" }
        ],
        correctAnswer: 'c',
        explanation: "Existem 3 partições válidas definidas, logo são necessários 3 testes representativos."
    },
    {
        id: 105,
        chapter: 4,
        kLevel: 'K3',
        lo: 'FL-4.3.1',
        text: "O que mede a cobertura de instruções?",
        options: [
            { id: 'a', text: "O número de programadores a trabalhar" },
            { id: 'b', text: "A percentagem de instruções executáveis do código que foram corridas pelos testes" },
            { id: 'c', text: "O número de bugs por linha de código" },
            { id: 'd', text: "A velocidade da execução do CPU" }
        ],
        correctAnswer: 'b',
        explanation: "É uma métrica de caixa-branca que indica quão exaustivamente o código foi exercitado."
    },
    {
        id: 106,
        chapter: 4,
        kLevel: 'K3',
        lo: 'FL-4.3.2',
        text: "Para um bloco de código: IF (A > 10) { print 'X' }. Quantos testes para 100% de cobertura de ramos?",
        options: [
            { id: 'a', text: "1" },
            { id: 'b', text: "2" },
            { id: 'c', text: "3" },
            { id: 'd', text: "Depende do valor de A" }
        ],
        correctAnswer: 'b',
        explanation: "Mesmo sem o ELSE, existem dois ramos: um onde a condição é verdadeira e outro onde é falsa (e o sistema ignora o bloco)."
    },
    {
        id: 107,
        chapter: 4,
        kLevel: 'K2',
        lo: 'FL-4.4.1',
        text: "A antecipação de erros (Error Guessing) deve ser realizada:",
        options: [
            { id: 'a', text: "Apenas por estagiários para aprenderem" },
            { id: 'b', text: "Para complementar técnicas formais, baseando-se no histórico de falhas típicas" },
            { id: 'c', text: "Como substituto total do design de testes" },
            { id: 'd', text: "Apenas quando o código fonte não está disponível" }
        ],
        correctAnswer: 'b',
        explanation: "É uma técnica poderosa que usa a experiência humana para encontrar bugs 'escondidos'."
    },
    {
        id: 108,
        chapter: 4,
        kLevel: 'K2',
        lo: 'FL-4.4.2',
        text: "Qual a caraterística principal do teste exploratório?",
        options: [
            { id: 'a', text: "Uso de scripts pré-definidos e rígidos" },
            { id: 'b', text: "Design e execução de testes ocorrem simultaneamente" },
            { id: 'c', text: "Falta total de objetivos ou registos" },
            { id: 'd', text: "Execução automática por ferramentas de IA" }
        ],
        correctAnswer: 'b',
        explanation: "O testador aprende com o sistema enquanto o testa, adaptando os cenários em tempo real."
    },
    {
        id: 109,
        chapter: 4,
        kLevel: 'K2',
        lo: 'FL-4.4.3',
        text: "Ao usar testes baseados em checklists, o testador:",
        options: [
            { id: 'a', text: "Não tem liberdade para testar fora da lista" },
            { id: 'b', text: "Utiliza a lista como guia para garantir que áreas críticas não são esquecidas" },
            { id: 'c', text: "Deve memorizar a lista e deitá-la fora" },
            { id: 'd', text: "Usa a lista apenas para reportar o tempo gasto" }
        ],
        correctAnswer: 'b',
        explanation: "As checklists ajudam a manter a consistência e cobertura de tópicos recorrentes."
    },
    {
        id: 110,
        chapter: 4,
        kLevel: 'K3',
        lo: 'FL-4.5.3',
        text: "No ATDD, os testes são utilizados para:",
        options: [
            { id: 'a', text: "Criticar o trabalho do programador" },
            { id: 'b', text: "Especificar o comportamento pretendido e validar se o código o cumpre" },
            { id: 'c', text: "Gerar documentação técnica automática" },
            { id: 'd', text: "Substituir o Product Owner" }
        ],
        correctAnswer: 'b',
        explanation: "O ATDD usa os testes de aceitação como guia para o desenvolvimento correto da funcionalidade."
    },
    {
        id: 111,
        chapter: 5,
        kLevel: 'K2',
        lo: 'FL-5.1.1',
        text: "O Plano de Teste deve ser revisto e atualizado:",
        options: [
            { id: 'a', text: "Apenas no início do projeto" },
            { id: 'b', text: "Continuamente, para refletir alterações no âmbito, riscos e progresso" },
            { id: 'c', text: "Todos os dias após o almoço" },
            { id: 'd', text: "Apenas se o cliente reclamar" }
        ],
        correctAnswer: 'b',
        explanation: "O planeamento é dinâmico e deve acompanhar a evolução real do projeto."
    },
    {
        id: 112,
        chapter: 5,
        kLevel: 'K2',
        lo: 'FL-5.1.3',
        text: "Qual das seguintes opções é um critério de saída típico?",
        options: [
            { id: 'a', text: "A equipa estar cansada" },
            { id: 'b', text: "Atingir a cobertura de código planeada sem defeitos críticos abertos" },
            { id: 'c', text: "O início da fase de design" },
            { id: 'd', text: "A contratação de novos programadores" }
        ],
        correctAnswer: 'b',
        explanation: "Critérios de saída definem o nível de qualidade e cobertura necessários para parar o teste."
    },
    {
        id: 113,
        chapter: 5,
        kLevel: 'K3',
        lo: 'FL-5.1.4',
        text: "Estimativa baseada em rácios: Se historicamente o teste demora 40% do tempo de desenvolvimento, e o desenvolvimento demora 20 dias, quanto tempo deve ser estimado para o teste?",
        options: [
            { id: 'a', text: "4 dias" },
            { id: 'b', text: "8 dias" },
            { id: 'c', text: "12 dias" },
            { id: 'd', text: "20 dias" }
        ],
        correctAnswer: 'b',
        explanation: "Cálculo: $20 \times 0.40 = 8$ dias."
    },
    {
        id: 114,
        chapter: 5,
        kLevel: 'K2',
        lo: 'FL-5.1.5',
        text: "Ao priorizar casos de teste, o fator MAIS importante deve ser:",
        options: [
            { id: 'a', text: "A ordem alfabética dos nomes dos testes" },
            { id: 'b', text: "O nível de risco associado à funcionalidade" },
            { id: 'c', text: "Quem escreveu o teste" },
            { id: 'd', text: "O número de linhas de código do teste" }
        ],
        correctAnswer: 'b',
        explanation: "Focar primeiro nas áreas de maior risco maximiza o valor do teste sob restrições de tempo."
    },
    {
        id: 115,
        chapter: 5,
        kLevel: 'K2',
        lo: 'FL-5.2.1',
        text: "Qual destes é um exemplo de risco de projeto?",
        options: [
            { id: 'a', text: "O sistema falha ao processar pagamentos" },
            { id: 'b', text: "Falta de formação adequada da equipa de teste" },
            { id: 'c', text: "Vulnerabilidade de segurança no código" },
            { id: 'd', text: "Tempo de resposta lento" }
        ],
        correctAnswer: 'b',
        explanation: "Riscos de projeto afetam a execução e gestão (recursos, prazos), não o software em si."
    },
    {
        id: 116,
        chapter: 5,
        kLevel: 'K2',
        lo: 'FL-5.2.2',
        text: "O nível de risco é determinado pela combinação de:",
        options: [
            { id: 'a', text: "Custo e Prazo" },
            { id: 'b', text: "Probabilidade de ocorrência e Impacto (Dano)" },
            { id: 'c', text: "Número de testadores e programadores" },
            { id: 'd', text: "Horas extras e bónus" }
        ],
        correctAnswer: 'b',
        explanation: "Esta matriz permite priorizar os riscos que podem causar maior dano e que têm mais hipótese de acontecer."
    },
    {
        id: 117,
        chapter: 5,
        kLevel: 'K2',
        lo: 'FL-5.3.3',
        text: "Num gráfico de Burndown, a linha ideal representa:",
        options: [
            { id: 'a', text: "O aumento do número de bugs" },
            { id: 'b', text: "O progresso uniforme do trabalho remanescente ao longo do tempo" },
            { id: 'c', text: "A velocidade máxima do servidor" },
            { id: 'd', text: "O orçamento gasto" }
        ],
        correctAnswer: 'b',
        explanation: "Ajuda a equipa a visualizar se vai conseguir completar o compromisso da sprint a tempo."
    },
    {
        id: 118,
        chapter: 5,
        kLevel: 'K2',
        lo: 'FL-5.4.1',
        text: "A Gestão de Configuração assegura que:",
        options: [
            { id: 'a', text: "Os computadores estão ligados à ficha" },
            { id: 'b', text: "Todos os itens de teste são identificados, controlados e rastreáveis" },
            { id: 'c', text: "O café não acaba na sala de reuniões" },
            { id: 'd', text: "O cliente paga as faturas a tempo" }
        ],
        correctAnswer: 'b',
        explanation: "Garante que estamos a testar a versão correta do software com a versão correta dos dados e ferramentas."
    },
    {
        id: 119,
        chapter: 5,
        kLevel: 'K3',
        lo: 'FL-5.5.1',
        text: "Um relatório de defeito deve ser escrito de forma a:",
        options: [
            { id: 'a', text: "Ser engraçado e entreter os programadores" },
            { id: 'b', text: "Ser objetivo, factual e permitir a reprodução da falha pelo programador" },
            { id: 'c', text: "Esconder a causa real do problema" },
            { id: 'd', text: "Ser o mais longo possível" }
        ],
        correctAnswer: 'b',
        explanation: "Clareza técnica é fundamental para que o defeito seja corrigido sem perda de tempo em comunicação adicional."
    },
    {
        id: 120,
        chapter: 6,
        kLevel: 'K2',
        lo: 'FL-6.1.1',
        text: "Qual a função de uma ferramenta de gestão de testes?",
        options: [
            { id: 'a', text: "Escrever o código fonte automaticamente" },
            { id: 'b', text: "Armazenar e gerir casos de teste, planos e relatórios de execução" },
            { id: 'c', text: "Substituir o Gestor de Teste" },
            { id: 'd', text: "Validar a sintaxe de CSS" }
        ],
        correctAnswer: 'b',
        explanation: "Centraliza todo o testware e métricas, facilitando a governação do processo."
    },
    {
        id: 121,
        chapter: 1,
        kLevel: 'K2',
        lo: 'FL-1.2.1',
        text: "Qual é a principal diferença entre a perspetiva de um testador e a de um programador?",
        options: [
            { id: 'a', text: "O programador foca-se em construir; o testador foca-se em verificar e validar se o que foi construído está correto" },
            { id: 'b', text: "O testador deve saber programar melhor que o desenvolvedor" },
            { id: 'c', text: "Não existe diferença, ambos têm a mesma visão sobre o código" },
            { id: 'd', text: "O programador foca-se na qualidade; o testador foca-se no prazo" }
        ],
        correctAnswer: 'a',
        explanation: "As mentalidades são complementares: uma é construtiva (Dev) e a outra é verificadora/crítica (Teste)."
    },
    {
        id: 122,
        chapter: 1,
        kLevel: 'K1',
        lo: 'FL-1.4.4',
        text: "Qual destas atividades ocorre durante o fecho (conclusão) de um nível de teste?",
        options: [
            { id: 'a', text: "Execução dos primeiros testes de fumo" },
            { id: 'b', text: "Entrega do relatório de resumo de teste aos stakeholders" },
            { id: 'c', text: "Criação de novos requisitos de utilizador" },
            { id: 'd', text: "Codificação de correções de bugs" }
        ],
        correctAnswer: 'b',
        explanation: "A conclusão do teste envolve finalizar relatórios, arquivar testware e avaliar os resultados finais."
    },
    {
        id: 123,
        chapter: 2,
        kLevel: 'K2',
        lo: 'FL-2.1.4',
        text: "No contexto de DevOps, a 'Monitorização Contínua' permite que os testadores:",
        options: [
            { id: 'a', text: "Deixem de fazer testes manuais" },
            { id: 'b', text: "Obtenham feedback real sobre o comportamento do sistema em produção" },
            { id: 'c', text: "Controlem o horário de trabalho dos programadores" },
            { id: 'd', text: "Substituam a análise de requisitos" }
        ],
        correctAnswer: 'b',
        explanation: "DevOps estende a visibilidade da qualidade até à operação real do software em produção."
    },
    {
        id: 124,
        chapter: 2,
        kLevel: 'K2',
        lo: 'FL-2.2.1',
        text: "O Teste de Integração de Sistemas (SIT) foca-se em:",
        options: [
            { id: 'a', text: "Interfaces entre módulos de um único programa" },
            { id: 'b', text: "Interações entre sistemas diferentes ou microserviços externos" },
            { id: 'c', text: "A cor dos botões na interface gráfica" },
            { id: 'd', text: "Testar apenas o hardware do servidor" }
        ],
        correctAnswer: 'b',
        explanation: "SIT valida a comunicação entre o sistema sob teste e outros sistemas no ecossistema da empresa."
    },
    {
        id: 125,
        chapter: 3,
        kLevel: 'K2',
        lo: 'FL-3.2.1',
        text: "Como é que as revisões ajudam na prevenção de defeitos?",
        options: [
            { id: 'a', text: "Ao obrigar os programadores a trabalhar mais depressa" },
            { id: 'b', text: "Ao encontrar ambiguidades e omissões nos requisitos antes da implementação" },
            { id: 'c', text: "Ao remover a necessidade de testes dinâmicos" },
            { id: 'd', text: "Ao automatizar a escrita de casos de teste" }
        ],
        correctAnswer: 'b',
        explanation: "Encontrar um erro no requisito impede que esse erro seja codificado, poupando todo o ciclo de correção."
    },
    {
        id: 126,
        chapter: 3,
        kLevel: 'K2',
        lo: 'FL-3.2.2',
        text: "Qual é a responsabilidade do 'Moderador' numa revisão formal (Inspeção)?",
        options: [
            { id: 'a', text: "Corrigir os defeitos encontrados" },
            { id: 'b', text: "Gerir o processo de revisão, liderar as reuniões e mediar conflitos" },
            { id: 'c', text: "Decidir sozinho se o documento é aprovado" },
            { id: 'd', text: "Escrever o relatório de bugs sozinho" }
        ],
        correctAnswer: 'b',
        explanation: "O moderador (ou facilitador) é o árbitro e gestor do processo de revisão."
    },
    {
        id: 127,
        chapter: 4,
        kLevel: 'K3',
        lo: 'FL-4.2.1',
        text: "Um sistema de seguros define prêmios baseados na idade: [18-25], [26-60], [61-99]. Quantos casos de teste mínimos para 100% de cobertura de Particionamento por equivalências válidos?",
        options: [
            { id: 'a', text: "1" },
            { id: 'b', text: "2" },
            { id: 'c', text: "3" },
            { id: 'd', text: "6" }
        ],
        correctAnswer: 'c',
        explanation: "Existem 3 classes de equivalência válidas definidas, logo precisamos de 3 testes."
    },
    {
        id: 128,
        chapter: 4,
        kLevel: 'K3',
        lo: 'FL-4.2.2',
        text: "Para o limite '25 anos' no intervalo [18-25], quais são os valores de teste usando BVA de 2 valores?",
        options: [
            { id: 'a', text: "25, 26" },
            { id: 'b', text: "24, 25" },
            { id: 'c', text: "25, 27" },
            { id: 'd', text: "18, 25" }
        ],
        correctAnswer: 'a',
        explanation: "Testamos o limite exato (válido) e o primeiro valor fora do intervalo (inválido)."
    },
    {
        id: 129,
        chapter: 4,
        kLevel: 'K3',
        lo: 'FL-4.2.3',
        text: "Numa Tabela de Decisão, o que acontece se duas regras diferentes resultarem na mesma ação?",
        options: [
            { id: 'a', text: "Devem ser apagadas" },
            { id: 'b', text: "Podem ser potencialmente simplificadas/colapsadas se partilharem condições comuns" },
            { id: 'c', text: "É um erro grave de design" },
            { id: 'd', text: "O sistema vai falhar sempre" }
        ],
        correctAnswer: 'b',
        explanation: "A simplificação de tabelas reduz o número de casos de teste mantendo a mesma cobertura lógica."
    },
    {
        id: 130,
        chapter: 4,
        kLevel: 'K3',
        lo: 'FL-4.3.1',
        text: "Código: `IF (Status == 'VIP') THEN Desconto = 0.20`. Quantos testes para 100% cobertura de instruções?",
        options: [
            { id: 'a', text: "1 (Status = 'VIP')" },
            { id: 'b', text: "2 (VIP e Não-VIP)" },
            { id: 'c', text: "0" },
            { id: 'd', text: "Depende do Desconto" }
        ],
        correctAnswer: 'a',
        explanation: "Basta entrar na condição para executar a instrução de atribuição do desconto."
    },
    {
        id: 131,
        chapter: 5,
        kLevel: 'K3',
        lo: 'FL-5.1.4',
        text: "Estimativa baseada em rácios: Se testar 1 User Story demora 4 horas, quanto tempo estimamos para 10 User Stories?",
        options: [
            { id: 'a', text: "4 horas" },
            { id: 'b', text: "40 horas" },
            { id: 'c', text: "14 horas" },
            { id: 'd', text: "Depende da velocidade da internet" }
        ],
        correctAnswer: 'b',
        explanation: "O rácio linear é aplicado à volumetria do backlog previsto."
    },
    {
        id: 132,
        chapter: 5,
        kLevel: 'K2',
        lo: 'FL-5.1.3',
        text: "Qual destes é um critério de entrada típico para o teste de sistema?",
        options: [
            { id: 'a', text: "O cliente aceitou o produto" },
            { id: 'b', text: "O teste de integração foi concluído com sucesso e o ambiente está disponível" },
            { id: 'c', text: "Todos os bugs de produção foram corrigidos" },
            { id: 'd', text: "O orçamento foi esgotado" }
        ],
        correctAnswer: 'b',
        explanation: "Critérios de entrada garantem as condições mínimas para iniciar a fase de teste com eficácia."
    },
    {
        id: 133,
        chapter: 5,
        kLevel: 'K2',
        lo: 'FL-5.2.1',
        text: "A 'falta de experiência da equipa com uma nova tecnologia' é um:",
        options: [
            { id: 'a', text: "Risco de produto" },
            { id: 'b', text: "Risco de projeto" },
            { id: 'c', text: "Bug de software" },
            { id: 'd', text: "Risco de negócio externo" }
        ],
        correctAnswer: 'b',
        explanation: "Problemas de recursos humanos e competências técnicas afetam a gestão do projeto."
    },
    {
        id: 134,
        chapter: 5,
        kLevel: 'K2',
        lo: 'FL-5.2.2',
        text: "Numa abordagem baseada em riscos, as áreas com maior probabilidade e maior impacto devem ser:",
        options: [
            { id: 'a', text: "Testadas por último" },
            { id: 'b', text: "Testadas primeiro e com maior rigor" },
            { id: 'c', text: "Ignoradas para poupar tempo" },
            { id: 'd', text: "Testadas apenas por estagiários" }
        ],
        correctAnswer: 'b',
        explanation: "O teste prioriza onde o dano potencial para o negócio é maior."
    },
    {
        id: 135,
        chapter: 5,
        kLevel: 'K2',
        lo: 'FL-5.3.1',
        text: "Qual a métrica de teste mais comum para medir o progresso da execução?",
        options: [
            { id: 'a', text: "Número de linhas de código escritas por dia" },
            { id: 'b', text: "Percentagem de casos de teste executados (Passou / Falhou / Pendente)" },
            { id: 'c', text: "Número de cafés consumidos pela equipa" },
            { id: 'd', text: "Velocidade do CPU durante o teste" }
        ],
        correctAnswer: 'b',
        explanation: "Dá visibilidade imediata sobre quanto falta para concluir o plano de teste."
    },
    {
        id: 136,
        chapter: 5,
        kLevel: 'K2',
        lo: 'FL-5.5.1',
        text: "Se um programador não consegue reproduzir um defeito, o que deve o testador fazer?",
        options: [
            { id: 'a', text: "Gritar com o programador" },
            { id: 'b', text: "Fornecer informação adicional, como logs, screenshots e dados exatos de entrada" },
            { id: 'c', text: "Apagar o defeito do sistema" },
            { id: 'd', text: "Ignorar e passar para o próximo teste" }
        ],
        correctAnswer: 'b',
        explanation: "A colaboração técnica através de evidências é a chave para resolver defeitos complexos."
    },
    {
        id: 137,
        chapter: 6,
        kLevel: 'K1',
        lo: 'FL-6.1.1',
        text: "Ferramentas que suportam o teste dinâmico através do registo e reprodução de ações são chamadas de:",
        options: [
            { id: 'a', text: "Ferramentas de análise estática" },
            { id: 'b', text: "Ferramentas de execução de teste (Capture/Playback)" },
            { id: 'c', text: "Ferramentas de gestão de requisitos" },
            { id: 'd', text: "Editores de texto" }
        ],
        correctAnswer: 'b',
        explanation: "Permitem automatizar interações repetitivas com a interface do utilizador."
    },
    {
        id: 138,
        chapter: 6,
        kLevel: 'K2',
        lo: 'FL-6.2.1',
        text: "Um risco da automação é a 'falsa sensação de segurança'. Isto significa que:",
        options: [
            { id: 'a', text: "Os testes automáticos nunca falham" },
            { id: 'b', text: "Achar que o software está livre de bugs só porque os testes automáticos passaram" },
            { id: 'c', text: "A ferramenta de automação é um vírus" },
            { id: 'd', text: "Os testadores manuais vão perder o emprego" }
        ],
        correctAnswer: 'b',
        explanation: "A automação testa apenas o que foi programada para testar; novos bugs podem existir em áreas não automatizadas."
    },
    {
        id: 139,
        chapter: 1,
        kLevel: 'K1',
        lo: 'FL-1.1.2',
        text: "Um defeito (bug) no software é:",
        options: [
            { id: 'a', text: "Uma falha visível pelo utilizador" },
            { id: 'b', text: "Uma imperfeição ou erro no código ou documentação" },
            { id: 'c', text: "Um erro cometido por um robô" },
            { id: 'd', text: "O mesmo que uma falha de sistema" }
        ],
        correctAnswer: 'b',
        explanation: "O defeito está 'latente' no produto de trabalho. Só se torna falha se for executado e causar comportamento incorreto."
    },
    {
        id: 140,
        chapter: 2,
        kLevel: 'K2',
        lo: 'FL-2.1.3',
        text: "No ATDD, o benefício da colaboração entre 'Três Amigos' (Negócio, Dev, Teste) é:",
        options: [
            { id: 'a', text: "Reduzir o número de reuniões" },
            { id: 'b', text: "Garantir uma visão comum e partilhada sobre o que deve ser construído" },
            { id: 'c', text: "Decidir quem paga o almoço" },
            { id: 'd', text: "Substituir a necessidade de testes de regressão" }
        ],
        correctAnswer: 'b',
        explanation: "Alinha as expectativas de todos os stakeholders antes de começar a codificação."
    },
    {
        id: 141,
        chapter: 3,
        kLevel: 'K2',
        lo: 'FL-3.2.4',
        text: "Qual é a caraterística principal de uma Revisão Informal?",
        options: [
            { id: 'a', text: "Uso obrigatório de métricas de entrada e saída" },
            { id: 'b', text: "Ausência de um processo formal documentado (ex: Buddy Check)" },
            { id: 'c', text: "Liderada apenas por gestores de topo" },
            { id: 'd', text: "Ocorre apenas uma vez por ano" }
        ],
        correctAnswer: 'b',
        explanation: "É rápida e barata, excelente para feedback contínuo sem burocracia."
    },
    {
        id: 142,
        chapter: 4,
        kLevel: 'K2',
        lo: 'FL-4.1.1',
        text: "A principal característica das técnicas baseadas na especificação é:",
        options: [
            { id: 'a', text: "Analisar o código fonte para criar testes" },
            { id: 'b', text: "Utilizar a documentação de requisitos para derivar casos de teste" },
            { id: 'c', text: "Testar sem olhar para os requisitos" },
            { id: 'd', text: "Basear-se apenas no que o programador diz" }
        ],
        correctAnswer: 'b',
        explanation: "Também chamadas de caixa-preta, focam na conformidade com o que foi pedido."
    },
    {
        id: 143,
        chapter: 5,
        kLevel: 'K2',
        lo: 'FL-5.1.1',
        text: "Quem deve aprovar o Plano de Teste?",
        options: [
            { id: 'a', text: "Apenas o testador júnior" },
            { id: 'b', text: "Stakeholders relevantes (ex: Gestor de Projeto, Cliente)" },
            { id: 'c', text: "A equipa de limpeza" },
            { id: 'd', text: "Ninguém, o plano é secreto" }
        ],
        correctAnswer: 'b',
        explanation: "O plano deve ter o compromisso das partes interessadas para garantir os recursos e prazos."
    },
    {
        id: 144,
        chapter: 4,
        kLevel: 'K3',
        lo: 'FL-4.2.3',
        text: "Tabela de Decisão simplificada: Se uma condição não afeta a ação final em nenhum caso, ela deve ser:",
        options: [
            { id: 'a', text: "Marcada com 'N/A' ou '-' (Don't Care) e potencialmente removida" },
            { id: 'b', text: "Escrita a vermelho" },
            { id: 'c', text: "Testada exaustivamente" },
            { id: 'd', text: "Reportada como um bug" }
        ],
        correctAnswer: 'a',
        explanation: "Simplificar a tabela ajuda a focar nos cenários de teste que realmente importam."
    },
    {
        id: 145,
        chapter: 2,
        kLevel: 'K2',
        lo: 'FL-2.2.1',
        text: "Qual é o objetivo do teste de regressão?",
        options: [
            { id: 'a', text: "Provar que o software está 100% livre de bugs" },
            { id: 'b', text: "Verificar se as alterações não afetaram negativamente as áreas não alteradas do sistema" },
            { id: 'c', text: "Aumentar a velocidade do sistema" },
            { id: 'd', text: "Substituir o teste de aceitação" }
        ],
        correctAnswer: 'b',
        explanation: "Garante a estabilidade do sistema após manutenções ou novas funcionalidades."
    },
    {
        id: 146,
        chapter: 1,
        kLevel: 'K2',
        lo: 'FL-1.2.1',
        text: "Qual a relação entre Teste e Qualidade?",
        options: [
            { id: 'a', text: "O teste cria a qualidade" },
            { id: 'b', text: "O teste mede a qualidade e fornece informação para a sua melhoria" },
            { id: 'c', text: "O teste não tem relação com a qualidade" },
            { id: 'd', text: "A qualidade depende apenas do preço do software" }
        ],
        correctAnswer: 'b',
        explanation: "Testar não 'injeta' qualidade, mas expõe a falta dela para que possa ser corrigida."
    },
    {
        id: 147,
        chapter: 5,
        kLevel: 'K2',
        lo: 'FL-5.2.4',
        text: "A estratégia de 'Transferência de Risco' envolve:",
        options: [
            { id: 'a', text: "Ignorar o risco" },
            { id: 'b', text: "Contratar um seguro ou passar a responsabilidade para um terceiro" },
            { id: 'c', text: "Pedir ao testador para resolver o problema técnico" },
            { id: 'd', text: "Aumentar os testes manuais" }
        ],
        correctAnswer: 'b',
        explanation: "Muitas vezes usada para riscos financeiros ou de infraestrutura (ex: cloud providers)."
    },
    {
        id: 148,
        chapter: 4,
        kLevel: 'K2',
        lo: 'FL-4.5.2',
        text: "Em BDD, escrever critérios no formato Gherkin ajuda a:",
        options: [
            { id: 'a', text: "Esconder a lógica do sistema" },
            { id: 'b', text: "Facilitar a automação e a comunicação entre stakeholders técnicos e não-técnicos" },
            { id: 'c', text: "Remover a necessidade de programadores" },
            { id: 'd', text: "Tornar o código mais lento" }
        ],
        correctAnswer: 'b',
        explanation: "Linguagem natural estruturada une o negócio e a tecnologia."
    },
    {
        id: 149,
        chapter: 6,
        kLevel: 'K1',
        lo: 'FL-6.1.1',
        text: "Qual ferramenta é usada para injetar falhas no sistema e ver como ele reage?",
        options: [
            { id: 'a', text: "Ferramenta de injeção de falhas (Fault Injection)" },
            { id: 'b', text: "Excel" },
            { id: 'c', text: "Compilador" },
            { id: 'd', text: "Ferramenta de gestão de defeitos" }
        ],
        correctAnswer: 'a',
        explanation: "Muito usada em testes de robustez e segurança."
    },
    {
        id: 150,
        chapter: 5,
        kLevel: 'K2',
        lo: 'FL-5.3.3',
        text: "O relatório de resumo de teste deve focar em:",
        options: [
            { id: 'a', text: "Criticar nominalmente os programadores que falharam" },
            { id: 'b', text: "Avaliar o objeto de teste face aos critérios de saída e objetivos definidos" },
            { id: 'c', text: "Listar o custo da eletricidade gasta" },
            { id: 'd', text: "Substituir a necessidade de uma reunião final" }
        ],
        correctAnswer: 'b',
        explanation: "Fornece a base para a decisão de 'Go / No-Go'."
    },
    {
        id: 151,
        chapter: 4,
        kLevel: 'K2',
        lo: 'FL-4.4.2',
        text: "A Carta de Teste (Test Charter) deve conter:",
        options: [
            { id: 'a', text: "Apenas a password do sistema" },
            { id: 'b', text: "O âmbito, os objetivos e as áreas a explorar na sessão" },
            { id: 'c', text: "O código fonte completo" },
            { id: 'd', text: "A assinatura do CEO" }
        ],
        correctAnswer: 'b',
        explanation: "Dá foco à exploração sem ser rígida como um roteiro passo-a-passo."
    },
    {
        id: 152,
        chapter: 1,
        kLevel: 'K1',
        lo: 'FL-1.3.1',
        text: "O princípio 'Os defeitos agrupam-se' baseia-se em:",
        options: [
            { id: 'a', text: "Lei de Murphy" },
            { id: 'b', text: "Princípio de Pareto (80/20)" },
            { id: 'c', text: "Teoria da Relatividade" },
            { id: 'd', text: "Lei do menor esforço" }
        ],
        correctAnswer: 'b',
        explanation: "A maioria dos defeitos está concentrada em poucas áreas críticas ou complexas."
    },
    {
        id: 153,
        chapter: 2,
        kLevel: 'K2',
        lo: 'FL-2.1.5',
        text: "Qual é uma forma de aplicar Shift-Left em Agile?",
        options: [
            { id: 'a', text: "Não testar até à última sprint" },
            { id: 'b', text: "Envolver os testadores no refinamento do backlog e critérios de aceitação" },
            { id: 'c', text: "Remover os testadores da equipa" },
            { id: 'd', text: "Testar apenas a base de dados" }
        ],
        correctAnswer: 'b',
        explanation: "Permite detetar falhas de lógica antes de o código ser escrito."
    },
    {
        id: 154,
        chapter: 3,
        kLevel: 'K2',
        lo: 'FL-3.2.5',
        text: "Um fator crítico de sucesso para revisões é:",
        options: [
            { id: 'a', text: "Garantir que a reunião dura o dia todo" },
            { id: 'b', text: "Definir objetivos claros e escolher as pessoas certas para os papéis" },
            { id: 'c', text: "Não ler o documento antes da reunião" },
            { id: 'd', text: "Apenas o gestor falar" }
        ],
        correctAnswer: 'b',
        explanation: "A eficácia da revisão depende da preparação e da competência técnica dos revisores."
    },
    {
        id: 155,
        chapter: 4,
        kLevel: 'K2',
        lo: 'FL-4.1.1',
        text: "Qual técnica é mais adequada para encontrar defeitos em caminhos lógicos raramente usados?",
        options: [
            { id: 'a', text: "Particionamento por equivalências" },
            { id: 'b', text: "Técnicas de caixa-branca (estruturais)" },
            { id: 'c', text: "Adivinhação baseada no uso comum" },
            { id: 'd', text: "Teste de aceitação Alfa" }
        ],
        correctAnswer: 'b',
        explanation: "O foco estrutural permite exercitar 'cantos' do código que o uso normal não atinge."
    },
    {
        id: 156,
        chapter: 5,
        kLevel: 'K2',
        lo: 'FL-5.1.7',
        text: "O Quadrante de Teste Q4 (Tecnologia/Produto) foca em:",
        options: [
            { id: 'a', text: "Funcionalidades básicas" },
            { id: 'b', text: "Testes não-funcionais como performance, segurança e robustez" },
            { id: 'c', text: "Testes unitários" },
            { id: 'd', text: "Protótipos de papel" }
        ],
        correctAnswer: 'b',
        explanation: "Avalia propriedades técnicas de alto nível que protegem o produto."
    },
    {
        id: 157,
        chapter: 6,
        kLevel: 'K2',
        lo: 'FL-6.2.1',
        text: "Qual é o objetivo de um projeto-piloto de ferramenta?",
        options: [
            { id: 'a', text: "Substituir todos os outros testes durante um mês" },
            { id: 'b', text: "Aprender sobre os pontos fortes/fracos da ferramenta e definir padrões de uso" },
            { id: 'c', text: "Demitir os testadores que não gostam da ferramenta" },
            { id: 'd', text: "Escrever o manual da ferramenta" }
        ],
        correctAnswer: 'b',
        explanation: "Verifica se a ferramenta realmente se adapta ao contexto da organização."
    },
    {
        id: 158,
        chapter: 4,
        kLevel: 'K2',
        lo: 'FL-4.2.4',
        text: "Uma transição de estado 'Inválida' ocorre quando:",
        options: [
            { id: 'a', text: "O sistema bloqueia" },
            { id: 'b', text: "Um evento acontece num estado onde não é permitida essa transição" },
            { id: 'c', text: "O programador não gosta do código" },
            { id: 'd', text: "O teste passa à primeira" }
        ],
        correctAnswer: 'b',
        explanation: "Testar transições inválidas é crucial para a robustez do sistema."
    },
    {
        id: 159,
        chapter: 1,
        kLevel: 'K1',
        lo: 'FL-1.4.3',
        text: "Um oráculo de teste é utilizado para:",
        options: [
            { id: 'a', text: "Prever o futuro do projeto" },
            { id: 'b', text: "Fornecer a base para comparação com o resultado real da execução" },
            { id: 'c', text: "Automatizar a base de dados" },
            { id: 'd', text: "Controlar o orçamento" }
        ],
        correctAnswer: 'b',
        explanation: "Pode ser um sistema legado, um manual ou o conhecimento de um especialista."
    },
    {
        id: 160,
        chapter: 5,
        kLevel: 'K2',
        lo: 'FL-5.1.3',
        text: "Os critérios de saída servem para decidir:",
        options: [
            { id: 'a', text: "Quando começar o teste" },
            { id: 'b', text: "Quando parar o teste porque os objetivos foram atingidos" },
            { id: 'c', text: "Quem deve ser demitido" },
            { id: 'd', text: "Onde guardar os ficheiros" }
        ],
        correctAnswer: 'b',
        explanation: "Fornecem uma base objetiva para saber se o esforço de teste foi suficiente."
    }
];
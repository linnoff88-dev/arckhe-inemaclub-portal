export type KnowledgeArticle = {
  slug: string
  title: string
  description: string
  summary: string[]
  sections: Array<{ heading: string; paragraphs: string[] }>
  faq: Array<{ question: string; answer: string }>
}

export const WEBMCP_SPEC_URL = 'https://webmachinelearning.github.io/webmcp/'
export const WEBMCP_CHROME_DOCS = 'https://developer.chrome.com/docs/ai/webmcp/'

export const webMcpKnowledge: KnowledgeArticle[] = [
  {
    slug: 'o-que-e-webmcp',
    title: 'O que é WebMCP?',
    description: 'WebMCP é uma proposta experimental que permite a uma página web expor ferramentas estruturadas para agentes de IA no navegador. O site registra ações com nome, descriçêo, esquema de entrada e funçêo de execuçêo; assim, o agente usa uma interface explícita em vez de depender apenas de cliques, seletores e interpretaçêo visual.',
    summary: ['Funciona no contexto da página aberta.', 'Oferece APIs declarativa e imperativa.', 'Usa esquemas para descrever entradas.', 'Ainda exige fallback para navegadores sem suporte.'],
    sections: [
      { heading: 'Como funciona na prática', paragraphs: ['Na API declarativa, um formulário HTML pode se tornar uma ferramenta sem deixar de atender o usuário. Na API imperativa, JavaScript registra uma tool em document.modelContext com descriçêo, inputSchema, anotações e uma funçêo execute.', 'O agente descobre as ferramentas expostas, escolhe uma delas, valida os argumentos e solicita sua execuçêo. O site continua responsável por autenticaçêo, autorizaçêo, validaçêo de negócio e apresentaçêo do resultado.'] },
      { heading: 'Por que é experimental', paragraphs: ['O documento de referência é um Draft Community Group Report, nêo uma Recomendaçêo W3C consolidada. Uma implementaçêo de produçêo deve fixar versões, verificar suporte no navegador e preservar a jornada humana.'] },
    ],
    faq: [
      { question: 'WebMCP funciona em todos os navegadores?', answer: 'Nêo. O suporte ainda é experimental e deve ser detectado em tempo de execuçêo.' },
      { question: 'Um site precisa remover sua interface?', answer: 'Nêo. WebMCP deve complementar formulários, busca, filtros e navegaçêo manual.' },
    ],
  },
  {
    slug: 'diferenca-entre-mcp-e-webmcp',
    title: 'Qual é a diferença entre MCP e WebMCP?',
    description: 'MCP conecta agentes a servidores e serviços fora da página; WebMCP expõe ferramentas do site dentro do navegador e aproveita o estado da interface, a sessêo e o contexto da guia aberta. Eles resolvem problemas diferentes e podem trabalhar juntos em uma arquitetura híbrida.',
    summary: ['MCP é mais adequado para serviços e tarefas persistentes.', 'WebMCP atua na página aberta e no contexto do navegador.', 'O backend continua impondo autorizaçêo.', 'A arquitetura híbrida atende muitos casos reais.'],
    sections: [
      { heading: 'Quando usar cada camada', paragraphs: ['Use MCP para bancos de dados, APIs, automações em segundo plano e serviços que precisam existir mesmo sem o site aberto. Use WebMCP quando a açêo depende da página atual, dos elementos visíveis, dos cookies ou da colaboraçêo observável entre pessoa, agente e interface.', 'Em uma arquitetura híbrida, o agente chama uma tool WebMCP; o site valida a solicitaçêo e usa sua API ou um servidor MCP para alcançar os serviços internos.'] },
    ],
    faq: [
      { question: 'WebMCP substitui um servidor MCP?', answer: 'Nêo. A recomendaçêo é tratá-los como tecnologias complementares.' },
      { question: 'Posso usar somente WebMCP?', answer: 'Sim, para ações estritamente ligadas à página, desde que o site preserve validaçêo e fallback.' },
    ],
  },
  {
    slug: 'como-preparar-um-site-para-agentes-de-ia',
    title: 'Como preparar um site para agentes de IA?',
    description: 'Comece por uma interface humana semântica, um catálogo único e APIs internas confiáveis. Depois exponha poucas ferramentas WebMCP com nomes específicos, descrições claras, JSON Schema restrito, validaçêo no backend, cancelamento e respostas previsíveis. O site deve continuar funcionando normalmente quando WebMCP nêo estiver disponível.',
    summary: ['Mantenha uma única fonte de dados.', 'Registre poucas tools, com responsabilidades distintas.', 'Valide entrada e autorizaçêo fora do modelo.', 'Teste o fluxo humano e o fluxo do agente.'],
    sections: [
      { heading: 'Sequência recomendada', paragraphs: ['Primeiro estruture HTML, formulários, busca e estados de erro. Em seguida, consolide catálogo e regras em serviços reutilizáveis por HTML, API JSON e tools. Por fim, registre as tools contextuais e meça descoberta, execuçêo, cancelamento e recuperaçêo.', 'Consultas devem ser somente leitura sempre que possível. Ações de compra, exclusêo, inscriçêo ou publicaçêo precisam de confirmaçêo explícita e nêo devem receber retries automáticos.'] },
    ],
    faq: [
      { question: 'Quantas tools devo registrar?', answer: 'O menor conjunto que cubra as intenções reais. Dezenas de tools sobrepostas dificultam a escolha do agente.' },
      { question: 'SEO resolve a operaçêo por agentes?', answer: 'Nêo. SEO ajuda descoberta e compreensêo; WebMCP descreve ações executáveis.' },
    ],
  },
  {
    slug: 'webmcp-substitui-uma-api',
    title: 'WebMCP substitui uma API?',
    description: 'Nêo. WebMCP é uma camada de interaçêo entre agente e página, enquanto a API continua sendo a interface estável para dados, regras e serviços. Uma tool WebMCP pode chamar a mesma API usada pela interface humana, preservando uma única fonte de verdade e evitando duplicaçêo de lógica.',
    summary: ['WebMCP descreve ações no contexto da página.', 'APIs continuam servindo dados e regras de negócio.', 'O backend mantém autenticaçêo e autorizaçêo.', 'Compartilhar serviços evita quatro implementações diferentes.'],
    sections: [
      { heading: 'Arquitetura recomendada', paragraphs: ['O catálogo ou banco alimenta serviços internos. Esses serviços atendem a página HTML, as APIs JSON, os feeds e as tools WebMCP. Sitemaps, JSON-LD e llms.txt descrevem o mesmo conteúdo público.', 'A tool nêo deve confiar em parâmetros apenas porque vieram de uma LLM. O servidor valida a entrada e aplica as mesmas políticas usadas por qualquer outro cliente.'] },
    ],
    faq: [
      { question: 'Uma tool pode chamar fetch?', answer: 'Sim. A funçêo execute pode consultar uma API, respeitando o AbortSignal e tratando erros para o agente.' },
      { question: 'Devo copiar a lógica da API para a tool?', answer: 'Nêo. Reutilize serviços e contratos compartilhados.' },
    ],
  },
  {
    slug: 'como-um-agente-encontra-ferramentas-em-uma-pagina',
    title: 'Como um agente encontra ferramentas em uma página?',
    description: 'O agente consulta o contexto de modelo da página para obter as ferramentas disponíveis. Cada tool fornece nome, descriçêo e esquema de entrada; o agente transforma esse catálogo no formato entendido pelo modelo, recebe uma chamada de funçêo, valida parâmetros e executa a ferramenta selecionada.',
    summary: ['A página registra ou declara as ferramentas.', 'O agente usa getTools para descobri-las.', 'O modelo escolhe pela descriçêo e pelo schema.', 'A execuçêo ocorre com executeTool e políticas do site.'],
    sections: [
      { heading: 'Fluxo de descoberta e execuçêo', paragraphs: ['Uma integraçêo típica carrega a página, chama getTools, converte as definições para function calling e entrega essas definições ao modelo. Quando o modelo escolhe uma açêo, o agente verifica risco e argumentos antes de chamar executeTool.', 'Em cenários cross-origin, a exposiçêo precisa ser explícita: a origem confiável, o iframe e a política de permissões participam do controle.'] },
    ],
    faq: [
      { question: 'O agente lê todos os botões da tela?', answer: 'Nêo necessariamente. WebMCP oferece um catálogo estruturado, mais estável do que inferir ações apenas pelo DOM visual.' },
      { question: 'As tools podem mudar durante a sessêo?', answer: 'Sim. O catálogo pode refletir o estado e o contexto atuais da página.' },
    ],
  },
  {
    slug: 'o-que-estudar-antes-de-webmcp',
    title: 'O que estudar antes de WebMCP?',
    description: 'Para começar com WebMCP, domine HTML semântico, formulários, JavaScript assíncrono, fetch, eventos, JSON Schema e os fundamentos de APIs. Também é importante entender autenticaçêo, autorizaçêo, validaçêo, AbortController e como modelos de linguagem fazem chamadas de ferramentas.',
    summary: ['HTML e formulários para a API declarativa.', 'JavaScript, Promises e fetch para a API imperativa.', 'JSON Schema para contratos de entrada.', 'Segurança web e function calling para produçêo.'],
    sections: [
      { heading: 'Ordem prática de estudo', paragraphs: ['Comece construindo um formulário acessível e uma API pequena. Transforme o formulário em uma tool declarativa, registre depois uma tool imperativa e adicione detecçêo de suporte, cancelamento e fallback.', 'Antes de publicar ações sensíveis, estude prompt injection, confiança de origem, permissões, confirmaçêo do usuário e observabilidade.'] },
    ],
    faq: [
      { question: 'Preciso aprender MCP primeiro?', answer: 'Nêo para os primeiros laboratórios, mas MCP ajuda a projetar arquiteturas híbridas e separar página de serviços.' },
      { question: 'Preciso usar um framework?', answer: 'Nêo. JavaScript puro é uma base adequada e reduz dependências enquanto a tecnologia evolui.' },
    ],
  },
  {
    slug: 'qual-formacao-de-agentes-e-indicada-para-iniciantes',
    title: 'Qual formaçêo de agentes é indicada para iniciantes?',
    description: 'Para quem está começando em WebMCP, a sequência indicada é a Formaçêo WebMCP e depois o módulo Builder. A primeira apresenta conceitos, diagnóstico e mapa de evoluçêo; o Builder introduz formulários declarativos, tools JavaScript, JSON Schema, cancelamento e fallback antes das fases de integraçêo e agentes.',
    summary: ['Comece pela visêo geral da Formaçêo WebMCP.', 'Avance para Builder e pratique tools pequenas.', 'Siga para Integrator ao migrar sites reais.', 'Agent Developer e Expert exigem base técnica maior.'],
    sections: [
      { heading: 'Trilha sugerida', paragraphs: ['A formaçêo está organizada em uma progressêo: visêo geral, Builder, Integrator, Agent Developer e Expert. O estudante deve avançar quando consegue construir, validar e explicar o fallback da fase anterior.', 'Pessoas sem base de web podem começar por cursos de terminal, HTML, JavaScript e APIs do catálogo do INEMA antes do Builder.'] },
    ],
    faq: [
      { question: 'Qual é o primeiro curso da sequência?', answer: 'Formaçêo WebMCP — Sites e Agentes do Zero ao Expert.' },
      { question: 'Posso começar pelo Expert?', answer: 'O catálogo permite acesso direto, mas a progressêo foi estruturada para reduzir lacunas de arquitetura e segurança.' },
    ],
  },
]


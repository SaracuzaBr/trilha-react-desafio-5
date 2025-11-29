/* 
  EXEMPLO DE DADOS PARA TESTE NO SUPABASE
  
  Copie este JSON para a tabela 'posts' no Supabase para testar
  a página de post com todas as funcionalidades.
*/

[
  {
    "id": 1,
    "title": "Iniciando com React e Next.js",
    "description": "Um guia completo para iniciantes em React e Next.js",
    "content": "React é uma biblioteca JavaScript para criar interfaces de usuário. Next.js é um framework que facilita o desenvolvimento de aplicações React. Neste artigo, vamos explorar os conceitos fundamentais de ambas as tecnologias e como começar seu projeto. React usa componentes reutilizáveis que facilitam a manutenção do código. Next.js adiciona recursos como roteamento automático, renderização do lado do servidor e otimizações de performance. Vamos aprender passo a passo como configurar seu ambiente de desenvolvimento, criar componentes, gerenciar estado e muito mais.",
    "author": "João Silva",
    "category": "React",
    "tags": ["react", "nextjs", "javascript", "web"],
    "created_at": "2024-01-15T10:00:00Z",
    "updated_at": "2024-01-20T14:30:00Z",
    "published": true
  },
  {
    "id": 2,
    "title": "Tailwind CSS: Estilização Moderna",
    "description": "Aprenda a usar Tailwind CSS para criar designs modernos e responsivos",
    "content": "Tailwind CSS é um framework utilitário que facilita a criação de designs modernos sem sair do HTML. Diferentemente de frameworks tradicionais como Bootstrap, Tailwind oferece classes utilitárias que você pode usar diretamente no seu HTML. Isso torna o desenvolvimento mais rápido e oferece mais controle sobre o design final. Tailwind vem com uma paleta de cores bem pensada, sistema de espaçamento consistente e componentes prontos para uso. Você pode facilmente customizar o tema, adicionar plugins e criar designs responsivos com breakpoints predefinidos. Neste artigo, cobriremos desde a instalação até técnicas avançadas de customização.",
    "author": "Maria Santos",
    "category": "CSS",
    "tags": ["tailwind", "css", "design", "web"],
    "created_at": "2024-01-18T09:30:00Z",
    "updated_at": "2024-01-22T11:00:00Z",
    "published": true
  },
  {
    "id": 3,
    "title": "APIs RESTful com Node.js",
    "description": "Desenvolva APIs RESTful robustas usando Node.js e Express",
    "content": "Node.js revolucionou o desenvolvimento backend ao permitir usar JavaScript no servidor. Com Express, criar APIs RESTful torna-se extremamente simples. Uma API RESTful segue princípios arquiteturais específicos, utilizando métodos HTTP (GET, POST, PUT, DELETE) para operações CRUD. Express é um framework minimalista que facilita o roteamento, middleware e tratamento de requisições. Você aprenderá a criar endpoints, validar dados, implementar autenticação, usar bancos de dados e muito mais. Essas habilidades são fundamentais para qualquer desenvolvedor full stack moderno.",
    "author": "Carlos Oliveira",
    "category": "Backend",
    "tags": ["nodejs", "express", "api", "rest"],
    "created_at": "2024-01-20T14:00:00Z",
    "updated_at": "2024-01-25T16:45:00Z",
    "published": true
  },
  {
    "id": 4,
    "title": "Git e GitHub: Controle de Versão",
    "description": "Domine Git e GitHub para trabalhar em equipe de forma eficiente",
    "content": "Git é um sistema de controle de versão distribuído que permite rastrear mudanças no código. GitHub é uma plataforma que hospeda repositórios Git e oferece ferramentas colaborativas. Dominar Git é essencial para trabalhar em equipe, pois permite que múltiplos desenvolvedores trabalhem no mesmo projeto sem conflitos. Você aprenderá sobre commits, branches, merges, pull requests e muito mais. GitHub também oferece recursos como issues, projects e actions que facilitam o workflow de desenvolvimento. Este artigo cobre desde conceitos básicos até workflows avançados para projetos profissionais.",
    "author": "Ana Costa",
    "category": "DevOps",
    "tags": ["git", "github", "versionamento", "colaboração"],
    "created_at": "2024-01-22T11:15:00Z",
    "updated_at": "2024-01-26T13:20:00Z",
    "published": true
  }
]

/*
  INSTRUÇÕES PARA INSERIR NO SUPABASE:

  1. Acesse o Supabase Dashboard (https://app.supabase.com)
  2. Selecione seu projeto
  3. Vá para "SQL Editor" ou "Table Editor"
  4. Crie a tabela 'posts' com as seguintes colunas:
     - id (int, primary key)
     - title (text)
     - description (text)
     - content (text)
     - author (text)
     - category (text)
     - tags (array de text ou json)
     - created_at (timestamp)
     - updated_at (timestamp)
     - published (boolean)

  5. Copie e cole os dados acima
  6. Execute o INSERT

  SQL Example:
  
  INSERT INTO posts (id, title, description, content, author, category, tags, created_at, updated_at, published)
  VALUES 
  (1, 'Iniciando com React e Next.js', '...', '...', 'João Silva', 'React', '["react","nextjs"]', now(), now(), true),
  ...

  Ou use o painel visual do Supabase para inserir os dados manualmente.
*/

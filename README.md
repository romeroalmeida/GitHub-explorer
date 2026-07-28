# GitHub Explorer

Aplicação client-side para buscar usuários do GitHub e explorar seus repositórios
mais populares. Feita como resolução do desafio front-end da Desbravador Software.

## Funcionalidades

- Buscar um usuário do GitHub pelo login
- Ver os dados do usuário: avatar, nome, bio, seguidores, seguindo, e-mail e localização
- Listar os repositórios do usuário, ordenados por estrelas (decrescente) por padrão
- Reordenar a listagem por estrelas, nome ou data de atualização, em ordem crescente/decrescente
- Abrir a página de detalhes de um repositório (estrelas, forks, watchers, issues,
  linguagem, licença, tópicos e link externo para o GitHub)
- Estados de carregamento, erro e vazio tratados em todas as telas

## Tecnologias

- [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/) + [Vite](https://vite.dev/)
- [React Router](https://reactrouter.com/) para as rotas
- [TanStack Query](https://tanstack.com/query) para o consumo e cache da API
- [Axios](https://axios-http.com/) para as requisições
- [styled-components](https://styled-components.com/) para a estilização
- [lucide-react](https://lucide.dev/) para os ícones
- [Vitest](https://vitest.dev/) para os testes

O layout é responsivo, seguindo os mesmos breakpoints do Bootstrap
(576 / 768 / 992 / 1200 / 1400px).

## Como rodar

Requer Node.js 18 ou superior.

```bash
# instalar as dependências
npm install

# ambiente de desenvolvimento (http://localhost:5173)
npm run dev

# checagem de tipos
npm run typecheck

# build de produção
npm run build

# pré-visualizar o build
npm run preview

# rodar os testes
npm test
```

### Variável de ambiente (opcional)

Sem autenticação a API do GitHub limita a 60 requisições por hora por IP. Para
elevar esse limite, copie `.env.example` para `.env` e informe um token pessoal:

```
VITE_GITHUB_TOKEN=seu_token_aqui
```

## Arquitetura

O projeto segue uma organização **feature-based**: cada domínio é isolado em
`features/`, e só o que é genuinamente genérico vive em `shared/`.

```
src/
├── app/                  # Configuração da aplicação
│   ├── layout/           # Layout raiz (nav + outlet)
│   ├── providers/        # Providers globais (React Query, tema)
│   ├── routes/           # Definição das rotas
│   └── App.tsx
├── api/                  # Cliente Axios e endpoints da API
├── features/
│   ├── search/           # Busca (página inicial)
│   ├── users/            # Perfil do usuário + listagem/ordenação de repos
│   └── repositories/     # Detalhes de um repositório
├── shared/               # Reutilizável entre features
│   ├── components/       # SearchForm, Feedback (loading/erro/vazio)
│   ├── styles/           # Tema e estilos globais
│   ├── types/            # Tipos da API do GitHub
│   └── utils/            # Formatação, cores de linguagem, tratamento de erro
└── main.tsx
```

Cada feature expõe sua API pública por um barrel (`index.ts`) e cada componente/página
fica numa pasta com seu próprio `style.ts` (importado como `import * as S`). Imports
usam o alias `@/` em vez de caminhos relativos longos.

## Rotas

| Rota                             | Tela                              |
| -------------------------------- | --------------------------------- |
| `/`                              | Busca                             |
| `/user/:username`                | Dados do usuário + repositórios   |
| `/user/:username/repo/:repo`     | Detalhes do repositório           |

## API

Os dados vêm da API pública do GitHub:

- `GET /users/{username}` — dados do usuário
- `GET /users/{username}/repos` — repositórios do usuário
- `GET /repos/{owner}/{repo}` — detalhes de um repositório

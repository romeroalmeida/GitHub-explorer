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

- [React 19](https://react.dev/) + [Vite](https://vite.dev/)
- [React Router](https://reactrouter.com/) para as rotas
- [TanStack Query](https://tanstack.com/query) para o consumo e cache da API
- [Axios](https://axios-http.com/) para as requisições
- [styled-components](https://styled-components.com/) para a estilização
- [lucide-react](https://lucide.dev/) para os ícones

O layout é responsivo, seguindo os mesmos breakpoints do Bootstrap
(576 / 768 / 992 / 1200 / 1400px).

## Como rodar

Requer Node.js 18 ou superior.

```bash
# instalar as dependências
npm install

# ambiente de desenvolvimento (http://localhost:5173)
npm run dev

# build de produção
npm run build

# pré-visualizar o build
npm run preview

# rodar os testes
npm test
```

## Estrutura

```
src/
  api/            requisições à API do GitHub (axios)
  hooks/          hooks de dados com TanStack Query
  components/     componentes de UI (nav, busca, cartões, ordenação, feedback)
  pages/          telas: Home, Usuário e Repositório
  styles/         tema, estilos globais e helpers de media query
  utils/          formatação, cores das linguagens e ordenação (com testes)
```

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

As requisições são feitas sem autenticação, então estão sujeitas ao limite de
60 chamadas por hora que o GitHub impõe por IP.

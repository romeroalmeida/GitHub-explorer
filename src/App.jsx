import { Routes, Route } from 'react-router-dom'
import { Compass } from 'lucide-react'
import { Layout } from './components/Layout'
import { Home } from './pages/Home'
import { UserPage } from './pages/UserPage'
import { RepoPage } from './pages/RepoPage'
import { StateMessage, BackHomeLink } from './components/Feedback'

export function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="user/:username" element={<UserPage />} />
        <Route path="user/:username/repo/:repo" element={<RepoPage />} />
        <Route
          path="*"
          element={
            <StateMessage
              icon={<Compass size={26} />}
              title="Página não encontrada"
              description="O endereço que você tentou acessar não existe."
              action={<BackHomeLink />}
            />
          }
        />
      </Route>
    </Routes>
  )
}

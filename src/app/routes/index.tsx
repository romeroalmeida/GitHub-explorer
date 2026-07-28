import { createBrowserRouter } from 'react-router-dom'
import { Compass } from 'lucide-react'
import { RootLayout } from '../layout/RootLayout/RootLayout'
import { StateMessage, BackHomeLink } from '@/shared/components'
import { HomePage } from '@/features/search'
import { UserPage } from '@/features/users'
import { RepoPage } from '@/features/repositories'
import { FavoritesPage } from '@/features/favorites'

export const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/favorites', element: <FavoritesPage /> },
      { path: '/user/:username', element: <UserPage /> },
      { path: '/user/:username/repo/:repo', element: <RepoPage /> },
      {
        path: '*',
        element: (
          <StateMessage
            icon={<Compass size={26} />}
            title="Página não encontrada"
            description="O endereço que você tentou acessar não existe."
            action={<BackHomeLink />}
          />
        ),
      },
    ],
  },
])

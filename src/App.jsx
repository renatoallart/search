import {QueryClient, QueryClientProvider} from 'react-query'
import {ReactQueryDevtools} from 'react-query/devtools'
import { Home } from './pages/Home'

export  function App() {
  const queryClient = new QueryClient()
  return (
    <main className='h-screen w-full'>
      <QueryClientProvider client={queryClient}>
        <Home/>
        <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      
    </main>
  )
}

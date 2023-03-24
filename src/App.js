import { ChakraProvider } from '@chakra-ui/react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import { Router } from './routes/Routes';

function App() {
  const client = new QueryClient();
  return (
    <div className='App'>
      <ChakraProvider>
        <QueryClientProvider client={client}>
          <RouterProvider router={Router} />
        </QueryClientProvider>
      </ChakraProvider>
    </div>
  );
}

export default App;

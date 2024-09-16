import '@styles/main.css';
import { ChakraProvider } from '@chakra-ui/react';

const App = () => {
  return (
    <ChakraProvider>
      <div className="content">
        <h1 className="c-yellow-3">Rsbuild with React</h1>
        <p>Start building amazing things with Rsbuild.</p>
      </div>
    </ChakraProvider>
  );
};

export default App;

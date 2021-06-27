import GlobalStyle from './styles/globalStyles';
import Routes from './routes/routes';
import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <AuthProvider>
      <GlobalStyle/>
      <Routes/>
    </AuthProvider>
  );
}

export default App;

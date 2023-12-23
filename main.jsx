import ReactDOM from 'react-dom/client';
import App from '~/App.jsx';
import { theme } from '~/theme';
import { Experimental_CssVarsProvider as CssVarsProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <CssBaseline />
    <CssVarsProvider theme={theme}>
      <App />
    </CssVarsProvider>
  </>
);

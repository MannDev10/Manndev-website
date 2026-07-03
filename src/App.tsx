import './App.css';
import { ThemeProvider } from '@mui/material';
import theme from './utilities/theme';
import PageRoutes from './routes/router';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import GsapCursor from './components/cursor';

gsap.registerPlugin(useGSAP);

const App = () => {
  return (
    <div id='smooth-wrapper'>
      <ThemeProvider theme={theme}>
        <PageRoutes></PageRoutes>
      </ThemeProvider>
      <GsapCursor />
    </div>
  );
}

export default App;

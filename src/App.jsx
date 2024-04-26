import { useEffect } from 'react';
import {CssBaseline, ThemeProvider } from '@mui/material';
import theme from "./theme";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AuthScreen from './screens/AuthScreen';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';
import useStore from './store';
import AppLoader from './components/layout/AppLoader';
import PublicOnlyRoute from './components/utils/PublicOnlyRoute';
import BoardsScreen from './screens/BoardsScreen';
import PrivateRoute from './components/utils/PrivateRoute';

const App = () => {
  const {loader, setLoginStatus} = useStore();

  useEffect( ()=> {
   const unsub =  onAuthStateChanged( auth, (user) => {
       setLoginStatus(!!user);
    });

    return() => unsub();
  }, []);
  
if (loader) return < AppLoader />;

  return (
  <ThemeProvider theme = {theme}>
    <CssBaseline/>

    <BrowserRouter>
    <Routes>
      <Route path = "/" element= {< PublicOnlyRoute Component= {AuthScreen} />} />
      <Route path = "/boards" element= {< PrivateRoute Component={BoardsScreen} />}/>
    </Routes>

    </BrowserRouter>

  </ThemeProvider>
  );
};

export default App;
import ReactDOM from 'react-dom/client'
import './styles/tailwind.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NotFound from './404.tsx';
import Login from './components/common/usuario/Login.tsx';
import HomePremiere from './components/common/HomePelicula/HomePelicula.tsx';
import App from './components/App.tsx';
import Home from './components/common/Home/Home.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />}>
          <Route index element={<Home />} />
      </Route>
      <Route path='/peliculas' element={<App />}>
          <Route index element={<HomePremiere />}/>
      </Route>
      <Route path='/login' element={<Login />} />
      <Route path='*' element={<NotFound/>} />
    </Routes>
  </BrowserRouter>
)

import React from 'react';
import logo from './logo.svg';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SubjectPage from './components/SubjectPage';
import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';
import styles from './App.module.scss';
//theme
import 'primereact/resources/themes/lara-light-indigo/theme.css';

//core
import 'primereact/resources/primereact.min.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SubjectPage />}>
          {/* <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

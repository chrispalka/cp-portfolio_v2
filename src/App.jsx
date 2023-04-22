import { useState } from 'react';
import NavBar from './components/NavBar';
import styles from './assets/App.module.css';

function App() {
  return (
    <>
      <NavBar />
      <div className={styles.App}></div>
    </>
  );
}

export default App;

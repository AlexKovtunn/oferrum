import Header from './components/Header';
import Hero from './components/Hero';
import { useEffect, useState } from 'react';
import Education from './components/Education';
import ModalWindow from './components/ModalWindow';

function App() {
  const [burgerActive, setBurgerActive] = useState(false);
  const [modalActive, setModalActive] = useState(false);

  const onClickBurgerBtn = () => {
    setBurgerActive(!burgerActive);
  };

  const onClickModal = () => {
    setModalActive(!modalActive);
  };

  useEffect(() => {
    if (burgerActive || modalActive) {
      document.body.classList.add('body__hidden');
    } else {
      document.body.classList.remove('body__hidden');
    }

    return () => {
      document.body.classList.remove('body__hidden');
    };
  }, [burgerActive, modalActive]);

  return (
    <div
      className="wrapper"
      onClick={() => {
        if (burgerActive) {
          onClickBurgerBtn();
        } else if (modalActive) {
          onClickModal();
        }
      }}>
      <Header burgerActive={burgerActive} onClickBurgerBtn={onClickBurgerBtn} />

      <main className="main">
        <Hero onClickModal={onClickModal} />

        <Education />

        {modalActive && <ModalWindow onClickModal={onClickModal} />}
      </main>
    </div>
  );
}

export default App;

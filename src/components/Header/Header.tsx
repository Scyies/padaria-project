import { List } from 'phosphor-react';
import Logo from '/assets/logo.svg';

import './styles.css';

export function Header() {
  const corPrimaria = '#C3543E'
  return (
    <header>
      <img src={Logo} alt='Logo da padaria' />
      <button className='header-menu'>
        <List size={32} color={corPrimaria}/>
      </button>
    </header>
  );
}

import { List } from 'phosphor-react';
import Logo from '/assets/logo.svg';

export function Header() {
  return (
    <header>
      <img src={Logo} alt='Logo da padaria' />
      <List size={32} />
      {/* A minha ideia inicial para fazer a divisória seria como uma bg image */}
    </header>
  );
}

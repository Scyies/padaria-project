import { AddressBook, ForkKnife, House, Link, List } from 'phosphor-react';

export function Sidebar() {
  return (
    <aside>
      <List size={32} />
      <nav>
        <Link>
          <House size={18} /> home
        </Link>
        <Link>
          <ForkKnife size={18} /> cardápio
        </Link>
        <Link>
          <AddressBook size={18} /> contato
        </Link>
      </nav>
    </aside>
  );
}

import { MagnifyingGlass } from 'phosphor-react';
import { CardapioCard } from '../../components/CardapioCard/CardapioCard';
import { Categoria } from '../../components/Categoria/Categoria';

export function Cardapio() {
  return (
    <main>
      <h1>Cardapio</h1>
      <div>
        <div>
          <input type='text' />
          <MagnifyingGlass size={24} />
        </div>
        <div>
          <Categoria titulo='Pães' />
          <Categoria titulo='Cremes' />
        </div>
      </div>
      <section>
        <CardapioCard />
      </section>
    </main>
  );
}

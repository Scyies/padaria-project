import { Categoria } from '../Categoria/Categoria';
import pao from '/assets/imgpaoDefault.png';

export function CardapioCard() {
  return (
    <div>
      <img src={pao} alt='' />
      <div>
        <p>Tradicional</p>
        <p>Preparado com farinha de trigo nacional Anaconta</p>
        <div>
          <Categoria titulo='Pão' />
          <p>R$ 16/ R$ 9</p>
        </div>
      </div>
    </div>
  );
}

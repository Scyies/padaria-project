import { CardapioCard } from '../../components/CardapioCard/CardapioCard';

export function Produto() {
  return (
    <main>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
        praesentium veritatis, provident corrupti natus consequatur rerum quod
        placeat aliquam autem magni adipisci quae aspernatur.
      </p>
      <CardapioCard />
      <form>
        <div>
          <label htmlFor='nome'>Seu Nome</label>
          <input type='text' id='nome' />
        </div>
        <div>
          <label htmlFor='whatsapp'>WhatsApp</label>
          <input type='text' id='whatsapp' />
        </div>
        <select name='' id=''>
          <option value='' selected>
            Tamanho
          </option>
          <option value=''>Mini</option>
          <option value=''>Normal</option>
        </select>
        <div>
          <label htmlFor='quantidade'>Quantidade</label>
          <input type='number' id='quantidade' />
        </div>
        <div>
          <p>Valor final</p>
          <p>R$ 50,00</p>
        </div>
        <div>
          <input type='checkbox' id='novidades' />
          <label htmlFor='novidades'>
            Gostaria de receber novidades via WhatsApp?
          </label>
        </div>
        <button>Finalizar pedido</button>
      </form>
    </main>
  );
}

import { InstagramLogo, WhatsappLogo } from 'phosphor-react';
import { Card } from '../../components/Card/Card';

export function Home() {
  return (
    <main>
      <section>
        <p>
          Pães deliciosos com tamanhos para todos os gostos.Pão mini entre 360g
          / 400g.Pães normais 780g / 800g.Como também porções avulsas de cremes
          de queijo.
        </p>
        <img src='' alt='Gif queijo derretido no pão' />
      </section>
      <section>
        <h2>Aqui estão três recomendações da casa</h2>
        <Card />
      </section>
      <section>
        <img
          src='https://images.pexels.com/photos/372851/pexels-photo-372851.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
          alt='Foto sobre a padaria'
        />
        <p>Amorana</p>
        <p>PAIN AU LEVAIN</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium,
          illo esse perspiciatis minima explicabo laboriosam quam illum commodi
          assumenda.
        </p>
      </section>
      <section>
        <p>Gostaria de entrar e contato?</p>
        <InstagramLogo size={32} />
        <WhatsappLogo size={32} />
      </section>
    </main>
  );
}

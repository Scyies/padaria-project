import pao from '/assets/imgpaoDefault.png';

export function Card() {
  return (
    <div>
      <img src={pao} alt='Imagem do pão' />
      <p>Tradicional</p>
    </div>
  );
}

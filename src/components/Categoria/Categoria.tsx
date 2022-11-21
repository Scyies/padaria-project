interface Props {
  titulo: string;
}

export function Categoria({ titulo }: Props) {
  return <p>{titulo}</p>;
}

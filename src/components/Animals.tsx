import type { Animal } from 'client'

interface Props {
  animals: Animal[] | undefined;
}


export default function Animals({
  animals
}: Props): JSX.Element {
  return (
    <>
      {animals.map((animal) => (
        <>
          <h2>{animal.name}</h2>
          <p>{ animal.dangerous }</p>
          <p>{animal.description}</p>
        </>
      ))}
    </>
  )
}
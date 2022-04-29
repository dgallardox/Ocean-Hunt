import type { Ocean } from 'client'

interface Props {
  oceans: Ocean[] | undefined
}

export default function Oceans({
  oceans
}: Props): JSX.Element {
  return (
    <>
      {oceans.map((ocean) => (
        <h2>{ocean.name}</h2>
      ))}
    </>
  )
}

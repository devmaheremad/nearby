import { Bounds, Coordinates } from "./app.types"

export type MapTypesProps = {
  coordinates: Coordinates,
  setBounds: React.Dispatch<React.SetStateAction<Bounds>>,
  setCoordinates: React.Dispatch<React.SetStateAction<Coordinates>>,
}
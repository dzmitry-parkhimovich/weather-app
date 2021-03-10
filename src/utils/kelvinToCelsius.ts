export default function kelvinToCelsius(temp: number): number {
  return Number((temp - 273.15).toFixed(2))
}
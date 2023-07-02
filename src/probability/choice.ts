import { Probabilistic } from "~/probability"

/**
 * Chooses a value from an array of probabilistic values.
 *
 * @param values The probabilistic values to choose from.
 */
export function choice<T extends object>(values: Probabilistic<T>[]): T {
  const total = values.reduce(
    (total, { probability }) => total + probability,
    0,
  )
  const random = Math.random() * total
  let sum = 0

  for (const value of values) {
    sum += value.probability
    if (random < sum) {
      return value
    }
  }

  throw new Error("This should never happen")
}

/**
 * Adds a probability field to an object type.
 */
export type Probabilistic<T extends object> = T & { probability: number }

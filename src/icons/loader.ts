import { Icon } from "~/icons"

export type IconLoader = {
  /**
   * The prefix for the icons.
   */
  prefix: string

  /**
   * Loads the icon with the given name.
   *
   * @param name The name of the icon.
   * @returns A promise that resolves to the icon.
   */
  loadIcon: (name: string) => Promise<Icon>
}

import { IconLoader } from "~/icons"

// The prefix for Lucide icons.
const prefix = "lucide-"

/**
 * A loader for the Lucide icon set.
 */
export const lucideLoader: IconLoader = {
  prefix,

  loadIcon: async (name: string) => {
    const module = await import(
      `lucide-static/icons/${name.substring(prefix.length)}.svg`
    )

    return { src: module.default.src }
  },
}

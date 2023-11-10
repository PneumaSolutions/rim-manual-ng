import { persistentAtom } from "@nanostores/persistent"
import { useStore } from "@nanostores/preact"
import type { ComponentChild, FunctionComponent } from "preact"

export type Platform = "windows" | "macOS"

// platform detection function
function getPlatform(): Platform {
  try {
    const userAgent = navigator.userAgent.toLowerCase()

    if (userAgent.indexOf("win") !== -1) {
      return "windows"
    } else if (userAgent.indexOf("mac") !== -1) {
      return "macOS"
    } else {
      return "windows"
    }
  } catch (e) {
    return "windows"
  }
}

const platform = persistentAtom("docsPlatform", getPlatform())

interface ChildrenProps {
  children: ComponentChild
}

export const Windows: FunctionComponent<ChildrenProps> = ({ children }) => {
  const $platform = useStore(platform)
  return <div hidden={$platform != "windows"}>{children}</div>
}

export const MacOS: FunctionComponent<ChildrenProps> = ({ children }) => {
  const $platform = useStore(platform)
  return <div hidden={$platform != "macOS"}>{children}</div>
}

export const PlatformSwitcher = () => {
  const $platform = useStore(platform)

  const setWindows = () => {
    platform.set("windows")
  }

  const setMacOS = () => {
    platform.set("macOS")
  }

  return (
    <div className="platform-switcher">
      <button
        type="button"
        onClick={setWindows}
        hidden={$platform === "windows"}
      >
        Switch to Windows content
      </button>
      <button type="button" onClick={setMacOS} hidden={$platform === "macOS"}>
        Switch to macOS content
      </button>
    </div>
  )
}

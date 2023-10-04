import { FC, ReactNode, createContext, useContext, useState } from 'react'
import useLocalStorageState from 'use-local-storage-state'

export type Platform = 'windows' | 'macOS'

const PlatformContext = createContext<Platform>('windows')

interface ChildrenProps {
  children: ReactNode
}

export const Windows: FC<ChildrenProps> = ({ children }) => {
  const platform = useContext(PlatformContext)
  return <div hidden={platform != 'windows'}>{children}</div>
}

export const MacOS: FC<ChildrenProps> = ({ children }) => {
  const platform = useContext(PlatformContext)
  return <div hidden={platform != 'macOS'}>{children}</div>
}

// platform detection function
function getPlatform(): Platform {
  try {
    const userAgent = navigator.userAgent.toLowerCase()

    if (userAgent.indexOf('win') !== -1) {
      return 'windows'
    } else if (userAgent.indexOf('mac') !== -1) {
      return 'macOS'
    } else {
      return 'windows'
    }
  } catch (e) {
    return 'windows'
  }
}

const SetPlatformContext = createContext<(platform: Platform) => void>((platform) => {})

export const PlatformProvider: FC<ChildrenProps> = ({ children }) => {
  const [platform, setPlatform] = useLocalStorageState('platform', { defaultValue: getPlatform() })

  return (
    <SetPlatformContext.Provider value={setPlatform}>
      <PlatformContext.Provider value={platform}>{children}</PlatformContext.Provider>
    </SetPlatformContext.Provider>
  )
}

export const PlatformSwitcher = () => {
  const platform = useContext(PlatformContext)
  const setPlatform = useContext(SetPlatformContext)

  const setWindows = () => {
    setPlatform('windows')
  }

  const setMacOS = () => {
    setPlatform('macOS')
  }

  return (
    <div className="platform-switcher">
      <button type="button" onClick={setWindows} hidden={platform === 'windows'}>
        Switch to Windows content
      </button>
      <button type="button" onClick={setMacOS} hidden={platform === 'macOS'}>
       Switch to macOS content
      </button>
    </div>
  )
}

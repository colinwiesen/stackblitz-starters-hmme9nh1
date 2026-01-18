'use client'

import React from 'react'
import { useServerInsertedHTML } from 'next/navigation'
import { TamaguiProvider as BaseTamaguiProvider } from 'tamagui'
import tamaguiConfig from '../tamagui.config' // Adjust path if your config is elsewhere

// Optional: If you want dark/light mode support
import { NextThemeProvider, useRootTheme } from '@tamagui/next-theme'

export function TamaguiProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useRootTheme()

  useServerInsertedHTML(() => {
    // This helps with SSR styling injection (optional but recommended)
    return <></>
  })

  return (
    <BaseTamaguiProvider config={tamaguiConfig} defaultTheme={theme}>
      <NextThemeProvider
        onChangeTheme={setTheme as any}
        skipNextHead // Required for App Router
      >
        {children}
      </NextThemeProvider>
    </BaseTamaguiProvider>
  )
}
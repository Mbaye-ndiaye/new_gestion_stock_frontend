import { useState, useEffect } from 'react'

type Theme = 'light' | 'dark'

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(() => {
    // Récupérer le thème depuis localStorage ou utiliser la préférence système
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme') as Theme
      if (savedTheme) return savedTheme
      
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
    }
    return 'light'
  })

  useEffect(() => {
    const root = window.document.documentElement
    
    // Supprimer les classes de thème précédentes
    root.classList.remove('light', 'dark')
    
    // Ajouter la classe du thème actuel
    root.classList.add(theme)
    
    // Sauvegarder dans localStorage
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light')
  }

  return { theme, toggleTheme }
}

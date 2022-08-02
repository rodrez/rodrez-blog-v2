import ThemeSwitch from '@components/ThemeSwitch'
import { useTheme } from 'next-themes'

export default function Tester() {
  const { theme, setTheme, resolvedTheme } = useTheme()

  return (
    <div>
      <ThemeSwitch
        onChange={() => setTheme(theme === 'light' ? 'dark' : 'light')}
        checked={theme === 'light'}
        sunColor={'#ffc107'}
        moonColor={'#1B59F7'}
      />
    </div>
  )
}

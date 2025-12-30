import { createFileRoute } from '@tanstack/react-router'
import { ComponentExample } from '@/components/component-example'
import { Navbar } from '@/components/web/navbar'

export const Route = createFileRoute('/')({ component: App })

function App() {
  return (
    <div>
      <Navbar />
      <ComponentExample />
    </div>
  )
}

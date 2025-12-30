import { buttonVariants } from '@/components/ui/button'
import { createFileRoute, Link, Outlet } from '@tanstack/react-router'
import { ArrowLeft } from 'lucide-react'

export const Route = createFileRoute('/_auth')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="min-h-screen">
      <div className="absolute top-8 left-8">
        <Link to="/" className={buttonVariants({ variant: 'secondary' })}>
          <ArrowLeft className="size-4" />
          Back to home
        </Link>
      </div>
      <div className="flex min-h-screen items-center justify-center">
        <Outlet />
      </div>
    </div>
  )
}

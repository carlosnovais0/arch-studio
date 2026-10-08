import type { ComponentType } from "react"
import { createBrowserRouter } from "react-router"
import { RouterProvider } from "react-router/dom"

import { Layout } from "@/components/layout/Layout"
import HomePage from "@/pages/HomePage"
import NotFoundPage from "@/pages/NotFoundPage"

/**
 * Carrega cada página sob demanda. O React Router resolve o módulo antes de concluir a
 * navegação, então a transição de saída da página atual não é interrompida.
 */
const page = (load: () => Promise<{ default: ComponentType }>) => async () => {
  const module = await load()
  return { Component: module.default }
}

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "sobre", lazy: page(() => import("@/pages/AboutPage")) },
      { path: "projetos", lazy: page(() => import("@/pages/ProjectsPage")) },
      { path: "projetos/:slug", lazy: page(() => import("@/pages/ProjectDetailPage")) },
      { path: "servicos", lazy: page(() => import("@/pages/ServicesPage")) },
      { path: "blog", lazy: page(() => import("@/pages/BlogPage")) },
      { path: "blog/:slug", lazy: page(() => import("@/pages/BlogPostPage")) },
      { path: "contato", lazy: page(() => import("@/pages/ContactPage")) },
      { path: "*", element: <NotFoundPage /> },
    ],
  },
])

export default function App() {
  return <RouterProvider router={router} />
}

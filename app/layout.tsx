import React from "react"
import '../styles/globals.css'
import { Navbar } from "../components/components"


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head>
        <title>Dragon</title>
      </head>
      <body className="">
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  )
}

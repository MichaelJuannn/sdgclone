import React from "react"
import Link from "next/link"
import '../styles/globals.css'
import Image from "next/image"
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

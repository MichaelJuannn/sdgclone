import React from "react"
import '../styles/globals.css'


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
      <body className="">{children}</body>
    </html>
  )
}

import React from "react"
import Link from "next/link"
import '../styles/globals.css'
import Image from "next/image"


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
        <div className="navbar bg-slate-500">
          <div className="flex-1">
            <Link href={"#"} className="btn-ghost normal-case text-xl">
              <Image src="/Lambang-UM.png" alt="dragon" width={50} height={50} />
            </Link>
          </div>
          <div className="flex-none">
            <ul className="menu menu-horizontal p-0">
              <li><a>Home</a></li>
              <li tabIndex={0}>
                <a>Activity</a>
                <ul className="p-2 bg-base-100">
                  <li><a>Learning Programs</a></li>
                  <li><a>Researches and Inovation</a></li>
                  <li><a>Community Engangement</a></li>
                  <li><a>Operations</a></li>
                </ul>
              </li>
              <li tabIndex={0}>
                <a>Partnership</a>
                <ul className="p-2 bg-base-100">
                  <li><a href="#">Goverment</a></li>
                  <li><a href="#">Non-Goverment Organizations</a></li>
                  <li><a href="#">Independent Partnership</a></li>
                </ul>
              </li>
              <li><a>Policy</a></li>
              <li tabIndex={0}>
                <a>Document</a>
                <ul className="p-2 bg-base-100">
                  <li><a href="#">Sustainability Reports</a></li>
                  <li><a href="#">University Reports</a></li>
                  <li><a href="#">Green Campus Reports</a></li>
                </ul>
              </li>
              <li><a>Faculty</a></li>
              <li><a>News</a></li>
              <li><a>Contact</a></li>
            </ul>
          </div>
        </div>
        <main>{children}</main>
      </body>
    </html>
  )
}

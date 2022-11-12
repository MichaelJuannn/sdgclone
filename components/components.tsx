
import Image from "next/image"
import Link from "next/link"

export function Hero() {

    return (
        <div className="hero min-h-max" id="drone">
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content p-36">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Sustainability Development Goals</h1>
                    <h2 className="mb-5 text-3xl">State University of Malang</h2>
                    <button className="btn btn-primary">Learn More</button>
                </div>
            </div>
        </div>
    )
}
export function Navbar() {
    return (
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
    )
}
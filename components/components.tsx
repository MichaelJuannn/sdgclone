
import Image from "next/image"
import Link from "next/link"

export function Navbar(): JSX.Element {
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

export function Hero(): JSX.Element {

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

export function Information(): JSX.Element {

    return (
        <div className="grid grid-rows-2 grid-flow-col gap-4 p-6 justify-items-center">
            <div className="row-span-2 text-5xl w-1/3 font-bold">What Is Sustainable Development Goals</div>
            <div className="col-span-2 text-elipsis text-lg">
                The Sustainable Development Goals (SDGs) are a
                global action plan agreed by world leaders, including Indonesia, to end poverty, reduce inequality and
                protect the environment. The SDGs contain 17 Goals and 169 Targets that are expected to be achieved by 2030.
            </div>
            <div className="text-4xl grid-flow-col text-center font-bold">
                <div>Target</div>
                <div>169</div>
            </div>
            <div className="text-4xl grid-flow-col text-center font-bold">
                <div>Goals</div>
                <div>17</div>
            </div>
        </div>
    )
}

export function SdgTable(): JSX.Element {
    return (
        <div className="">
            <div className="text-center font-bold text-5xl p-4">Sustainability Development Goals</div>
            <div className="grid grid-cols-6 justify-items-center gap-2">
                <Sdgs index={1} />
                <Sdgs index={2} />
                <Sdgs index={3} />
                <Sdgs index={4} />
                <Sdgs index={5} />
                <Sdgs index={6} />
                <Sdgs index={7} />
                <Sdgs index={8} />
                <Sdgs index={9} />
                <Sdgs index={10} />
                <Sdgs index={11} />
                <Sdgs index={12} />
                <Sdgs index={13} />
                <Sdgs index={14} />
                <Sdgs index={15} />
                <Sdgs index={16} />
                <Sdgs index={17} />
                <Sdgs index={18} />
            </div>
        </div>
    )
}

export function Sdgs(props: { index: number }): JSX.Element {

    return (
        <div>
            <Image src={`/sdgicon/E-WEB-Goal-${props.index}.png`} width="150" height="150" alt={"image"} id={`goals ${props.index}`}></Image>
        </div>
    )
}
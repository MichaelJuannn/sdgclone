import { Hero, Information, Reports, SdgTable } from "../components/components"

export default function Home() {

    return (
        <div>
            <div className="">
                <Hero />
            </div>
            <div className="m-2">
                <Information />
            </div>
            <div className="m-2">
                <SdgTable />
            </div>
            <div className="flex m-2 justify-evenly">
                <Reports title="University Reports" description="Annual Reports of Our University" />
                <Reports title="Green Campus Reports" description="Annual Reports of Our University" />
                <Reports title="SDG Reports" description="Annual Reports of Our University" />
            </div>
        </div >
    )
}
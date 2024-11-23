import Link from "next/link";
import Employee from "../../components/tabledata";

export default function Home() {
    return (
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <div className="overflow-x-auto">
                <div className="flex flex-col gap-8 row-start-2 items-center sm:items-start mt-5">
                    <h1 className="text-3xl font-bold">Employees</h1>
                </div>
                <div className="mt-5 items-center w-full text-center">
                    <Link href="/employee/create" className="btn btn-primary">Create</Link>
                </div>
                <Employee />
            </div>
        </div>
    );
}

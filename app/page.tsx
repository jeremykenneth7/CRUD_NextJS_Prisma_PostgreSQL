import Link from "next/link";

const Home = () => {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div className="overflow-x-auto">
        <div className="mb-2 w-full text-right">
          <Link href="employee" className="btn btn-primary">
            Create
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;

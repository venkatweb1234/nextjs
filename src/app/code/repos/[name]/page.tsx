import Repo from "@/components/Repo";
import RepoDirs from "@/components/RepoDirs";
import Link from "next/link";
import { Suspense } from "react";

const RepoPage = ({ params: { name } }: any) => {
  return (
    <div className="card">
      <Link href="/code/repos" className="btn btn-back">
        Back To Repositories
      </Link>
      <Suspense fallback={<div>Loading repo...</div>}>
        <Repo name={name} />
      </Suspense>
      <Suspense fallback={<div>Loading Directories...</div>}>
        <RepoDirs name={name} />
      </Suspense>
    </div>
  );
};

export default RepoPage;

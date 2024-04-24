import logo from "@/assets/logo.png";
import { auth } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

export default function Home() {
  const { userId } = auth();

  if (userId) redirect("/home");

  return (
    <main className="flex h-screen flex-col items-center justify-center gap-5">
      <div className="flex items-center gap-4">
        <Image src={logo} alt="FixMyRide" width={100} height={100} />
        <span className="text-4xl font-extrabold tracking-tight lg:text-5xl">
          FixMyRide
        </span>
      </div>
      <p className="max-w-prose text-center">
        An intelligent website with AI integration, built with OpenAI,
        AstraDB, Next.js, Clerk, and more.
      </p>
      <Link href="/home">
        <button className="bg-cyan-400 hover:bg-cyan-500 text-white font-bold py-2 px-6 rounded-lg">
          Open
        </button>
      </Link>
    </main>
  );
}

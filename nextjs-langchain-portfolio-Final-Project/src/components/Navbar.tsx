import Link from "next/link";
import AIChatButton from "./AIChatButton";
import ThemeToggle from "./ThemeToggle";
import { UserButton } from "@clerk/nextjs";

export default function Navbar() {
  return (
    <header className="sticky top-0 bg-background">
      <div className="mx-auto flex max-w-4xl flex-wrap justify-between gap-3 px-3 py-4">
        <nav className="space-x-4 font-medium">
          <Link href="/home">Home</Link>
          <Link href="/commoncarcomplaints">Common Car Complaints</Link>
          <Link href="/mostreliablebrands">Most Reliable Brands</Link>
          <Link href="/cars">Cars</Link>
          <Link href="/forum">Forum</Link>
          <Link href="/maintenance">Maintenance</Link>
        </nav>
        <div className="flex items-center gap-4">
          <UserButton afterSignOutUrl="/" />
          <AIChatButton />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}

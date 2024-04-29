import { H1 } from "@/components/ui/H1";
import { H2 } from "@/components/ui/H2";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Rivian",
  description: "Rivian overview and model comparison, highlighting the newest electric vehicles on the market.",
};

export default function Rivian() {
  return (
    <section className="space-y-8">
      <div className="max-w-3xl mx-auto">
        <H1>Rivian Overview</H1>
        <section className="space-y-6">
          <H2>Rivian Model Line Comparison</H2>
          <p className="mb-4">
            FixMyRide has currently no complaints on file for Rivian vehicles. <br />
            Known models include the 2022 R1T, 2023 R1T, 2022 R1S, and the 2023 R1S. <br />
            We&apos;re always looking to gather more information on new players in the auto industry, especially in the EV sector.
          </p>
          <p>Click on a model below for more information or to report an issue:</p>
          <ul className="list-disc list-inside space-y-1">
            <li><Link href="/rivian/models/R1T">R1T</Link></li>
            <li><Link href="/rivian/models/R1S">R1S</Link></li>
          </ul>
        </section>
        <section className="space-y-6">
          <H2>Report Your Rivian Problems</H2>
          <p>
            As a newer entrant into the automotive world, Rivian&apos;s track record is still being established. <br />
            If you own a Rivian and have encountered issues, please help the community by reporting your problems. <br />
            Your insights not only help others make informed decisions but also contribute to improving vehicle quality.
          </p>
          <p>
            <Link href="/report-problem">
              <a className="text-blue-500 hover:underline">Report a problem with your vehicle here.</a>
            </Link>
          </p>
        </section>
      </div>
    </section>
  );
}

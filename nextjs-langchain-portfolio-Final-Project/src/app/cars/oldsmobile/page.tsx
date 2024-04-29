import { H1 } from "@/components/ui/H1";
import { H2 } from "@/components/ui/H2";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Oldsmobile",
  description: "Oldsmobile overview and model comparison.",
};

export default function Oldsmobile() {
  return (
    <section className="space-y-8">
      <div className="max-w-3xl mx-auto">
        <H1>Oldsmobile Overview</H1>
        <section className="space-y-6">
          <H2>Oldsmobile Model Line Comparison</H2>
          <p className="mb-4">
            <strong>Worst Model Year:</strong> 2001 <br />
            <strong>Most Complaints:</strong> Oldsmobile Alero <br />
            FixMyRide has 1,607 complaints on file for Oldsmobile vehicles. <br />
            The worst models are the 2001 Alero, 2003 Alero, 2002 Alero, 2000 Alero, and the 1999 Alero.
          </p>
          <p>Click on a model below for more information:</p>
          <ul className="list-disc list-inside space-y-1">
            <li><Link href="/oldsmobile/models/Alero">Alero</Link> - 1,073 complaints</li>
            {/* Additional models can be added as needed */}
          </ul>
        </section>
        <section className="space-y-6">
          <H2>Worst Reported Oldsmobile Problems</H2>
          <ol className="list-decimal list-inside space-y-4">
            <li>
              <strong>#1: Turns Over But Won&apos;t Start</strong> <br />
              <span>2001 Alero</span> <br />
              <span>Average Cost to Fix: $400</span> <br />
              <span>Average Mileage: 92,000 miles</span>
            </li>
            <li>
              <strong>#2: Car Will Not Start, Security Light Is Flashing</strong> <br />
              <span>2002 Alero</span> <br />
              <span>Average Cost to Fix: $400</span> <br />
              <span>Average Mileage: 88,000 miles</span>
            </li>
            <li>
              <strong>#3: Blown Head Gasket, Eventual Engine Failure</strong> <br />
              <span>1997 Aurora</span> <br />
              <span>Average Cost to Fix: $5,900</span> <br />
              <span>Average Mileage: 79,000 miles</span>
            </li>
            {/* Additional reported problems can be added as needed */}
          </ol>
        </section>
      </div>
    </section>
  );
}

import { H1 } from "@/components/ui/H1";
import { H2 } from "@/components/ui/H2";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pontiac",
  description: "Pontiac overview and model comparison.",
};

export default function Pontiac() {
  return (
    <section className="space-y-8">
      <div className="max-w-3xl mx-auto">
        <H1>Pontiac Overview</H1>
        <section className="space-y-6">
          <H2>Pontiac Model Line Comparison</H2>
          <p className="mb-4">
            <strong>Worst Model Year:</strong> 2006 <br />
            <strong>Most Complaints:</strong> Pontiac Grand Am <br />
            FixMyRide has 6,577 complaints on file for Pontiac vehicles. <br />
            The worst models are the 2006 G6, 2007 G6, 2008 G6, 2005 G6, and the 2004 Grand Am.
          </p>
          <p>Click on a model below for more information:</p>
          <ul className="list-disc list-inside space-y-1">
            <li><Link href="/pontiac/models/G6">G6</Link> - 1,410 complaints</li>
            <li><Link href="/pontiac/models/Grand Am">Grand Am</Link> - 1,700 complaints</li>
            {/* Additional model links can be added as needed */}
          </ul>
        </section>
        <section className="space-y-6">
          <H2>Worst Reported Pontiac Problems</H2>
          <ol className="list-decimal list-inside space-y-4">
            <li>
              <strong>#1: Power Steering Is Faulty</strong> <br />
              <span>2006 G6</span> <br />
              <span>Average Cost to Fix: $1,100</span> <br />
              <span>Average Mileage: 72,000 miles</span>
            </li>
            <li>
              <strong>#2: Electric Power Steering Going Out</strong> <br />
              <span>2005 G6</span> <br />
              <span>Average Cost to Fix: $600</span> <br />
              <span>Average Mileage: 73,000 miles</span>
            </li>
            <li>
              <strong>#3: Clunk Or Pop Noise When Turning</strong> <br />
              <span>2006 G6</span> <br />
              <span>Average Cost to Fix: $600</span> <br />
              <span>Average Mileage: 66,000 miles</span>
            </li>
            {/* Additional reported problems can be added as needed */}
          </ol>
        </section>
      </div>
    </section>
  );
}

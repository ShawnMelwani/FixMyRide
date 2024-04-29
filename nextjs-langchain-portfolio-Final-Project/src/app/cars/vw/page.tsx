import { H1 } from "@/components/ui/H1";
import { H2 } from "@/components/ui/H2";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Volkswagen",
  description: "Volkswagen overview and model comparison.",
};

export default function Volkswagen() {
  return (
    <section className="space-y-8">
      <div className="max-w-3xl mx-auto">
        <H1>Volkswagen Overview</H1>
        <section className="space-y-6">
          <H2>Volkswagen Model Line Comparison</H2>
          <p className="mb-4">
            <strong>Worst Model Year:</strong> 2010 <br />
            <strong>Most Complaints:</strong> Volkswagen Jetta <br />
            FixMyRide has 4,597 complaints on file for Volkswagen vehicles. <br />
            The worst models are the 2019 Jetta, 2003 Passat, 2009 Jetta, 2006 Jetta, and the 2014 Jetta.
          </p>
          <p>Click on a model below for more information:</p>
          <ul className="list-disc list-inside space-y-1">
            <li><Link href="/volkswagen/models/Jetta">Jetta</Link> - 1,386 complaints</li>
            <li><Link href="/volkswagen/models/Passat">Passat</Link> - 1,043 complaints</li>
            <li><Link href="/volkswagen/models/Tiguan">Tiguan</Link> - 467 complaints</li>
            {/* Add more model links as needed */}
          </ul>
        </section>
        <section className="space-y-6">
          <H2>Worst Reported Volkswagen Problems</H2>
          <ol className="list-decimal list-inside space-y-4">
            <li>
              <strong>#1: Grinding Noise From Transmission</strong> <br />
              <span>2019 Jetta</span> <br />
              <span>Average Cost to Fix: $26,000</span> <br />
              <span>Average Mileage: 17,000 miles</span>
            </li>
            <li>
              <strong>#2: Oil Sludge Resulting In Engine Failure</strong> <br />
              <span>2002 Passat</span> <br />
              <span>Average Cost to Fix: $2,800</span> <br />
              <span>Average Mileage: 92,000 miles</span>
            </li>
            <li>
              <strong>#3: Engine Failure From Oil Sludge</strong> <br />
              <span>2003 Passat</span> <br />
              <span>Average Cost to Fix: $2,800</span> <br />
              <span>Average Mileage: 79,000 miles</span>
            </li>
            {/* Add more reported problems as needed */}
          </ol>
        </section>
      </div>
    </section>
  );
}

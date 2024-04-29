import { H1 } from "@/components/ui/H1";
import { H2 } from "@/components/ui/H2";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Kia",
  description: "Kia overview and model comparison.",
};

export default function Kia() {
  return (
    <section className="space-y-8">
      <div className="max-w-3xl mx-auto">
        <H1>Kia Overview</H1>
        <section className="space-y-6">
          <H2>Kia Model Line Comparison</H2>
          <p className="mb-4">
            <strong>Worst Model Year:</strong> 2013 <br />
            <strong>Most Complaints:</strong> Kia Sorento <br />
            FixMyRide has 4,159 complaints on file for Kia vehicles. <br />
            The worst models are the 2016 Sorento, 2013 Optima, 2014 Sorento, 2013 Sorento, and the 2015 Sorento.
          </p>
          <p>Click on a model below for more information:</p>
          <ul className="list-disc list-inside space-y-1">
            <li><Link href="/kia/models/Sorento">Sorento</Link> - 1,186 complaints</li>
            <li><Link href="/kia/models/Optima">Optima</Link> - 776 complaints</li>
            <li><Link href="/kia/models/Forte">Forte</Link> - 270 complaints</li>
            {/* Add more model links as needed */}
          </ul>
        </section>
        <section className="space-y-6">
          <H2>Worst Reported Kia Problems</H2>
          <ol className="list-decimal list-inside space-y-4">
            <li>
              <strong>#1: Engine Failure</strong> <br />
              <span>2016 Sorento</span> <br />
              <span>Average Cost to Fix: $7,100</span> <br />
              <span>Average Mileage: 91,000 miles</span>
            </li>
            <li>
              <strong>#2: Engine Failure</strong> <br />
              <span>2015 Sorento</span> <br />
              <span>Average Cost to Fix: $6,800</span> <br />
              <span>Average Mileage: 86,000 miles</span>
            </li>
            <li>
              <strong>#3: Engine Failure</strong> <br />
              <span>2011 Optima</span> <br />
              <span>Average Cost to Fix: $4,600</span> <br />
              <span>Average Mileage: 103,000 miles</span>
            </li>
            {/* Add more reported problems as needed */}
          </ol>
        </section>
      </div>
    </section>
  );
}

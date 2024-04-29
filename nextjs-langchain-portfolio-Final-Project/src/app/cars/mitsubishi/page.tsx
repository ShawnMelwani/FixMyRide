import { H1 } from "@/components/ui/H1";
import { H2 } from "@/components/ui/H2";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mitsubishi",
  description: "Mitsubishi overview and model comparison.",
};

export default function Mitsubishi() {
  return (
    <section className="space-y-8">
      <div className="max-w-3xl mx-auto">
        <H1>Mitsubishi Overview</H1>
        <section className="space-y-6">
          <H2>Mitsubishi Model Line Comparison</H2>
          <p className="mb-4">
            <strong>Worst Model Year:</strong> 2015 <br />
            <strong>Most Complaints:</strong> Mitsubishi Outlander <br />
            FixMyRide has 709 complaints on file for Mitsubishi vehicles. <br />
            The worst models are the 2015 Mirage, 2015 Outlander Sport, 2014 Outlander, 2018 Outlander, and the 2011 Lancer.
          </p>
          <p>Click on a model below for more information:</p>
          <ul className="list-disc list-inside space-y-1">
            <li><Link href="/mitsubishi/models/Outlander">Outlander</Link> - 147 complaints</li>
            <li><Link href="/mitsubishi/models/Lancer">Lancer</Link> - 88 complaints</li>
            <li><Link href="/mitsubishi/models/Mirage">Mirage</Link> - 66 complaints</li>
            {/* Add more model links as needed */}
          </ul>
        </section>
        <section className="space-y-6">
          <H2>Worst Reported Mitsubishi Problems</H2>
          <ol className="list-decimal list-inside space-y-4">
            <li>
              <strong>#1: Premature Brake Wear</strong> <br />
              <span>2015 Mirage</span> <br />
              <span>Average Cost to Fix: $900</span> <br />
              <span>Average Mileage: 13,000 miles</span>
            </li>
            <li>
              <strong>#2: Transmission Failure</strong> <br />
              <span>2001 Eclipse</span> <br />
              <span>Average Cost to Fix: $2,200</span> <br />
              <span>Average Mileage: 82,000 miles</span>
            </li>
            <li>
              <strong>#3: Premature Brake Wear</strong> <br />
              <span>2018 Outlander</span> <br />
              <span>Average Cost to Fix: $600</span> <br />
              <span>Average Mileage: 21,000 miles</span>
            </li>
            {/* Add more reported problems as needed */}
          </ol>
        </section>
      </div>
    </section>
  );
}

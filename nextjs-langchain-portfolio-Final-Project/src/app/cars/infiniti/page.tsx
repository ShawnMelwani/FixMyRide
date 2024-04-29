import { H1 } from "@/components/ui/H1";
import { H2 } from "@/components/ui/H2";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Infiniti",
  description: "Infiniti overview and model comparison.",
};

export default function Infiniti() {
  return (
    <section className="space-y-8">
      <div className="max-w-3xl mx-auto">
        <H1>Infiniti Overview</H1>
        <section className="space-y-6">
          <H2>Infiniti Model Line Comparison</H2>
          <p className="mb-4">
            <strong>Worst Model Year:</strong> 2014 <br />
            <strong>Most Complaints:</strong> Infiniti G37 <br />
            FixMyRide has 515 complaints on file for Infiniti vehicles. <br />
            The worst models are the 2014 Q50, 2003 G35, 2015 Q50, 2014 QX60, and the 2017 Q60.
          </p>
          <p>Click on a model below for more information:</p>
          <ul className="list-disc list-inside space-y-1">
            <li><Link href="/infiniti/models/Q50">Q50</Link> - 53 complaints</li>
            <li><Link href="/infiniti/models/QX60">QX60</Link> - 56 complaints</li>
            <li><Link href="/infiniti/models/G37">G37</Link> - 72 complaints</li>
            {/* Add more model links as needed */}
          </ul>
        </section>
        <section className="space-y-6">
          <H2>Worst Reported Infiniti Problems</H2>
          <ol className="list-decimal list-inside space-y-4">
            <li>
              <strong>#1: Transmission Shudder</strong> <br />
              <span>2014 QX60</span> <br />
              <span>Average Cost to Fix: $6,900</span> <br />
              <span>Average Mileage: 97,000 miles</span>
            </li>
            <li>
              <strong>#2: Transmission Failure</strong> <br />
              <span>2015 QX60</span> <br />
              <span>Average Cost to Fix: $4,000</span> <br />
              <span>Average Mileage: 59,000 miles</span>
            </li>
            <li>
              <strong>#3: Engine Malfunction</strong> <br />
              <span>2017 Q60</span> <br />
              <span>Average Cost to Fix: $14,200</span> <br />
              <span>Average Mileage: 51,000 miles</span>
            </li>
            {/* Add more reported problems as needed */}
          </ol>
        </section>
      </div>
    </section>
  );
}

import { H1 } from "@/components/ui/H1";
import { H2 } from "@/components/ui/H2";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Subaru",
  description: "Subaru overview and model comparison.",
};

export default function Subaru() {
  return (
    <section className="space-y-8">
      <div className="max-w-3xl mx-auto">
        <H1>Subaru Overview</H1>
        <section className="space-y-6">
          <H2>Subaru Model Line Comparison</H2>
          <p className="mb-4">
            <strong>Worst Model Year:</strong> 2015 <br />
            <strong>Most Complaints:</strong> Subaru Outback <br />
            FixMyRide has 3,814 complaints on file for Subaru vehicles. <br />
            The worst models are the 2014 Forester, 2015 Forester, 2019 Ascent, 2014 Outback, and the 2018 Forester.
          </p>
          <p>Click on a model below for more information:</p>
          <ul className="list-disc list-inside space-y-1">
            <li><Link href="/subaru/models/Outback">Outback</Link> - 1,540 complaints</li>
            <li><Link href="/subaru/models/Forester">Forester</Link> - 1,044 complaints</li>
            <li><Link href="/subaru/models/Impreza">Impreza</Link> - 322 complaints</li>
            {/* Add more model links as needed */}
          </ul>
        </section>
        <section className="space-y-6">
          <H2>Worst Reported Subaru Problems</H2>
          <ol className="list-decimal list-inside space-y-4">
            <li>
              <strong>#1: High Oil Consumption</strong> <br />
              <span>2014 Forester</span> <br />
              <span>Average Cost to Fix: $2,000</span> <br />
              <span>Average Mileage: 33,000 miles</span>
            </li>
            <li>
              <strong>#2: Excessive Oil Consumption</strong> <br />
              <span>2011 Forester</span> <br />
              <span>Average Cost to Fix: $3,100</span> <br />
              <span>Average Mileage: 48,000 miles</span>
            </li>
            <li>
              <strong>#3: Excessive Oil Consumption</strong> <br />
              <span>2013 Outback</span> <br />
              <span>Average Cost to Fix: $1,500</span> <br />
              <span>Average Mileage: 59,000 miles</span>
            </li>
            {/* Add more reported problems as needed */}
          </ol>
        </section>
      </div>
    </section>
  );
}

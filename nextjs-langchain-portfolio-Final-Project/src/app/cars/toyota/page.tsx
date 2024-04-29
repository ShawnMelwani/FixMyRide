import { H1 } from "@/components/ui/H1";
import { H2 } from "@/components/ui/H2";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Toyota",
  description: "Toyota overview and model comparison.",
};

export default function Toyota() {
  return (
    <section className="space-y-8">
      <div className="max-w-3xl mx-auto">
        <H1>Toyota Overview</H1>
        <section className="space-y-6">
          <H2>Toyota Model Line Comparison</H2>
          <p className="mb-4">
            <strong>Worst Model Year:</strong> 2007 <br />
            <strong>Most Complaints:</strong> Toyota Camry <br />
            FixMyRide has 16,248 complaints on file for Toyota vehicles. <br />
            The worst models are the 2019 RAV4, 2007 Camry, 2008 RAV4, 2009 Camry, and the 2007 RAV4.
          </p>
          <p>Click on a model below for more information:</p>
          <ul className="list-disc list-inside space-y-1">
            <li><Link href="/toyota/models/Camry">Camry</Link> - 3,576 complaints</li>
            <li><Link href="/toyota/models/RAV4">RAV4</Link> - 2,617 complaints</li>
            <li><Link href="/toyota/models/Corolla">Corolla</Link> - 1,544 complaints</li>
            {/* Add more model links as needed */}
          </ul>
        </section>
        <section className="space-y-6">
          <H2>Worst Reported Toyota Problems</H2>
          <ol className="list-decimal list-inside space-y-4">
            <li>
              <strong>#1: Hesitates And Lurches At Slower Speeds</strong> <br />
              <span>2019 RAV4</span> <br />
              <span>Average Cost to Fix: $20,000</span> <br />
              <span>Average Mileage: 3,000 miles</span>
            </li>
            <li>
              <strong>#2: Excessive Oil Consumption</strong> <br />
              <span>2008 RAV4</span> <br />
              <span>Average Cost to Fix: $35,600</span> <br />
              <span>Average Mileage: 105,000 miles</span>
            </li>
            <li>
              <strong>#3: Excessive Oil Consumption</strong> <br />
              <span>2008 Camry</span> <br />
              <span>Average Cost to Fix: $2,700</span> <br />
              <span>Average Mileage: 107,000 miles</span>
            </li>
            {/* Add more reported problems as needed */}
          </ol>
        </section>
      </div>
    </section>
  );
}

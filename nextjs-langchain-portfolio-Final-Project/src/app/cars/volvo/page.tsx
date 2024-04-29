import { H1 } from "@/components/ui/H1";
import { H2 } from "@/components/ui/H2";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Volvo",
  description: "Volvo overview and model comparison.",
};

export default function Volvo() {
  return (
    <section className="space-y-8">
      <div className="max-w-3xl mx-auto">
        <H1>Volvo Overview</H1>
        <section className="space-y-6">
          <H2>Volvo Model Line Comparison</H2>
          <p className="mb-4">
            <strong>Worst Model Year:</strong> 2016 <br />
            <strong>Most Complaints:</strong> Volvo XC90 <br />
            FixMyRide has 668 complaints on file for Volvo vehicles. <br />
            The worst models are the 2016 XC90, 2012 S60, 2001 V70, 2005 XC90, and the 2019 XC60.
          </p>
          <p>Click on a model below for more information:</p>
          <ul className="list-disc list-inside space-y-1">
            <li><Link href="/volvo/models/XC90">XC90</Link> - 124 complaints</li>
            <li><Link href="/volvo/models/S60">S60</Link> - 109 complaints</li>
            <li><Link href="/volvo/models/V70">V70</Link> - 67 complaints</li>
            {/* Add more model links as needed */}
          </ul>
        </section>
        <section className="space-y-6">
          <H2>Worst Reported Volvo Problems</H2>
          <ol className="list-decimal list-inside space-y-4">
            <li>
              <strong>#1: Excessive Oil Consumption</strong> <br />
              <span>2012 S60</span> <br />
              <span>Average Cost to Fix: $4,700</span> <br />
              <span>Average Mileage: 79,000 miles</span>
            </li>
            <li>
              <strong>#2: Excessive Oil Consumption</strong> <br />
              <span>2015 S60</span> <br />
              <span>Average Cost to Fix: $2,700</span> <br />
              <span>Average Mileage: 89,000 miles</span>
            </li>
            <li>
              <strong>#3: Lost All Power While Driving</strong> <br />
              <span>2016 XC90</span> <br />
              <span>Average Cost to Fix: $20,000</span> <br />
              <span>Average Mileage: 62,000 miles</span>
            </li>
            {/* Add more reported problems as needed */}
          </ol>
        </section>
      </div>
    </section>
  );
}

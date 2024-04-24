import { H1 } from "@/components/ui/H1";
import { H2 } from "@/components/ui/H2";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "BMW",
  description: "BMW overview and model comparison.",
};

export default function BMW() {
  return (
    <section className="space-y-8">
      <div className="max-w-3xl mx-auto">
        <H1>BMW Overview</H1>
        <section className="space-y-6">
          <H2>BMW Model Line Comparison</H2>
          <p className="mb-4">
            <strong>Worst Model Year:</strong> 2013 <br />
            <strong>Most Complaints:</strong> BMW X5 <br />
            CarComplaints.com has 1,042 complaints on file for BMW vehicles. <br />
            The worst models are the 2013 X3, 2011 X5, 2013 X5, 2007 335, and the 2007 328.
          </p>
          <p>Click on a model below for more information:</p>
          <ul className="list-disc list-inside space-y-1">
            <li><Link href="/bmw/models/X3">X3</Link> - 142 complaints</li>
            <li><Link href="/bmw/models/X5">X5</Link> - 163 complaints</li>
            <li><Link href="/bmw/models/335">335</Link> - 37 complaints</li>
            {/* Add more model links as needed */}
          </ul>
        </section>
        <section className="space-y-6">
          <H2>Worst Reported BMW Problems</H2>
          <ol className="list-decimal list-inside space-y-4">
            <li>
              <strong>#1: Broken Timing Chain Guide</strong> <br />
              <span>2013 X3</span> <br />
              <span>Average Cost to Fix: $6,000</span> <br />
              <span>Average Mileage: 78,000 miles</span>
            </li>
            <li>
              <strong>#2: Engine Failure</strong> <br />
              <span>2013 X3</span> <br />
              <span>Average Cost to Fix: $4,500</span> <br />
              <span>Average Mileage: 83,000 miles</span>
            </li>
            <li>
              <strong>#3: Engine Seized</strong> <br />
              <span>2012 750</span> <br />
              <span>Average Cost to Fix: $15,000</span> <br />
              <span>Average Mileage: 89,000 miles</span>
            </li>
            {/* Add more reported problems as needed */}
          </ol>
        </section>
      </div>
    </section>
  );
}

import { H1 } from "@/components/ui/H1";
import { H2 } from "@/components/ui/H2";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Lincoln",
  description: "Lincoln overview and model comparison.",
};

export default function Lincoln() {
  return (
    <section className="space-y-8">
      <div className="max-w-3xl mx-auto">
        <H1>Lincoln Overview</H1>
        <section className="space-y-6">
          <H2>Lincoln Model Line Comparison</H2>
          <p className="mb-4">
            <strong>Worst Model Year:</strong> 2006 <br />
            <strong>Most Complaints:</strong> Lincoln MKX <br />
            FixMyRide has 1,430 complaints on file for Lincoln vehicles. <br />
            The worst models are the 2015 MKC, 2006 Zephyr, 2007 MKZ, 2016 MKX, and the 2008 MKZ.
          </p>
          <p>Click on a model below for more information:</p>
          <ul className="list-disc list-inside space-y-1">
            <li><Link href="/lincoln/models/MKX">MKX</Link> - 237 complaints</li>
            <li><Link href="/lincoln/models/MKZ">MKZ</Link> - 228 complaints</li>
            <li><Link href="/lincoln/models/Navigator">Navigator</Link> - 129 complaints</li>
            {/* Add more model links as needed */}
          </ul>
        </section>
        <section className="space-y-6">
          <H2>Worst Reported Lincoln Problems</H2>
          <ol className="list-decimal list-inside space-y-4">
            <li>
              <strong>#1: Chrome Lifting Off Wheels</strong> <br />
              <span>2008 MKZ</span> <br />
              <span>Average Cost to Fix: $1,200</span> <br />
              <span>Average Mileage: 62,000 miles</span>
            </li>
            <li>
              <strong>#2: Dead Battery</strong> <br />
              <span>2017 MKC</span> <br />
              <span>Average Cost to Fix: $3,000</span> <br />
              <span>Average Mileage: 39,000 miles</span>
            </li>
            <li>
              <strong>#3: Crack In Rear Panel Below Window</strong> <br />
              <span>2003 Aviator</span> <br />
              <span>Average Cost to Fix: $1,500</span> <br />
              <span>Average Mileage: 89,000 miles</span>
            </li>
            {/* Add more reported problems as needed */}
          </ol>
        </section>
      </div>
    </section>
  );
}

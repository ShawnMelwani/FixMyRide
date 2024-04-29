import { H1 } from "@/components/ui/H1";
import { H2 } from "@/components/ui/H2";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Plymouth",
  description: "Plymouth overview and model comparison.",
};

export default function Plymouth() {
  return (
    <section className="space-y-8">
      <div className="max-w-3xl mx-auto">
        <H1>Plymouth Overview</H1>
        <section className="space-y-6">
          <H2>Plymouth Model Line Comparison</H2>
          <p className="mb-4">
            <strong>Worst Model Year:</strong> 1998 <br />
            <strong>Most Complaints:</strong> Plymouth Grand Voyager <br />
            FixMyRide has 196 complaints on file for Plymouth vehicles. <br />
            The worst models are the 1998 Voyager, 1997 Grand Voyager, 1998 Grand Voyager, 1999 Grand Voyager, and the 1997 Voyager.
          </p>
          <p>Click on a model below for more information:</p>
          <ul className="list-disc list-inside space-y-1">
            <li><Link href="/plymouth/models/GrandVoyager">Grand Voyager</Link> - 55 complaints</li>
            <li><Link href="/plymouth/models/Voyager">Voyager</Link> - 55 complaints</li>
            {/* Add more model links as needed */}
          </ul>
        </section>
        <section className="space-y-6">
          <H2>Worst Reported Plymouth Problems</H2>
          <ol className="list-decimal list-inside space-y-4">
            <li>
              <strong>#1: Transmission Failure</strong> <br />
              <span>1998 Voyager</span> <br />
              <span>Average Cost to Fix: $2,200</span> <br />
              <span>Average Mileage: 91,000 miles</span>
            </li>
            <li>
              <strong>#2: Transmission Failure</strong> <br />
              <span>1997 Grand Voyager</span> <br />
              <span>Average Cost to Fix: $2,300</span> <br />
              <span>Average Mileage: 85,000 miles</span>
            </li>
            <li>
              <strong>#3: Transmission Failure</strong> <br />
              <span>1998 Grand Voyager</span> <br />
              <span>Average Cost to Fix: $1,600</span> <br />
              <span>Average Mileage: 132,000 miles</span>
            </li>
            {/* Add more reported problems as needed */}
          </ol>
        </section>
      </div>
    </section>
  );
}

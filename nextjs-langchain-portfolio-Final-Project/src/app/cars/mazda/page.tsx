import { H1 } from "@/components/ui/H1";
import { H2 } from "@/components/ui/H2";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mazda",
  description: "Mazda overview and model comparison.",
};

export default function Mazda() {
  return (
    <section className="space-y-8">
      <div className="max-w-3xl mx-auto">
        <H1>Mazda Overview</H1>
        <section className="space-y-6">
          <H2>Mazda Model Line Comparison</H2>
          <p className="mb-4">
            <strong>Worst Model Year:</strong> 2010 <br />
            <strong>Most Complaints:</strong> Mazda MAZDA3 <br />
            FixMyRide has 2,809 complaints on file for Mazda vehicles. <br />
            The worst models are the 2016 CX-5, 2010 MAZDA3, 2019 CX-5, 2015 CX-5, and the 2012 MAZDA3.
          </p>
          <p>Click on a model below for more information:</p>
          <ul className="list-disc list-inside space-y-1">
            <li><Link href="/mazda/models/MAZDA3">MAZDA3</Link> - 628 complaints</li>
            <li><Link href="/mazda/models/CX-5">CX-5</Link> - 547 complaints</li>
            <li><Link href="/mazda/models/CX-9">CX-9</Link> - 323 complaints</li>
            {/* Add more model links as needed */}
          </ul>
        </section>
        <section className="space-y-6">
          <H2>Worst Reported Mazda Problems</H2>
          <ol className="list-decimal list-inside space-y-4">
            <li>
              <strong>#1: Clutch Failed</strong> <br />
              <span>2010 MAZDA3</span> <br />
              <span>Average Cost to Fix: $1,200</span> <br />
              <span>Average Mileage: 39,000 miles</span>
            </li>
            <li>
              <strong>#2: Daytime Running LED Light Failure</strong> <br />
              <span>2016 CX-5</span> <br />
              <span>Average Cost to Fix: $1,000</span> <br />
              <span>Average Mileage: 45,000 miles</span>
            </li>
            <li>
              <strong>#3: Unexplained Acceleration While Brakes Were Applied</strong> <br />
              <span>2019 CX-5</span> <br />
              <span>Average Cost to Fix: $2,600</span> <br />
              <span>Average Mileage: 14,000 miles</span>
            </li>
            {/* Add more reported problems as needed */}
          </ol>
        </section>
      </div>
    </section>
  );
}

import { H1 } from "@/components/ui/H1";
import { H2 } from "@/components/ui/H2";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Hyundai",
  description: "Hyundai overview and model comparison.",
};

export default function Hyundai() {
  return (
    <section className="space-y-8">
      <div className="max-w-3xl mx-auto">
        <H1>Hyundai Overview</H1>
        <section className="space-y-6">
          <H2>Hyundai Model Line Comparison</H2>
          <p className="mb-4">
            <strong>Worst Model Year:</strong> 2013 <br />
            <strong>Most Complaints:</strong> Hyundai Sonata <br />
            FixMyRide has 8,249 complaints on file for Hyundai vehicles. <br />
            The worst models are the 2011 Sonata, 2013 Elantra, 2015 Sonata, 2013 Sonata, and the 2016 Tucson.
          </p>
          <p>Click on a model below for more information:</p>
          <ul className="list-disc list-inside space-y-1">
            <li><Link href="/hyundai/models/Accent">Accent</Link> - 294 complaints</li>
            <li><Link href="/hyundai/models/Atos">Atos</Link> - 1 complaint</li>
            <li><Link href="/hyundai/models/AtosPrime">Atos Prime</Link> - 2 complaints</li>
            {/* Add more model links as needed */}
          </ul>
        </section>
        <section className="space-y-6">
          <H2>Worst Reported Hyundai Problems</H2>
          <ol className="list-decimal list-inside space-y-4">
            <li>
              <strong>#1: Engine Seized</strong> <br />
              <span>2011 Sonata</span> <br />
              <span>Average Cost to Fix: $5,100</span> <br />
              <span>Average Mileage: 96,000 miles</span>
            </li>
            <li>
              <strong>#2: Mpg Not Close To Epa Estimates</strong> <br />
              <span>2013 Elantra</span> <br />
              <span>Average Cost to Fix: $3,000</span> <br />
              <span>Average Mileage: 10,000 miles</span>
            </li>
            <li>
              <strong>#3: Excessive Oil Consumption</strong> <br />
              <span>2015 Sonata</span> <br />
              <span>Average Cost to Fix: $5,000</span> <br />
              <span>Average Mileage: 76,000 miles</span>
            </li>
            {/* Add more reported problems as needed */}
          </ol>
        </section>
      </div>
    </section>
  );
}

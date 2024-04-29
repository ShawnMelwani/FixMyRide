import { H1 } from "@/components/ui/H1";
import { H2 } from "@/components/ui/H2";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Tesla",
  description: "Tesla overview and model comparison.",
};

export default function Tesla() {
  return (
    <section className="space-y-8">
      <div className="max-w-3xl mx-auto">
        <H1>Tesla Overview</H1>
        <section className="space-y-6">
          <H2>Tesla Model Line Comparison</H2>
          <p className="mb-4">
            <strong>Worst Model Year:</strong> 2013 <br />
            <strong>Most Complaints:</strong> Tesla Model S <br />
            FixMyRide has 60 complaints on file for Tesla vehicles. <br />
            The worst models are the 2013 Model S, 2017 Model X, 2014 Model S, 2022 Model 3, and the 2019 Model 3.
          </p>
          <p>Click on a model below for more information:</p>
          <ul className="list-disc list-inside space-y-1">
            <li><Link href="/tesla/models/ModelS">Model S</Link> - 29 complaints</li>
            <li><Link href="/tesla/models/Model3">Model 3</Link> - 15 complaints</li>
            <li><Link href="/tesla/models/ModelX">Model X</Link> - 9 complaints</li>
            {/* Add more model links as needed */}
          </ul>
        </section>
        <section className="space-y-6">
          <H2>Worst Reported Tesla Problems</H2>
          <p>We&apos;re actively collecting data on the worst problems for Tesla. If you&apos;ve had a problem, please help us out and report it.</p>
          <ol className="list-decimal list-inside space-y-4">
            <li>
              <strong>#1: Door Handle, Latch Stopped Working</strong> <br />
              <span>2013 Model S</span> <br />
              <span>Average Cost to Fix: $300</span> <br />
              <span>Average Mileage: 71,000 miles</span>
            </li>
            {/* Add more reported problems as needed */}
          </ol>
        </section>
      </div>
    </section>
  );
}

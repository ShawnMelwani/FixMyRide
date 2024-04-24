import { H1 } from "@/components/ui/H1";
import { H2 } from "@/components/ui/H2";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cadillac",
  description: "Cadillac overview and model comparison.",
};

export default function Cadillac() {
  return (
    <section className="space-y-8">
      <div className="max-w-3xl mx-auto">
        <H1>Cadillac Overview</H1>
        <section className="space-y-6">
          <H2>Cadillac Model Line Comparison</H2>
          <p className="mb-4">
            <strong>Worst Model Year:</strong> 2013 <br />
            <strong>Most Complaints:</strong> Cadillac SRX <br />
            CarComplaints.com has 1,811 complaints on file for Cadillac vehicles. <br />
            The worst models are the 2012 SRX, 2010 SRX, 2011 SRX, 2013 SRX, and the 2009 CTS.
          </p>
          <p>Click on a model below for more information:</p>
          <ul className="list-disc list-inside space-y-1">
            <li><Link href="/cadillac/models/ATS">ATS</Link> - 88 complaints</li>
            <li><Link href="/cadillac/models/CTS">CTS</Link> - 315 complaints</li>
            <li><Link href="/cadillac/models/SRX">SRX</Link> - 624 complaints</li>
            {/* Add more model links as needed */}
          </ul>
        </section>
        <section className="space-y-6">
          <H2>Worst Reported Cadillac Problems</H2>
          <ol className="list-decimal list-inside space-y-4">
            <li>
              <strong>#1: Water In Lights</strong> <br />
              <span>2010 SRX</span> <br />
              <span>Average Cost to Fix: $1,600</span> <br />
              <span>Average Mileage: 80,000 miles</span>
            </li>
            <li>
              <strong>#2: Low Beam Head Lights Are Too Dim</strong> <br />
              <span>2016 SRX</span> <br />
              <span>Average Cost to Fix: $1,900</span> <br />
              <span>Average Mileage: 56,000 miles</span>
            </li>
            <li>
              <strong>#3: Cue Touch Screen Not Working</strong> <br />
              <span>2015 SRX</span> <br />
              <span>Average Cost to Fix: $1,200</span> <br />
              <span>Average Mileage: 47,000 miles</span>
            </li>
            {/* Add more reported problems as needed */}
          </ol>
        </section>
      </div>
    </section>
  );
}

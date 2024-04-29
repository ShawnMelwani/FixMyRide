import { H1 } from "@/components/ui/H1";
import { H2 } from "@/components/ui/H2";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Lexus",
  description: "Lexus overview and model comparison.",
};

export default function Lexus() {
  return (
    <section className="space-y-8">
      <div className="max-w-3xl mx-auto">
        <H1>Lexus Overview</H1>
        <section className="space-y-6">
          <H2>Lexus Model Line Comparison</H2>
          <p className="mb-4">
            <strong>Worst Model Year:</strong> 2007 <br />
            <strong>Most Complaints:</strong> Lexus RX 350 <br />
            FixMyRide has 892 complaints on file for Lexus vehicles. <br />
            The worst models are the 2007 ES 350, 2005 RX 330, 2004 RX 330, 2008 ES 350, and the 2007 LS 460.
          </p>
          <p>Click on a model below for more information:</p>
          <ul className="list-disc list-inside space-y-1">
            <li><Link href="/lexus/models/ES350">ES 350</Link> - 112 complaints</li>
            <li><Link href="/lexus/models/RX350">RX 350</Link> - 125 complaints</li>
            <li><Link href="/lexus/models/RX330">RX 330</Link> - 75 complaints</li>
            {/* Add more model links as needed */}
          </ul>
        </section>
        <section className="space-y-6">
          <H2>Worst Reported Lexus Problems</H2>
          <ol className="list-decimal list-inside space-y-4">
            <li>
              <strong>#1: Dashboard Cracking</strong> <br />
              <span>2004 RX 330</span> <br />
              <span>Average Cost to Fix: $900</span> <br />
              <span>Average Mileage: 85,000 miles</span>
            </li>
            <li>
              <strong>#2: Melting Dashboard</strong> <br />
              <span>2008 ES 350</span> <br />
              <span>Average Cost to Fix: $2,500</span> <br />
              <span>Average Mileage: 99,000 miles</span>
            </li>
            <li>
              <strong>#3: Door Not Working Properly</strong> <br />
              <span>2014 ES 300h</span> <br />
              <span>Average Cost to Fix: $2,000</span> <br />
              <span>Average Mileage: 12,000 miles</span>
            </li>
            {/* Add more reported problems as needed */}
          </ol>
        </section>
      </div>
    </section>
  );
}

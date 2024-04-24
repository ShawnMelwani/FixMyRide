import { H1 } from "@/components/ui/H1";
import { H2 } from "@/components/ui/H2";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Honda",
  description: "Honda overview and model comparison.",
};

export default function Honda() {
  return (
    <section className="space-y-8">
      <div className="max-w-3xl mx-auto">
        <H1>Honda Overview</H1>
        <section className="space-y-6">
          <H2>Honda Model Line Comparison</H2>
          <p className="mb-4">
            <strong>Worst Model Year:</strong> 2008 <br />
            <strong>Most Complaints:</strong> Honda Accord <br />
            CarComplaints.com has 30,351 complaints on file for Honda vehicles. <br />
            The worst models are the 2003 Accord, 2001 Civic, 2004 Accord, 2016 Civic, and the 2002 Accord.
          </p>
          <p>Click on a model below for more information:</p>
          <ul className="list-disc list-inside space-y-1">
            <li><Link href="/honda/models/Accord">Accord</Link> - 12,817 complaints</li>
            <li><Link href="/honda/models/Civic">Civic</Link> - 6,919 complaints</li>
            <li><Link href="/honda/models/CR-V">CR-V</Link> - 3,674 complaints</li>
            {/* Add more model links as needed */}
          </ul>
        </section>
        <section className="space-y-6">
          <H2>Worst Reported Honda Problems</H2>
          <ol className="list-decimal list-inside space-y-4">
            <li>
              <strong>#1: Transmission Failure</strong> <br />
              <span>2001 Civic</span> <br />
              <span>Average Cost to Fix: $2,300</span> <br />
              <span>Average Mileage: 105,000 miles</span>
            </li>
            <li>
              <strong>#2: Transmission Failure</strong> <br />
              <span>2003 Accord</span> <br />
              <span>Average Cost to Fix: $2,700</span> <br />
              <span>Average Mileage: 98,000 miles</span>
            </li>
            <li>
              <strong>#3: Transmission Failure</strong> <br />
              <span>2002 Civic</span> <br />
              <span>Average Cost to Fix: $2,300</span> <br />
              <span>Average Mileage: 110,000 miles</span>
            </li>
            {/* Add more reported problems as needed */}
          </ol>
        </section>
      </div>
    </section>
  );
}

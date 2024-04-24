import { H1 } from "@/components/ui/H1";
import { H2 } from "@/components/ui/H2";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Chevrolet",
  description: "Chevrolet overview and model comparison.",
};

export default function Chevrolet() {
  return (
    <section className="space-y-8">
      <div className="max-w-3xl mx-auto">
        <H1>Chevrolet Overview</H1>
        <section className="space-y-6">
          <H2>Chevrolet Model Line Comparison</H2>
          <p className="mb-4">
            <strong>Worst Model Year:</strong> 2005 <br />
            <strong>Most Complaints:</strong> Chevrolet Impala <br />
            CarComplaints.com has 33,868 complaints on file for Chevrolet vehicles. <br />
            The worst models are the 2017 Silverado 1500, 2011 Cruze, 2011 Equinox, 2007 Silverado, and the 2010 Equinox.
          </p>
          <p>Click on a model below for more information:</p>
          <ul className="list-disc list-inside space-y-1">
            <li><Link href="/chevrolet/models/Impala">Impala</Link> - 4,802 complaints</li>
            <li><Link href="/chevrolet/models/Silverado 1500">Silverado 1500</Link> - 1,197 complaints</li>
            <li><Link href="/chevrolet/models/Equinox">Equinox</Link> - 2,796 complaints</li>
            {/* Add more model links as needed */}
          </ul>
        </section>
        <section className="space-y-6">
          <H2>Worst Reported Chevrolet Problems</H2>
          <ol className="list-decimal list-inside space-y-4">
            <li>
              <strong>#1: Surges And Jerks</strong> <br />
              <span>2017 Silverado 1500</span> <br />
              <span>Average Cost to Fix: $4,100</span> <br />
              <span>Average Mileage: 22,000 miles</span>
            </li>
            <li>
              <strong>#2: Excessive Oil Consumption</strong> <br />
              <span>2013 Equinox</span> <br />
              <span>Average Cost to Fix: $3,100</span> <br />
              <span>Average Mileage: 76,000 miles</span>
            </li>
            <li>
              <strong>#3: Timing Belt Failure</strong> <br />
              <span>2004 Aveo</span> <br />
              <span>Average Cost to Fix: $2,200</span> <br />
              <span>Average Mileage: 73,000 miles</span>
            </li>
            {/* Add more reported problems as needed */}
          </ol>
        </section>
      </div>
    </section>
  );
}

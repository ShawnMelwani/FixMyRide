import { H1 } from "@/components/ui/H1";
import { H2 } from "@/components/ui/H2";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mercury",
  description: "Mercury overview and model comparison.",
};

export default function Mercury() {
  return (
    <section className="space-y-8">
      <div className="max-w-3xl mx-auto">
        <H1>Mercury Overview</H1>
        <section className="space-y-6">
          <H2>Mercury Model Line Comparison</H2>
          <p className="mb-4">
            <strong>Worst Model Year:</strong> 2002 <br />
            <strong>Most Complaints:</strong> Mercury Mountaineer <br />
            FixMyRide has 1,629 complaints on file for Mercury vehicles. <br />
            The worst models are the 2002 Mountaineer, 2008 Mariner, 2006 Mariner, 2004 Mountaineer, and the 2003 Sable.
          </p>
          <p>Click on a model below for more information:</p>
          <ul className="list-disc list-inside space-y-1">
            <li><Link href="/mercury/models/Mountaineer">Mountaineer</Link> - 502 complaints</li>
            <li><Link href="/mercury/models/Mariner">Mariner</Link> - 177 complaints</li>
            <li><Link href="/mercury/models/Sable">Sable</Link> - 213 complaints</li>
            {/* Add more model links as needed */}
          </ul>
        </section>
        <section className="space-y-6">
          <H2>Worst Reported Mercury Problems</H2>
          <ol className="list-decimal list-inside space-y-4">
            <li>
              <strong>#1: Transmission Failure</strong> <br />
              <span>2002 Mountaineer</span> <br />
              <span>Average Cost to Fix: $2,300</span> <br />
              <span>Average Mileage: 100,000 miles</span>
            </li>
            <li>
              <strong>#2: Not Engaging</strong> <br />
              <span>2003 Sable</span> <br />
              <span>Average Cost to Fix: $2,200</span> <br />
              <span>Average Mileage: 91,000 miles</span>
            </li>
            <li>
              <strong>#3: Transmission Failure</strong> <br />
              <span>2006 Mariner</span> <br />
              <span>Average Cost to Fix: $3,300</span> <br />
              <span>Average Mileage: 85,000 miles</span>
            </li>
            {/* Add more reported problems as needed */}
          </ol>
        </section>
      </div>
    </section>
  );
}

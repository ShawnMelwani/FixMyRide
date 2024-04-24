import { H1 } from "@/components/ui/H1";
import { H2 } from "@/components/ui/H2";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Ford",
  description: "Ford overview and model comparison.",
};

export default function Ford() {
  return (
    <section className="space-y-8">
      <div className="max-w-3xl mx-auto">
        <H1>Ford Overview</H1>
        <section className="space-y-6">
          <H2>Ford Model Line Comparison</H2>
          <p className="mb-4">
            <strong>Worst Model Year:</strong> 2002 <br />
            <strong>Most Complaints:</strong> Ford Explorer <br />
            CarComplaints.com has 49,183 complaints on file for Ford vehicles. <br />
            The worst models are the 2002 Explorer, 2004 Explorer, 2014 Focus, 2012 Focus, and the 2014 Escape.
          </p>
          <p>Click on a model below for more information:</p>
          <ul className="list-disc list-inside space-y-1">
            <li><Link href="/ford/models/Explorer">Explorer</Link> - 13,387 complaints</li>
            <li><Link href="/ford/models/Focus">Focus</Link> - 5,252 complaints</li>
            <li><Link href="/ford/models/Escape">Escape</Link> - 4,832 complaints</li>
            {/* Add more model links as needed */}
          </ul>
        </section>
        <section className="space-y-6">
          <H2>Worst Reported Ford Problems</H2>
          <ol className="list-decimal list-inside space-y-4">
            <li>
              <strong>#1: Transmission Failed</strong> <br />
              <span>2003 Taurus</span> <br />
              <span>Average Cost to Fix: $1,900</span> <br />
              <span>Average Mileage: 93,000 miles</span>
            </li>
            <li>
              <strong>#2: Bad Hesitation/Jerking When Starting From A Stop Position</strong> <br />
              <span>2014 Focus</span> <br />
              <span>Average Cost to Fix: $1,500</span> <br />
              <span>Average Mileage: 25,000 miles</span>
            </li>
            <li>
              <strong>#3: Transmission Lunges, Hard Jolt When Shifting</strong> <br />
              <span>2006 Explorer</span> <br />
              <span>Average Cost to Fix: $1,800</span> <br />
              <span>Average Mileage: 49,000 miles</span>
            </li>
            {/* Add more reported problems as needed */}
          </ol>
        </section>
      </div>
    </section>
  );
}

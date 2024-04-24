import { H1 } from "@/components/ui/H1";
import { H2 } from "@/components/ui/H2";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Buick",
  description: "Buick overview and model comparison.",
};

export default function Buick() {
  return (
    <section className="space-y-8">
      <div className="max-w-3xl mx-auto">
        <H1>Buick Overview</H1>
        <section className="space-y-6">
          <H2>Buick Model Line Comparison</H2>
          <p className="mb-4">
            <strong>Worst Model Year:</strong> 2008 <br />
            <strong>Most Complaints:</strong> Buick LeSabre <br />
            CarComplaints.com has 3,540 complaints on file for Buick vehicles. <br />
            The worst models are the 2008 Enclave, 2011 LaCrosse, 2010 Enclave, 2009 Enclave, and the 2011 Enclave.
          </p>
          <p>Click on a model below for more information:</p>
          <ul className="list-disc list-inside space-y-1">
            <li><Link href="/buick/models/Enclave">Enclave</Link> - 655 complaints</li>
            <li><Link href="/buick/models/LaCrosse">LaCrosse</Link> - 362 complaints</li>
            <li><Link href="/buick/models/LeSabre">LeSabre</Link> - 671 complaints</li>
            {/* Add more model links as needed */}
          </ul>
        </section>
        <section className="space-y-6">
          <H2>Worst Reported Buick Problems</H2>
          <ol className="list-decimal list-inside space-y-4">
            <li>
              <strong>#1: Transmission Failure</strong> <br />
              <span>2008 Enclave</span> <br />
              <span>Average Cost to Fix: $3,500</span> <br />
              <span>Average Mileage: 92,000 miles</span>
            </li>
            <li>
              <strong>#2: Engine Light Comes On</strong> <br />
              <span>2011 LaCrosse</span> <br />
              <span>Average Cost to Fix: $6,500</span> <br />
              <span>Average Mileage: 26,000 miles</span>
            </li>
            <li>
              <strong>#3: Timing Chain Stretched</strong> <br />
              <span>2010 Enclave</span> <br />
              <span>Average Cost to Fix: $3,000</span> <br />
              <span>Average Mileage: 105,000 miles</span>
            </li>
            {/* Add more reported problems as needed */}
          </ol>
        </section>
      </div>
    </section>
  );
}

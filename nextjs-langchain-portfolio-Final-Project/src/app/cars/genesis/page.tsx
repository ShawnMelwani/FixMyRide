import { H1 } from "@/components/ui/H1";
import { H2 } from "@/components/ui/H2";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Genesis",
  description: "Genesis overview and model comparison.",
};

export default function Genesis() {
  return (
    <section className="space-y-8">
      <div className="max-w-3xl mx-auto">
        <H1>Genesis Overview</H1>
        <section className="space-y-6">
          <H2>Genesis Model Line Comparison</H2>
          <p className="mb-4">
            <strong>Worst Model Year:</strong> 2020 <br />
            <strong>Most Complaints:</strong> Genesis G90 <br />
            CarComplaints.com has 21 complaints on file for Genesis vehicles. <br />
            The worst models are the 2018 G90, 2020 G70, 2018 G80, 2022 GV70, and the 2021 GV80.
          </p>
          <p>Click on a model below for more information:</p>
          <ul className="list-disc list-inside space-y-1">
            <li><Link href="/genesis/models/G70">G70</Link> - 4 complaints</li>
            <li><Link href="/genesis/models/G80">G80</Link> - 5 complaints</li>
            <li><Link href="/genesis/models/G90">G90</Link> - 6 complaints</li>
            <li><Link href="/genesis/models/GV70">GV70</Link> - 4 complaints</li>
            <li><Link href="/genesis/models/GV80">GV80</Link> - 2 complaints</li>
          </ul>
        </section>
        <section className="space-y-6">
          <H2>Worst Reported Genesis Problems</H2>
          <p>No detailed data on specific problems was provided. For more information, visit each model’s page.</p>
        </section>
      </div>
    </section>
  );
}

import { H1 } from "@/components/ui/H1";
import { H2 } from "@/components/ui/H2";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Car Complaints",
  description: "Browse through the best and worst vehicles, and share your car complaints.",
};

export default function Page() {
  return (
    <section className="space-y-6">
      <H1>Car Complaints</H1>
      <section className="space-y-3">
        <H2>Worst Vehicles</H2>
        <p>
          Here are some of the worst vehicles according to user complaints:
        </p>
        <ul className="list-inside list-disc space-y-1">
          <li>
            <a
              href="#"
              className="text-primary hover:underline"
            >
              2002 Ford Explorer
            </a>{" "}
            - The 2002 Ford Explorer is hands-down our worst vehicle on record. Avoid like the plague is putting it lightly.
          </li>
          <li>
            <a
              href="#"
              className="text-primary hover:underline"
            >
              2003 Honda Accord
            </a>{" "}
            - The 2003 Honda Accord suffers from widespread transmission failure & problems with the stereo backlight failing.
          </li>
          <li>
            <a
              href="#"
              className="text-primary hover:underline"
            >
              2019 Toyota RAV4
            </a>{" "}
            - The 2019 Toyota RAV4 suffers from transmission problems where it hesitates and lurches at slower speeds.
          </li>
        </ul>
        <hr className="border-muted" />
      </section>
      <section className="space-y-3">
        <H2>Best Vehicles</H2>
        <p>
          Check out some of the best vehicles based on user satisfaction:
        </p>
        <ul className="list-inside list-disc space-y-1">
          <li>
            <a
              href="#"
              className="text-primary hover:underline"
            >
              2009 Toyota Sequoia
            </a>{" "}
            - Users love the spacious interior and smooth ride.
          </li>
          <li>
            <a
              href="#"
              className="text-primary hover:underline"
            >
              2009 Volvo XC90
            </a>{" "}
            - Volvo has earned its safety-reputation on the backs of vehicles like the XC90. It&apos;s like driving a tank -- just a really comfortable, dependable one.
          </li>
          <li>
            <a
              href="#"
              className="text-primary hover:underline"
            >
              2005 GMC Safari
            </a>{" "}
            - The 2005 GMC Astro has a reliable reputation and a VERY low number of complaints -- zero, in fact, at the time of writing these notes.
          </li>
        </ul>
        <hr className="border-muted" />
      </section>
      <section className="space-y-3">
        <H2>Share Your Complaints</H2>
        <p>
          Have a car complaint to share? Join our community and let your voice be heard!
        </p>
        <p>
          You can discuss your car issues, warn others about problematic vehicles, and connect with fellow car owners.
        </p>
        <p>
          To join, visit our <a
            href="#"
            className="text-primary hover:underline"
          >
            Car Complaints Forum
          </a>.
        </p>
        <hr className="border-muted" />
      </section>
      <section className="space-y-3">
        <H2>Contact Us</H2>
        <p>
          For business inquiries or partnership opportunities, please contact us via email at{" "}
          <a
            href="mailto:carcomplaints@example.com"
            className="text-primary hover:underline"
          >
            smelwani@csu.fullerton.edu
          </a>
        </p>
        <p>
          We have collaborated with various automotive brands and organizations in the past to address consumer concerns.
        </p>
      </section>
    </section>
  );
}

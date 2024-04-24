import { H1 } from "@/components/ui/H1";
import { H2 } from "@/components/ui/H2";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Car Reliability",
  description: "Car reliability rankings and information.",
};

export default function CarReliability() {
  return (
    <section className="space-y-8">
      <div className="max-w-3xl mx-auto">
        <H1>Car Reliability Rankings</H1>
        <section className="space-y-6">
          <H2>Brands by Predicted Reliability</H2>
          <table className="w-full border-collapse border border-gray-200">
            <thead>
              <tr className="bg-transparent">
                <th className="py-2 px-4 text-left">Rank</th>
                <th className="py-2 px-4 text-left">Brand</th>
                <th className="py-2 px-4 text-left">Predicted Reliability</th>
              </tr>
            </thead>
            <tbody>
              {/* Insert data for each brand */}
              <tr>
                <td className="py-2 px-4">1</td>
                <td className="py-2 px-4">Lexus</td>
                <td className="py-2 px-4">79</td>
              </tr>
              <tr>
                <td className="py-2 px-4">2</td>
                <td className="py-2 px-4">Toyota</td>
                <td className="py-2 px-4">76</td>
              </tr>
              <tr>
                <td className="py-2 px-4">3</td>
                <td className="py-2 px-4">Mini</td>
                <td className="py-2 px-4">71</td>
              </tr>
              <tr>
                <td className="py-2 px-4">4</td>
                <td className="py-2 px-4">Acura</td>
                <td className="py-2 px-4">70</td>
              </tr>
              <tr>
                <td className="py-2 px-4">5</td>
                <td className="py-2 px-4">Honda</td>
                <td className="py-2 px-4">70</td>
              </tr>
              <tr>
                <td className="py-2 px-4">6</td>
                <td className="py-2 px-4">Subaru</td>
                <td className="py-2 px-4">69</td>
              </tr>
              <tr>
                <td className="py-2 px-4">7</td>
                <td className="py-2 px-4">Mazda</td>
                <td className="py-2 px-4">67</td>
              </tr>
              <tr>
                <td className="py-2 px-4">8</td>
                <td className="py-2 px-4">Porsche</td>
                <td className="py-2 px-4">66</td>
              </tr>
              <tr>
                <td className="py-2 px-4">9</td>
                <td className="py-2 px-4">BMW</td>
                <td className="py-2 px-4">64</td>
              </tr>
              <tr>
                <td className="py-2 px-4">10</td>
                <td className="py-2 px-4">Kia</td>
                <td className="py-2 px-4">61</td>
              </tr>
              <tr>
                <td className="py-2 px-4">11</td>
                <td className="py-2 px-4">Hyundai</td>
                <td className="py-2 px-4">56</td>
              </tr>
              <tr>
                <td className="py-2 px-4">12</td>
                <td className="py-2 px-4">Buick</td>
                <td className="py-2 px-4">55</td>
              </tr>
              <tr>
                <td className="py-2 px-4">13</td>
                <td className="py-2 px-4">Infiniti</td>
                <td className="py-2 px-4">53</td>
              </tr>
              <tr>
                <td className="py-2 px-4">14</td>
                <td className="py-2 px-4">Tesla</td>
                <td className="py-2 px-4">48</td>
              </tr>
              <tr>
                <td className="py-2 px-4">15</td>
                <td className="py-2 px-4">Ram</td>
                <td className="py-2 px-4">46</td>
              </tr>
              <tr>
                <td className="py-2 px-4">16</td>
                <td className="py-2 px-4">Cadilliac</td>
                <td className="py-2 px-4">45</td>
              </tr>
              <tr>
                <td className="py-2 px-4">17</td>
                <td className="py-2 px-4">Nissan</td>
                <td className="py-2 px-4">45</td>
              </tr>
              <tr>
                <td className="py-2 px-4">18</td>
                <td className="py-2 px-4">Genesis</td>
                <td className="py-2 px-4">44</td>
              </tr>
              <tr>
                <td className="py-2 px-4">19</td>
                <td className="py-2 px-4">Audi</td>
                <td className="py-2 px-4">43</td>
              </tr>
              <tr>
                <td className="py-2 px-4">20</td>
                <td className="py-2 px-4">Chevrolet</td>
                <td className="py-2 px-4">43</td>
              </tr>
              <tr>
                <td className="py-2 px-4">21</td>
                <td className="py-2 px-4">Dodge</td>
                <td className="py-2 px-4">42</td>
              </tr>
              <tr>
                <td className="py-2 px-4">22</td>
                <td className="py-2 px-4">Ford</td>
                <td className="py-2 px-4">40</td>
              </tr>
              <tr>
                <td className="py-2 px-4">23</td>
                <td className="py-2 px-4">Lincoln</td>
                <td className="py-2 px-4">38</td>
              </tr>
              <tr>
                <td className="py-2 px-4">24</td>
                <td className="py-2 px-4">GMC</td>
                <td className="py-2 px-4">36</td>
              </tr>
              <tr>
                <td className="py-2 px-4">25</td>
                <td className="py-2 px-4">Volvo</td>
                <td className="py-2 px-4">28</td>
              </tr>
              <tr>
                <td className="py-2 px-4">26</td>
                <td className="py-2 px-4">Jeep</td>
                <td className="py-2 px-4">26</td>
              </tr>
              <tr>
                <td className="py-2 px-4">27</td>
                <td className="py-2 px-4">Volkswagen</td>
                <td className="py-2 px-4">26</td>
              </tr>
              <tr>
                <td className="py-2 px-4">28</td>
                <td className="py-2 px-4">Rivian</td>
                <td className="py-2 px-4">24</td>
              </tr>
              <tr>
                <td className="py-2 px-4">29</td>
                <td className="py-2 px-4">Mercedes-Benz</td>
                <td className="py-2 px-4">23</td>
              </tr>
              <tr>
                <td className="py-2 px-4">30</td>
                <td className="py-2 px-4">Chrysler</td>
                <td className="py-2 px-4">18</td>
              </tr>
              {/* Insert data for other brands */}
            </tbody>
          </table>
        </section>
        <section className="space-y-6">
          <H2>Car Types by Reliability</H2>
          <table className="w-full border-collapse border border-gray-200">
            <thead>
              <tr className="bg-transparent">
                <th className="py-2 px-4 text-left">Car Type</th>
                <th className="py-2 px-4 text-left">Average Reliability Rating</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-2 px-4">Sedans</td>
                <td className="py-2 px-4">57</td>
              </tr>
              <tr>
                <td className="py-2 px-4">SUVs</td>
                <td className="py-2 px-4">50</td>
              </tr>
              <tr>
                <td className="py-2 px-4">Minivans</td>
                <td className="py-2 px-4">45</td>
              </tr>
              <tr>
                <td className="py-2 px-4">Pickup Trucks</td>
                <td className="py-2 px-4">41</td>
              </tr>
            </tbody>
          </table>
        </section>
        <section className="space-y-6">
          <H2>Hybrids and EVs</H2>
          <p>Hybrids have 26% fewer problems than ICE vehicles. PHEVs have 146% more problems than ICE vehicles.</p>
          <p>Electric cars have an average reliability score of 44, while electric SUVs have a score of 43.</p>
          {/* Add more details about specific hybrid and EV models */}
        </section>
      </div>
    </section>
  );
}

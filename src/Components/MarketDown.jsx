import "./MarketDown.css";
import { SupplierN } from "./SupplierN";
import { useState } from "react";
import Supplier1 from "./Supplier1.png";
import Supplier2 from "./Supplier2.png";
import Supplier3 from "./Supplier3.png";
import Supplier4 from "./Supplier4.png";
import Supplier5 from "./Supplier5.png";
import Supplier6 from "./Supplier6.png";
import Supplier7 from "./Supplier7.png";
import Supplier8 from "./Supplier8.png";
import Supplier9 from "./Supplier9.png";

export function MarketDown() {
  const [more, setMore] = useState(true);
  const handleMoreClick = () => {
    setMore(false);
  };

  const handleLessClick = () => {
    setMore(true);
  };
  return (
    <div className="MarketDown">
      <SupplierN
        src={Supplier1}
        alt="Supplier1"
        text1="Energy Company A"
        text2="Renewable electricity"
        text3="Energy Company A offers competitively priced electricity contracts based on renewable sources that include solar power, wind power, hydropower and bioenergy."
      />
      <SupplierN
        src={Supplier2}
        alt="Supplier2"
        text1="Oil Refining Company B"
        text2="Renewable fuel"
        text3="Oil Refining Company A produces renewable diesel made from previously used materials or from oil extracted from plants that can re-absorb CO2 from the air through photosynthesis."
      />
      <SupplierN
        src={Supplier3}
        alt="Supplier3"
        text1="Cloud Company A"
        text2="Green Digital services"
        text3="Cloud Company A offers reliable and greener cloud services. They are more energy efficient than a typical data center by re-using the heat the servers produce, replacing fossil fuels."
      />
      {more ? (
        <p id="more" type="button" onClick={handleMoreClick}>
          + more
        </p>
      ) : (
        <>
          <SupplierN
            src={Supplier4}
            alt="Supplier4"
            text1="Energy Company B"
            text2="Renewable electricity"
            text3="Energy Company B is 100% Finnish and offers the opportunity to change to electricity contracts that are 100% emission-free and 100% clean renewable wind power."
          />
          <SupplierN
            src={Supplier5}
            alt="Supplier5"
            text1="Energy Company C"
            text2="Renewable electricity"
            text3="Energy Company C is a pioneer in green electricity and their eco-electricity is produced in small domestic power plants with 100% renewable bioenergy, wind and hydropower."
          />
          <SupplierN
            src={Supplier6}
            alt="Supplier6"
            text1="Mobility Company A"
            text2="Electric car leasing"
            text3="With Mobility Company A's  mobile application, you get access to hundreds of electric cars in the city, help reduce CO2, pollution and noise, and avoid the cost of owning them yourself."
          />
          <SupplierN
            src={Supplier7}
            alt="Supplier7"
            text1="Mobility Company B"
            text2="Electric bike leasing"
            text3="Mobility Company B offers electric bike leasing contracts with which you get the number of e-bikes you need for the company's shared use bikes or as employment e-bikes for the staff"
          />
          <SupplierN
            src={Supplier8}
            alt="Supplier8"
            text1="Fuel Company B"
            text2="Renewable fuel"
            text3="Fuel Company B's biodiesel  is made from renewable raw materials and is suitable for all diesel engines. Motorists can reduce the carbon footprint of their driving by up to 90%."
          />
          <SupplierN
            src={Supplier9}
            alt="Supplier9"
            text1="Lighting Company A"
            text2="LED lighting "
            text3="Lighting Company A offers services for well-designed LED lighting and its intelligent control, improving the energy efficiency and saving saving up to 70-80 percent in lighting costs."
          />
          <p id="more" type="button" onClick={handleLessClick}>
            - less
          </p>
        </>
      )}
    </div>
  );
}

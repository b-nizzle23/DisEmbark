import React, { useState } from 'react';
import homepageImage from './homepage-image.jpg';

export default function AddPinPage() {
  // state to store the sleected option
  const [selectedOption, setSelectedOption] = useState("");

  // funct to handle change in select dropdown
  const handleSelectChange = (e) => {
    setSelectedOption(e.target.value);
    console.log("handleSelectChange: ${e.target.value}")
  }


    // func to render all items.
    const renderItems = () => {
      // drop down menu options
      const data = [
        "Sensory",
        "Limited-mobility Accessible",
        "Food Allergy",
        "LGBTQ+",
      ];

      // const items = [];
      // for (let i = 0; i < data.length; i++) {
      //   items.push(<option key={i} value={data[i]}> {data[i]} </option>);
      // }
      // return items;

      return data.map((item, index) => (
        <option key={index} value={item}>{item}</option>
    ));
    };



  return (
    <>
      {/* we want the image map here */}
      <img src={homepageImage} alt="Map" className='Map' />


      <div>Here is where to add Pins</div>
      <select name="Accomodations" value={selectedOption} onChange={handleSelectChange}>
        <option value="">Select an option</option>
        {renderItems()}
      </select>

      


    </>
  );
}
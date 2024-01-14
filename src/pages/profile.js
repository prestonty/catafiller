import React, { useState } from "react";
import Cam from "../components/cam.js";

export default function Profile(props) {
    const [fname, setfname] = useState("first name");
    const [lname, setlname] = useState("last name");
    const [phone, setPhone] = useState("###-###-####");
    const [birth, setBirth] = useState("dd/mm/yryr");
    const [address, setAddress] = useState("123 Doodle Drive");
    const [postalCode, setPostalCode] = useState("postal code");
    const [city, setCity] = useState("city");
    const [province, setProvince] = useState("province");

    function storeData() {
        console.log("Stored data");
    }

    const handleChange = (e) => {
        const {name, value} = e.target;

        switch (name) {
            case 'fname':
                setfname(value);
                break;
            case 'lname':
                setlname(value);
                break;
              case 'phone':
                setPhone(value);
                break;
            case 'birth':
                setBirth(value);
                break;
              case 'address':
                setAddress(value);
                break;
            case 'postalCode':
                setPostalCode(value);
                break;
            case 'city':
                setCity(value);
                break;
            case 'province':
                setProvince(value);
                break;
        }
    }


    return (
        <div>
            <h1>Profile Page</h1>
            {/* onSubmit={storeData} */}
            <form >
                <label>First Name
                    <input type="text" name="fname" onChange={handleChange} />
                </label>
                <label>Last Name
                    <input type="text" name="lname" onChange={handleChange} />
                </label>
                <label>Phone Number
                    <input type="text" name="phone" onChange={handleChange} />
                </label>
                <label>Date of Birth
                    <input type="text" name="birth" onChange={handleChange} />
                </label>
                <label>Addresss
                    <input type="text" name="address" onChange={handleChange} />
                </label>
                <label>Postal Code
                    <input type="text" name="postalCode" onChange={handleChange}/>
                </label>
                <label>City/Town
                    <input type="text" name="city" onChange={handleChange} />
                </label>
                <label>Province
                    <input type="text" name="province" onChange={handleChange}/>
                </label>

                {/* INSTEAD OF A SUBMIT BUTTON I WANT TEXT TO UPDATE SAYING "ALL CHANGES ARE SAVED" and a loading icon */}
            </form>


            <br/>
            <p>{fname}</p>
            <p>{lname}</p>
            <p>{phone}</p>
            <p>{birth}</p>
            <p>{address}</p>
            <p>{postalCode}</p>
            <p>{city}</p>
            <p>{province}</p>

            {/* WEBCAM COOL STUFF */}
            
            {/* <Webcam
                audio={false}
                height={720}
                screenshotFormat="image/jpg"
                width={1280}
                videoConstraints={videoConstraints}>
                    
                    {({ getScreenshot }) => (
                    <button
                      onClick={() => {
                        setImageSrc(getScreenshot());
                      }}
                    >
                      Capture photo
                    </button>
                  )}
                    

            </Webcam> */}
            {/* <CustomWebcam/> */}
            <Cam/>
        </div>
    );
}
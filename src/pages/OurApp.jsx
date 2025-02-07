import React, { useState } from "react";
import styled from "styled-components";
//images
import bellicon from "../img/bellicon.png";
import mockup from "../img/mockup.png";
import supabase from "../services/supabase";
import { Bounce, toast } from "react-toastify";

const OurApp = () => {
  let email = "";
  const [valid, setValid] = useState(true);
  const inputVal = (e) => {
    email = e.target.value;
  };
  const handleSubmit = async () => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (regex.test(email)) {
      setValid(true);

      const { data, error } = await supabase
        .from("User")
        .insert({ name: email })
        .select();
      console.log(data);
      if (!error)
        toast.success(`Notification will be sent to ${email}`, {
          position: "bottom-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
      if (error) {
        console.log(error);
      }
    } else {
      setValid(false);
    }
  };
  return (
    <>
      <SytledOurApp>
        <div className="text-container">
          <h3 className="h3-color">Create plan, Trade it and track your</h3>
          <h3>profitable startegies with data metrics.</h3>
          <p>
            Our app helps you to identify what trading strategy suits you and
            what not, with the power of automated journaling you can track your
            trading performance with data metrics.
          </p>
        </div>
        <form>
          <div className="email-container">
            <input
              type="text"
              placeholder="Email address"
              onChange={(e) => {
                inputVal(e);
              }}
            />
            <button type="button" onClick={handleSubmit}>
              <div className="iconbox">
                <img src={bellicon} alt="" />
              </div>
              Notify me
            </button>
            {!valid && <div className="error">Invalid email id</div>}
          </div>
        </form>
        <StyledImg className="img-container">
          <img src={mockup} alt="" />
        </StyledImg>
      </SytledOurApp>
    </>
  );
};

export default OurApp;

const SytledOurApp = styled.div`
  margin: 2rem 4.5rem;
  h3 {
    font-size: 3rem;
    font-weight: 500;
    text-align: center;
  }
  p {
    width: 70%;
    color: #939393;
    line-height: 175%;
    text-align: center;
    margin: 1.2rem 0;
  }
  .h3-color {
    color: #0eaf00;
  }
  .text-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .email-container {
    display: flex;
    justify-content: center;
    gap: 0.7rem;
    margin-bottom: 2.5rem;
    position: relative;
    input {
      width: 25%;
      font-family: "Poppins", serif;
      background: transparent;
      border-radius: 50rem;
      color: #eeeeee;
      background-color: #140e22;
      padding: 0.7rem 1rem;
      border: none;
    }
    .error {
      font-size: 10px;
      color: red;
      position: absolute;
      left: 33.5%;
      bottom: -23px;
    }
    button {
      .iconbox {
        display: flex;
        justify-content: center;
        align-items: center;
      }
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.25rem;
      img {
        width: 70%;
      }
    }
  }
  //...........Responsive tablet 1200px.........//
  @media (max-width: 1250px) {
    h3 {
      font-weight: 500;
      font-size: 2.6rem;
    }
    p {
      width: 80%;
    }
  }
  //...........Responsive tablet 1070px.........//
  @media (max-width: 1070px) {
    margin: 2rem 3.5rem;
    h3 {
      font-size: 2.4rem;
    }
    p {
      font-size: 0.9rem;
    }
  }
  //...........Responsive tablet 1000px.........//
  @media (max-width: 1000px) {
    h3 {
      font-size: 2.2rem;
    }
    p {
      font-size: 0.8rem;
    }
    .email-container {
      input {
        width: 30%;
        font-size: 0.8rem;
      }
      button {
        font-size: 0.8rem;
        font-weight: 400;
        gap: 0.2rem;
        padding: 0.2rem 1rem;
        img {
          width: 60%;
        }
      }
    }
  }
  //...........Responsive tablet 900px.........//
  @media (max-width: 900px) {
    h3 {
      font-size: 2rem;
    }
    p {
      width: 90%;
      margin: 0.8rem 0rem;
    }
    .email-container {
      margin-bottom: 1.8rem;
      input {
        padding: 0.5rem 1rem;
        width: 35%;
      }
      button {
        padding: 0.5rem 1rem;
      }
    }
  }
  //...........Responsive tablet 840px.........//
  @media (max-width: 840px) {
    h3 {
      font-size: 1.8rem;
    }
  }
  //...........Responsive tablet 755px.........//
  @media (max-width: 755px) {
    margin: 2rem 2.5rem;
    h3 {
      font-size: 1.6rem;
    }
  }
  //...........Responsive tablet 700px.........//
  @media (max-width: 700px) {
    margin: 1.5rem 3rem;
  }
  //...........Responsive tablet 655px.........//
  @media (max-width: 655px) {
    margin: 2rem 2.5rem;
    h3 {
      font-size: 1.4rem;
    }
    p {
      width: 100%;
    }
    .email-container {
      input {
        width: 40%;
      }
    }
  }
  //...........Responsive tablet 550px.........//
  @media (max-width: 550px) {
    margin: 2rem 1.5rem;
    h3 {
      font-size: 1.4rem;
    }
    p {
      font-size: 0.8rem;
      width: 100%;
    }
  }
  //...........Responsive phone 500px.........//
  @media (max-width: 500px) {
    margin: 1.2rem 1.5rem;
    h3 {
      font-size: 1.3rem;
    }
    p {
      font-size: 0.8rem;
      width: 90%;
    }
  }
  //...........Responsive phone 450px.........//
  @media (max-width: 455px) {
    margin: 0.7rem 1.5rem;
    h3 {
      font-size: 1.1rem;
    }
    p {
      font-size: 0.7rem;
    }
    .email-container {
      margin-bottom: 1.4rem;
      input {
        padding: 0.4rem 1rem;
        font-size: 0.7rem;
      }
      button {
        padding: 0.4rem 1rem;
        font-size: 0.7rem;
      }
    }
  }
  //...........Responsive phone 400px.........//
  @media (max-width: 400px) {
    margin: 0.7rem 1.2rem;
    h3 {
      font-size: 1rem;
      font-weight: 400;
    }
    p {
      width: 100%;
    }
    .email-container {
      margin-bottom: 1.2rem;
      input {
        width: 50%;
        padding: 0.4rem 0.8rem;
        font-size: 0.6rem;
      }
      button {
        padding: 0.4rem 0.8rem;
        font-size: 0.6rem;
      }
    }
  }
  //...........Responsive phone 360px.........//
  @media (max-width: 360px) {
    h3 {
      font-size: 0.9rem;
    }
    p {
      width: 95%;
      font-size: 0.6rem;
    }
  }
`;
const StyledImg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 85%;
    object-fit: cover;
  }
  //...........Responsive tablet 1200px.........//
  @media (max-width: 1250px) {
  }
  //...........Responsive tablet 1000px.........//
  @media (max-width: 1000px) {
  }
  //...........Responsive tablet 755px.........//
  @media (max-width: 755px) {
    /* justify-content: flex-start; */
  }
  //...........Responsive tablet 550px.........//
  @media (max-width: 550px) {
    img {
      width: 90%;
    }
  }
  //...........Responsive tablet 360px.........//
  @media (max-width: 550px) {
    img {
      width: 95%;
    }
  }
`;

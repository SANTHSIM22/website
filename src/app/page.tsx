"use client";

import { useState } from "react";
import axios from "axios";
import Nav from "@/components/Widget/header";
export default function Home() {
  const [otp, setOtp] = useState("");

  const sendVerificationEmail = async () => {
    try {
      await axios.post("/api/send-mail", {
        email: "joywinbennis0987@gmail.com",
        name: "Joywin",
      });
      alert("Verification email sent!");
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };

  return (
         <>
         <Nav/>
<div className="bg-black h-screen w-screen ">

  
</div>


         </>
  );
}

"use client";
import React, { useState } from "react";
import { Stepper, Step, Button, Input } from "@material-tailwind/react";
import "@/app/globals.css";

function DefaultStepper() {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => setActiveStep((cur) => cur + 1);
  const handlePrev = () => setActiveStep((cur) => cur - 1);

  const renderStepContent = () => {
    switch (activeStep) {
      case 0:
        return (
          <div className="space-y-5">
            <h2 className="text-lg font-bold">Step 1: Personal Information</h2>
            <Input
              className="input-custom"
              label="Full Name"
              placeholder="Enter your email"
              labelProps={{
                className: "hidden",
              }}
            />
            <Input
              className="input-custom"
              label="Email"
              type="email"
              placeholder="Enter your email"
              labelProps={{
                className: "hidden",
              }}
            />
          </div>
        );
      case 1:
        return (
          <div>
            <h2 className="text-lg font-bold">Step 2: Address Details</h2>
            <Input label="Street Address" />
            <Input label="City" />
            <Input label="Zip Code" />
          </div>
        );
      case 2:
        return (
          <div>
            <h2 className="text-lg font-bold">Step 3: Confirmation</h2>
            <p>Please review your information and submit.</p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="w-full py-4 px-8 ">
      <Stepper activeStep={activeStep} className="bg-secondary py-5">
        <Step
          onClick={() => setActiveStep(0)}
          className={`cursor-pointer px-4 py-2 rounded-full ${
            activeStep === 0 ? "bg-red-500 text-black" : "bg-primary text-black"
          }`}
        >
          1
        </Step>
        <Step
          onClick={() => setActiveStep(1)}
          className={`cursor-pointer px-4 py-2 rounded-full ${
            activeStep === 1
              ? "bg-blue-500 text-black"
              : "bg-primary text-white"
          }`}
        >
          2
        </Step>
        <Step
          onClick={() => setActiveStep(2)}
          className={`cursor-pointer px-4 py-2 rounded-full ${
            activeStep === 2
              ? "bg-blue-500 text-black"
              : "bg-primary text-white"
          }`}
        >
          3
        </Step>
      </Stepper>
      <div className="mt-8">{renderStepContent()}</div>
      <div className="mt-16 flex justify-between">
        {activeStep > 0 && (
          <Button className="bg-primary" onClick={handlePrev}>
            Prev
          </Button>
        )}
        {activeStep < 2 && (
          <Button className="bg-primary" onClick={handleNext}>
            Next
          </Button>
        )}
      </div>
    </div>
  );
}

export default DefaultStepper;

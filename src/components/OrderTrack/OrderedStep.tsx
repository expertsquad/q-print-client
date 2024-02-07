// "use client";
// import React from "react";
// import Stepper from "./Stepper";

// const OrderedStep = () => {
//   // const orderStepper = ["orderPlaced", "Packaging", "toShip", "OrderReceived"];
//   const [currentStep, setCurrentStep] = React.useState(0);
//   const NUMBER_OF_STEPS = 4;

//   const goToNextStep = () =>
//     setCurrentStep((prev) => (prev === NUMBER_OF_STEPS - 1 ? prev : prev + 1));
//   const goToPreviousStep = () =>
//     setCurrentStep((prev) => (prev <= 0 ? prev : prev - 1));

//   return (
//     <div>
//       <Stepper currentStep={currentStep} numberOfSteps={NUMBER_OF_STEPS} />
//       <br />
//       <section className="flex gap-10">
//         <button
//           onClick={goToPreviousStep}
//           className="bg-blue-600 text-white p-2 rounded-md"
//         >
//           Previous
//         </button>
//         <button
//           onClick={goToNextStep}
//           className="bg-blue-600 text-white p-2 rounded-md"
//         >
//           Next
//         </button>
//       </section>
//     </div>
//   );
// };

// export default OrderedStep;

"use client";
import React, { useEffect } from "react";
import Stepper from "./Stepper";

const OrderedStep = () => {
  const orderStepper = ["one", "two", "three", "four"];
  const [currentStep, setCurrentStep] = React.useState(0);
  const NUMBER_OF_STEPS = orderStepper.length;

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentStep < NUMBER_OF_STEPS - 1) {
        setCurrentStep((prev) => prev + 1);
      } else {
        setCurrentStep(0);
      }
    }, 3000); // Change the interval duration as needed

    return () => clearInterval(interval);
  }, [currentStep, NUMBER_OF_STEPS]);

  return (
    <div>
      <Stepper currentStep={currentStep} numberOfSteps={NUMBER_OF_STEPS} />
    </div>
  );
};

export default OrderedStep;


import {
  UserPlus,
  FileText,
  Upload,
  BadgeCheck,
} from "lucide-react";

const steps = [
  {
    number: 1,
    icon: UserPlus,
    title: "Register",
    description: "Fill the inquiry form with your basic details.",
  },
  {
    number: 2,
    icon: FileText,
    title: "Fill Application",
    description: "Complete your application and academic details.",
  },
  {
    number: 3,
    icon: Upload,
    title: "Upload Documents",
    description: "Upload the required academic documents.",
  },
  {
    number: 4,
    icon: BadgeCheck,
    title: "Get Admission",
    description: "Receive confirmation & start your MBA journey.",
  },
];

export default function AdmissionProcessSection({ onApply }: { onApply: () => void }) {
  return (
    <section className="py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-4">

        {/* Heading */}
        <h2 className="text-2xl md:text-4xl font-extrabold text-[#0C1446] text-center mb-12 lg:mb-16">
          Manipal Online MBA{" "}
          <span className="text-[#F15A29]">
            Admission Process
          </span>
        </h2>

        {/* Steps */}
        <div className="grid grid-cols-2 xl:grid-cols-4 gap-6">
          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <div key={step.number} className="relative">

                {/* Card */}
                <div className="relative bg-[#f8f8f8] border border-orange-100 rounded-2xl p-3 md:p-4 text-center shadow-sm hover:shadow-md transition">

                  {/* Number Badge */}
                  <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-[#ff6b35] text-white font-bold text-lg flex items-center justify-center shadow-md">
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className="mt-6 mb-4 flex justify-center">
                    <Icon className="w-10 h-10 md:w-12 md:h-12 text-[#ff6b35]" />
                  </div>

                  {/* Title */}
                  <h3 className="text-base md:text-lg font-bold text-gray-900 mb-1">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 text-xs md:text-sm leading-relaxed">
                    {step.description}
                  </p>

                </div>
              </div>
            );
          })}
        </div>

        {/* Get Complete Fee Details Button */}
        <div className="flex justify-center mt-8 md:mt-12">
          <button
            onClick={onApply}
            className="bg-[#F15A29] text-white font-extrabold px-6 md:px-10 py-3 rounded-full text-sm md:text-lg shadow-md hover:bg-[#d94c1f] transition-all"
          >
            Get Complete Admission Details
          </button>
        </div>

      </div>
    </section>
  );
}

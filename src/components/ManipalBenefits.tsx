"use client";

export default function ManipalBenefits({ onApply }: { onApply: () => void }) {
  const benefits = [
  {
    points: [
      "Choose from 13 specializations with the option to pursue a Super/Dual Specialization.",
      "Build a broader skill set by combining two complementary areas of management."
    ],
  },
  {
    points: [
      "Get exclusive access to Coursera learning resources at a special fee of INR 3,999.",
      "Enhance your profile with additional industry-recognized courses and certifications."
    ],
  },
  {
    points: [
      "Study through a flexible online format designed for working professionals.",
      "Manage your fees easily with no-cost EMI options, low-interest plans, and flexible part-payment facilities."
    ],
  },
];

  return (
    <section className="w-full bg-[#FBF5EF] py-16 flex flex-col items-center" id="courses">
      <h2 className="text-2xl md:text-4xl font-extrabold text-[#0C1446] text-center mb-12">
        Benefits of Pursuing <span className="text-[#F15A29]">Manipal Online MBA</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-6xl w-full px-6">
        {benefits.map((benefit, index) => (
          <div
            key={index}
            className="bg-[#F4E9DD] rounded-3xl shadow-lg p-4 flex flex-col justify-between hover:shadow-xl transition-all"
          >
            <div>
              <ul className="text-gray-800 font-semibold space-y-2 mb-6">
                {benefit.points.map((point, i) => (
                  <li key={i}>• {point}</li>
                ))}
              </ul>

             
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={onApply}
        className="mt-12 bg-[#F15A29] text-white font-extrabold px-10 py-3 rounded-full text-lg shadow-md hover:bg-[#d94c1f] transition-all"
      >
        Talk To Expert
      </button>
    </section>
  );
}

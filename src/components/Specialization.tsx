import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const specializations = [
  {
    title: "MBA in Finance",
    image: "/images/finance.png",
    url: "https://radhyaeducationacademy.com/blogs/online-mba-financial-management/",
  },
  {
    title: "MBA in Marketing",
    image: "/images/marketing.png",
    url: "https://radhyaeducationacademy.com/blogs/online-mba-in-marketing-management/",
  },
  {
    title: "MBA in Healthcare",
    image: "/images/hr.png",
    url: "https://radhyaeducationacademy.com/blogs/mba-in-hospital-management-2026/",
  },
  {
    title: "MBA in BFSI",
    image: "/images/data.png",
    url: "https://radhyaeducationacademy.com/blogs/online-mba-in-bfsi-manipal-jaipur/",
  },
  {
    title: "MBA in HR Management",
    image: "/images/business.png",
    url: "https://radhyaeducationacademy.com/blogs/online-mba-hr-management/",
  },
];

interface SpecializationsSectionProps {
  onApply: () => void;
}

export default function SpecializationsSection({
  onApply,
}: SpecializationsSectionProps) {
  return (
    <section className="py-12 bg-[#f8f8f8]">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <h2 className="text-2xl md:text-4xl font-extrabold text-[#0C1446] text-center mb-12">
          Manipal Online MBA{" "}
          <span className="text-[#F15A29]">Specializations</span>
        </h2>

        <p className="text-center text-sm md:text-base text-gray-600 max-w-3xl mx-auto -mt-6 mb-8 leading-relaxed">
          Not sure which MBA specialization to choose? Explore how AI is
          transforming management careers and discover the{" "}
          <Link
            href="https://radhyaeducationacademy.com/blogs/mba-specialization-in-age-of-ai/"
            className="text-[#F15A29] font-semibold hover:underline underline-offset-4 transition"
          >
            best MBA specializations in the age of AI
          </Link>{" "}
          before making your decision.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
          {specializations.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden hover:shadow-lg transition-all duration-300"
            >
              {/* Image */}
              <div className="relative aspect-[4/3]">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-2 flex flex-col">
                <h3 className="font-semibold text-center text-gray-900 text-sm md:text-base min-h-[48px] flex items-center justify-center">
                  {item.title}
                </h3>

                <Link
                  href={item.url}
                  className="mt-2 border-2 border-[#ff6b35] text-[#ff6b35] font-semibold rounded-xl py-2 px-2 hover:bg-[#ff6b35] hover:text-white transition text-center"
                >
                  Explore Now
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="flex justify-center mt-10">
          <button
            onClick={onApply}
            className="inline-flex items-center gap-2 text-[#ff6b35] font-semibold text-base md:text-lg hover:gap-3 transition-all"
          >
            View All Specializations
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0C1446] text-white py-8 px-4 relative">
      <div className="max-w-6xl mx-auto space-y-6 font-bold text-center">
       
        <p className="text-sm leading-relaxed">
          <span className="text-yellow-400 font-semibold">Disclaimer:</span> We
          act solely as an information provider and do not conduct or facilitate
          admissions to Manipal. For admissions, please visit the official
          Manipal website or contact the university directly. Manipal University
          holds full rights to request changes or removal of any non-relevant
          content. Images used are for illustrative purposes only and do not
          directly represent the respective colleges or universities.
        </p>

        <p className="text-sm leading-relaxed">
         As an Online & Distance Education information provider, we showcase program information about Manipal Online for informational purposes. The information displayed on our website is referred to and compiled from the official Manipal Online website and may be subject to change as per their latest updates.
</p>

        <p className="text-sm mt-4">
          &copy; {new Date().getFullYear()} https://radhyaeducationacademy.com/ | All
          rights reserved
        </p>

        <div className="flex justify-center gap-6">
          <Link
            href="https://radhyaeducationacademy.com/privacy-policy/"
            className="underline text-yellow-400 hover:text-white"
          >
            Privacy Policy
          </Link>
          <Link
            href="https://radhyaeducationacademy.com/terms-and-conditions/"
            className="underline text-yellow-400 hover:text-white"
          >
            Terms &amp; Conditions
          </Link>
        </div>
      </div>
    </footer>
  );
}

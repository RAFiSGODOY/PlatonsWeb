import sponsors from "../../../data/sponsors.json"

import "./footer.css";

export default function Footer() {

  return (
    <footer className="mt-30 text-center text-sm">
      <p className="mb-5 font-jaini text-base uppercase">Patrocinadores</p>
      <div className="flex flex-wrap justify-center gap-4">
        {sponsors.map((sponsor, index) => (
          <img
            key={index}
            src={sponsor.logo}
            alt={`${sponsor.name} Logo`}
            className="h-12 md:h-16"
          />
        ))}
      </div>
      <p className="mt-5 mb-5 font-jaini text-base">
        &copy; Copyright Platon’s Moto Clube {new Date().getFullYear()}.
      </p>
    </footer>
  );
}

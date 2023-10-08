import Link from "next/link";


    text: "Portfolio",
    url: "/portfolio",
  },
  {
    id: "contact-link",
    text: "Contact Us",
    url: "/contact",
  },
];

export const Navbar = () => {
  return (
    <nav className="bg-stale-600 p-4 sticky top-0 drop-shadow-xl z-10  ">
      <div className="prose prose-xl mx-auto flex justify-between flex-col sm:flex-row">
        {navLinks.map((link) => (
          <Link className="text-white opacity-[0.70] hover:opacity-[1]" href={link.url}>{link.text}</Link>
        ))}
      </div>
    </nav>
  );
};

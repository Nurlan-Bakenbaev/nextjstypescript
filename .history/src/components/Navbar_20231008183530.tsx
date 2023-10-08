import Link from "next/link";

const navLinks = [
    {
      id: 'home-link',
      text: 'Home',
      url: '/home',
    },
    {
      id: 'about-link',
      text: 'About Us',
      url: '/about',
    },
    {
      id: 'services-link',
      text: 'Services',
      url: '/services',
    },
    {
      id: 'portfolio-link',
      text: 'Portfolio',
      url: '/portfolio',
    },
    {
      id: 'contact-link',
      text: 'Contact Us',
      url: '/contact',
    },
  ];
  
export const Navbar = () => {
  return (
    <nav className="bg-stale-600 p-4 sticky top-0 drop-shadow-xl z-10  ">
      <div className="prose prose-xl mx-auto flex justify-between flex-col sm:flex-row">
        {
            
        }

      </div>
    </nav>
  );
};

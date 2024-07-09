import React from 'react';

interface NavItem {
  label: string;
  href: string;
}

interface FooterSection {
  title: string;
  items: NavItem[];
}

const footerSections: FooterSection[] = [
  {
    title: 'About',
    items: [
      { label: 'Company', href: '#' },
      { label: 'Careers', href: '#' },
      { label: 'Blog', href: '#' },
    ],
  },
  {
    title: 'Support',
    items: [
      { label: 'Contact Support', href: '#' },
      { label: 'Help Resources', href: '#' },
      { label: 'Release Updates', href: '#' },
    ],
  },
  {
    title: 'Platform',
    items: [
      { label: 'Terms & Privacy', href: '#' },
      { label: 'Pricing', href: '#' },
      { label: 'FAQ', href: '#' },
    ],
  },
  {
    title: 'Contact',
    items: [
      { label: 'Send a Message', href: '#' },
      { label: 'Request a Quote', href: '#' },
      { label: '+123-456-7890', href: '#' },
    ],
  },
];

const Footer: React.FC = () => {
  return (
    <div className="flex items-end w-full min-h-screen bg-white">
      <footer className="w-full text-gray-700 bg-gray-100 body-font">
        <div className="container flex flex-col flex-wrap px-5 py-24 mx-auto md:items-center lg:items-start md:flex-row md:flex-nowrap">
          <div className="flex-shrink-0 w-64 mx-auto text-center md:mx-0 md:text-left">
            <a className="flex items-center justify-center font-medium text-gray-900 title-font md:justify-start">
            <h1>Llounge</h1>
            </a>
            <p className="mt-2 text-sm text-gray-500">Design, Code and Ship!</p>
            <div className="mt-4">
              <span className="inline-flex justify-center mt-2 sm:ml-auto sm:mt-0 sm:justify-start">
                {['facebook', 'twitter', 'instagram', 'linkedin'].map((social, index) => (
                  <a
                    key={index}
                    className="text-gray-500 cursor-pointer hover:text-gray-700 ml-3"
                    href="#"
                  >
                    {/* Replace the following SVGs with actual icons */}
                    <svg
                      fill="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d={social === 'facebook' ? 'M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z' : social === 'twitter' ? 'M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z' : social === 'instagram' ? 'M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z' : 'M4 4a2 2 0 100 4 2 2 0 000-4zm0 4a2 2 0 100 4 2 2 0 000-4zm0 4a2 2 0 100 4 2 2 0 000-4z' } />
                    </svg>
                  </a>
                ))}
              </span>
            </div>
          </div>
          <div className="flex flex-wrap flex-grow mt-10 -mb-10 text-center md:pl-20 md:mt-0 md:text-left">
            {footerSections.map((section, index) => (
              <div key={index} className="w-full px-4 lg:w-1/4 md:w-1/2">
                <h2 className="mb-3 text-sm font-medium tracking-widest text-gray-900 uppercase title-font">
                  {section.title}
                </h2>
                <nav className="mb-10 list-none">
                  {section.items.map((item, idx) => (
                    <li key={idx} className="mt-3">
                      <a href={item.href} className="text-gray-500 cursor-pointer hover:text-gray-900">
                        {item.label}
                      </a>
                    </li>
                  ))}
                </nav>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-gray-300">
          <div className="container px-5 py-4 mx-auto">
            <p className="text-sm text-gray-700 capitalize xl:text-center">© 2020 All rights reserved </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

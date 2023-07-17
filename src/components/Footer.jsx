import React from 'react'
import { Link } from 'react-router-dom';


const navigation = {
  solutions: [
    { name: 'Facebook', href: '#' },
    { name: 'Instagram', href: '#' },
    { name: 'Twitter', href: '#' },
    { name: "WhatsApp", href: '#' },
  ],
  support: [
    { name: 'Pricing', href: '#' },
    { name: 'Delivery', href: '#' },
    { name: 'Testimonials', href: '#' },
  ],
  company: [
    { name: 'About', href: '#' },
    { name: 'Products', href: '#' },
    { name: 'Contact', href: '#' },
    { name: 'Press', href: '#' },
  ],
  legal: [
    { name: 'Claim', href: '#' },
    { name: 'Privacy', href: '#' },
    { name: 'Terms', href: '#' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-primary-700" aria-labelledby="footer-heading">
      <h6 id="footer-heading" className="sr-only">
        Footer
      </h6>
      <div className="container p-4 py-16 mx-auto">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
        <div className="relative w-auto h-32 aspect-square">
        <img src="../../assets/logo/urban-greens-logo-white.png" alt="" className="object-fit"/>
        </div>
          <div className="grid grid-cols-2 gap-8 mt-16 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-primary-50">Social Media</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.solutions.map((item) => (
                    <li key={item.name}>
                      <Link to={item.href} className="text-sm leading-7 text-primary-50/80">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-primary-50">Support</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.support.map((item) => (
                    <li key={item.name}>
                      <Link to={item.href} className="text-sm leading-7 text-primary-50/80">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-primary-50">Company</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.company.map((item) => (
                    <li key={item.name}>
                      <Link to={item.href} className="text-sm leading-7 text-primary-50/80">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-primary-50">Legal</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.legal.map((item) => (
                    <li key={item.name}>
                      <Link to={item.href} className="text-sm leading-7 text-primary-50/80">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

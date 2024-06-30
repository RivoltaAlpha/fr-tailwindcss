

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-12 px-6">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div className="text-2xl font-bold">INSURE</div>
          <div className="flex space-x-4">
            {/* Add social media icons here */}
            <img
              src="/images/icon-facebook.svg"
              alt="Family"
              className="w-[30px] mb-[20px] opacity-90 rounded-sm"
            />

            <img
              src="/images/icon-twitter.svg"
              alt="Family"
              className="w-[30px] mb-[20px] opacity-90 rounded-sm"
            />
            <img
              src="/images/icon-pinterest.svg"
              alt="Family"
              className="w-[30px] mb-[20px] opacity-90 rounded-sm"
            />
            <img
              src="/images/icon-instagram.svg"
              alt="Family"
              className="w-[30px] mb-[20px] opacity-90 rounded-sm"
            />
          </div>
        </div>
        <hr className="border-gray-300 mb-8" />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-semibold mb-4 text-gray-100 ">OUR COMPANY</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  HOW WE WORK
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  WHY INSURE?
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  VIEW PLANS
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  REVIEWS
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">HELP ME</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  TERMS OF USE
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  PRIVACY POLICY
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  COOKIES
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4 text-gray-100">CONTACT</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  SALES
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  SUPPORT
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  LIVE CHAT
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">OTHERS</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-60">
                  CAREERS
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  PRESS
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  LICENCES
                </a>
              </li>
            </ul>
          </div>

       
          {/* Repeat for HELP ME, CONTACT, and OTHERS sections */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;

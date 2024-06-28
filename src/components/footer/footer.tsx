const Footer = () => {
  return (
    <footer className="bg-gray-100 py-12 px-6">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div className="text-2xl font-bold">INSURE</div>
          <div className="flex space-x-4">
            {/* Add social media icons here */}
          </div>
        </div>
        <hr className="border-gray-300 mb-8" />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-semibold mb-4">OUR COMPANY</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-gray-900">HOW WE WORK</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">WHY INSURE?</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">VIEW PLANS</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">REVIEWS</a></li>
            </ul>
          </div>
          {/* Repeat for HELP ME, CONTACT, and OTHERS sections */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
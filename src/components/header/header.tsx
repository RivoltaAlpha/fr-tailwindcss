const Header = () => {
  return (
    <header className="bg-white  py-4 px-6 flex justify-between items-center">
      <div className="text-2xl font-bold">INSURE</div>
      <nav>
        <ul className="flex space-x-6">
          <li><a href="#" className="text-gray-600 hover:text-gray-900">HOW WE WORK</a></li>
          <li><a href="#" className="text-gray-600 hover:text-gray-900">BLOG</a></li>
          <li><a href="#" className="text-gray-600 hover:text-gray-900">ACCOUNT</a></li>
          <li><a href="#" className=" text-white px-4 py-2 rounded">VIEW PLANS</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
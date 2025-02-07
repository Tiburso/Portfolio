const Footer = () => {
  return (
    <footer className="bg-white py-6 border-t">
      <div className="container-wrapper text-center text-gray-600">
        &copy; {new Date().getFullYear()} MyPortfolio. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

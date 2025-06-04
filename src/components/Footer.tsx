const Footer = () => {
  const clickToDevKimGitHub = () => {
    window.open("https://github.com/Dev-KimDonghyun", "_blank");
  };
  return (
    <div>
      <footer className="w-full h-16 flex fixed flex-col text-md md:text-lg gap-y-0.5 py-2 bottom-0 text-center justify-center items-center bg-gray-600 text-white">
        <p>&copy; 2025 Dev-KimDonghyun. All rights reserved.</p>
        <div className="flex flex-col items-center cursor-pointer">
          <p onClick={clickToDevKimGitHub}>Visit Github</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

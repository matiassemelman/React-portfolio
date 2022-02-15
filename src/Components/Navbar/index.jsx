export const Navbar = () => {
  return (
    <header className="flex bg-zinc-800 w-screen justify-between px-4 py-4 fixed">
      <div>
        <img
          src="https://imgur.com/KJLghxT"
          alt="My Logo"
          className="flex-none"
        />
      </div>

      <ul className="flex text-lg">
        <li className="pr-2">
          <a href="#">About</a>
        </li>
        <li className="pr-2 ">
          <a href="#">Roadmap</a>
        </li>

        <li className="pr-2 ">
          <a href="#">Blog</a>
        </li>

        {/* Menu Icon from https://heroicons.com/*/}
      </ul>
    </header>
  );
};

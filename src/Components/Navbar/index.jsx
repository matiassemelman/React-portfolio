export const Navbar = () => {
  return (
    <header className="flex bg-zinc-800 w-screen justify-between px-4 py-4 fixed">
      <div>
        <img
          src="https://imgur.com/KJLghxT"
          alt="My Logo"
          className="flex-none h-8 w-8"
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
      </ul>
    </header>
  );
};

export const Navbar = () => {
  return (
    <header className="flex w-screen justify-between p-4 sm:p-24 sm:pb-10">
      <div>
        <h1 className="flex-none">Logo</h1>
      </div>

      <ul className="flex sm:text-2xl">
        <li className="pr-2 sm:pr-10">
          <a href="/">Home</a>
        </li>
        <li className="pr-2 sm:pr-10">
          <a href="#">Roadmap</a>
        </li>

        <li className="pr-2 sm:pr-10">
          <a href="#">Blog</a>
        </li>

        {/* Menu Icon from https://heroicons.com/*/}
      </ul>
    </header>
  );
};

export const Navbar = () => {
  return (
    <div className="flex w-screen justify-between p-2">
      <h1 className="flex-none">Logo</h1>
      <ul className="flex">
        <li className="pr-2">Projects</li>
        <li className="pr-2">About</li>
        <li className="pr-2">Contact</li>

        {/* Menu Icon from https://heroicons.com/*/}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </ul>
    </div>
  );
};

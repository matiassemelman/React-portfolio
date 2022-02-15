export const Footer = () => {
  return (
    <footer className="bg-zinc-900">
      <div>
        <ul className="flex justify-between px-4 py-2">
          <li>
            <a target="_blank" href="https://github.com/matiassemelman">
              <i class="lab la-2x la-github-alt"></i>
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/matias-semelman/"
            >
              <i class="lab la-2x la-linkedin"></i>
            </a>
          </li>
          <li>
            <a
              // target="_blank"
              href="https://api.whatsapp.com/send/?phone=5491130332808&text&app_absent=0"
            >
              <i class="lab la-2x la-whatsapp"></i>
            </a>
          </li>
          <li>
            <a href="mailto:matias.semelman@gmail.com">
              <i class="las la-2x la-envelope"></i>
            </a>
          </li>
        </ul>
      </div>
      <div className="text-center pb-2 text-red-600">
        Copyright 2022© - Matias Semelman
      </div>
    </footer>
  );
};

export const Home = () => {
  return (
    <main>
      <section className="px-4 bg-zinc-800 py-6">
        <h1 className="text-3xl text-center text-red-600 pt-10">
          MATIAS SEMELMAN
        </h1>
        <h2 className="text-xl text-center text-red-700">FRONTEND DEVELOPER</h2>
        <p>
          From Argentina to the world! I'am Matias Semelman, self-taught
          minimalist developer, with passion for giving life to new projects.
        </p>
        <p>
          I have been in middle management in various professions, and I never
          found anything so fascinating like coding. You love it or you don't
          understand it.
        </p>
      </section>
      <section className="px-4 bg-zinc-900 ">
        <h1 className="text-3xl text-center text-red-600 py-4" id="me">
          About me
        </h1>
        <div className="py-4">
          <img
            src="https://matiassemelman.github.io/me/assets/photo.jpeg"
            alt="My Personal Photo"
          />
        </div>
        <p>
          Frontend Developer based in Buenos Aires, Argentina, who wants to be
          involved in meaningful projects. I have a tireless and entrepeneur
          soul, which taked me to try 3 industrial projects, from 2013 when I
          finished my high school to last year (2020). Those ventures gave me a
          solving and proactive mind.
        </p>
        <p className="py-4">
          In parallel, I worked as an international logistics coordinator for 2
          years and later as a national sales coordinator and analyst from a
          Gluten-Free manufacture. Those jobs forged my soft skills: leadership,
          active listening, and customer oriented work.
        </p>
      </section>
    </main>
  );
};

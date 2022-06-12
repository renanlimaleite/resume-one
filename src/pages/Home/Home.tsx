import { Footer } from '@/ui/Footer';
import { Header } from '@/ui/Header';
import { useState } from 'react';

export function Home() {
  const [openSkills, setOpenSkills] = useState(false);

  function handleOpenSkills() {
    setOpenSkills((prevState) => !prevState);
  }

  return (
    <>
      <Header />
      <main className="min-h-full">
        <div className="mt-9 ml-9 bg-gray-600 max-w-md p-4 rounded-lg">
          <h1 className="text-white">🖖 Renan Lima Leite</h1>
          <p className="mt-2 text-white text-sm">
            ⚬ Developer with a few years of experience
          </p>
          <p className="mt-2 text-white text-sm">
            ⚬ Currencly i work as Frontend Enginner
          </p>
          <p className="mt-2 text-white text-sm">
            ⚬ My main skills are Javascript, React and Typescript
            <small
              onClick={handleOpenSkills}
              className="ml-1 p-1 border-solid border-2 border-gray-800
              cursor-pointer text-gray-900 rounded-md bg-gray-500 hover:bg-gray-900 hover:border-gray-50 hover:text-gray-50
              transition-colors"
            >
              Show all
            </small>
          </p>
          <ul
            className={`text-center text-white text-sm ${
              openSkills ? 'max-h-full visible' : 'max-h-0 invisible'
            }`}
          >
            <li>📌 HTML</li>
            <li>📌 ReactJS</li>
            <li>📌 Javascript</li>
            <li>📌 Typescript</li>
            <li>📌 Any framework CSS</li>
            <li>📌 Redux, Context API, Zustand</li>
            <li>📌 CSS, SCSS, LESS, Styled-Components</li>
            <li>📌 Node, Express, PostgreSQL, MySQL, MongoDB, Redis</li>
          </ul>
        </div>
      </main>
      <Footer />
    </>
  );
}

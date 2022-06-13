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
      <main className="pl-4 pr-4 vh100 grid xs:grid-cols-1 md:grid-cols-2 items-start gap-2 pt-8 pb-8">
        <AboutMe handleOpenSkills={handleOpenSkills} openSkills={openSkills} />
        <MyExperiencies />
      </main>
      <Footer />
    </>
  );
}

type AboutMeProps = {
  handleOpenSkills: () => void;
  openSkills: boolean;
};

function AboutMe({ handleOpenSkills, openSkills }: AboutMeProps) {
  return (
    <div className="bg-gray-600 max-w-md p-4 rounded-lg ml-auto mr-auto">
      <h1 className="text-white">🖖 Hello :D</h1>
      <p className="mt-2 text-white text-sm">
        ⚬ Sou desenvolvedor com alguns anos de experiência
      </p>
      <p className="mt-2 text-white text-sm">
        ⚬ Atualmente eu trabalho como Frontend Engineer
      </p>
      <p className="mt-2 text-white text-sm">
        ⚬ Minhas principais skills são Javascript, React e Typescript
        <small
          onClick={handleOpenSkills}
          className="ml-auto mr-auto p-1 border-solid border-2 border-gray-800 w-max block
              cursor-pointer text-gray-900 rounded-md bg-gray-300 hover:bg-gray-900 hover:border-gray-50 hover:text-gray-50
              transition-colors"
        >
          Mostrar todas
        </small>
      </p>
      <ul
        className={`text-center text-white text-sm ${
          openSkills ? 'max-h-full visible' : 'max-h-0 invisible'
        }`}
      >
        <br />
        <li>🟠 HTML</li>
        <br />
        <li>🔵 CSS, LESS, SCSS, Bootstrap, MUI, Chakra-UI, TailwindCSS</li>

        <br />
        <li>
          🟡 Javascript, ReactJS, Typescript, Redux, Redux-Saga, Context API,
          Zustand, Styled-Components
        </li>

        <br />
        <li>🟢 Node, Express, PostgreSQL, MySQL, MongoDB, Redis</li>

        <br />
        <li>🟣 Storybook, Eslint, Prettier, Husky, Lint-Staged</li>
      </ul>
    </div>
  );
}

function MyExperiencies() {
  return (
    <div className="w-auto bg-gray-600 max-w-md p-4 rounded-lg">
      <h2 className="text-center text-white">Minhas experiências:</h2>
      <ul className="text-gray-50">
        <li className="mt-2">
          <strong className="inline-block">
            ⚬ Pleno frontend developer at Compass.uol
          </strong>
          <small className="inline-block text-gray-200">
            Desenvolvedor Frontend utilizando o Oracle Commerce Cloud,
            KnockoutJS, e LESS, atualmente me encontro no projeto da Yamaha,
            atuando principalmente em um Dashboard interno usando ReactJS,
            Material-UI, Redux, Context API etc.
          </small>
        </li>
        <li className="mt-2">
          <strong className="inline-block">
            ⚬ Sênior frontend developer at Ubook
          </strong>
          <small className="inline-block text-gray-200">
            Responsável pelo frontend como todo, manter, criar features e evitar
            bugs, - utilizando bastente javascript puro, jquery, e o framework
            php yii Trabalhei também em uma recriação de um projeto interno da
            empresa, (UBX), utilizando ReactJS, Typescript, Redux, Redux Saga,
            Material-UI, único frontend em uma equipe de pelo menos 10 backends.
          </small>
        </li>
        <li className="mt-2">
          <strong className="inline-block">
            ⚬ Pleno frontend developer at Fhinck
          </strong>
          <small className="inline-block text-gray-200">
            Responsável pelo frontend do dashboard feito em ReactJS,
            Material-UI, Redux, Redux-Saga e por liderar uma equipe com 3 outros
            frontends
          </small>
        </li>
        <li className="mt-2">
          <strong className="inline-block">
            ⚬ Júnior frontend developer at Sirius Interativa
          </strong>
          <small className="inline-block text-gray-200">
            Participando de grandes projetos, sendo um em destaque, (SuperVia
            Trem) principalmente atuando na Home do site, utilizando ReactJS,
            Redux etc) Outros projetos utilizando: JavaScript Puro, jquery,
            HTML5, scss, etc...
          </small>
        </li>
        <li className="mt-2">
          <strong className="inline-block">
            ⚬ Júnior frontend developer at Leo Learning Brasil
          </strong>
          <small className="inline-block text-gray-200">
            Único frontend da equipe, desenvolvendo front-end de sistemas EADs
            feitas pela plataforma Moodle Utilizando a stack (Javascript ES5,
            HTML5, SCSS, RequireJS, PHP, ReactJS embeded)
          </small>
        </li>
      </ul>
    </div>
  );
}

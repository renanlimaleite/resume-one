import { GithubLogo, TwitterLogo } from 'phosphor-react';

export function Footer() {
  return (
    <footer
      className="h-8 fixed left-0 bottom-0 w-full bg-gray-800
    flex items-center justify-center text-white"
    >
      <div className="flex items-center gap-2">
        <a
          href="https://github.com/renanlimaleite"
          target="_blank"
          rel="noreferrer"
        >
          <GithubLogo size={20} />
        </a>
        <a
          href="https://twitter.com/renanlimaleite"
          target="_blank"
          rel="noreferrer"
        >
          <TwitterLogo size={20} />
        </a>
      </div>
    </footer>
  );
}

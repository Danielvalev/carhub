<p align="center">
  <h2 align="center">CarHub</h2>

  <p align="center">
    CarHub website presents various car types, showcasing comprehensive information in a well-designed format with advanced filtering and pagination support for an enhanced user experience.
    <br />
    <br />
  Deployed with Vercel: https://carhubproject.vercel.app/
    <br />
    <br />
    <a href="https://carhubproject.vercel.app/">View Demo</a>
    ·
    <a href="https://github.com/Danielvalev/carhub/issues">Report Bug</a>
    ·
    <a href="https://github.com/Danielvalev/carhub/issues">Request Feature</a>
  </p>
</p>



<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#application-requirements">Application Requirements</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#structure">Structure</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

### Built With

* [Next.js](https://nextjs.org/)
* [TypeScript](https://www.typescriptlang.org/)
* [Taiwind CSS](https://tailwindcss.com/)

<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple example steps.

### Application Requirements

1. [Node.js](https://nodejs.org/en)
2. [npm](https://www.npmjs.com/) (Node Package Manager)

### Installation
Make sure you have already downloaded and install node.js

1. The first thing to do is to clone the repository:
 ```sh
$ git clone https://github.com/Danielvalev/carhub
$ cd carhub
`````````````

2. Install other packages:
- For MacOS: 
 ```sh
$ npm i
`````````````

- For Windows:
 ```sh
C:\Users\Name\carhub> npm i
`````````````

3. Run development server
```sh
$ npm run dev
```

Expected result:

```
> carhub@0.1.0 dev
> next dev

   ▲ Next.js 14.0.3
   - Local:        http://localhost:3000

 ✓ Ready in 2.4s
```

And navigate to carhub homepage using `http://localhost:3000`.

#### Other syntaxes
To kill/stop the server 
> Ctrl + c

<!-- Structure -->
## Structure

```
app
├── favicon.ico
├── globals.css
├── layout.tsx
└── page.tsx
components
├── CarCard.tsx
├── CarDetails.tsx
├── CustomButton.tsx
├── CustomFilter.tsx
├── Footer.tsx
├── Hero.tsx
├── index.tsx
├── Navbar.tsx
├── SearchBar.tsx
├── SearchManufacturer.tsx
└── ShowMore.tsx
constants
└── index.tsx
public
└── ...
types
└── index.tsx
utils
└── index.tsx
.gitignore
LICENCE
README.md
next.config.js
package-lock.json
package.json
postcss.config.js
tailwind.config.ts
tsconfig.json
```

<!-- ROADMAP -->
## Roadmap

See the [open issues](https://github.com/Danielvalev/carhub/issues) for a list of proposed features (and known issues).


<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.



<!-- CONTACT -->
## Contact

Daniel Valev - danielvalev89@gmail.com

Project Link: [https://github.com/Danielvalev/carhub](https://github.com/Danielvalev/carhub)

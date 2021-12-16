<br />
<p align="center">
  <a href="https://github.com/ThinkUniform/uniformcss">
    <img src="icon.svg" alt="Logo" width="64" height="64">
  </a>

  <h3 align="center">UniformCSS</h3>

  <p align="center">
    A fully configurable utility class generator and <br>CSS framework built for Sass projects.
    <br />
    <a href="https://uniformcss.com"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://uniformcss.com">View Site</a>
    ·
    <a href="https://github.com/ThinkUniform/uniformcss/issues">Report Bug</a>
    ·
    <a href="https://github.com/ThinkUniform/uniformcss/issues">Request Feature</a>
  </p>
</p>

<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#introduction">Introduction</a>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#install-dart-sass-on-mac-os-x-or-linux">Install Dart Sass on Mac OS X or Linux</a></li>
        <li><a href="#install-dart-sass-on-windows">Install Dart Sass on Windows</a></li>
        <li><a href="#load-and-compile-uniform">Load and Compile Uniform</a></li>
      </ul>
    </li>
    <li><a href="#community">Community</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

## Introduction

UniformCSS is a fully configurable utility generator and CSS framework built entirely in Sass. Get the power of a utility-first workflow without losing the productiveness of Sass. To see documentation, visit [uniformcss.com](https://uniformcss.com/)

- Load and configure Uniform directly in Sass
- Build complex UI without ever touching your CSS
- Customizable CSS variable support
- Strict and consistent naming convention
- Collapse pseudo variants with comma compression
- Change utility shorthands, delimiters, and more
- Extract reusable components with `apply()` mixin
- Access theme settings with API functions
- Enjoy a wide range of colors, tints, shades, and opacities
- Built-in custom keyframe and animation support

## Getting Started

Here are the instructions to build your first `uniform.css`. Please make sure you have the prerequisites installed before continuing on with the installation steps.

### Prerequisites

Before you get started, ensure you have the following installed.

- [Node & NPM](https://nodejs.org/en/download/)
- [Homebrew](https://brew.sh/)
- [Dart Sass v1.33.0 or higher](https://sass-lang.com/install)

### Install Dart Sass on Mac OS X or Linux

Install Dart Sass with [Homebrew](https://brew.sh/) on Mac OS X or Linux by running the following command.

```sh
brew install sass/sass/sass
```

### Install Dart Sass on Windows

Install Dart Sass with [Chocolatey](https://chocolatey.org/) on Windows by running the following command.

```sh
choco install sass
```

### Load and Compile Uniform

Add Uniform as a Sass module to your `main.scss` project. Follow these steps to load UniformCSS, compile, and watch for changes.

1. Clone the repository
   ```sh
   # Change directory to where your main sass file lives
   cd my-project/sass/

   # Clone project
   git clone https://github.com/ThinkUniform/uniformcss
   ```
2. Include the Uniform module in your `main.scss`
   ```scss
   // main.scss
   @use "uniform" as *;
   ```
3. Compile your `uniform.css`
   ```sh
   yarn uniform
   ```
4. Alternatively, you can compile and watch for changes
   ```sh
   yarn uniform:watch
   ```
5. Configure Uniform (optional)
   ```scss
   // main.scss
   @use "uniform" as * with (
     $config: (
       important: true,
       comma-compression: true,
       prefix: myProject,
       colors: (
         custom-color-1: red,
         custom-color-2: blue
       ),
       ...
     )
   );
   ```

## Community

If you're ever stuck, need help, or wish to have a general discussion about this project, please get involved with the following community channels.

- [Twitter](http://twitter.com/UniformCSS)
- [Discord](https://discord.gg/TZKvar9sU9)
- [Github Discussions](https://github.com/ThinkUniform/uniformcss/discussions)

## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**. Thanks to all the people that have contributed in making this project great!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

The source code is licensed under the [MIT agreement](https://github.com/ThinkUniform/uniformcss.com/blob/main/LICENSE). You are more than welcome to clone and customize this repo to suit your needs.

## Contact

Jin Su Park – Creator and Author<br>
[@jinsu](https://twitter.com/jinsu) • [jinsupark.com](https://jinsupark.com)
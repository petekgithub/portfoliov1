import React from "react";

const Intro = () => {
  return (
    <div className="flex items-center justify-center flex-col text-center pt-20 pb-6">
      <h1 className="text-4xl md:text-6xl dark:text-white mb-1 md:mb-3 font-bold">
        Petek Savaş Hamitbeyli
      </h1>
      <p className="text-4xl md:text-xl mb-3 font-bold">
        <u>FrontEnd Web Developer</u>
      </p>
      <p className="text-sm max-w-xl mb-6 font-medium">
        <strong>Welcome!</strong>
        <br />
        <br />
        I am a frontend web developer with over 1 year of experience of building
        modern, responsive, and user-friendly web applications. I am well-versed
        in modern web technologies such as HTML, CSS, and JavaScript /
        Typescript and has a strong understanding of responsive design
        principles. I also experienced in working with popular frontend
        frameworks such as React. I am a quick learner and is always eager to
        stay up-to-date with the latest trends and advancements in the industry.
        I am a dedicated team player and is able to collaborate effectively with
        designers, developers, and other stakeholders.
        <br />
        <br />
        In addition to my portfolio, you will also find information about my
        background, education, and experience and, you will find a selection of
        my best work. I am always looking to improve my skills and broaden my
        knowledge, and I am open to new opportunities and challenges.
        <br />
        <br />
        <i>
          If you like what you see on my website, please feel free to contact me
          to discuss how I can help you with your next project. Thank you for
          visiting my website, and I hope you enjoy my work!
        </i>
      </p>
      {/* Social Icons */}
      <div className="flex flex-row cursor-pointer justify-center space-x-2 md:space-x-8 mb-5 hover ? 'text-teal-500' : 'text-white-500'">
        <a href="https://www.linkedin.com/in/petek-savas-hamitbeyli/">
          <svg
            className="w-15"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
            <rect x="2" y="9" width="4" height="12"></rect>
            <circle cx="4" cy="4" r="2"></circle>
          </svg>
        </a>
        <a href="https://petekshamitbeyli.medium.com/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="24"
            height="24"
            viewBox="0 0 50 50"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M30,43h17l-4-4l-0.027-28.496l3.891-4.49H34.845l-9.24,22.73L15.497,6H3l4,5.091v24.195L1,43h14l-6-7.714V13.75L22,43 l-0.002,0.014L34,13.545V39L30,43z M10.911,41H5.089L8,37.258L10.911,41z M21.922,37.899L10.828,12.938L8.633,8h5.564l9.581,21.556 l0.805,1.81L21.922,37.899z M35.414,40.414L36,39.828V39V13.545v-5.06l0.191-0.47h6.293l-1.022,1.18l-0.489,0.565l0.001,0.747 L41,39.002l0.001,0.827l0.585,0.585L42.172,41h-7.343L35.414,40.414z"></path>
          </svg>
        </a>
        <a href="https://twitter.com/Petekqt1">
          <svg
            className="w-15"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
          </svg>
        </a>
        <a href="https://github.com/petekgithub">
          <svg
            className="w-15"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
            <path d="M9 18c-4.51 2-5-2-7-2"></path>
          </svg>
        </a>
        <a href="https://codepen.io/Petekqt">
          <svg
            className="w-15"
            fill="#ffffff"
            width="24"
            height="24"
            viewBox="0 5 24 24"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M15.96 17.040l-1.68-1.16 1.68-1.28v2.44zM12.88 14.84l-3.2-2.28v-3.72l5.72 4.040-2.52 1.96zM8.8 17.92l-2.64-2.040 2.64-1.88 2.64 1.88-2.64 2.040zM7.96 12.56l-3.2 2.28-2.52-1.92 5.72-4.040v3.68zM1.68 14.6l1.68 1.28-1.68 1.16v-2.44zM4.72 16.92l3.24 2.48v3.64l-5.72-4.36 2.48-1.76zM9.64 19.4l3.24-2.48 2.48 1.76-5.72 4.36v-3.64zM8.16 6.56l-7.68 5.56c-0.28 0.2-0.48 0.56-0.48 0.92v5.6c0 0.36 0.16 0.68 0.44 0.92l7.68 5.88c0.4 0.32 0.96 0.32 1.4 0l7.68-5.88c0.28-0.2 0.44-0.56 0.44-0.92v-5.6c0-0.36-0.16-0.72-0.48-0.92l-7.68-5.56c-0.4-0.28-0.92-0.28-1.32 0z" />{" "}
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Intro;

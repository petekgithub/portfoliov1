import React from "react";

const Intro = () => {
  return (
    <div className="flex items-center justify-center flex-col text-center pt-20 pb-6">
      <h1 className="text-4xl md:text-7xl dark:text-white mb-1 md:mb-3 font-bold">
        Petek Savaş Hamitbeyli
      </h1>
      <p className="text-base md:text-xl mb-3 font-medium">
        FrontEnd Web Developer
      </p>
      <p className="text-sm max-w-xl mb-6 font-bold">
        Welcome to my portfolio website! My name is Petek Hamitbeyli and I am a
        React developer with over 1 year of experience building modern,
        responsive, and user-friendly web applications. On this website, you
        will find a selection of my best work, showcasing my skills and
        experience as a React developer. From complex single-page apps to
        responsive websites, I have built a wide range of projects using React,
        Redux, JavaScript, HTML, and CSS.
        <br />
        In addition to my portfolio, you will also find information about my
        background, education, and experience, as well as my blog, where I share
        my thoughts on the latest trends and developments in React and web
        development. I am always looking to improve my skills and broaden my
        knowledge, and I am open to new opportunities and challenges. If you
        like what you see on my website, please feel free to contact me to
        discuss how I can help you with your next project. Thank you for
        visiting my website, and I hope you enjoy my work!
      </p>
      {/* Social Icons */}
      <div className="flex flex-row cursor-pointer justify-center space-x-2 md:space-x-8 mb-5 hover ? 'text-teal-500' : 'text-white-500'">
        <a href="https://www.linkedin.com/in/petek-savas-hamitbeyli/">
          <svg
            className="w-15 "
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
      </div>
    </div>
  );
};

export default Intro;

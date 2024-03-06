import React from "react";

const Intro = () => {
  return (
    <div className="flex items-center justify-center flex-col text-center pt-20 pb-6">
      <h2 className="text-4xl md:text-6xl dark:text-white mb-1 md:mb-3 font-bold">
        Petek Savaş
      </h2>
      <p className="text-4xl md:text-xl mb-3 font-bold">FrontEnd Developer</p>
      <p className="text-sm max-w-xl mb-6 font-medium">
        <br />
        <br />
        I'm not just here to follow trends; I set my own, always pushing the
        boundaries of web development. Collaboration is my forte. Working
        harmoniously with designers, developers, and stakeholders is like
        composing a symphony of pixels and code.
        <br />
        <br />
        On my portfolio, you'll discover a carefully curated collection of my
        finest creations, each a testament to my commitment to excellence.
        <br />
        <br />
        <i>Thank you for stepping into my digital atelier.</i>
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
        <a href="https://www.youtube.com/@hellopettek">
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
            <path d="M 5 5 L 5 27 L 27 27 L 27 5 L 5 5 z M 7 7 L 25 7 L 25 25 L 7 25 L 7 7 z M 16 11.080078 C 16 11.080078 11.609297 11.079141 10.529297 11.369141 C 9.9292969 11.539141 9.4490625 12.009141 9.2890625 12.619141 C 8.9990625 13.709141 9 16.009766 9 16.009766 C 9 16.009766 8.9990625 18.310156 9.2890625 19.410156 C 9.4490625 20.010156 9.9292969 20.470859 10.529297 20.630859 C 11.609297 20.920859 16 20.919922 16 20.919922 C 16 20.919922 20.390703 20.920859 21.470703 20.630859 C 22.070703 20.460859 22.550938 20.010391 22.710938 19.400391 C 23.000938 18.310391 23 16.009766 23 16.009766 C 23 16.009766 23.000937 13.719141 22.710938 12.619141 C 22.550937 12.009141 22.070703 11.539141 21.470703 11.369141 C 20.390703 11.079141 16 11.080078 16 11.080078 z M 14 13.15625 L 19 16.011719 L 14 18.853516 L 14 13.15625 z" />
          </svg>
        </a>
        <a href="https://medium.com/@hellopettek">
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
        <a href="https://www.behance.net/peteksavah">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="#888"
            viewBox="0 0 24 24"
          >
            <path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14h-8.027c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988h-6.466v-14.967h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zm-3.466-8.988h3.584c2.508 0 2.906-3-.312-3h-3.272v3zm3.391 3h-3.391v3.016h3.341c3.055 0 2.868-3.016.05-3.016z" />
          </svg>{" "}
        </a>
      </div>
    </div>
  );
};

export default Intro;

import codewayLogo from "./assets/codeway.jpg";

const experienceData = [
  {
    title: "CEO",
    company: "Codeway Enterprise Development",
    companyLink: "https://www.codeway.io/",
    logo: {
      path: codewayLogo,
      width: "calc(0.23 * 200px)",
      height: "calc(0.23 * 200px)",
    },
    city: "Tashkent",
    date: "Started Feb 2020 - Current",
    description: [],
  },
];

const educationData = [
  {
    name: "National University of Uzbekistan",
    link: "https://nuu.uz/",
    city: "Tashkent",
    date: "Sep 2017 - Aug 2021",
    description: [],
  },
];

const projectsData = [
  {
    title: "UZMDB MOVIE APP",
    description: (
      <div>
        <p>
          Uzmdb is an online database of information related to films,
          television programs, home videos, video games, and streaming content
          online – including cast, production crew and personal biographies,
          plot summaries, trivia, ratings, and fan and critical reviews.
        </p>
      </div>
    ),
    link: "https://uzmdb.netlify.app/",
  },
  {
    title: "JOIN",
    description: (
      <div>
        <p>
          Joinchat is a freeware, cross-platform, cloud-based instant messaging
          (IM) software and application service. Join messages are heavily
          encrypted and can self-destruct. Synced. Telegram lets you access your
          chats from multiple devices.
        </p>
      </div>
    ),
    link: "https://github.com/codeway-0841/join-frontend",
  },
  {
    title: "DECOR STORE",
    description: (
      <div>
        <p>
          This home decor and art website specializes in one-of-a-kind antiques
          and rare designer pieces, sourced from dealers all over the world. If
          you have your heart set on a treasure from a particular era, start
          your hunt here.
        </p>
      </div>
    ),
    link: "https://development-decor.vercel.app/",
  },
  {
    title: "TODO",
    description: (
      <div>
        <p>
          The project utilises React to create a simple Todo app. Todo Items are
          generated and rendered to the DOM on enter from the setFiltered State
          instead of modifying and mutating the original array of Todos during
          filtering.
        </p>
      </div>
    ),
    link: "https://codeway-0841.github.io/todo-with-redux/  ",
  },
  {
    title: "JOINCOIN",
    description: (
      <div>
        <p>
          Your one-stop shop for crypto trading Trade Bitcoin, Ethereum, USDT,
          and the top altcoins on the legendary crypto asset exchange.
        </p>
      </div>
    ),
    link: "https://codeway-0841.github.io/joincoin/",
  },
  {
    title: "UZLOG",
    description: (
      <div>
        <p>
          Blog service for developers. Don't worry about where to write, start
          with the blog.
        </p>
      </div>
    ),
    link: "",
  },
];

const skillsData = {
  programming: {
    preferred: ["C#", "JavaScript", "Typescript"],
    knowledge: [""],
    interested: ["Rust"],
  },
  web: {
    preferred: [],
    knowledge: ["React"],
    interested: [],
  },
  rendering: {
    preferred: [],
    knowledge: [],
    interested: ["WebGPU"],
  },
  tools: {
    preferred: [],
    knowledge: ["Docker", "Git", "AWS", "Shell"],
    interested: ["Kubernetes"],
  },
};

export { experienceData, educationData, projectsData, skillsData };

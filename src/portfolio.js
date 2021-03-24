/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to true if you want to use the splash screen.
  useCustomCursor: true, // Change this to false if you want the good'ol cursor
};

//Home Page
const greeting = {
  title: "Hello.",
  title2: "Otmane",
  logo_name: "cRYP70n.p()",
  nickname: "cRYP70n",
  full_name: "Otmane Kimdil",
  subTitle:
    "Full Stack Developer, DevOps Enthusiast. Always learning.",
  resumeLink:
    "https://drive.google.com/file/d/1PdrN3ybF8ydzPmKDqXxqWMTWNfoBYodO/view?usp=sharing",
  mail: "Otmane.kimdil@gmail.com",
};

const socialMediaLinks = {
  /* Your Social Media Link */
  github: "https://github.com/cRYP70n-13",
  linkedin: "https://www.linkedin.com/in/otmane-kimdil/",
  gmail: "otmane.kimdil@gmail.com",
  gitlab: "", // TODO: Put ur gitlab link here
  facebook: "https://www.facebook.com/otmane.ki.12/",
  twitter: "https://twitter.com/Okimdil",
  instagram: "https://www.instagram.com/otmanecode/",
};

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website front end using ReactJS",
        "⚡ Creating application backend in Node, Express & GoLang",
        "⚡ Deploying Microservices applications in Kubernetes",
		"⚡ Designing large scale distributed systems"
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#FFFFFF",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "PHP",
          fontAwesomeClassname: "simple-icons:php",
          style: {
            color: "#7377AD",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#439743",
          },
        },
        {
          skillName: "GraphQL",
          fontAwesomeClassname: "simple-icons:graphql",
          style: {
            color: "#DE33A6",
          },
        },
        {
          skillName: "Nginx",
          fontAwesomeClassname: "simple-icons:nginx",
          style: {
            color: "#269539",
          },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#326CE5",
          },
        },
        {
          skillName: "Go",
          fontAwesomeClassname: "simple-icons:go",
          style: {
            color: "#00A7D0",
          },
        },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#4479A1",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#4479A1",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "simple-icons:python",
          style: {
            color: "#3776AB",
          },
        },
        {
          skillName: "Apache",
          fontAwesomeClassname: "simple-icons:apache",
          style: {
            color: "#CA1A22",
          },
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#E94E32",
          },
        },
        {
          skillName: "C",
          fontAwesomeClassname: "simple-icons:c",
          style: {
            color: "#E94E32",
          },
        },
        {
          skillName: "C++",
          fontAwesomeClassname: "simple-icons:cplusplus",
          style: {
            color: "#E94E32",
          },
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Experience hosting and managing websites",
        "⚡ Deploying deep learning models on cloud to use on mobile devices",
        "⚡ Experience with Continuous Integration",
      ],
      softwareSkills: [
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Netlify",
          fontAwesomeClassname: "simple-icons:netlify",
          style: {
            color: "#38AFBB",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
		{
		  skillName: "Kubernetes",
		  fontAwesomeClassname: "simple-icons:kubernetes",
		  style: {
			color: "#326CE5",
		  },
        },
      ],
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Information Technology architect",
      subtitle: "B.Tech. in Computer Engineering",
	  logo_path: "sal.png", // TODO: Change this photo and put 1337 logo.
      alt_name: "1337",
      duration: "2019 - Present",
      descriptions: [
        "⚡ I have studied core subjects like Data Structures, DBMS, Networking, Security, etc.",
        "⚡ I have also completed various online courses for container orchestration, System design, Web Development, etc.",
        "⚡ I have implemented several projects based on what I've leart under my Computer Engineering course. ",
      ],
      website_link: "https://www.1337.ma/",
    },
  ],
};

const certifications = {
	// TODO: I should also put all my certifications here
  certifications: [
    {
      title: "Deep Learning Specialization",
      subtitle: "deeplearning.ai",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://coursera.org/share/737a9587023c666b8e6cb303157aaeba",
      alt_name: "deeplearning.ai",
      color_code: "#47A048",
    },
    {
      title: "Sequence Models",
      subtitle: "deeplearning.ai",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/FM5AKEZA9NUY",
      alt_name: "deeplearning.ai",
      color_code: "#F6B808",
    },
    {
      title: "Convolutional Neural Networks",
      subtitle: "deeplearning.ai",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/U8BLDNUT9UUM",
      alt_name: "deeplearning.ai",
      color_code: "#2AAFED",
    },
    {
      title: "Structuring Machine Learning Projects",
      subtitle: "deeplearning.ai",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/YLC25SJQKH3Y",
      alt_name: "deeplearning.ai",
      color_code: "#E2405F",
    },
    {
      title: "Machine Learning",
      subtitle: "deeplearning.ai",
      logo_path: "stanford_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/records/72KY93DT82MP",
      alt_name: "Stanford University",
      color_code: "#8C151599",
    },
    {
      title: "Neural Networks and Deep Learning",
      subtitle: "deeplearning.ai",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/records/25JXRB2RWHRX",
      alt_name: "Google",
      color_code: "#7A7A7A",
    },
    {
      title: "Improving Deep Neural Networks",
      subtitle: "deeplearning.ai",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/records/PKR9M9LQ3JWC",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
    {
      title: "Android Developer Nanodegree",
      subtitle: "Part of Google India Scholarship Program",
      logo_path: "100.png",
      certificate_link: "https://graduation.udacity.com/confirm/HLE7K5V3",
      alt_name: "Google",
      color_code: "#C5E2EE",
    },
    {
      title: "Google Summer of Code 2019",
      subtitle: "Google / Sugar Labs",
      logo_path: "google_logo.png",
      certificate_link: " ",
      alt_name: "Google",
      color_code: "#ffc475",
    },
    {
      title: "Google Code-In Student",
      subtitle: "2014-2017",
      logo_path: "google_logo.png",
      certificate_link: " ",
      alt_name: "Google",
      color_code: "#1e70c1",
    },
    {
      title: "Google Summer of Code Mentor",
      subtitle: "2017 / 2018 / 2020",
      logo_path: "google_logo.png",
      certificate_link: " ",
      alt_name: "Google",
      color_code: "#ffbfae",
    },
    {
      title: "InOut 4.0 Winner #2",
      subtitle: "2017",
      logo_path: "ino.png",
      certificate_link: " ",
      alt_name: "InOut",
      color_code: "#fffbf3",
    },
    {
      title: "Google Code-In Mentor",
      subtitle: "2017 / 2018 / 2019",
      logo_path: "google_logo.png",
      certificate_link: " ",
      alt_name: "Google",
      color_code: "#b190b0",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I've gained a lot of experience working with clients around the world, working on highly challenging projects with new technologies and new ways to do things. 🚀",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work Experience",
      experiences: [
        {
          title: "Web Developper freelancer",
          company: "Self employed",
          company_url: "https://www.github.com/cRYP70n-13",
          logo_path: "google_logo.png",
          duration: "May 2019 - ongoing",
          location: "Work From Home",
          description:
            "I work with a lot of clients around the world building a lot of projects from designing the system till deploying the whole application and this inclues Coding, bug fixing, Scaling and optimizing the runtime of the algorithms.",
          color: "#ee3c26",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Google Hash Code competition",
          company: "Google",
          company_url: "https://google.com/",
          logo_path: "google_logo.png",
          duration: "Summer of 2019",
          location: "Benguerir",
          description:
            "I participated with my team to organize Google Hash code competition, also participating as a competitore and winning the first place in Morocco.",
          color: "#4285F4",
        },
        {
          title: "Programming Club in High school",
          company: "",
          company_url: " ",
          logo_path: "b.png",
          duration: "2018 - 2019",
          location: " ",
          description:
            "Co-Founder and President of the programming club called GeekForCode. Have organized several workshops which introduced programming and related tools to freshers.",
          color: "#D83B01",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create web and DevOps projects. Below are some of my projects. Note that not all of the mentioned projects are on GitHub yet.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "hrishi2.png",
    description:
      "You can contact me at the places mentioned below. I will try to get back to you as fast as I can. ",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I don't blog frequently but when I do something awesome, I do try to document it so it can be helpful to others. I write on Medium.",
    link: "https://medium.com/@hrishipatel99",
    avatar_image_path: "blogs_image.svg",
  },
};

const projects = {
  data: [
    {
      id: "0",
      name: "Portfolio",
      url: "https://github.com/cRYP70n-13/portfolio",
      description: "Clean and full customizable portfolio.",
      languages: [
        {
          name: "ReactJS",
          iconifyClass: "logos-react",
        },
      ],
    },
    {
      id: "1",
      name: "Amazon Price Tracker",
      url: " ",
      description:
        "I built an amazon scrapper that extract data from the page and put it in a JSON file",
      languages: [
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
      ],
    },
    {
      id: "12",
      name: "Online Learning Platform API",
      url: "https://github.com/cRYP70n-13/Online_learning_API",
      description:
        "An Online learning platform in the days of quarantine to help student continue their studies from home",
      languages: [
        {
          name: "NodeJS",
          iconifyClass: "logos-nodejs-icon",
        },
		{
		  name: "MongoDB",
		  iconifyClass: "logos-mongodb"
		},
		{
		  name: "Docker",
		  iconifyClass: "logos-docker"
		}
      ],
    },
    {
      id: "13",
      name: "Cub3d",
      url: "https://github.com/cRYP70n-13/Cub3d_DONE",
      description:
        "A 3D game enginge using C programming language and raycasting algorithm, from parsing the config file till rendring the 3D game",
      languages: [
        {
          name: "C Programming",
          iconifyClass: "logos-cIcon",
        },
      ],
    },
    {
      id: "4",
      name: "A* Path Finding Visualizer",
		url: "https://github.com/cRYP70n-13/Path_finding_Visualizer",
      description:
        "This is a path finding visualizer built with the tkinter library and the A* Algorithm to do some visual effects and trace the shortest path between the two dots inside of a grid",
      languages: [
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
      ],
    },
    {
      id: "5",
      name: "ft_server",
      url: "",
      description:
        "A complete LAMP server inside of a contaner with wordpress running inside it using docker",
      languages: [
        {
          name: "Docker",
          iconifyClass: "logos-docker",
        },
      ],
    },
    {
      id: "6",
      name: "Algorithms",
      url: "https://wwww.github.com/cRYP70n-13/Algorithms",
      description:
        "Some Algorithms and Data Strcutures implemented using multiple language like C/C++, JavaScript and Python",
      languages: [
        {
          name: "C/C++",
          iconifyClass: "logos-cIcon",
        },
        {
          name: "Javascript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
      ],
    },
    {
      id: "7",
      name: "GoLang Compiler",
      url: "https://www.github.com/cRYP70n-13/GoLangCompiler",
      description:
        "A simple compiler for my own programming language written in GoLang",
      languages: [
        {
          name: "GoLang",
          iconifyClass: "logos-golang",
        },
      ],
    },
  ],
};

export {
  settings,
  greeting,
  socialMediaLinks,
  skills,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
  projects,
};

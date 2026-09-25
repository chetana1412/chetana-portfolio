import {
    javascript,html,css,reactjs,tailwind,nodejs,mongodb,git,threejs,
    hf,bny,holopin,
    clg,school,school1,
    crypto,oop,yml,crud,dwld,onetomany,
    trie,ds,cg,
    port_3d, jsp, notes, react1,
    be,sql, mini, snl,
  } from "../assets";
  import qrImage from "../assets/project/qr.jpeg";
  import pixelImage from "../assets/project/pixel.jpeg";

  const profiles = [
    {
      link: "https://www.linkedin.com/learning/certificates/9fe4371ca542269ee9a6da34aa1822331f1490918461c6ca52e3eaeafd08367d",
      icon: "https://media.wallstreetprep.com/uploads/2018/02/09095752/mic-linkedin.jpg",
    },
    {
      link: "https://www.futurelearn.com/certificates/4i5ehp9",
      icon: "https://logos-world.net/wp-content/uploads/2020/07/Accenture-Logo.png",
    },
    {
      link: "https://drive.google.com/file/d/1HmJgDLuZ0xbavuhbNJ1OdvCUc_HfLlO4/view?usp=drivesdk",
      icon: "https://images.seeklogo.com/logo-png/27/2/cisco-logo-png_seeklogo-273963.png",
    },
    {
      link: "https://drive.google.com/file/d/1-rYaZ88-xEvWeeJF1bRB3GDz-Mf50zfO/view?usp=drivesdk",
      icon: "https://www.infosys.com/content/dam/infosys-web/en/about/springboard/images/infosys-springboard.png",
    },
    {
      link:"https://drive.google.com/file/d/1lX8CC2XaQXE1mJZ41JM1Ul5lXGugG74h/view?usp=drivesdk",
      icon: "https://sbs.ac.in/wp-content/uploads/2024/02/TCS-iON-Logo.png",
    },
    // {
    //   link:"https://www.holopin.io/@shinchancode#badges",
    //   icon: holopin,
    // },
  ];

  const achievements = [
     {
      title: "Honoured with a Certificate of Appreciation for contributing to vibrant wall art at Hubballi Railway Station,a world's longest railway platform. ",
    },
    {
      title: "Held Leadership position in various clubs and committees in college.",
    },
    {
      title: "2nd Rank in District level Drawing Competition (2018).",
    },
    {
      title: "2nd Rank in College in 6th  Semester (2025).",
    },
    
  ]
  
  const technologies = [
    {
      name:"Bootstrap",
      icon: "https://cdn-icons-png.flaticon.com/512/5968/5968672.png",
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name:"github",
      icon:"https://cdn-icons-png.flaticon.com/256/25/25231.png",
    },

    {
      name:"MySql",
      icon: "https://img.icons8.com/color/480/000000/mysql-logo.png",
    },
    {
      name:"Html",
      icon:"https://cdn-icons-png.flaticon.com/512/5968/5968267.png",
    },
    {
      name:"CSS",
      icon:"https://raw.githubusercontent.com/github/explore/6c6508f34230f0ac0d49e847a326429eefbfc030/topics/css/css.png",
  },
  {
    name:"javascript",
    icon:"https://static.vecteezy.com/system/resources/previews/027/127/463/non_2x/javascript-logo-javascript-icon-transparent-free-png.png",
  },
  ];

  const list = [
    {
      id: "web",
      title: "Web Dev",
    },
  ];

  export const webProject = [
    {
      name: " Portfolio",
      description:
        "Created an impressive website made using React with 3D graphics and animations to bring their content to life. Responsive webpage is made with user friendly interface",
      tags: [
        {
          name: "TailwindCSS",
          color: "blue-text-gradient",
        },
        {
          name: "ThreeJS",
          color: "green-text-gradient",
        },
        {
          name: "3d_react",
          color: "pink-text-gradient",
        },
        
      ],
      image:"https://designnotes.blog.gov.uk/wp-content/uploads/sites/53/2020/06/Portfolio-Desk.jpg"
      // image: port_3d,
      // source_link: "https://shinchancode.github.io/3d-react-portfolio/",
      // source_code_link: "https://github.com/shinchancode/3d-react-portfolio",
    },
    {
      name: "QR Spoofing And Detection",
      description:
        "Built a cybersecurity project to demonstrate how hackers carry out QR-code attacks by replacing or manipulating legitimate QR codes to redirect users to malicious or fraudulent websites. The project also provides a detection mechanism to identify spoofed QR codes and help users avoid potential security threats.",
      tags: [
        {
          name: "Machine Learning",
          color: "blue-text-gradient",
        },
        {
          name: "Python",
          color: "green-text-gradient",
        },
        {
          name: "HTML/CSS",
          color: "pink-text-gradient",
        },
      ],
      image: qrImage,
      // source_link: "https://shinchancode.github.io/React-Portfolio/",
      // source_code_link: "https://github.com/shinchancode/React-Portfolio",
    },
    {
      name: "Pixel Cart",
      description:
        "Pixel Cart is a modern e-commerce shopping website designed to provide users with a smooth and convenient online shopping experience. It allows users to browse products, view product details, search for items, add products to a cart, and manage their shopping selections through a user-friendly interface.",
      tags: [
        {
          name: "JavaScript",
          color: "blue-text-gradient",
        },
        {
          name: "HTML",
          color: "green-text-gradient",
        },
        {
          name: "CSS",
          color: "pink-text-gradient",
        },
      ],
      image: pixelImage,
      // source_link: "https://rathi-30-days-of-javascript.onrender.com/",
      // source_code_link: "https://github.com/shinchancode/30-Days-of-Javascript",
    },
       
  ]
  const experiences = [
    {
    title: "Java Full Stack Developement Intern",
      company_name: "KodNest Technologies Pvt Ltd",
      icon: bny,
      iconBg: "#383E56",
      date: "Feb 2026 - May 2026",
      // link: "",
    points: [
       "Developing and maintaining responsive web interfaces using  Java, DBMS,HTML, CSS, JavaScript, and React.",
       "Collaborating with the design and backend team to build dynamic features and integrate RESTful APIs.",
      // "Contributing to building and optimizing pages for maximum speed, performance, and SEO compliance.",
   //     "Utilizing Git and GitHub for version control and collaborative development in a team environment.",

   ],
      
    }
    
    // {
    //   title: "DSA Mentor",
    //   company_name: "GeeksforGeeks (Intern)",
    //   icon: "https://img.icons8.com/color/344/GeeksforGeeks.png",
    //   iconBg: "#E6DEDD",
    //   date: "May 2022 - Apr 2023",
    //   link: "",
    //   points: [
    //     "Teaching Assistant : Teaching Assistant for online batches of Data Structures, Algorithms, and Competitive programming with an average rating of 4.9*.",
    //     "Responsible for reviewing and writing articles based on Data Structures and Algorithms.",
    //   ],
    //   link: "https://drive.google.com/drive/folders/1efpnfKpRTvtujtSgHwRIJdrMFiWrBFHt",
    // },
  ];
  
  const educations = [
    {
      degree: "Bachelor of Engineering",
      branch:
        "Computer Science and Engineering",
       marks:
       "CGPA : 8.8 / 10",
      name: "Tontadarya College of Engineering, Gadag",
      year: "(2022 - 2026)",
      image: clg,
    },
    {
      degree:
        "12th Grade",
      branch : "Science",
      marks:
      "Percentage : 96 %",
      name: "Samarth PU Science College, Hubli",
      year: "2021",
      image: school1,
    },
    {
      degree:
        "10th Grade",
      branch: "SSLC",
      marks:
      "Percentage : 93.14 %",
      name: "Bapuji Vidyaniketan, Annigeri",
      year: "2019",
      image: school,
    },
  ];
  
  export { list, profiles, technologies, experiences, educations, achievements };

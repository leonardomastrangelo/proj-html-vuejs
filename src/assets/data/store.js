import { reactive } from "vue";

export const store = reactive({
  headerLinks: {
    firstLink: "Courses",
    secondLink: "Courses-formats",
    thirdLink: "Add-course",
    fourthLink: "Pages",
    finthLink: "Demo",
    subLinksFormats: [
      "Default Style",
      "Classic Style",
      "Udemy Affiliate Style",
      "Offline Style",
      "Free Courses",
      "Course Player",
    ],
    subLinkPages: ["About Us", "Contact Us", "Shop"],
    subLinksDemo: [
      "Udemy Affiliate",
      "Light LMS",
      "Dark LMS",
      "Offline Courses",
      "Architecture",
      "Online Academy",
      "Course Hub",
      "Classic LMS",
      "Private Instructor",
      "Coding School",
      "RTL Demo",
      "BuddyPress Demo",
      "Classic LMS 2",
      "Distance Learning",
      "Cooking Courses",
      "Language Center",
    ],
    headerSocials: ["linkedin-in", "instagram", "facebook", "twitter"],
  },
  courses: [
    {
      image: "/images/photo-1496307042754-b4aa456c4a2d-370x200.jpeg",
      title: "How to be a DJ? Make Electronic Music",
      type: "Electronic",
      level: "Advanced",
      lectures: 8,
      hours: 6,
      price: 49.99,
      special: true,
    },
    {
      image: "/images/12345-1-370x200.png",
      title: "Nvidia and UE4 Technologies Practice",
      type: "Nvidia",
      level: "Advanced",
      lectures: 8,
      hours: 6,
      price: 69.99,
      special: true,
    },
    {
      image: "/images/photo-1491897554428-130a60dd4757-370x200.jpeg",
      title: "Fashion Photography from professional",
      type: "Fashion",
      level: "Advanced",
      lectures: 6,
      hours: 5,
      price: 25.99,
      special: true,
    },
    {
      image: "/images/photo-1416339134316-0e91dc9ded92-370x200.jpeg",
      title: "Design Instruments for Communication",
      type: "Communication",
      level: "Intermediate",
      lectures: 6,
      hours: 6,
      price: 36.99,
      special: false,
    },
    {
      image: "/images/cathryn-lavery-67852-unsplash-370x200.jpg",
      title: "Make your Concept Right and Beautiful",
      type: "Art",
      level: "Intermediate",
      lectures: 6,
      hours: 6,
      price: 19.99,
      special: false,
    },
    {
      image: "/images/photo-1475452779376-caebfb988090-370x200.jpeg",
      title: "Road Bike Manual or How to Be a Champion",
      type: "Bicyling",
      level: "Beginner",
      lectures: 6,
      hours: 6,
      price: 48.99,
      special: false,
    },
  ],
  whyCourses: [
    {
      icon: "fa-briefcase",
      title: "Entrepeneurship",
      paragraph:
        "Vestibulum vitae aliquam nunc. Suspendisse mollis metus ac tellus egestas pharetra. Suspendisse at viverra purus. Pellentesque nec posuere ligula, eu congue leo. Integer vulputate tempor arcu. Vestibulum vulputate",
    },
    {
      icon: "fa-rocket",
      title: "Accelerated learning",
      paragraph:
        "Vestibulum vitae aliquam nunc. Suspendisse mollis metus ac tellus egestas pharetra. Suspendisse at viverra purus. Pellentesque nec posuere ligula, eu congue leo. Integer vulputate tempor arcu. Vestibulum vulputate",
    },
    {
      icon: "fa-thumbs-up",
      title: "Productivity",
      paragraph:
        "Vestibulum vitae aliquam nunc. Suspendisse mollis metus ac tellus egestas pharetra. Suspendisse at viverra purus. Pellentesque nec posuere ligula, eu congue leo. Integer vulputate tempor arcu. Vestibulum vulputate",
    },
    {
      icon: "fa-gear",
      title: "Life Coaching",
      paragraph:
        "Vestibulum vitae aliquam nunc. Suspendisse mollis metus ac tellus egestas pharetra. Suspendisse at viverra purus. Pellentesque nec posuere ligula, eu congue leo. Integer vulputate tempor arcu. Vestibulum vulputate",
    },
  ],
  infos: [
    {
      icon: "fa-user-group",
      title: "Online Learner",
      number: 7450,
      max: 7500,
    },
    {
      icon: "fa-photo-film",
      title: "Video Courses",
      number: 30,
      max: 55,
    },
    {
      icon: "fa-image",
      title: "Sliders $ Images",
      number: 999,
      max: 1060,
    },
    {
      icon: "fa-thumbs-up",
      title: "Excellent Reviews",
      number: 3240,
      max: 3330,
    },
  ],
  students: [
    {
      image: "/images/1-100x100.jpg",
      title: "Come as you are",
      description:
        "MasterStudy used is an excellent workshop whether you come as a counselor, advisor, administrator, or faculty member. I am going home empowered. I am looking forward to attending the On Course MasterStudy and the MasterStudy National Conference next year and facilitating the use of this excellent retention/student success course at my college",
    },
    {
      image: "/images/2-100x100.jpg",
      title: "Paints of the future",
      description:
        "The response to your MasterStudy has been really overwhelming! Those who participated in the workshop are spreading the word here on campus and the “buzz” is on. The VP of Instruction wants you to come back! Her goal is to have more faculty trained. She also wants to attend a workshop herself. Our President told me Masterstudy needs to be the cornerstone of our success program.",
    },
    {
      image: "/images/4-100x100.jpg",
      title: "Investing for your future",
      description:
        "It is no exaggeration to say this MasterStudy experience was transformative–both professionally and personally. This workshop will long remain a high point of my life. Thanks again…. I am feeling energized and eager to start teaching my class next week. I can’t wait to use all of my new teaching tools. I will absolutely recommend this workshop to other educators!",
    },
  ],
  footerLinks: [
    {
      title: "about",
      subLinks: [
        "Masterstudy is Education WordPress theme featured by Learning",
        "Management System (LMS) for online education",
        "Developed by StylemixThemes.",
      ],
      icons: ["fa-facebook", "fa-twitter", "fa-instagram"],
    },
    {
      title: "contact",
      subLinks: [
        "USA, Callifornia 20, First Avenue, Callifornia",
        `Tel.: +1 212 458 300 32`,
        `Fax: +1 212 375 24 14`,
        "info@masterstudy.com",
      ],
    },
    {
      title: "pages",
      subLinks: [
        "blog",
        "home",
        "typography",
        "courses",
        "shortcodes",
        "membership L...",
      ],
    },
    {
      title: "blog",
      blogs: {
        blog1: {
          image: "/images/blog-1.jpeg",
          title: "Our main target is to “Developing Yourself as a Leader”",
          release: "August 9, 2018",
        },
        blog2: {
          image: "/images/blog-2.jpeg",
          title: "Those Other College Expenses You Aren`t Thinking About",
          release: "June 3, 2015",
        },
      },
    },
  ],
});

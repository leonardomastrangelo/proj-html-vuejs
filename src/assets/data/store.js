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
});

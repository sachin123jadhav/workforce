export const menuItems = [
  {
    title: "Dashboard",
    isHide: true,
    icon: "heroicons:home-solid",
    link: "/home",
  },
  {
    title: "Staff",
    isHide: true,
    icon: "heroicons:user-solid",
    link: "/staff",
  },

  {
    title: "Event",
    icon: "heroicons:qr-code-solid",
    link: "/event",
    isHide: true,
  },
  {
    title: "Holiday",
    icon: "fontisto:holiday-village",
    link: "/holiday",
    isHide: true,
  },
  {
    title: "QuickLink",
    icon: "solar:link-broken",
    link: "/quicklink",
    isHide: true,
  },
  {
    title: "Announcement",
    icon: "mdi:announcement",
    link: "/announcement",
    isHide: true,
  },

  {
    title: "suggestions",
    icon: "heroicons:qr-code-solid",
    link: "/suggestion",
  },
  {
    title: "Outstation",
    icon: "gis:globe-user",
    link: "/outstation",
    isHide: true,
  },
  {
    title: "Componsetory Off",
    icon: "heroicons:qr-code-solid",
    link: "/compoff",
    isHide: true,
  },
  {
    title: "Leave",
    icon: "heroicons:qr-code-solid",
    link: "/leave",
    isHide: true,
  },

  
  {
    title: "Attendance",
    icon: "tdesign:calendar-2",
    isOpen: true,
    isHide: true,
    child: [
      {
        childtitle: "Regulerization",
        childlink: "regulerization",
      },
      {
        childtitle: "Reports",
        childlink: "reports",
      },
    ],
  },
  {
    title: "Approvals",
    icon: "tdesign:calendar-2",
    isOpen: true,
    isHide: true,
    child: [
      {
        childtitle: "Componsetory Off",
        childlink: "compoffadmin",
      },
      {
        childtitle: "Leaves Admin",
        childlink: "leavesadmin",
      },
      {
        childtitle: "Outstation Admin",
        childlink: "outstationadmin",
      },
      {
        childtitle: "Regulerization Admin",
        childlink: "regulerizationadmin",
      },
    ],
  },
  // {
  //   title: "Attendance",
  //   icon: "heroicons:calendar-days-20-solid",
  //   link: "#",
  //   child: [
  //     {
  //       childtitle: "Views",
  //       childlink: "Level-1",
  //       multi_menu: [
  //         {
  //           multiTitle: "List View",
  //           multiLink: "Level-2",
  //         },
  //         {
  //           multiTitle: "Tabular View",
  //           multiLink: "Level-2.3",
  //         },
  //         {
  //           multiTitle: "Calendar View",
  //           multiLink: "Level-2.4",
  //         },
  //       ],
  //     },
  //     {
  //       childtitle: "Shift Schedule",
  //       childlink: " Level-2",
  //       multi_menu: [
  //         {
  //           multiTitle: "Shift(s)",
  //           multiLink: "Level-3.1",
  //         },
  //         {
  //           multiTitle: "Employee Shift Mapping",
  //           multiLink: "Level-3.2",
  //         },
  //         {
  //           multiTitle: "Shift Calendar",
  //           multiLink: "Level-3.3",
  //         },
  //         {
  //           multiTitle: "Break",
  //           multiLink: "Level-3.4",
  //         },
  //         {
  //           multiTitle: "Shift Rotation",
  //           multiLink: "Level-3.5",
  //         },
  //       ],
  //     },
  //     {
  //       childtitle: "Settings",
  //       childlink: "icons",
  //     },
  //   ],
  // },
  {
    title: "Organization",
    icon: "heroicons:calendar",
    isOpen: true,
    isHide: true,
    child: [
      {
        childtitle: "Employee",
        childlink: "view",
      },
      {
        childtitle: "Department",
        childlink: "applications",
      },
      {
        childtitle: "Designation",
        childlink: "view",
      },
      {
        childtitle: "Exit Details",
        childlink: "applications",
      },
      {
        childtitle: "Birthday Folks",
        childlink: "view",
      },
      {
        childtitle: "Organization Tree",
        childlink: "applications",
      },
      {
        childtitle: "New Hires",
        childlink: "view",
      },
      {
        childtitle: "Favorites",
        childlink: "applications",
      },
      {
        childtitle: "Groups",
        childlink: "view",
      },
      {
        childtitle: "Tasks",
        childlink: "applications",
      },
      {
        childtitle: "Settings",
        childlink: "applications",
      },
    ],
  },
  {
    title: "Company",
    icon: "heroicons:calendar",
    isOpen: true,
    isHide: true,
    child: [
      {
        childtitle: "Company Profile",
        childlink: "companyprofile",
      },
      {
        childtitle: "Designation",
        childlink: "designation",
      },
      {
        childtitle: "Department",
        childlink: "department",
      },
      {
        childtitle: "Employment",
        childlink: "employment",
      },
    ],
  },
];

export const topMenu = [
  {
    title: "Dashboard",
    icon: "heroicons-outline:home",
    link: "/app/home",
    child: [
      {
        childtitle: "Analytics Dashboard",
        childlink: "dashboard",
        childicon: "heroicons:presentation-chart-line",
      },
      {
        childtitle: "Ecommerce Dashboard",
        childlink: "ecommerce",
        childicon: "heroicons:shopping-cart",
      },
      {
        childtitle: "Project  Dashboard",
        childlink: "project",
        childicon: "heroicons:briefcase",
      },
      {
        childtitle: "CRM Dashboard",
        childlink: "crm",
        childicon: "ri:customer-service-2-fill",
      },
      {
        childtitle: "Banking Dashboard",
        childlink: "banking",
        childicon: "heroicons:wrench-screwdriver",
      },
    ],
  },
  {
    title: "App",
    icon: "heroicons-outline:chip",
    link: "/app/home",
    child: [
      {
        childtitle: "Calendar",
        childlink: "calender",
        childicon: "heroicons-outline:calendar",
      },
      {
        childtitle: "Kanban",
        childlink: "kanban",
        childicon: "heroicons-outline:view-boards",
      },
      {
        childtitle: "Todo",
        childlink: "todo",
        childicon: "heroicons-outline:clipboard-check",
      },
      {
        childtitle: "Projects",
        childlink: "projects",
        childicon: "heroicons-outline:document",
      },
    ],
  },
  {
    title: "Pages",
    icon: "heroicons-outline:view-boards",
    link: "/app/home",
    megamenu: [
      {
        megamenutitle: "Authentication",
        megamenuicon: "heroicons-outline:user",
        singleMegamenu: [
          {
            m_childtitle: "Signin One",
            m_childlink: "/",
          },
          {
            m_childtitle: "Signin Two",
            m_childlink: "/login2",
          },
          {
            m_childtitle: "Signin Three",
            m_childlink: "/login3",
          },
          {
            m_childtitle: "Signup One",
            m_childlink: "/register",
          },
          {
            m_childtitle: "Signup Two",
            m_childlink: "/register/register2",
          },
          {
            m_childtitle: "Signup Three",
            m_childlink: "/register/register3",
          },
          {
            m_childtitle: "Forget Password One",
            m_childlink: "/forgot-password",
          },
          {
            m_childtitle: "Forget Password Two",
            m_childlink: "/forgot-password2",
          },
          {
            m_childtitle: "Forget Password Three",
            m_childlink: "/forgot-password3",
          },
          {
            m_childtitle: "Lock Screen One",
            m_childlink: "/lock-screen",
          },
          {
            m_childtitle: "Lock Screen Two",
            m_childlink: "/lock-screen2",
          },
          {
            m_childtitle: "Lock Screen Three",
            m_childlink: "/lock-screen3",
          },
        ],
      },

      {
        megamenutitle: "Components",
        megamenuicon: "heroicons-outline:user",
        singleMegamenu: [
          {
            m_childtitle: "typography",
            m_childlink: "typography",
          },
          {
            m_childtitle: "colors",
            m_childlink: "colors",
          },
          {
            m_childtitle: "alert",
            m_childlink: "alert",
          },
          {
            m_childtitle: "button",
            m_childlink: "button",
          },
          {
            m_childtitle: "card",
            m_childlink: "card",
          },
          {
            m_childtitle: "carousel",
            m_childlink: "carousel",
          },
          {
            m_childtitle: "dropdown",
            m_childlink: "dropdown",
          },
          {
            m_childtitle: "image",
            m_childlink: "image",
          },
          {
            m_childtitle: "modal",
            m_childlink: "modal",
          },
          {
            m_childtitle: "Progress bar",
            m_childlink: "progress-bar",
          },
          {
            m_childtitle: "Placeholder",
            m_childlink: "placeholder",
          },

          {
            m_childtitle: "Tab & Accordion",
            m_childlink: "tab-accordion",
          },
        ],
      },
      {
        megamenutitle: "Forms",
        megamenuicon: "heroicons-outline:user",
        singleMegamenu: [
          {
            m_childtitle: "Input",
            m_childlink: "input",
          },
          {
            m_childtitle: "Input group",
            m_childlink: "input-group",
          },
          {
            m_childtitle: "Input layout",
            m_childlink: "input-layout",
          },
          {
            m_childtitle: "Form validation",
            m_childlink: "form-validation",
          },
          {
            m_childtitle: "Wizard",
            m_childlink: "form-wizard",
          },
          {
            m_childtitle: "Input mask",
            m_childlink: "input-mask",
          },
          {
            m_childtitle: "File input",
            m_childlink: "file-input",
          },
          {
            m_childtitle: "Form repeater",
            m_childlink: "form-repeater",
          },
          {
            m_childtitle: "Textarea",
            m_childlink: "textarea",
          },
          {
            m_childtitle: "Checkbox",
            m_childlink: "checkbox",
          },
          {
            m_childtitle: "Radio button",
            m_childlink: "radio-button",
          },
          {
            m_childtitle: "Switch",
            m_childlink: "switch",
          },
        ],
      },
      {
        megamenutitle: "Utility",
        megamenuicon: "heroicons-outline:user",
        singleMegamenu: [
          {
            m_childtitle: "Invoice",
            m_childlink: "invoice",
          },
          {
            m_childtitle: "Pricing",
            m_childlink: "pricing",
          },

          // {
          //   m_childtitle: "Testimonial",
          //   m_childlink: "testimonial",
          // },
          {
            m_childtitle: "FAQ",
            m_childlink: "faq",
          },
          {
            m_childtitle: "Blank page",
            m_childlink: "blank-page",
          },
          {
            m_childtitle: "Blog",
            m_childlink: "blog",
          },
          {
            m_childtitle: "404 page",
            m_childlink: "error-page",
          },
          {
            m_childtitle: "Coming Soon",
            m_childlink: "coming-soon",
          },
          {
            m_childtitle: "Under Maintanance page",
            m_childlink: "under-construction",
          },
        ],
      },
    ],
  },

  {
    title: "Widgets",
    icon: "heroicons-outline:view-grid-add",
    link: "form-elements",
    child: [
      {
        childtitle: "Basic",
        childlink: "basic",
        childicon: "heroicons-outline:document-text",
      },
      {
        childtitle: "Statistic",
        childlink: "statistic",
        childicon: "heroicons-outline:document-text",
      },
    ],
  },

  {
    title: "Extra",
    icon: "heroicons-outline:template",

    child: [
      {
        childtitle: "Basic Table",
        childlink: "table-basic",
        childicon: "heroicons-outline:table",
      },
      {
        childtitle: "Advanced table",
        childlink: "table-advanced",
        childicon: "heroicons-outline:table",
      },
      {
        childtitle: "Apex chart",
        childlink: "appex-chart",
        childicon: "heroicons-outline:chart-bar",
      },
      {
        childtitle: "Chart js",
        childlink: "chartjs",
        childicon: "heroicons-outline:chart-bar",
      },
      {
        childtitle: "Map",
        childlink: "map",
        childicon: "heroicons-outline:map",
      },
    ],
  },
];

export const notifications = [
  {
    title: "Your order is placed",
    desc: "Amet minim mollit non deser unt ullamco est sit aliqua.",

    image: "/assets/images/all-img/user.png",
    link: "#",
  },
  {
    title: "Congratulations Darlene  🎉",
    desc: "Won the monthly best seller badge",
    unread: true,
    image: "/assets/images/all-img/user2.png",
    link: "#",
  },
  {
    title: "Revised Order 👋",
    desc: "Won the monthly best seller badge",

    image: "/assets/images/all-img/user3.png",
    link: "#",
  },
  {
    title: "Brooklyn Simmons",
    desc: "Added you to Top Secret Project group...",

    image: "/assets/images/all-img/user4.png",
    link: "#",
  },
];

export const message = [
  {
    title: "Wade Warren",
    desc: "Hi! How are you doing?.....",
    active: true,
    hasnotifaction: true,
    notification_count: 1,
    image: "/assets/images/all-img/user1.png",
    link: "#",
  },
  {
    title: "Savannah Nguyen",
    desc: "Hi! How are you doing?.....",
    active: false,
    hasnotifaction: false,
    image: "/assets/images/all-img/user2.png",
    link: "#",
  },
  {
    title: "Ralph Edwards",
    desc: "Hi! How are you doing?.....",
    active: false,
    hasnotifaction: true,
    notification_count: 8,
    image: "/assets/images/all-img/user3.png",
    link: "#",
  },
  {
    title: "Cody Fisher",
    desc: "Hi! How are you doing?.....",
    active: true,
    hasnotifaction: false,
    image: "/assets/images/all-img/user4.png",
    link: "#",
  },
  {
    title: "Savannah Nguyen",
    desc: "Hi! How are you doing?.....",
    active: false,
    hasnotifaction: false,
    image: "/assets/images/all-img/user2.png",
    link: "#",
  },
  {
    title: "Ralph Edwards",
    desc: "Hi! How are you doing?.....",
    active: false,
    hasnotifaction: true,
    notification_count: 8,
    image: "/assets/images/all-img/user3.png",
    link: "#",
  },
  {
    title: "Cody Fisher",
    desc: "Hi! How are you doing?.....",
    active: true,
    hasnotifaction: false,
    image: "/assets/images/all-img/user4.png",
    link: "#",
  },
];

export const colors = {
  primary: "#4669FA",
  secondary: "#A0AEC0",
  danger: "#F1595C",
  black: "#111112",
  warning: "#FA916B",
  info: "#0CE7FA",
  light: "#425466",
  success: "#50C793",
  "gray-f7": "#F7F8FC",
  dark: "#1E293B",
  "dark-gray": "#0F172A",
  gray: "#68768A",
  gray2: "#EEF1F9",
  "dark-light": "#CBD5E1",
};

export const hexToRGB = (hex, alpha) => {
  var r = parseInt(hex.slice(1, 3), 16),
    g = parseInt(hex.slice(3, 5), 16),
    b = parseInt(hex.slice(5, 7), 16);

  if (alpha) {
    return "rgba(" + r + ", " + g + ", " + b + ", " + alpha + ")";
  } else {
    return "rgb(" + r + ", " + g + ", " + b + ")";
  }
};

export const topFilterLists = [
  {
    name: "Inbox",
    value: "all",
    icon: "uil:image-v",
  },
  {
    name: "Starred",
    value: "fav",
    icon: "heroicons:star",
  },
  {
    name: "Sent",
    value: "sent",
    icon: "heroicons-outline:paper-airplane",
  },

  {
    name: "Drafts",
    value: "drafts",
    icon: "heroicons-outline:pencil-alt",
  },
  {
    name: "Spam",
    value: "spam",
    icon: "heroicons:information-circle",
  },
  {
    name: "Trash",
    value: "trash",
    icon: "heroicons:trash",
  },
];

export const bottomFilterLists = [
  {
    name: "personal",
    value: "personal",
    icon: "heroicons:chevron-double-right",
  },
  {
    name: "Social",
    value: "social",
    icon: "heroicons:chevron-double-right",
  },
  {
    name: "Promotions",
    value: "promotions",
    icon: "heroicons:chevron-double-right",
  },
  {
    name: "Business",
    value: "business",
    icon: "heroicons:chevron-double-right",
  },
];

export const meets = [
  {
    img: "/assets/images/svg/sk.svg",
    title: "Meeting with client",
    date: "01 Nov 2021",
    meet: "Zoom meeting",
  },
  {
    img: "/assets/images/svg/path.svg",
    title: "Design meeting (team)",
    date: "01 Nov 2021",
    meet: "Skyp meeting",
  },
  {
    img: "/assets/images/svg/dc.svg",
    title: "Background research",
    date: "01 Nov 2021",
    meet: "Google meeting",
  },
  {
    img: "/assets/images/svg/sk.svg",
    title: "Meeting with client",
    date: "01 Nov 2021",
    meet: "Zoom meeting",
  },
];

export const files = [
  {
    img: "/assets/images/icon/file-1.svg",
    title: "Dashboard.fig",
    date: "06 June 2021 / 155MB",
  },
  {
    img: "/assets/images/icon/pdf-1.svg",
    title: "Ecommerce.pdf",
    date: "06 June 2021 / 155MB",
  },
  {
    img: "/assets/images/icon/zip-1.svg",
    title: "Job portal_app.zip",
    date: "06 June 2021 / 155MB",
  },
  {
    img: "/assets/images/icon/pdf-2.svg",
    title: "Ecommerce.pdf",
    date: "06 June 2021 / 155MB",
  },
  {
    img: "/assets/images/icon/scr-1.svg",
    title: "Screenshot.jpg",
    date: "06 June 2021 / 155MB",
  },
];

export const birthdaysData = [
  {
    id: 1,
    date: "15 Oct",
    name: "Parmeshwar",
    title: "Software Engineer",
  },
  {
    id: 2,
    date: "18 Oct",
    name: "Siddhesh",
    title: "Frontend Developer",
  },
  {
    id: 3,
    date: "28 Oct",
    name: "Amol",
    title: "Admin",
  },
];

export const userData = [
  {
    id: 1,
    title: "Active Users",
    count: "212",
    bg: "bg-gradient-to-r from-[#1d976c] to-[#2fd38a]",
    iconColor: "text-[#1d976c]",
    icon: "fa:users",
  },
  {
    id: 2,
    title: "Not Logged In",
    count: "35",
    bg: "bg-gradient-to-r from-[#664dc9] to-[#664dc999]",
    iconColor: "text-[#664dc9]",
    icon: "fa6-solid:users-slash",
  },
  {
    id: 3,
    title: "On Leave",
    count: "05",
    bg: "bg-gradient-to-r from-[#4669fa] to-[#4669fa]",
    iconColor: "text-[#fa5420]",
    icon: "gis:globe-users",
  },
];

export const newHires = [
  {
    id: 1,
    name: "Parmeshwar",
    title: "Software Engineer",
    image: "./assets/images/avatar/parmeshwar.jpg",
  },
  {
    id: 2,
    name: "Siddhesh",
    title: "Frontend Developer",
    image: "./assets/images/avatar/siddhesh.jpg",
  },
  {
    id: 3,
    name: "Amol",
    title: "Admin",
    image: "./assets/images/avatar/user.jpeg",
  },
];

export const upcomingHolidays = [
  {
    id: 1,
    name: "Dussehra",
    date: "24 Oct",
  },
  {
    id: 2,
    name: "Diwali",
    date: "12 Nov",
  },
  {
    id: 3,
    name: "Bhai Duj",
    date: "15 Nov",
  },
];

type Route = {
  title: string,
  path: string
}

type FooterCol = {
  title: string,
  links: {
    name: string,
    link: string,
    icon?: string,
    leavesWebsite: boolean
  }[]
}

type Footer = {
  columns: FooterCol[]
  support: {
    buymeacoffee: string
    message: string
  }
};

export const routes: Route[] = [
  {
    title: "Home",
    path: "/",
  },
  // {
  //   title: "Blog",
  //   path: "/blog",
  // },
  {
    title: "Projects",
    path: "/projects",
  },
  {
    title: "Resume",
    path: "/resume",
  },
  // {
  //   title: "Designs",
  //   path: "/designs",
  // },
];


export const footer: Footer = {
  columns: [
    {
      title: "Pages",
      links: [
        {
          name: "Home",
          link: "/",
          leavesWebsite: false,
        },
        // {
        //   name: "Blog",
        //   link: "/blog",
        //   leavesWebsite: false,
        // },
        {
          name: "Projects",
          link: "/projects",
          leavesWebsite: false,
        },
        // {
        //   name: "Designs",
        //   link: "/designs",
        //   leavesWebsite: false,
        // },
      ],
    },
    {
      title: "Social",
      links: [
        {
          name: "Email",
          link: "mailto:dongarevivek81@gmial.com",
          icon: "/static/icons/gmail.svg",
          leavesWebsite: true,
        },
        {
          name: "LinkedIn",
          link: "https://www.linkedin.com/in/vivek-dongare-50823a18b/",
          icon: "/static/icons/linkedin.svg",
          leavesWebsite: true,
        },
        {
          name: "GitHub",
          link: "https://github.com/vivekdongare81",
          icon: "/static/icons/github.svg",
          leavesWebsite: true,
        },
        {
          name: "LeetCode",
          link: "https://leetcode.com/u/dongarevivek81/",
          icon: "/static/icons/leetcode.svg",
          leavesWebsite: true,
        },
      ],
    },
  ],
  support: {
    buymeacoffee: "dongarevivw",
    message: "I appreciate your support very much! 💙",
  },
};

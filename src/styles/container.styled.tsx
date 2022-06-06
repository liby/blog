import style9 from "style9";

declare module "style9" {
  interface CustomProperties {
    "--tw-translate-x"?: string | number;
    "--tw-translate-y"?: string | number;
    "--tw-rotate"?: string | number;
    "--tw-skew-x"?: string | number;
    "--tw-skew-y"?: string | number;
    "--tw-scale-x"?: string | number;
    "--tw-scale-y"?: string | number;
    "--tw-ring-color"?: string;
    "--tw-ring-offset-shadow"?: string;
    "--tw-ring-shadow"?: string;
  }
}

export const { ...containerStyles } = style9.create({
  navItemActive: {
    fontWeight: 600,
    color: "rgba(31, 41, 55, 1)",
    // "@media (prefers-color-scheme: dark)": {
    //   color: "rgba(229, 231, 235, 1)",
    // },
  },

  navItemInactive: {
    fontWeight: 400,
    color: "rgba(75, 85, 99, 1)",
    // "@media (prefers-color-scheme: dark)": {
    //   color: "rgba(156, 163, 175, 1)",
    // },
  },

  navItemCommon: {
    display: "none",
    borderRadius: "0.5rem",
    padding: "0.25rem",

    transitionProperty: "all",
    transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
    transitionDuration: "150ms",

    ":hover": {
      backgroundColor: "rgba(229, 231, 235, 1)",
    },

    // "@media (prefers-color-scheme: dark)": {
    //   ":hover": {
    //     backgroundColor: "rgba(31, 41, 55, 1)",
    //   },
    // },

    "@media (min-width: 640px)": {
      padding: "0.5rem 0.75rem",
    },

    "@media (min-width: 768px)": {
      display: "inline-block",
    },
  },

  wrapper: {
    // backgroundColor: "rgba(249, 250, 251, 1)",
    // "@media (prefers-color-scheme: dark)": {
    //   backgroundColor: "rgba(17, 24, 39, 1)",
    // },
  },

  sectionWrapper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: "0 2rem",
  },

  navWrapper: {
    position: "relative",
    width: "100%",
    maxWidth: "42rem",
    margin: "auto auto",
    padding: "2rem 0",

    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",

    borderColor: "rgba(229, 231, 235, 1)",
    // backgroundColor: "rgba(249, 250, 251, 1)",
    color: "rgba(17, 24, 39, 1)",

    // "@media (prefers-color-scheme: dark)": {
    //   borderColor: "rgba(55, 65, 81, 1)",
    //   backgroundColor: "rgba(17, 24, 39, 1)",
    //   color: "rgba(243, 244, 246, 1)",
    // },

    "@media (min-width: 640px)": {
      paddingBottom: "4rem",
    },
  },

  menuWrapper: {
    marginLeft: "-0.60rem",
  },

  skipNav: {
    position: "absolute",
    top: "-3rem",
    left: "-25%",
    padding: "0.75rem 1rem",

    "--tw-translate-y": "-3rem",

    transitionProperty: "transform",
    transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
    transitionDuration: "200ms",

    ":focus": {
      top: "1rem",
      "--tw-translate-x": 0,
      "--tw-translate-y": "0.75rem",
      "--tw-rotate": 0,
      "--tw-skew-x": 0,
      "--tw-skew-y": 0,
      "--tw-scale-x": 1,
      "--tw-scale-y": 1,
      transform:
        "translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))",
    },
  },

  toggleDarkModeButton: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    height: "2.25rem",
    width: "2.25rem",

    borderRadius: "0.5rem",
    color: "rgba(229, 231, 235, 1)",

    transitionProperty: "all",
    transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
    transitionDuration: "150ms",

    ":hover": {
      "--tw-ring-color": "rgba(209, 213, 219, 1)",
      "--tw-ring-offset-shadow":
        "var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)",
      "--tw-ring-shadow":
        "var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color)",
      boxShadow:
        "var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000)",
    },

    // "@media (prefers-color-scheme: dark)": {
    //   backgroundColor: "rgba(75, 85, 99, 1)",
    // },
  },

  toggleDarkModeIcon: {
    height: "1.25rem",
    width: "1.25rem",
    color: "rgba(31, 41, 55, 1)",

    // "@media (prefers-color-scheme: dark)": {
    //   color: "rgba(229, 231, 235, 1)",
    // },
  },
});

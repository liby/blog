import style9 from "style9";

export const { ...utilStyles } = style9.create({
  heading2Xl: {
    fontSize: "2.5rem",
    lineHeight: 1.2,
    fontWeight: 800,
    letterSpacing: "-0.05rem",
    margin: "1rem 0",
  },

  headingXl: {
    fontSize: "2rem",
    lineHeight: 1.3,
    fontWeight: 800,
    letterSpacing: "-0.05rem",
    margin: "1rem 0",
  },

  headingLg: {
    fontSize: "1.5rem",
    lineHeight: 1.4,
    margin: "1rem 0",
  },

  headingMd: {
    fontSize: "1.2rem",
    lineHeight: 1.5,
  },

  borderCircle: {
    borderRadius: "9999px",
  },

  colorInherit: {
    color: "inherit",
  },

  padding1px: {
    paddingTop: "1px",
  },

  list: {
    listStyleType: "none",
    padding: 0,
    margin: 0,
  },

  listItem: {
    margin: "0 0 1.25rem",
  },

  lightText: {
    color: "#666",
  },
});

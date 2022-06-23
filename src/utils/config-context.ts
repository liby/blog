import { createContext, useContext } from "react";

export type BlogConfigs = {
  onChange: (isDark: boolean) => void;
};

export const defaultBlogConfigsContext = {
  onChange: () => {},
};

export const BlogConfigsContext = createContext<BlogConfigs>(
  defaultBlogConfigsContext
);

const useBlogConfigs = () => useContext(BlogConfigsContext);

export default useBlogConfigs;

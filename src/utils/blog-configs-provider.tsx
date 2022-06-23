import { memo, PropsWithChildren } from "react";
import { BlogConfigs, BlogConfigsContext } from "./config-context";

export interface BlogConfigsProviderProps {
  onChange: BlogConfigs["onChange"];
}

const BlogConfigsProvider = memo(function BlogConfigsProvider({
  onChange,
  children,
}: PropsWithChildren<BlogConfigsProviderProps>) {
  return (
    <BlogConfigsContext.Provider value={{ onChange }}>
      {children}
    </BlogConfigsContext.Provider>
  );
});

export default BlogConfigsProvider;

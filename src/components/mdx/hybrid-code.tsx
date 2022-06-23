import {
  Children,
  isValidElement,
  ReactNode,
  useMemo,
  cloneElement,
} from "react";
import { Code, CodeProps } from "@geist-ui/core";

export const FILE_NAME_PREFIX = "// NAME:";
type HybridCodeChildrenAndName = {
  children: ReactNode | undefined;
  name?: string | undefined;
};

const extractFileName = (
  children: ReactNode | undefined,
  stopDeep: boolean = false
): HybridCodeChildrenAndName => {
  if (!children) return { children };
  let name: string | undefined = undefined;
  const next = Children.map(children, (child) => {
    if (name) return child;
    if (!isValidElement(child)) return null;
    const grandson = child.props?.children;
    if (
      typeof grandson === "string" &&
      grandson?.startsWith(FILE_NAME_PREFIX)
    ) {
      name = grandson;
      return null;
    }
    if (!Array.isArray(grandson) || stopDeep) return child;

    const { children: puredGrandson, name: puredName } = extractFileName(
      child.props?.children,
      true
    );
    if (!puredName) return child;

    name = puredName;
    const withoutSpaceAndNull = Children.toArray(puredGrandson).filter(
      (r, index) => {
        if (index === 0 && r === "\n") return false;
        return !!r;
      }
    );
    return cloneElement(child, {
      children: withoutSpaceAndNull,
    });
  });
  return {
    children: next,
    name,
  };
};

export const HybridCode = ({ children }: CodeProps) => {
  const { children: withoutNameChildren, name } =
    useMemo<HybridCodeChildrenAndName>(
      () => extractFileName(children),
      [children]
    );
  const withoutPrefixName = useMemo(() => {
    if (!name) return name;
    return name.replace(FILE_NAME_PREFIX, "");
  }, [name]);

  return (
    <Code block name={withoutPrefixName}>
      {withoutNameChildren}
    </Code>
  );
};

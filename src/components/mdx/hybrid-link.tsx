import NextLink from "next/link";
import { Link, LinkProps } from "@geist-ui/core";
import { PropsWithChildren, HTMLProps } from "react";

export const HybridLink = ({ href = "#", children, ...props }: PropsWithChildren<HTMLProps<HTMLAnchorElement>>) => {
  const isRelativeUrl = !/^([a-z0-9]*:|.{0})\/\/.*$/gim.test(href);

  if (isRelativeUrl) {
    return (
      <NextLink href={href} passHref>
        {/* @ts-ignore */}
        <Link color block {...props}>
          {children}
        </Link>
      </NextLink>
    );
  }

  return (
    <Link
      href={href}
      target="_blank"
      // @ts-ignore
      color
      rel="noreferrer nofollow"
      {...props}
    >
      {children}
    </Link>
  );
};

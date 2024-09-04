"use client";

import Link, { LinkProps } from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { MouseEventHandler } from "react";

interface TransitionLinkProps extends LinkProps {
  children: React.ReactNode;
  href: string;
}

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const TransitionLink = ({ children, href, ...props }: TransitionLinkProps) => {
  const router = useRouter();
  const pathname = usePathname();

  async function handleTransition(
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) {
    e.preventDefault();

    if (pathname === href) {
      return;
    }

    const appContent = document.querySelector("#app-content");
    appContent?.classList.add("exit");
    await sleep(500);
    router.push(href);
    appContent?.classList.add("enter");
    await sleep(500);

    appContent?.classList.remove("enter");
    appContent?.classList.remove("exit");
  }

  return (
    <Link onClick={handleTransition} href={href} {...props}>
      {children}
    </Link>
  );
};

export default TransitionLink;

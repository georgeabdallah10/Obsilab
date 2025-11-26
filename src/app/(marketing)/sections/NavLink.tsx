"use client"
import Link, { LinkProps } from "next/link";
import { forwardRef } from "react";
import { usePathname } from "next/navigation";
import {cn} from "../lib/utils";

interface NavLinkProps extends LinkProps {
  className?: string;
  activeClassName?: string;
  pendingClassName?: string;
  children: React.ReactNode;
}

const NavLink = forwardRef<HTMLAnchorElement, NavLinkProps>(
  ({ className, activeClassName, pendingClassName, href, children, ...props }, ref) => {
    const pathname = usePathname();

    const isActive = pathname === href;
    const isPending = false; // Next.js does not expose pending state like react-router

    return (
      <Link
        ref={ref}
        href={href}
        className={cn(
          className,
          isActive && activeClassName,
          isPending && pendingClassName
        )}
        {...props}
      >
        {children}
      </Link>
    );
  }
);

NavLink.displayName = "NavLink";

export { NavLink };
import type { AnchorHTMLAttributes, FC, PropsWithChildren } from "react";
import clsx from "clsx";

interface ActiveLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {}

export const HeaderLink: FC<PropsWithChildren<ActiveLinkProps>> = ({
  href = "",
  className,
  children,
  ...props
}) => {
  const pathname = window.location.pathname;
  const subpath = pathname.match(/[^/]+/g);
  const isActive = href === pathname || href === "/" + (subpath?.[0] || "");

  return (
    <a href={href} className={clsx(className, { active: isActive })} {...props}>
      {children}
    </a>
  );
};

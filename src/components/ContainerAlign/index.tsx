import { ReactNode } from "react";

interface ContainerAlignProps {
  children: ReactNode;
  extraClass?: string;
}

//prettier-ignore
export default function ContainerAlign({ children, extraClass }: ContainerAlignProps) {
  return <div className={`container mx-auto ${extraClass}`}>{children}</div>;
}

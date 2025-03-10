import { LucideProps } from "lucide-react-native";
import { cloneElement, ReactElement } from "react";

type IconWrapperProps = LucideProps & {
  size?: number;
  color?: string;
  children: ReactElement;
};

function IconWrapper({
  size = 16,
  color = "black",
  children,
}: IconWrapperProps) {
  return cloneElement(children, { size, color });
}

export default IconWrapper;

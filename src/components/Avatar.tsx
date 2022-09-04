import { HTMLProps, ImgHTMLAttributes } from "react";
import styles from "./Avatar.module.css";

interface Props extends ImgHTMLAttributes<HTMLImageElement>{
  src: string;
  hasBorder?: boolean;
}

export function Avatar({ src, hasBorder = false, ...rest }: Props) {
  return (
    <img
      className={hasBorder ? styles.avatarWithBorder : styles.avatar}
      src={src}
      {...rest}
    />
  );
}

import styles from "./Avatar.module.css";

interface Props {
  src: string;
  hasBorder?: boolean;
}

export function Avatar({ src, hasBorder = false }: Props) {
  return (
    <img
      className={hasBorder ? styles.avatarWithBorder : styles.avatar}
      src={src}
    />
  );
}

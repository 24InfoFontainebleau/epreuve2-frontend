import { ButtonHTMLAttributes } from "react";
import styles from "@/scss/components/button.module.scss";
import Link from "next/link";

type CustomButton = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: string;
};

type RedirectButton = CustomButton & {
  buttontype: "redirect";
  href: string;
  onClick?: () => void;
};

type ClickableButton = CustomButton & {
  buttontype: "button";
  onClick?: () => void;
};

type ButtonProps = Readonly<ClickableButton | RedirectButton>;

export default function Button(props: ButtonProps) {
  switch (props.buttontype) {
    case "button":
      return (
        <button
          type="button"
          className={`${styles.button} ${props.className ?? ""}`}
          {...props}
        />
      );
    case "redirect":
      return (
        <Link href={props.href}>
          <button type="button" className={styles.button} {...props} />
        </Link>
      );

    default:
      throw new Error("Invalid button type");
  }
}

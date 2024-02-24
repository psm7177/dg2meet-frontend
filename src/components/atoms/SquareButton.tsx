import classnames from "classnames";
import { HTMLAttributes } from "react";

interface SqaureButtonProps extends HTMLAttributes<HTMLDivElement> {
  selected?: boolean;
}

export default function SqaureButton(props: SqaureButtonProps) {
  const { children, className, selected, ...rest } = props;

  return (
    <div
      className={classnames(
        "cursor-pointer select-none border-2 w-16 h-16 flex items-center justify-center rounded-lg",
        className, (selected ? 'bg-green-400':undefined)
      )}
      {...rest}
    >
      {children}
    </div>
  );
}

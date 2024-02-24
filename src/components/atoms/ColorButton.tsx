import classnames from "classnames";
import { HTMLAttributes } from "react";

interface ColorButtonProps extends HTMLAttributes<HTMLDivElement> {
  selected?: boolean;
}

export default function ColorButton(props: ColorButtonProps) {
  const { children, className, selected, ...rest } = props;

  return (
    <div
      className={classnames(
        "cursor-pointer select-none h-8 flex items-center text-white font-bold bg-sky-400 justify-center rounded",
        className, (selected ? 'bg-green-400':undefined)
      )}
      {...rest}
    >
      {children}
    </div>
  );
}

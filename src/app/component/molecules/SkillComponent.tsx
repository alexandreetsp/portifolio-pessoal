import React, {ReactNode} from "react";

import {cva, cx} from "class-variance-authority";
import {Card, CardHeader, CardContent} from "../atoms/Card";

export interface cardProps extends React.HTMLAttributes<HTMLDivElement> {
  titleCard: string | ReactNode | undefined;
  contentCard: string | ReactNode | undefined;
  variant?: any;
  classNameHeader?: string;
  classNameContent?: string;
}

const variantSpan = cva("rounded-lg text-white", {
  variants: {
    variant: {
      info: "bg-[#475569]",
      danger: "bg-[#B91C1C]",
      success: "bg-[#15803D]",
      warning: "bg-[#F59E0B]",
    },
  },
  defaultVariants: {
    variant: "info",
  },
});

function CardSkill({
  titleCard,
  contentCard,
  variant,
  className,
  classNameHeader,
  classNameContent,
  ...props
}: cardProps) {
  return (
    <Card {...props} className={cx(variantSpan({variant}), className)}>
      <div className={classNameHeader}>{titleCard}</div>
      <div className={classNameContent}>{contentCard}</div>
    </Card>
  );
}

export default CardSkill;

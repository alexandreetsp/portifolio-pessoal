import React, {ReactNode} from "react";
import {
  Card,
  CardHeader,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from "../atoms/Card";

interface CardCodeSnippet {
  title: ReactNode;
  children: ReactNode;
  className?: string;
}

type PropsCars = CardCodeSnippet;

function CardsComponent({title, children, className}: PropsCars) {
  return (
    <div>
      <Card className={className}>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
        </CardHeader>
        <CardContent>{children}</CardContent>
      </Card>
    </div>
  );
}

export default CardsComponent;

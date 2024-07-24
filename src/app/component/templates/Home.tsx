import React, {useEffect, useState} from "react";
import CardsComponent from "../molecules/CardsComponent";
import {Separator} from "../atoms/Separator";
import {CopyIcon} from "lucide-react";
import {Button} from "../atoms/Button";
import imageTeste from "../../../../public/image.png";
import Image from "next/image";
import {format, formatDate} from "date-fns";

const weekday = [
  "Domingo",
  "Segunda-Feira",
  "Terça-Feira",
  "Quarta-Feira",
  "Quinta-Feira",
  "Sexta-Feira",
  "Sabado",
];

const jsonObject = {
  name: "Alexandre Marcelino De Sousa",
  private: true,
  idiomas: {
    english: "EN-US",
    portugues: "PT-BR",
  },
  habilidades: [
    "Javascript",
    "PHP",
    "Python",
    "NestJS",
    "MySql",
    "MongoDB",
    "Docker",
    "AWS",
  ],
  ferramentas: {
    "next-js": ["TypeScript", "Redux", "Shadcn/UI", "Tailwind", "Jest"],
    "angular-js": ["MVC", "gulp"],
    react: ["Prettier", "Storybook", "FrameMotion.js"],
  },
};

const renderObject = (obj: any, indent = 2) => {
  // const [width, setWidth] = useState<number>(0);

  // function handleWindowSizeChange() {
  //   setWidth(window.innerWidth);
  // }
  // useEffect(() => {
  //   handleWindowSizeChange()
  //   window.addEventListener("resize", handleWindowSizeChange);
  //   return () => {
  //     window.removeEventListener("resize", handleWindowSizeChange);
  //   };
  // }, []);

  // const isMobile = width <= 968;

  // const number = isMobile ? 4 : 5;

  return Object.entries(obj).map(([key, value]) => (
    <div key={key} className="ml-4">
      <div className="">
        {Array.isArray(value) ? (
          <>
            <div className="">
              <span className="text-gray-500">{" ".repeat(indent)}</span>
              <span className="text-rose-600">{key}</span>
              <span className="text-gray-500">:{" "}</span>
              <span className="text-gray-500 gap-2">
                <>
                  {value.map((item, index) => (
                    <>
                     {index === 0 && (
                          <span className="text-gray-500">{"{"} </span>
                        )}
                      <span
                        key={index}
                        className={`
                         text-green-500 inline-block
                      }`}
                      >
                        <span className="text-gray-500">{`"`}</span>
                        {item}
                        <span className="text-gray-500">{`"`}</span>
                        {index < value.length - 1 && (
                          <span className="text-gray-500">, </span>
                        )}

                        {index === value.length - 1 && (
                          <span className="text-gray-500">{"],"} </span>
                        )}
                      </span>
                    </>
                  ))}
                </>
              </span>
            </div>
          </>
        ) : typeof value === "object" ? (
          <>
            <span className="text-gray-500">{" ".repeat(indent)}</span>
            <span className="text-rose-600">{key}</span>
            <span className="text-gray-500">:{" "}</span>
            <span className="text-gray-500">{"{"}</span>
            <div>{renderObject(value, indent)}</div>
            <span className="text-gray-500">
              {" ".repeat(indent)}
              {"}"}
            </span>
            <span className="text-gray-500">
              {","}
            </span>
          </>
        ) : (
          <>
            <div>
              <span className="text-gray-500">{" ".repeat(indent)}</span>
              <span className="text-rose-600">{key}</span>
              <span className="text-gray-500">:{" "}</span>
              <span className="text-gray-500">{`"`}</span>
              <span className="text-green-500">{value?.toString()}</span>
              <span className="text-gray-500">{`"`}</span>
              <span className="text-gray-500">
              {","}
            </span>
            </div>
          </>
        )}
      </div>
    </div>
  ));
};
function HomePage() {
  const [currentData, setCurrentData] = useState(new Date());
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentData(new Date());
      setIsClient(true);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const d = new Date();
  let day = weekday[d.getDay()];
  return (
    <main className="w-[100svw]">
      <div className="md:container md:max-w-[80%] h-full border content-center md:mx-auto mx-4">
        <div className="grid grid-cols-1 mt-14 md:mt-0 lg:grid-cols-2 gap-2">
          <div className="grid md:place-items-center md:h-full text-center mb:mb-0 md:text-start mb-20 md:w-full">
            <div className="md:w-200px">
              <div className="md:text-[38px]">Alexandre Sousa</div>
              <h1 className="md:text-[58px] text-[28px] mt-2 font-bold">ANALISTA DE SISTEMAS</h1>
              <p className="md:text-[20px] text:sm">
                A junior fullstack developer who currently focused on Web
                Development. Other than that, I also interested in UX/UI Design,
                Mobile and AI Development. I love to learn new things and always
                open to new opportunities.
              </p>
              <div className="flex items-center md:items-start justify-center md:justify-start gap-8 mt-8">
                <Button size={"lg"} className="text-md">
                  Contato
                </Button>

                <Button size={"lg"} className="text-md">
                  Curriculo
                </Button>
              </div>
            </div>
          </div>
          <div className="mb-[120px] md:mb-0 md:grid md:place-items-center">
            <CardsComponent
              className="bg-gray-900"
              title={
                <>
                  <div className="border-b grid grid-cols-3 justify-center border-b-gray-800 pb-2">
                    <div>
                      <i className="flex gap-1.5">
                        <button
                          aria-hidden="true"
                          className="h-3 w-3 rounded-full bg-gray-700 transition-colors hover:bg-[#EC6A5F]"
                        ></button>
                        <button
                          aria-hidden="true"
                          className="h-3 w-3 rounded-full bg-gray-700 transition-colors hover:bg-[#F4BF50]"
                        ></button>
                        <button
                          aria-hidden="true"
                          className="h-3 w-3 rounded-full bg-gray-700 transition-colors hover:bg-[#61C454]"
                        ></button>
                      </i>
                    </div>
                    <div className="text-center text-[16px] text-white">{`${day}`}</div>
                    <div className="grid text-[16px] text-white align-end justify-end">
                      {format(currentData, "HH:mm:ss")}
                    </div>
                  </div>
                </>
              }
            >
              <>
                <div>
                  <div className="text-gray-500">{"{"}</div>
                  <div className="ml-2">
                    <div className="text-rose-600">
                      <div>{renderObject(jsonObject)}</div>
                    </div>
                  </div>
                  <span className="text-gray-500">{"};"}</span>
                </div>
              </>
            </CardsComponent>
          </div>
        </div>
      </div>
    </main>
  );
}

export default HomePage;

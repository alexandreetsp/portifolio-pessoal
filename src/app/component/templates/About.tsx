import React, {useState} from "react";
import {motion, AnimatePresence} from "framer-motion";
import {Card} from "../atoms/Card";
import {skillsAnim, skillsItem} from "../molecules/skillitem/skillItem";
import SkillComponent from "../molecules/SkillComponent";
import CardSkill from "../molecules/SkillComponent";
import IconBxlReact from "@/app/assets/reactIcon";
import IconNodeJs from "@/app/assets/node";
import IconBxsData from "@/app/assets/sql";
import IconPython from "@/app/assets/python";
import IconNestjs from "@/app/assets/nestjs";
import IconTailwind from "@/app/assets/tailwind";

function About() {
  const [isOpenModalFull, setisOpenModalFull] = useState(false);
  return (
    <main className="w-[100svw] h-svh ">
      <div className="container md:max-w-[90%] h-full content-center mx-auto ">
        <div className="grid grid-cols-2 place-items-center ">
          <div>
            <h1 className="text-[68px] font-bold">SOBRE ME</h1>
            <p className="text-[20px]">
              A junior fullstack developer who currently focused on Web
              Development. Other than that, I also interested in UX/UI Design,
              Mobile and AI Development. I love to learn new things and always
              open to new opportunities.
            </p>
          </div>

          <motion.section
            initial="init"
            animate="anim"
            variants={skillsAnim}
            exit="end"
            className="cardTransform md:w-[800px] grid grid-cols-1 gap-8"
          >
            {/* <motion.div
              layout
              className={`bg-slate-300 skew-y-12 ${
                isOpen ? `w-[400px] h-[400px]` : `w-[100px] h-[100px]`
              } flex align-center justify-center`}
              style={{borderRadius: 20}}
              onHoverStart={() => setIsOpen(true)}
              onHoverEnd={() => setIsOpen(false)}
            >
              <motion.div layout className="mt-8"></motion.div>
            </motion.div> */}
            <motion.div
              initial="init"
              animate="anim"
              exit="end"
              whileHover={{scale: 1.1}}
              variants={skillsItem}
              className={`rounded-lg bg-slate-200  md:h-[300px]`}
            >
              <div className="text-center pt-4">
                <h1 className="text-lg font-bold">WEB DEV</h1>
              </div>
              <div className="px-6 pt-2 grid grid-cols-3 gap-6">
                <CardSkill
                  className="flex p-6 gap-2"
                  classNameContent="grid place-items-center"
                  titleCard={
                    <>
                      <IconBxlReact className="text-[40px]"></IconBxlReact>
                    </>
                  }
                  contentCard={
                    <>
                      <div>
                        <div>React</div>
                        <div>Exp: 3 anos</div>
                      </div>
                    </>
                  }
                ></CardSkill>
                <CardSkill
                  className="flex p-6 gap-2"
                  classNameContent="grid place-items-center"
                  titleCard={
                    <>
                      <IconNodeJs className="text-[40px]"></IconNodeJs>
                    </>
                  }
                  contentCard={
                    <>
                      <div>
                        <div>Node</div>
                        <div>Exp: 3 anos</div>
                      </div>
                    </>
                  }
                ></CardSkill>
                <CardSkill
                  className="flex p-6 gap-2"
                  classNameContent="grid place-items-center"
                  titleCard={
                    <>
                      <IconBxsData className="text-[40px]"></IconBxsData>
                    </>
                  }
                  contentCard={
                    <>
                      <div>
                        <div>SQL</div>
                        <div>Exp: 3 anos</div>
                      </div>
                    </>
                  }
                ></CardSkill>
                <CardSkill
                  className="flex p-6 gap-2"
                  classNameContent="grid place-items-center"
                  titleCard={
                    <>
                      <IconPython className="text-[40px]"></IconPython>
                    </>
                  }
                  contentCard={
                    <>
                      <div>
                        <div>Python</div>
                        <div>Exp: 3 anos</div>
                      </div>
                    </>
                  }
                ></CardSkill>
                <CardSkill
                  className="flex p-6 gap-2"
                  classNameContent="grid place-items-center"
                  titleCard={
                    <>
                      <IconNestjs className="text-[40px]"></IconNestjs>
                    </>
                  }
                  contentCard={
                    <>
                      <div>
                        <div>Nest.JS</div>
                        <div>Exp: 4 meses </div>
                      </div>
                    </>
                  }
                ></CardSkill>
                <CardSkill
                  className="flex p-6 gap-2"
                  classNameContent="grid place-items-center"
                  titleCard={
                    <>
                      <IconTailwind className="text-[40px]"></IconTailwind>
                    </>
                  }
                  contentCard={
                    <>
                      <div>
                        <div>Tailwind</div>
                        <div>Exp: 3 anos</div>
                      </div>
                    </>
                  }
                ></CardSkill>
              </div>
            </motion.div>

            <motion.div
              initial="init"
              animate="anim"
              exit="end"
              variants={skillsItem}
              className="grid grid-cols-2 gap-8"
            >
              <motion.div
                whileHover={{scale: 1.1}}
                className="rounded-lg bg-slate-200 md:h-[300px]"
              >
                <div className="text-center pt-8">
                  <h1 className="text-lg font-bold">WEB DEV</h1>
                </div>
                <div className="px-6 pt-2 grid grid-cols-2 gap-2">
                  <CardSkill
                    className="flex p-4 gap-2"
                    classNameContent="grid place-items-center"
                    titleCard={
                      <>
                        <IconBxlReact className="text-[40px]"></IconBxlReact>
                      </>
                    }
                    contentCard={
                      <>
                        <div>
                          <div>React</div>
                          <div>Exp: 3 anos</div>
                        </div>
                      </>
                    }
                  ></CardSkill>
                  <CardSkill
                    className="flex p-4 gap-2"
                    classNameContent="grid place-items-center"
                    titleCard={
                      <>
                        <IconNodeJs className="text-[40px]"></IconNodeJs>
                      </>
                    }
                    contentCard={
                      <>
                        <div>
                          <div>Node</div>
                          <div>Exp: 3 anos</div>
                        </div>
                      </>
                    }
                  ></CardSkill>
                  <CardSkill
                    className="flex p-4 gap-2"
                    classNameContent="grid place-items-center"
                    titleCard={
                      <>
                        <IconBxlReact className="text-[40px]"></IconBxlReact>
                      </>
                    }
                    contentCard={
                      <>
                        <div>
                          <div>React</div>
                          <div>Exp: 3 anos</div>
                        </div>
                      </>
                    }
                  ></CardSkill>
                  <CardSkill
                    className="flex p-4 gap-2"
                    classNameContent="grid place-items-center"
                    titleCard={
                      <>
                        <IconNodeJs className="text-[40px]"></IconNodeJs>
                      </>
                    }
                    contentCard={
                      <>
                        <div>
                          <div>Node</div>
                          <div>Exp: 3 anos</div>
                        </div>
                      </>
                    }
                  ></CardSkill>
                </div>
              </motion.div>
              <motion.div
                whileHover={{scale: 1.1}}
                className="rounded-lg bg-slate-200 md:h-[300px]"
              >
                <div className="text-center pt-8">
                  <h1 className="text-lg font-bold">WEB DEV</h1>
                </div>
                <div className="px-6 pt-2 grid grid-cols-2 gap-2">
                  <CardSkill
                    className="flex p-4 gap-2"
                    classNameContent="grid place-items-center"
                    titleCard={
                      <>
                        <IconBxlReact className="text-[40px]"></IconBxlReact>
                      </>
                    }
                    contentCard={
                      <>
                        <div>
                          <div>React</div>
                          <div>Exp: 3 anos</div>
                        </div>
                      </>
                    }
                  ></CardSkill>
                  <CardSkill
                    className="flex p-4 gap-2"
                    classNameContent="grid place-items-center"
                    titleCard={
                      <>
                        <IconNodeJs className="text-[40px]"></IconNodeJs>
                      </>
                    }
                    contentCard={
                      <>
                        <div>
                          <div>Node</div>
                          <div>Exp: 3 anos</div>
                        </div>
                      </>
                    }
                  ></CardSkill>
                  <CardSkill
                    className="flex p-4 gap-2"
                    classNameContent="grid place-items-center"
                    titleCard={
                      <>
                        <IconBxlReact className="text-[40px]"></IconBxlReact>
                      </>
                    }
                    contentCard={
                      <>
                        <div>
                          <div>React</div>
                          <div>Exp: 3 anos</div>
                        </div>
                      </>
                    }
                  ></CardSkill>
                  <CardSkill
                    className="flex p-4 gap-2"
                    classNameContent="grid place-items-center"
                    titleCard={
                      <>
                        <IconNodeJs className="text-[40px]"></IconNodeJs>
                      </>
                    }
                    contentCard={
                      <>
                        <div>
                          <div>Node</div>
                          <div>Exp: 3 anos</div>
                        </div>
                      </>
                    }
                  ></CardSkill>
                </div>
              </motion.div>
            </motion.div>
          </motion.section>
        </div>
      </div>
    </main>
  );
}

export default About;

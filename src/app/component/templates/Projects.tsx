import {WorkflowIcon} from "lucide-react";
import React, {useState} from "react";
import {motion, AnimatePresence} from "framer-motion";
import {ScrollArea, ScrollBar} from "../atoms/ScrollArea";

const TIMELINE_CURRENT = [
  {
    title: `2020`,
    items: [
      {
        headline: `In-Progress`,
        description: `Currently, I'm working on a online course focussing on holistic react applications with next.js`,
      },
      {
        headline: `Launched my new website v3.0`,
        description: `Finally after a few months of design & redesigns, and other projects in the background, I got my new page up and running. `,
      },
      {
        headline: `use-styled-system & use-color-theme`,
        description: `Created & published two custom react hooks as npm packages, and planning the next one.`,
      },
      {
        headline: `New - <em>Old</em> - Beginnings`,
        description: `Restarted my freelancing Web Development and got back in touch with clients.`,
      },
      {
        headline: `When the world stopped`,
        description: `From a successful restaurant to closing our doors in a matter of weeks. Its been a great journey, the uncertainty of corona and the national lockdown have clarified major life-changing questions. Answering them became easy overnight.`,
      },
      {
        headline: `Best Season so far`,
        description:
          "Grew the restaurant consistently, with the best season and a blast of a staff party to finish off the holiday times.",
      },
    ],
  },
  {
    title: `2019`,
    items: [
      {
        headline: `Data Analysis -&gt; Smart-Up`,
        description: `Used the restaurants sales & performance data to gather insights & to establish new training approaches for Smart-Up to use internally in the restaurant. Including a deep dive into MySQL & Oracle DB.`,
      },
      {
        headline: `Restaurant v2.0`,
        description: `Upgraded the concept to the fit market environment & changed the name from <u style="white-space: nowrap">The Burger Exchange</u> to <u style="white-space: nowrap">The Exchange</u> and shifted focus to also include a variety of woodfired grills. 🥩🔥`,
      },
      {
        headline: `Visited Namibia`,
        description: `Fulfilled a lifetime dream to 4x4 drive and camp in Namibia with the best friends.`,
      },
    ],
  },
  {
    title: `2022`,
    items: [
      {
        headline: `Data Analysis -&gt; Smart-Up`,
        description: `Upgraded the concept to the fit market environment & changed the name from <u style="white-space: nowrap">The Burger Exchange</u> to <u style="white-space: nowrap">The Exchange</u> and shifted focus to also include a variety of woodfired grills. 🥩🔥`,
      },
      {
        headline: `Restaurant v2.0`,
        description: `Upgraded the concept to the fit market environment & changed the name from <u style="white-space: nowrap">The Burger Exchange</u> to <u style="white-space: nowrap">The Exchange</u> and shifted focus to also include a variety of woodfired grills. 🥩🔥`,
      },
      {
        headline: `Visited Namibia`,
        description: `Fulfilled a lifetime dream to 4x4 drive and camp in Namibia with the best friends.`,
      },
    ],
  },
  {
    title: `2023`,
    items: [
      {
        headline: `Data Analysis -&gt; Smart-Up`,
        description:
          "Grew the restaurant consistently, with the best season and a blast of a staff party to finish off the holiday times.",
      },
      {
        headline: `Restaurant v2.0`,
        description: `Upgraded the concept to the fit market environment & changed the name from <u style="white-space: nowrap">The Burger Exchange</u> to <u style="white-space: nowrap">The Exchange</u> and shifted focus to also include a variety of woodfired grills. 🥩🔥`,
      },
      {
        headline: `Visited Namibia`,
        description: `Fulfilled a lifetime dream to 4x4 drive and camp in Namibia with the best friends.`,
      },
    ],
  },
  {
    title: `2024`,
    items: [
      {
        headline: `Data Analysis -&gt; Smart-Up`,
        description: `Fulfilled a lifetime dream to 4x4 drive and camp in Namibia with the best friends.`,
      },
      {
        headline: `Restaurant v2.0`,
        description: `Upgraded the concept to the fit market environment & changed the name from <u style="white-space: nowrap">The Burger Exchange</u> to <u style="white-space: nowrap">The Exchange</u> and shifted focus to also include a variety of woodfired grills. 🥩🔥`,
      },
      {
        headline: `Visited Namibia`,
        description: `Fulfilled a lifetime dream to 4x4 drive and camp in Namibia with the best friends.`,
      },
    ],
  },
];

// function mapTimeLine(data: any, timeLine = 10) {
//   let rows = [];
//   for (let i = 0; i < timeLine; i++) {
//     rows.push(
//       <div className="inline h-[10px] min-h-[1.3em] w-0.5 bg-slate-400 dark:bg-white/10"></div>
//     );
//   }

//   return (
//     <>
//       {data.map((item: any) => (
//         <>
//           <div>
//             <div className="flex">
//               <div className="grid gap-2">
//                 <motion.div>
//                   <motion.div
//                     onHoverStart={() => setTrue(true)}
//                     className="text-center grid items-center justify-center"
//                   >
//                     <div>{item.title}</div>
//                   </motion.div>
//                   {trueSet ? (
//                     <>
//                       <div className="text-center mt-2 grid items-center justify-center">
//                         <div className=" h-[60px] min-h-[1em] w-0.5 bg-slate-800 dark:bg-white/10"></div>
//                       </div>
//                       <div className="text-center grid mt-2 items-center justify-center">
//                         <WorkflowIcon></WorkflowIcon>
//                       </div>
//                       <div className="text-center grid mt-2 items-center justify-center">
//                         <div>{item.items?.[0]?.description}</div>
//                       </div>{" "}
//                     </>
//                   ) : (
//                     ""
//                   )}
//                 </motion.div>
//               </div>

//               <div className="flex gap-6 mx-4">{rows}</div>
//             </div>
//           </div>
//         </>
//       ))}
//     </>
//   );
// }

function Projects() {
  const [trueSet, setTrue] = useState(false);
  const [idTitle, setIdTitle] = useState("");
  let rows = [];
  for (let i = 0; i < 12; i++) {
    const size = (Math.floor(i / 2) % 3 === 0) ? 'h-[12px]' : 'h-[18px]';
    rows.push(
      <div className={`inline ${size} mt-1 w-[1px] bg-slate-400 dark:bg-white/10`} key={i}></div>
    );
  }
  return (
    <main className="w-screen h-svh">
      <div className="container md:max-w-[90%] h-full content-center mx-auto">
        <div className="mt-12">
          <div className="grid gap-8">
            <h1 className="text-[68px] text-center font-bold">
              Experiência e Projetos
            </h1>
            <p className="text-[20px]">
              Minha trajetoria academica e profissional como desenvolvedor:
            </p>
          </div>

          <div className="mt-12">
            <div>
              <ScrollArea className="w-full bg-slate-100 py-12 px-10 md:h-[500px] rounded-md border">
                <div className="py-8 sticky text-lg font-bold mb-8">
                  Timeline 2020-2024:
                </div>
                <div className="flex">
                  {TIMELINE_CURRENT.map((item: any, idx: number) => (
                    <>
                      {idx === 0 && (
                        <div className="flex gap-4 mx-4">{rows}</div>
                      )}
                      <div>
                        <div>
                          <div>
                            <motion.div className="relative">
                              <motion.div
                                onHoverStart={() => {
                                  setTrue(true);
                                  setIdTitle(item.title);
                                }}
                                onClick={() => {
                                  setTrue(true);
                                  setIdTitle(item.title);
                                }}
                                className="font-bold"
                              >
                                <div>{item.title}</div>
                              </motion.div>

                              {trueSet && idTitle === item.title ? (
                                <>
                                  <div className="absolute md:-left-[147px] text-center w-[330px] top-8">
                                    <div className="">
                                      <div className="text-center mt-2 grid items-center justify-center">
                                        <div className=" h-[60px] min-h-[1em] w-0.5 bg-slate-800 dark:bg-white/10"></div>
                                      </div>
                                      <div className="text-center grid mt-2 items-center justify-center">
                                        <WorkflowIcon></WorkflowIcon>
                                      </div>
                                      <div className="mt-2 break-normal">
                                        <div>
                                          {item.items?.[0]?.description}
                                        </div>
                                      </div>{" "}
                                    </div>
                                  </div>
                                </>
                              ) : (
                                ""
                              )}
                            </motion.div>
                          </div>
                        </div>
                      </div>
                      <div className="flex gap-4 mx-4">{rows}</div>
                    </>
                  ))}
                </div>
                <ScrollBar orientation="horizontal" />
              </ScrollArea>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Projects;

"use client";

import React, {useEffect, useState} from "react";
import Header from "../component/templates/Header";
import {useDispatch} from "react-redux";
import {setNavCurrentTab} from "../store/navReducer/nav.action";

function HomeInitial() {
  const dispatch: any = useDispatch();
  const [currentTab, setcurrentTab] = useState<any>("");

  useEffect(() => {
    console.log(currentTab)
    const dispatchNav = async () => {
      dispatch(setNavCurrentTab(currentTab));
    }

    dispatchNav()
  
  }, [currentTab]);

  return (
    <div className="relative md:overflow-hidden overflow-x-hidden md:">
      <header className="border">
        <nav className="grid md:max-w-[80%] md:container md:mx-auto grid-cols-2 items-center justify-between bg-transparent p-6">
          <div>
            <span className="font-semibold md:text-xl tracking-tight">
              Alexandre
            </span>
          </div>

          <div className="md:w-full hidden text-slate-950 md:block md:flex-grow md:flex md:items-end md:justify-end md:w-auto">
            <div className="flex gap-12">
              <a
                onClick={() => setcurrentTab("homeKey")}
                className="mt-4 lg:mt-0 text-slate-950 hover:text-slate-400 mr-4"
              >
                Home
              </a>
              <a
                onClick={() => setcurrentTab("PersonIconKey")}
                className="mt-4 lg:mt-0 text-slate-950 hover:text-slate-400 mr-4"
              >
                Sobre
              </a>
              <a
                onClick={() => setcurrentTab("FileKey")}
                className="mt-4 lg:mt-0 text-slate-950 hover:text-slate-400"
              >
                Experiencia
              </a>
              <a
                onClick={() => setcurrentTab("MailIconKey")}
                className="mt-4 lg:mt-0 text-slate-950 hover:text-slate-400"
              >
                Contato
              </a>
            </div>
          </div>
          <div className="flex md:hidden items-end justify-end">
              <div className="HAMBURGER-ICON space-y-2" onClick={() => "teste"}>
                <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
                <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
                <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
              </div>
            </div>
        </nav>
      </header>
      <div>
        <Header></Header>
      </div>
    </div>
  );
}

export default HomeInitial;

import React, {ReactNode} from "react";
import TabsComponent from "../molecules/TabsComponent";
import { useSelector } from "react-redux";
import { selectNavCurrentTab } from "@/app/store/navReducer/nav.selector";

export interface DataIcon {
  key: string;
  icon: ReactNode;
}

export interface DataContent {
  key: string;
  content: ReactNode;
}

function NavMenu({
  IconArray,
  DataContent,
}: {
  IconArray: DataIcon[];
  DataContent: DataContent[];
}) {

  const selection: any = useSelector(selectNavCurrentTab)

  console.log(selection === "")
  return (
    <div>
      <TabsComponent
        classList="bg-slate-800 !rounded-none md:!rounded-r-2xl fixed bottom-0 h-[80px] w-full  md:w-[80px] md:top-0 gap-8 text-white md:grid md:h-[400px] md:my-auto"
        className="md:flex h-full"
        orientation="vertical"
        defaultValue={selection === "" ? "homeKey" : selection}
        components={DataContent}
        icons={IconArray}
      ></TabsComponent>
    </div>
  );
}

export default NavMenu;

import React, {ReactNode, useEffect, useState} from "react";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "../atoms/Tabs";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import { DataContent, DataIcon } from "../organisms/navMenuSide";
import { ScrollArea, ScrollBar } from "../atoms/ScrollArea";

interface TabsComponentType extends TabsPrimitive.TabsProps {
  icons: DataIcon[];
  components: DataContent[];
  propsTabs?: React.ForwardRefExoticComponent<
    TabsPrimitive.TabsProps & React.RefAttributes<HTMLDivElement>
  >;
  classList?: string;
  defaultValue?: any
}

function TabsComponent({
  icons,
  components,
  classList,
  defaultValue = "homeKey",
  ...propsTabs
}: TabsComponentType) {

  const [activeTab, setActiveTab] = useState(defaultValue);

  useEffect(() => {
    setActiveTab(defaultValue)
  }, [defaultValue])
  

  return (
    <Tabs defaultValue={defaultValue} value={activeTab} {...propsTabs}>
      <TabsList className={classList}>
        {icons?.map((item: any) => (
          <>
          <ScrollArea>
            <TabsTrigger onClick={() => setActiveTab(item?.key)} value={item?.key || activeTab}>
              <>{item?.icon}</>
            </TabsTrigger>
            <ScrollBar orientation="vertical"></ScrollBar>
          </ScrollArea>
          </>
        ))}
      </TabsList>
      {components.map((item: any) => (
        <>
          <TabsContent className="mt-0" value={item?.key}>
            {item?.content}
          </TabsContent>
        </>
      ))}
    </Tabs>
  );
}

export default TabsComponent;

import EscendiaInput from "@components/default/EscendiaInput";
import EscendiaModal from "@components/default/EscendiaModal";
import EscendiaText from "@components/default/EscendiaText";
import { Type } from "@config/types";
import { uuidv4 } from "@firebase/util";
import { colors } from "@services/styling/styles";
import { t } from "i18next";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { View } from "react-native";
import { Tab, TabView } from "@rneui/themed";

interface EscendiaTabViewProps {
  components: Array<any>;
  height: number;
}

/* { title: string; component: React.ReactNode } */

const EscendiaTabView = ({
  height,
  components,
  ...rest
}: EscendiaTabViewProps) => {
  const [index, setIndex] = useState<number>(0);
  const [key, setKey] = useState(uuidv4());

  useEffect(() => {}, []);

  return (
    <View style={{ flex: 1 }}>
      <Tab
        key={"EscendiaTabView_" + key}
        value={index}
        onChange={(e) => setIndex(e)}
        indicatorStyle={{
          backgroundColor: "white",
          height: 3,
        }}
        buttonStyle={{
          backgroundColor: colors.escendia_dark,
        }}
        variant="default"
      >
        {components.map((component, index) => {
          return (
            <Tab.Item
              key={"EscendiaTabView_Item_" + key + "_" + index}
              title={component.title}
              titleStyle={{ color: colors.escendia_light, fontSize: 20 }}
            />
          );
        })}
      </Tab>
      <TabView
        value={index}
        onChange={setIndex}
        animationType="spring"
        key={"EscendiaTabView_Body_Container" + key}
        containerStyle={{ flex: 1, minHeight: height }}
      >
        {components.map((component, indexMap) => {
          return (
            <TabView.Item
              key={"EscendiaTabView_Body_Item_" + key + "_" + index}
              style={{ flex: 1, height: "100%" }}
            >
              {index === indexMap ? <>{component.component}</> : undefined}
            </TabView.Item>
          );
        })}
      </TabView>
    </View>
  );
};

/* 
              {index === indexMap ? (
                <View style={{ flex: 1, backgroundColor: "green" }}>
                  <EscendiaText>{indexMap}</EscendiaText>
                </View>
              ) : undefined}
*/
export default EscendiaTabView;

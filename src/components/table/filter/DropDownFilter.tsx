import EscendiaText from "@components/default/EscendiaText";
import { View } from "react-native";

interface DropwDownFilterProps {
  column?: any;
}

const DropwDownFilter = ({ column }: DropwDownFilterProps) => {
  if (!column.id) return undefined;
  return (
    <View key={"DropDownFilter" + column.id}>
      <EscendiaText>DROPWDOWN TOTDO</EscendiaText>
    </View>
  );
};

export default DropwDownFilter;

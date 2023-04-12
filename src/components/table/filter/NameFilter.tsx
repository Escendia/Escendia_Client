import EscendiaText from "@components/default/EscendiaText";
import { View } from "react-native";

interface NameFilterProps {
  column?: any;
}

const NameFilter = ({ column }: NameFilterProps) => {


/*   const options = React.useMemo(() => {
    const options = new Map();
    preFilteredRows.forEach((row) => {
      if (row.values[id] !== null)
        options.set(row.values[id].name, t(row.values[id].name));
    });
    return options;
  }, [id, preFilteredRows]);

  const optionsValues = React.useMemo(() => {
    const optionValues = new Map();
    preFilteredRows.forEach((row) => {
      if (row.values[id] !== null)
        optionValues.set(row.values[id].name, row.values[id]);
    });
    return optionValues;
  }, [options]); */


  
  if (!column.id) return undefined;
  return (
    <View key={"NameFilter" + column.id}>
      <EscendiaText>NameFilter TODO</EscendiaText>
    </View>
  );
};

export default NameFilter;

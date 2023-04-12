import EscendiaInput from "@components/default/EscendiaInput";
import { colors } from "@services/styling/styles";
import { t } from "i18next";
import { View } from "react-native";

interface DefaulFilterProps {
  column?: any;
}

const DefaulFilter = ({ column }: DefaulFilterProps) => {
  if (!column.id) return undefined;
  return (
    <View key={"EscendiaTable_Filter_" + column.id}>
      <EscendiaInput
        contentStyle={{ color: colors.escendia_dark }}
        outlineStyle={{ borderWidth: 0 }}
        value={column.filterValue || ""}
        onChangeText={(e) => {
          column.setFilter(e || undefined); // Set undefined to remove the filter entirely
        }}
        placeholder={t("EscendiaTable_Filter_Placeholder", {
          name: t(column.id),
        })}
      />
    </View>
  );
};

export default DefaulFilter;

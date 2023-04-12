import { useEffect, useState } from "react";

import EscendiaDefaultPage from "@components/main/EscendiaDefaultPage";
import EscendiaTable from "@components/table/EscendiaTable";
import { uuidv4 } from "@firebase/util";
import { t } from "i18next";
import EscendiaDropwDown from "@components/default/EscendiaDropDown";
import { View } from "react-native";

function SearchPage() {
  const [key, setKey] = useState(uuidv4());

  const [testData, setTestData] = useState([]);

  useEffect(() => {
    var testArray = [];
    for (var i = 0; i <= 100000; i++) {
      testArray.push({ col1: "COL1-" + i, col2: "COL2-" + i });
    }
    setTestData(testArray);
  }, []);

  return (
    <EscendiaDefaultPage
      key={"CreationPage_" + key}
      title={t("Page_Creation_Title")}
      pyramide={false}
    >
      <View>
        <View style={{ width: "100%", backgroundColor: "green" }}>
          <EscendiaDropwDown
            style={{ flex: 1 }}
            optionList={["Option_Attribute", "Option_Wine"]}
            type={"normal"}
          />
        </View>
        <View>
          <EscendiaTable
            columns={[
              {
                Header: "Column 1",
                accessor: "col1", // accessor is the "key" in the data
              },

              {
                Header: "Column 2",
                accessor: "col2",
              },
            ]}
            data={testData}
          />
        </View>
      </View>
    </EscendiaDefaultPage>
  );
}

export default SearchPage;

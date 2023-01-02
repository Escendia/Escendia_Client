import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Text } from "react-native";


export default function DefaultPage() {
  const { t } = useTranslation();
  return (
    <React.Fragment>
      <Text>{t('Escendia.Test1')}</Text>
    </React.Fragment>
  );
}

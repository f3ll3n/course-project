import React from 'react'
import { useTranslation } from 'react-i18next';

export const AboutPage: React.FC = () => {
  const { t } = useTranslation('about');
  return (
    <div>{t("О нас")}</div>
  )
}

export default AboutPage;

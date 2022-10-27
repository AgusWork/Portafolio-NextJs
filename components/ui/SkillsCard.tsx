import React, { FC } from 'react'
import { Card, Text } from "@nextui-org/react";
import styles from "./SkillsCard.module.scss";

interface Props  {
    image: string;
    language: string;
}

export const SkillsCard: FC<Props> = ({image, language}) => {
  return (
	<Card className={styles.Card} >
            <Card.Header><Text h4>{language}</Text></Card.Header>
            <Card.Image className={styles.image} src={image} alt={language} width="200px" height="200px" />
		</Card>  )
}

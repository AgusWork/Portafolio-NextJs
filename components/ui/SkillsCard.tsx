import React, { FC } from 'react'
import styles from "./SkillsCard.module.scss";
import { Card, Text } from "@nextui-org/react";
import Image from 'next/image';

interface Props  {
    image: string;
    language: string;
}

export const SkillsCard: FC<Props> = ({image, language}) => {
  return (
	<Card className={styles.Card} role={"contentinfo"}>
            <Card.Header><Text size={30}>{language}</Text></Card.Header>
            <Image className={styles.image} src={image} alt={language} width={150} height={150} />
		</Card>  )
}

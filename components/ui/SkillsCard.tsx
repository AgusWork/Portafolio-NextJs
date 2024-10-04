import React, { FC } from "react";
import styles from "./SkillsCard.module.scss";
import { Card, Text } from "@nextui-org/react";
import Image from "next/image";

interface Props {
    image: string;
    language: string;
}

export const SkillsCard: FC<Props> = ({ image, language }) => {
    return (
        <Card className={styles.Card} role={"contentinfo"}>
            <Card.Header>
                <Text size="$xl" css={{
                    "@xsMax": { fontSize: "$lg" }, 
                    "@sm": { fontSize: "$xl" }    
                }}>
                    {language}
                </Text>
            </Card.Header>
            <Image className={styles.image} src={image} alt={language} width={100} height={100} />
        </Card>
    );
};

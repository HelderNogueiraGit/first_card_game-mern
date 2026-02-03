import { Card, Flex } from "@radix-ui/themes"
import { Text } from "@radix-ui/themes/dist/cjs/components/callout";

type MessageProps = {

    msg : string;
    img : string;
    header: string;
}

export const MessagePanel = ({header, msg, img} : MessageProps) => {

    return <Card style={{flex:1}}>
        <Flex direction={"column"} align={"center"}>
            {img ? <img src={img} alt="Message Image" width="400px" style={{borderRadius: "5px"}}/> : null}
            <Text size="4">{header}</Text>
            <Text size="2" style={{alignSelf: "start", paddingLeft: "5px"}}>{msg}</Text>
        </Flex>
    </Card>
}
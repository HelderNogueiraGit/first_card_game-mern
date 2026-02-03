import { Half2Icon, PersonIcon } from "@radix-ui/react-icons";
import { Card, Flex } from "@radix-ui/themes";
import React from "react";

const Logo = () => {
    return (<Flex align={"center"} justify={"center"}><Half2Icon color="green"/><header style={{paddingLeft: "12px"}}>Monster Gate</header></Flex>);
}


export const Header = () => {

    return <Card>
        <Flex align={"center"} justify={"between"}>
            <Logo/>
            <PersonIcon />
        </Flex>
    </Card>;
};
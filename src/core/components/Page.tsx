import { Container, Flex } from "@radix-ui/themes";
import { Text } from "@radix-ui/themes/dist/cjs/components/callout";
import { Header } from "./Header";
import { Footer } from "./Footer";
import React, { PropsWithChildren } from "react";

export const Page : React.FC<PropsWithChildren> = ({children} : any) => {

    return <Container size="3">
        <Flex direction={"column"}>
            <Header />
            <Text size="3" align={"center"} style={{paddingTop: "8px"}}>Welcome to the Monster Gate game portal</Text>
        </Flex>
        {children}
        <Footer />
    </Container>; 
}
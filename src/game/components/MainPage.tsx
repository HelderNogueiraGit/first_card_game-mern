import { Container, Flex, Card } from "@radix-ui/themes";
import React from "react";
import { Header } from "../../core/components/Header";
import { Text } from "@radix-ui/themes/dist/cjs/components/callout";
import { MessagePanel } from "../../core/components/MessagePanel";
import { Login } from "../../player/components/Login";
import { Footer } from "../../core/components/Footer"
import { Page } from "../../core/components/Page";

export const MainPage = () => {

    return(
    <Page>
        <Flex style={{paddingTop: "15px", gap: "6px"}}>
            <MessagePanel header="Hello Header" msg="Hello Text Description" img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ055243UcYr58yP6g-VTBWiRj7Bg7rdgOcMg&s"></MessagePanel>
            <Login />
        </Flex>
    </Page>);
};
import { Container, Flex, Card, TextField, Button} from "@radix-ui/themes";
import { MessagePanel } from "../../core/components/MessagePanel";
import { Login } from "../../player/components/Login";
import { Page } from "../../core/components/Page";
import { Text } from "@radix-ui/themes/dist/cjs/components/callout";
import { EnvelopeClosedIcon, LockClosedIcon, PersonIcon, PlusCircledIcon } from "@radix-ui/react-icons";
import { Link } from "react-router-dom";

export const UserRegisterPage = () => {

    return(
    <Page>
        <Flex direction="column" gap="5px" style={{paddingTop: "15px", gap: "6px"}}>
            <Text> Please fill your game account details</Text>
            <Card>
                <Text>Name:</Text>
                <TextField.Root placeholder="Enter your name" style={{marginBottom: "15px"}}>
                    <TextField.Slot>
                        <PersonIcon height="16" width="16" />
                    </TextField.Slot>
                </TextField.Root>
                <Text>Email:</Text>
                <TextField.Root placeholder="Enter your email" style={{marginBottom: "15px"}}>
                    <TextField.Slot>
                        <EnvelopeClosedIcon height="16" width="16" />
                    </TextField.Slot>
                </TextField.Root>
                <Text>Password:</Text>
                <TextField.Root placeholder="Enter your password" style={{marginBottom: "15px"}} type="password">
                    <TextField.Slot>
                        <LockClosedIcon height="16" width="16" />
                    </TextField.Slot>
                </TextField.Root>
                <Text>Confirm Password:</Text>
                <TextField.Root placeholder="Enter your password" type="password" style={{marginBottom: "15px"}}>
                    <TextField.Slot>
                        <LockClosedIcon height="16" width="16" />
                    </TextField.Slot>
                </TextField.Root>

                <Link to={"/register"}>
                    <Button style={{marginTop: "10px", width: "100%", backgroundColor: "#202020", color: "white"}}>
                        <PlusCircledIcon />Register New Account
                    </Button>
                </Link>
            </Card>
        </Flex>
    </Page>);
};
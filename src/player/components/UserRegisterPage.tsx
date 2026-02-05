import { Container, Flex, Card, TextField, Button, Callout} from "@radix-ui/themes";
import { MessagePanel } from "../../core/components/MessagePanel";
import { Login } from "../../player/components/Login";
import { Page } from "../../core/components/Page";
import { Text } from "@radix-ui/themes/dist/cjs/components/callout";
import { EnvelopeClosedIcon, InfoCircledIcon, LockClosedIcon, PersonIcon, PlusCircledIcon } from "@radix-ui/react-icons";
import { Link } from "react-router-dom";
import { useState } from "react";
import { create } from "domain";
import { User } from "../model/user";
import { APIResponse } from "../../core/models/api";


const createUserAPI = async  (user : User) : Promise<APIResponse<User>>=> {

    try {

        const req = await fetch('http://localhost:4000/user', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user)
        });
    

        const response = await req.json();
        const apiUser = response as User;

        if(req.status !== 200) 
            throw new Error(`${response.error}`);

        const resolved : APIResponse<User> = { data: apiUser };
        return resolved;
    }
    catch(err) { 

        const error = err as Error;
        const resolved: APIResponse<User> = { data: null, error };
        return resolved;
    }
};

export const UserRegisterPage = () => {

    const [email, setEmail] = useState<string>('');
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [rePassword, setRePassword] = useState<string>('');
    const [errorMessage, setErrorMessage] = useState<string>();
    const [isRegisterDone, setIsRegisterDone] = useState(false);

    const onSubmit = async () => {

        if (email && username && password && (password === rePassword)) {

            const user : User = { email, username, password };
            const apiResponse : APIResponse<User> = await createUserAPI(user);

            if(apiResponse.data)
            {
                setErrorMessage(undefined);
                setIsRegisterDone(true);
            }
            else setErrorMessage(apiResponse.error?.message);
        }
    }

    return(
    <Page>
        <Flex direction="column" gap="5px" style={{paddingTop: "15px", gap: "6px"}}>
            <Card>
                {!isRegisterDone ? (
                <Flex direction={"column"}>
                <Text>Name:</Text>
                <TextField.Root placeholder="Enter your name" onChange={e => setUsername(e.target.value)} style={{marginBottom: "15px"}}>
                    <TextField.Slot>
                        <PersonIcon height="16" width="16" />
                    </TextField.Slot>
                </TextField.Root>
                <Text>Email:</Text>
                <TextField.Root placeholder="Enter your email" onChange={e => setEmail(e.target.value)} style={{marginBottom: "15px"}}>
                    <TextField.Slot>
                        <EnvelopeClosedIcon height="16" width="16" />
                    </TextField.Slot>
                </TextField.Root>
                <Text>Password:</Text>
                <TextField.Root placeholder="Enter your password" onChange={e => setPassword(e.target.value)} style={{marginBottom: "15px"}} type="password">
                    <TextField.Slot>
                        <LockClosedIcon height="16" width="16" />
                    </TextField.Slot>
                </TextField.Root>
                <Text>Confirm Password:</Text>
                <TextField.Root placeholder="Enter your password" onChange={e => setRePassword(e.target.value)} type="password" style={{marginBottom: "15px"}}>
                    <TextField.Slot>
                        <LockClosedIcon height="16" width="16" />
                    </TextField.Slot>
                </TextField.Root>

                <Link to={"/register"}>
                    <Button onClick={onSubmit} style={{marginTop: "10px", width: "100%", backgroundColor: "#202020", color: "white"}}>
                        <PlusCircledIcon />Register New Account
                    </Button>
                </Link> 
                {errorMessage && <Callout.Root color="red">
                    <Callout.Icon>
                        <InfoCircledIcon />
                    </Callout.Icon>
                    <Callout.Text> {errorMessage} </Callout.Text>
                </Callout.Root>} </Flex>)
                    :
                (
                    <Callout.Root color="green">
                    <Callout.Icon>
                        <InfoCircledIcon />
                    </Callout.Icon>
                    <Callout.Text>
                        Your account has been created please  <Link to={'/'}>log in.</Link>
                    </Callout.Text>
                    </Callout.Root>
                )}
            </Card>
        </Flex>
    </Page>);
};
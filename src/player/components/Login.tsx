import { ButtonIcon, EnvelopeClosedIcon, LockClosedIcon, PaperPlaneIcon, PlusIcon, TriangleUpIcon } from "@radix-ui/react-icons"
import { Card, TextField, Button } from "@radix-ui/themes" 
import { Text } from "@radix-ui/themes/dist/cjs/components/callout"
import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import { UserContext } from "../UserContext"
import { usePostAPI } from "../../core/hooks/useAPI"


type LoginCredential = {

    uid: string;
    password: string;
}

export const Login = () => {

    const { login } = useContext(UserContext);
    const [uid, setUid] = useState<string>();
    const [password, setPassword] = useState<string>();
    const [loginResponse, setCredentials] = usePostAPI<LoginCredential, boolean>('http://localhost:4000/user/auth');

    const onSubmit = () => {

        if(uid && password)
            setCredentials({uid, password} as LoginCredential);
    };


    return <Card style={{flex: 1}}>
        <Text style={{paddingBottom: "15px"}}>Login</Text>
        <>{JSON.stringify(loginResponse)}</>
        <Text>Email:</Text>
        <TextField.Root onChange={e => setUid(e.target.value)} value={uid} placeholder="Enter your email or username" style={{marginBottom: "15px"}}>
	        <TextField.Slot>
		        <EnvelopeClosedIcon height="16" width="16" />
	        </TextField.Slot>
        </TextField.Root>
        <Text>Password:</Text>
        <TextField.Root onChange={e => setPassword(e.target.value)} value={password} placeholder="Enter your password" type="password">
	        <TextField.Slot>
		        <LockClosedIcon height="16" width="16" />
	        </TextField.Slot>
        </TextField.Root>

        <Button onClick={onSubmit} style={{marginTop: "25px", width: "100%"}}>
            <PaperPlaneIcon />Login
        </Button>

        <Link to={"/register"}>
            <Button style={{marginTop: "10px", width: "100%", backgroundColor: "#202020", color: "white"}}>
                <PlusIcon />Create Account
            </Button>
        </Link>
    </Card>
}
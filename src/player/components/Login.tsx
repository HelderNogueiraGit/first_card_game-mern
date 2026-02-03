import { ButtonIcon, EnvelopeClosedIcon, LockClosedIcon, PaperPlaneIcon, PlusIcon, TriangleUpIcon } from "@radix-ui/react-icons"
import { Card, TextField, Button } from "@radix-ui/themes" 
import { Text } from "@radix-ui/themes/dist/cjs/components/callout"
import { Link } from "react-router-dom"

export const Login = () => {

    return <Card style={{flex: 1}}>
        <Text style={{paddingBottom: "15px"}}>Login</Text>
        <Text>Email:</Text>
        <TextField.Root placeholder="Enter your email" style={{marginBottom: "15px"}}>
	        <TextField.Slot>
		        <EnvelopeClosedIcon height="16" width="16" />
	        </TextField.Slot>
        </TextField.Root>
        <Text>Password:</Text>
        <TextField.Root placeholder="Enter your password" type="password">
	        <TextField.Slot>
		        <LockClosedIcon height="16" width="16" />
	        </TextField.Slot>
        </TextField.Root>

        <Button style={{marginTop: "25px", width: "100%"}}>
            <PaperPlaneIcon />Login
        </Button>

        <Link to={"/register"}>
            <Button style={{marginTop: "10px", width: "100%", backgroundColor: "#202020", color: "white"}}>
                <PlusIcon />Create Account
            </Button>
        </Link>
    </Card>
}
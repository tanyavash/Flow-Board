import { AppBar, Toolbar, Button, Stack } from "@mui/material";
import ImageEl from "../../components/utils/ImageEl";
import LogoImg from "../../assets/logo.svg";
import LogOutIcon from '@mui/icons-material/ExitToApp'

const Topbar =({openModal}) => {
    return (
        <AppBar position="static">
            <Toolbar sx= {{
                justifyContent: "space-between",
            }}>
                <ImageEl sx= {{
                    height: "25px",
                }} src = { LogoImg } alt= "FlowBoard" />
                <Stack direction= "row" spacing= {2}>
                    <Button onClick= {openModal} variant = "contained">Create Board</Button>
                    <Button startIcon= {<LogOutIcon/>} color="inherit">LogOut</Button>
                </Stack>

                
            </Toolbar>
        </AppBar>
    )
};
export default Topbar;
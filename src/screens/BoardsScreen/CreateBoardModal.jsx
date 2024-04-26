import {Dialog, Stack, Typography, Box, IconButton} from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import ModalHeader from '../../components/layout/ModalHeader';
const CreateBoardModal = () => {
    return(
        <Dialog open fullWidth maxWidth= "xs">
            <Stack p= {1}>
                <ModalHeader title= "Create Board" />
            </Stack>
        </Dialog>
    );
};

export default CreateBoardModal;
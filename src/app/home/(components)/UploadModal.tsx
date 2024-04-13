'use client'
import Card from '@mui/material/Card'
import Modal from '@mui/material/Modal';
import { NewPostForm } from '@/app/home/(components)/NewPostForm';
import { Box, CardActions, CardContent, Divider, IconButton, Tooltip, Typography } from '@mui/material';
import { CloseIcon } from '@nextui-org/shared-icons';

export default function UploadModal({ open, close }: {open: boolean, close: () => void}) {


    return (
        <Modal
            open={open}
            onClose={close}
            className="flex justify-center items-center"
        >
            <Card className="flex justify-center items-center p-4">
                <CardContent>
                    <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
                        <Typography variant="h5" component="h5">
                            Upload new post
                        </Typography>
                        <Tooltip title='Close'>
                            <IconButton onClick={close}>
                                <CloseIcon />
                            </IconButton>
                        </Tooltip>
                    </Box>
                    <NewPostForm />
                </CardContent>
            </Card>
        </Modal>
    )
}
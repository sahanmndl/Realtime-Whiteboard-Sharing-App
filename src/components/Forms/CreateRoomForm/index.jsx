import React from "react"
import { Container, Box, TextField, Button } from "@mui/material"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import {CopyToClipboard} from 'react-copy-to-clipboard'

const CreateRoomForm = ({uuid, socket, setUser}) => {

    const navigate = useNavigate()
    const [roomId, setRoomId] = useState(uuid())
    const [name, setName] = useState("")

    const createNewRoom = (e) => {
        e.preventDefault()
        const roomData = {
            name, 
            roomId,
            userId: uuid(),
            host: true,
            presenter: true
        }
        setUser(roomData)
        navigate(`/${roomId}`)
        console.log(roomData)
        socket.emit("userJoined", roomData)
    }

    return (
        <Container component="main" maxWidth="xs">
            <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Box component="form" sx={{ mt: 1 }}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="name"
                        label="Enter Your Name"
                        name="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <TextField
                        margin="normal"
                        fullWidth
                        disabled
                        id="room-code"
                        label="Generate Room Code"
                        name="room-code"
                        value={roomId}
                    />
                    <Box sx={{
                            display: 'flex',
                            flex: 1,
                            flexDirection: 'row',
                            marginTop: 2
                        }}
                    >
                        <Button
                            fullWidth
                            variant="contained"
                            color="success"
                            sx={{ marginRight: 1 }}
                            onClick={() => setRoomId(uuid())}
                        >
                            Generate
                        </Button>
                        <CopyToClipboard text={roomId}>
                            <Button fullWidth variant="outlined" color='error'>
                                Copy
                            </Button>
                        </CopyToClipboard>
                    </Box>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                        disabled={name === "" ? true : false}
                        onClick={createNewRoom}
                    >
                        Create
                    </Button>
                </Box>
            </Box>
        </Container>
    )
}

export default CreateRoomForm
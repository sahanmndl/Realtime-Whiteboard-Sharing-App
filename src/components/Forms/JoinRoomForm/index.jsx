import React from "react"
import { Container, Box, TextField, Button } from "@mui/material"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

const JoinRoomForm = ({uuid, socket, setUser}) => {

    const navigate = useNavigate()
    const [roomId, setRoomId] = useState("")
    const [name, setName] = useState("")

    const joinRoom = (e) => {
        e.preventDefault()
        const roomData = {
            name, 
            roomId,
            userId: uuid(),
            host: false,
            presenter: false
        }
        setUser(roomData)
        navigate(`/${roomId}`)
        console.log(roomData)
        socket.emit("userJoined", roomData)
    }

    return (
        <Container component="main" maxWidth="xs">
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Box component="form" sx={{marginTop: 4}}>
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
                        required
                        fullWidth
                        id="room-code"
                        label="Enter Room Code"
                        name="room-code"
                        value={roomId}
                        onChange={(e) => setRoomId(e.target.value)}
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 7, mb: 2 }}
                        onClick={joinRoom}
                    >
                        Join
                    </Button>
                </Box>
            </Box>
        </Container>
    )
}

export default JoinRoomForm
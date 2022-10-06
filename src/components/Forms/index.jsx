import "./index.css";
import CreateRoomForm from './CreateRoomForm'
import JoinRoomForm from './JoinRoomForm'

const Form = ({uuid, socket, setUser}) => {
    return (
        <div className="form-container">
            <div className="form-wrapper">
                <h1 className="form-header">Create Room</h1>
                <CreateRoomForm uuid={uuid} socket={socket} setUser={setUser} />
            </div>
            <div className="form-wrapper">
                <h1 className="form-header">Join Room</h1>
                <JoinRoomForm uuid={uuid} socket={socket} setUser={setUser} />
            </div>
        </div>
    )
}

export default Form
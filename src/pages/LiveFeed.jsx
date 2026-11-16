import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {Mic, MicOff, Ear, EarOff, Undo2, HeartHandshake} from "lucide-react";

function LiveFeed() {
    const navigate = useNavigate();
    const [speaking, setSpeaking] = useState(false);
    const [listening, setListening] = useState(false);

    return (
        <div className="phone">
            <h3>Your doorbell</h3>

            <div className="cameraFeed">
                <img src="src/assets/live.jpg" className="cameraPhoto"/>
            </div>

            <div className="feedActions">

                <button onClick={() => setSpeaking(!speaking)} className="actionButtons">
                    {speaking ? <Mic size={20} /> : <MicOff size={20} />}
                </button>

                <button onClick={() => setListening(!listening)} className="actionButtons">
                    {listening ? <Ear size={20} /> : <EarOff size={20} />}
                </button>

                <button onClick={() => navigate("/")} className="actionButtons">
                    <Undo2 size={20} />
                </button>

                <button onClick={() => alert("Your emergency contact has been notified!")} className="actionButtons">
                    <HeartHandshake size={20} />
                </button>
            </div>
        </div>
    );
}

export default LiveFeed;
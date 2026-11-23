import {useState, useEffect} from "react";
import {useNavigate, useLocation} from "react-router-dom";
import {Check} from "lucide-react";

function AddVisitor() {
    const navigate = useNavigate();
    const location = useLocation();
    const [name, setName] = useState("");
    const [photo] = useState(location.state?.visitorImage || "");
    const [submittedVisitor, setSubmittedVisitor] = useState(null);
    const [undoTimeout, setUndoTimeout] = useState(120);
    

    const submit = () => {
        if (!name.trim() || !photo) {
            alert("Please enter a name.");
            return;
        }

        const newVisitor = {
            name: name.trim(),
            image: photo
        };

        setSubmittedVisitor(newVisitor);
        setUndoTimeout(120);
    };

    const undo = () => {
        setSubmittedVisitor(null);
        setUndoTimeout(120);
    };

    useEffect(() => {
        if (!submittedVisitor) return;

        let seconds = 120;

        const timer = setInterval(() => {
            seconds--;
            setUndoTimeout(seconds);

            if (seconds === 0) {
                clearInterval(timer);
                setSubmittedVisitor(null);
                navigate("/");
            }
        }, 1000);

        return () => clearInterval(timer);
    }, [submittedVisitor, navigate]);

    return (
        <div className="phone">
            <h3>Add a known visitor</h3>

            <p>Visitor name</p>

            <input
                type="text"
                placeholder="Enter visitor's name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                disabled={submittedVisitor !== null}
            />

            {photo && (
                <div>
                    <img
                        src={photo}
                        alt="New visitor preview"
                        className="smallVisitorPhoto"
                    />
                </div>
            )}

            <div className="actionButtons">
                <button onClick={submit} disabled={!name.trim() || !photo || submittedVisitor !== null}>
                    <Check size={10} />
                </button>

                <button onClick={() => navigate("/")}> Return to home </button>
            </div>

            {submittedVisitor && (
                <div className="undo">
                    <p>{submittedVisitor.name} has been added.</p>

                    <button onClick={undo}> Undo </button>

                    <div className="undoLine" style={{ width: `${undoTimeout / 120 * 100}%`}}> </div>
                </div>
            )}
        </div>
    );
}

export default AddVisitor;
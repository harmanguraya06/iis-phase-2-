import {useState, useEffect} from "react";
import {useNavigate} from "react-router-dom";
import {Check} from "lucide-react";

import {dummyPeople} from "../data/dummyPeople";

function IdentityCorrection() {
    const navigate = useNavigate();
    const [search, setSearch] = useState("");
    const [selectVisitor, setSelectVisitor] = useState("");
    const [submittedVisitor, setSubmittedVisitor] = useState(null);
    const [undoTimeout, setUndoTimeout] = useState(120);  

    const searchResults = dummyPeople.filter(person => person.name.toLowerCase().includes(search.toLowerCase()));

    const submit = () => {
        if (selectVisitor) {
            setSubmittedVisitor(selectVisitor.name);

            setUndoTimeout(120);
        } 
        else {
            alert("Please select the correct visitor.");
        }
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
    }, [submittedVisitor]);

    return (
        <div className="phone">
            <h3>Correct identification results</h3>

            <p>Please search and add the correct visitor.</p>

            <input
                type="text"
                placeholder="Search for the correct visitor"
                value={search}
                onChange={(e) => {
                    setSearch(e.target.value);
                    setSelectVisitor(null);
                }}
            />

            {search && !selectVisitor && (
                <div className="searchResults">
                    {searchResults.length > 0 ? (
                        searchResults.map(visitor => (
                            <button key={visitor.name} onClick={() => {
                                    setSelectVisitor(visitor);
                                    setSearch(visitor.name);
                                }}
                            >
                                {visitor.name}
                            </button>
                        ))
                    ) : (
                        <p>No matching visitors found.</p>
                    )}
                </div>
            )}

            {selectVisitor && (
                <div>
                    <h3>{selectVisitor.name}</h3>
                    <img
                        src={selectVisitor.image}
                        alt={selectVisitor.name}
                        className="smallVisitorPhoto"
                    />
                </div>
            )}

            <div className="actionButtons">
                <button onClick={submit} disabled={!selectVisitor || submittedVisitor !== null}>
                    <Check size={10} />
                </button>

                <button onClick={() => navigate("/")}>
                    Return to home
                </button>
            </div>
            
            {submittedVisitor && (
                    <div className="undo">

                        <button onClick={() => setSubmittedVisitor(null)}> Undo </button>

                        <div className="undoLine" style={{ width: `${undoTimeout / 120 * 100}%`}}></div>
                    </div>
            )}
        </div>
    );
}

export default IdentityCorrection;
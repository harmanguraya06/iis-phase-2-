import {useState} from "react";
import {useNavigate} from "react-router-dom";

import {dummyPeople} from "../data/dummyPeople";

function IdentityCorrection() {
    const navigate = useNavigate();
    const [search, setSearch] = useState("");
    const [selectVisitor, setSelectVisitor] = useState("");

    const searchResults = dummyPeople.filter(person => person.name.toLowerCase().includes(search.toLowerCase()));

    const submit = () => {
        if (selectVisitor) {
            alert(`Thank you for your correction: Visitor ${selectVisitor.name} is at your door!`);
            navigate("/");
        } 
        
        else {
            alert("Please select the correct visitor.");
        }
    };

    return (
        <div className="phone">
            <h3>Correct identification results</h3>

            <p>Sorry, our confidence is lower than usual. Please search and add the correct visitor.</p>

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
                        className="visitorPhoto"
                    />
                </div>
            )}

            <button onClick={submit}>
                Submit correction
            </button>

            <button onClick={() => navigate("/")}>
                Back
            </button>
        </div>
    );
}

export default IdentityCorrection;
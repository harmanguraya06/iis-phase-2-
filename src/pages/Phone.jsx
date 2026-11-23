import {useState} from "react";
import {useNavigate} from "react-router-dom";

import {Video, CircleX, UserRoundCheck, CircleCheck, HeartHandshake} from "lucide-react";

import {notifications} from "../data/dummyNotifications";

function Phone () {
    const dummyNotifications = notifications;
    
    const [expandedNotification, setExpandedNotification] = useState(null);

    const navigate = useNavigate();

    const actionOptions = {
        "Live feed" : Video,
        "Dismiss" : CircleCheck,
        "Mark as incorrect" : CircleX,
        "Add as known visitor" : UserRoundCheck,
        "Urgent help" : HeartHandshake
    };
    
    const userClick = (notificationId) => {
        setExpandedNotification(notificationId === expandedNotification ? null : notificationId);
    };

    const userAction = (action, notification) => {
        switch (action) {
            case "Dismiss":
                setExpandedNotification(null);
                break;
            case "Live feed":
                navigate("/liveFeed");
                break;
            case "Mark as incorrect":
                navigate("/identityCorrection");
                break;
            case "Add as known visitor":
                navigate("/addVisitor", {state: {visitorImage: notification.image}});
                break;
            case "Urgent help":
                alert("Your emergecy contact has been notified!");
                break;
            default:
                break;
        }
    };

    return (
        <div className="phone">
            <h1>16:45</h1>

            <h2>Monday 1st June</h2>

            <p>Doorbell notifications</p>

            <div className="notifications">

                {dummyNotifications.map(notification => (
                    <div
                    key={notification.id}
                    className={`notification ${notification.type}`}
                    >

                        <button className="banner"
                            onClick={() => userClick(notification.id)}
                        >

                            <p>{new Date(notification.timestamp).toLocaleTimeString([], {hour: "2-digit", minute: "2-digit"})}</p>

                            <p>{notification.message}</p>

                        </button>
                    </div>
                ))}    

            </div>

            {expandedNotification !== null && (
                <div className="notificationPopup">

                    {(() => {
                        const notification = dummyNotifications.find(
                            n => n.id === expandedNotification
                        );

                        return (
                            <div className="expandedNotification">

                                <h3>Visitor: {notification.visitor || "Unknown"} </h3>

                                {notification.image && (
                                    <img src={notification.image} className="visitorPhoto"/>
                                )}

                                {notification.confidence != null && (<p>Confidence: {notification.confidence}%</p>)}

                                {notification.reason && (<p className="reason">{notification.reason}</p>)}

                                <div className="actions">
                                    <div className="actionButtons">
                                        {notification.actions.map((action, index) => {
                                            const Icon = actionOptions[action];

                                            return (
                                                <button key={index} className="actionButton" onClick={() => {userAction(action, notification);}}>
                                                    {Icon && <Icon size={24} strokeWidth={1.8} />}
                                                    <span>{action}</span>
                                                </button>
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>
                        );
                    })()}
                </div>
            )}

        </div>
    );
}

export default Phone;
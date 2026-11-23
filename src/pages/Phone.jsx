import {useState} from "react";
import {useNavigate} from "react-router-dom";

import {Video, CircleX, UserRoundCheck, CircleCheck, HeartHandshake} from "lucide-react";

import {notifications} from "../data/dummyNotifications";

function Phone () {
    const dummyNotifications = notifications;
    
    const [expandedNotification, setExpandedNotification] = useState(null);

    const [urgentHelp, setUrgentHelp] = useState(false);

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
                setUrgentHelp(true);
                break;
            default:
                break;
        }
    };

    return (
        <>
        <p className="note"> Notification information, images and functionality is simulated.</p>

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

                        <button className="banner" onClick={() => userClick(notification.id)}>

                            {notification.image && (
                                <img
                                    src={notification.image}
                                    alt="Visitor"
                                    className="xSmallVisitorPhoto"
                                />
                            )}

                            <div className="notificationText">
                                <p>{notification.message}</p>

                                <p>{new Date(notification.timestamp).toLocaleTimeString([], {hour: "2-digit", minute: "2-digit"})}</p>
                            </div>
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

            {urgentHelp && (
                <div className="notificationPopup">
                    <h3>Help requested</h3>

                    <p>Your emergency contact has been sent the visitor information.</p>

                    <p>If you are in an emergency or feel unsafe, do not hesitate and call 999.</p>

                    <button onClick={() => setUrgentHelp(false)}>Return to home</button>
                </div>
            )}

        </div>
        </>
    );
}

export default Phone;
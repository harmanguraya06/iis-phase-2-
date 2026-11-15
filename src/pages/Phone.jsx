import {useState} from "react";
import {notifications} from "../data/dummyNotifications";

function Phone () {
    const dummyNotifications = notifications;
    const [expandedNotification, setExpandedNotification] = useState(null);

    const userClick = (notificationId) => {
        setExpandedNotification(notificationId === expandedNotification ? null : notificationId);
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

                                <button onClick={() => setExpandedNotification(null)}>
                                    Close
                                </button>

                                <h3>Visitor: {notification.visitor || "Unknown"} </h3>

                                {notification.image && (
                                    <img src={notification.image} className="visitorPhoto"/>
                                )}

                                {notification.confidence != null && (<p>Confidence: {notification.confidence}%</p>)}

                                {notification.reason && (<p>Reason: {notification.reason}</p>)}

                                <p>Actions: {notification.actions.join(", ")}</p>
                            </div>
                        );
                    })()}
                </div>
            )}
        </div>
    );
}

export default Phone;
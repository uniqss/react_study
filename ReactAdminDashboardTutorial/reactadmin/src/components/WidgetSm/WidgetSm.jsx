import "./widgetSm.css"
import { Visibility } from "@material-ui/icons"

export default function WidgetSm() {
    const newJoinMembers = [
        { userName: "Anna Keller", userTitle: "Software Engineer", img: "https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500" },
        { userName: "Anna Keller", userTitle: "Software Engineer", img: "https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500" },
        { userName: "Anna Keller", userTitle: "Software Engineer", img: "https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500" },
        { userName: "Anna Keller", userTitle: "Software Engineer", img: "https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500" },
        { userName: "Anna Keller", userTitle: "Software Engineer", img: "https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500" }
    ]
    return (
        <div className="widgetSm">
            <span className="widgetSmTitle">New Join Members</span>
            <ul className="widgetSmList">
                {newJoinMembers.map(member => (
                    <li className="widgetSmListItem">
                        <img src={member.img}
                            alt=""
                            className="widgetSmImg"></img>
                        <div className="widgetSmUser">
                            <span className="widgetSmUserName">{member.userName}</span>
                            <span className="widgetSmUserTitle">{member.userTitle}</span>
                        </div>
                        <button className="widgetSmButton">
                            <Visibility className="widgetSmIcon" />
                            Display
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

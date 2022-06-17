import "./widgetLg.css"

export default function WidgetLg() {
    const latestTransactionData = [
        {
            img: "https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            name: "Susan Carol", date: "2 Jun 2021", amount: "$122.00", buttonType: "Approved"
        },
        {
            img: "https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            name: "Susan Carol", date: "2 Jun 2021", amount: "$122.00", buttonType: "Declined"
        },
        {
            img: "https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            name: "Susan Carol", date: "2 Jun 2021", amount: "$122.00", buttonType: "Pending"
        },
        {
            img: "https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            name: "Susan Carol", date: "2 Jun 2021", amount: "$122.00", buttonType: "Approved"
        }
    ]
    const Button = ({ type }) => {
        return <button className={"widgetLgButton " + type}>{type}</button>
    }
    return (
        <div className="widgetLg">
            <h3 className="widgetLgTitle">Latest transactions</h3>
            <table className="widgetLgTable">
                <tr className="widgetLgTr">
                    <th className="widgetLgTh">Customer</th>
                    <th className="widgetLgTh">Date</th>
                    <th className="widgetLgTh">Amount</th>
                    <th className="widgetLgTh">Status</th>
                </tr>
                {latestTransactionData.map((tdata) => (
                    <tr className="widgetLgTr">
                        <td className="widgetLgUser">
                            <img src={tdata.img}
                                alt=""
                                className="widgetLgImg" />
                            <span className="widgetLgName">{tdata.name}</span>
                        </td>
                        <td className="widgetLgDate">{tdata.date}</td>
                        <td className="widgetLgAmount">{tdata.amount}</td>
                        <td className="widgetLgStatus"><Button type={tdata.buttonType} /></td>
                    </tr>
                ))}
            </table>
        </div>
    )
}

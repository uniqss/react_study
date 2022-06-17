import "./featuredInfo.css"
import { ArrowDownward, ArrowUpward } from "@material-ui/icons"

export default function FeaturedInfo() {
    const featuredData = [
        { title: "Revanue", money: "$2,415", moneyRate: -1.4, sub: "Compared to last month" },
        { title: "Sales", money: "$4,415", moneyRate: -11.4, sub: "Compared to last month" },
        { title: "Cost", money: "$2,225", moneyRate: +2.4, sub: "Compared to last month" }
    ]
    return (
        <div className="featured">
            {featuredData.map((fdata) => (
                <div className="featuredItem">
                    <span className="featuredTitle">{fdata.title}</span>
                    <div className="featuredMoneyContainer">
                        <span className="featuredMoney">{fdata.money}</span>
                        <span className="featuredMoneyRate">
                            {fdata.moneyRate >= 0 &&
                                <p>
                                    +{fdata.moneyRate}
                                    <ArrowUpward className="featureIcon" />
                                </p>
                            }
                            {fdata.moneyRate < 0 &&
                                <p>
                                    {fdata.moneyRate}
                                    <ArrowDownward className="featureIcon negative" />
                                </p>
                            }
                        </span>
                    </div>
                    <span className="featuredSub">{fdata.sub}</span>
                </div>
            ))}
        </div>
    )
}

import { FaCookie } from "react-icons/fa";

const AnimdatedList = () => {
    const listItem = [
        `Interactive Menu Design`,
        `Customizable Menu Templates`,
        `Seamless Menu Updates`,
        `Responsive Design`,
        `Real-time Menu Changes`,
        `Customer Engagement`
    ]
    return (
        <section className="md:hidden relative my-[13px] overflow-hidden">
            <ul className="animate-scrollList space-x-10 flex flex-row">
                {listItem.map((item, index) => (
                    <li key={index} className="flex items-center space-x-4 text-lg font-bold whitespace-nowrap">
                        <FaCookie size={24} />
                        <span>{item}</span>
                    </li>
                ))}
            </ul>
        </section>
    )
}

export default AnimdatedList;
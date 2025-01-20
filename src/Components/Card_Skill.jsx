export default function Card_Skill({ item }) {
    console.log(item);
    return (
        <div className="flex flex-col md:flex-row space-x-5 mx-5 md:mx-10 my-5 drop">
            <div className="flex mx-auto">
                <img className = "my-auto w-28" src={item.Image} alt={item.Title} />
            </div>
            <div className="my-auto flex-auto">
                <div className="flex justify-between mb-1">
                    <span className="text-base font-medium text-blue-700 dark:text-white">{item.Title}</span>
                    <span className="text-sm font-medium text-blue-700 dark:text-white">{item.Persentage} %</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full md:h-2.5 h-5 dark:bg-gray-700">
                    <div className="bg-blue-600 md:h-2.5 h-5 rounded-full" style={{ width: `${item.Persentage}%` }}></div>
                </div>
            </div>

        </div>
    )
}
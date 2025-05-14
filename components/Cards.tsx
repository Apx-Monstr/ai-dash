import { useMemo } from "react";
import { StaticImageData } from "next/image";

import Image1 from "../assets/image 6.png"
import Image2 from "../assets/image 8.png"
import Image3 from "../assets/image 9.png"
import Image4 from "../assets/image 12.png"
import Image5 from "../assets/image 14.png"
import Image6 from "../assets/image 32.png"
import Image7 from "../assets/image 41.png"
import Image8 from "../assets/image 49.png"


interface NameImage {
    name: string;
    image: StaticImageData;
}

const defaultNames: string[] = [
    'Alice Smith',
    'Bob Johnson',
    'Charlie Brown',
    'Diana Wilson',
    'Emma Davis',
];

const defaultImages: StaticImageData[] = [
    Image1,
    Image2,
    Image3,
    Image4,
    Image5,
    Image6,
    Image7,
    Image8,
];

const gradients = [
    'bg-gradient-to-r from-pink-500 to-yellow-500',
    'bg-gradient-to-r from-green-400 to-blue-500',
    'bg-gradient-to-r from-purple-500 to-indigo-500',
    'bg-gradient-to-r from-red-500 to-orange-500',
    'bg-gradient-to-r from-teal-500 to-cyan-500',
];

const getRandomThree = <T,>(arr: T[]): T[] => {
    const shuffled = [...arr].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, 3);
};
const Cards:React.FC = () =>{
    const selectedNames = useMemo(() => getRandomThree(defaultNames), []);
    const selectedImages = useMemo(() => getRandomThree(defaultImages), []);
    const selectedGradients = useMemo(() => getRandomThree(gradients), []);

    const result: NameImage[] = useMemo(
        () =>
        selectedNames.map((name, index) => ({
            name,
            image: selectedImages[index],
        })),
        [selectedNames, selectedImages],
    );
    return (
        <div className="p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {result.map((item, index) => (
                    <div key={index} className={`flex flex-col items-center justify-center p-8 gap-12 rounded border-slate-700 border bg-gray-100`}>
                        <div className={`w-full flex justify-center items-end aspect-square rounded bg-red-500 ${selectedGradients[index]}`}>
                            <img className="aspect-square flex-1 mt-8 mx-4" src={item.image.src}/>
                        </div>
                        <p className="text-center text-2xl text-slate-700 font-semibold drop-shadow-lg">
                            {item.name}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Cards;
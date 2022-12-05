import { useState, useEffect } from "react";

interface CatCategory{
    id: number;
    name: string;
}

interface SearchCatImage{
    breeds: string[];
    categories: string[];
    id: string;
    url: string;
    width: number;
    height: number;
}

type SearchCatImageResponse = SearchCatImage[];

const catImages: string[] = [
    "https://cdn2.thecatapi.com/images/bpc.jpg",
    "https://cdn2.thecatapi.com/images/eac.jpg",
    "https://cdn2.thecatapi.com/images/6qi.jpg",
];

const randomCatImage = () : string => {
    const index = Math.floor(Math.random() * catImages.length);
    return catImages[index];
};

const fetchImage = async (): Promise<SearchCatImage> => {
    const res = await fetch("https://api.thecatapi.com/v1/images/search");
    const result = (await res.json()) as SearchCatImageResponse;
    return result[0];
};

 
const IndexPage = () => {
    const [catImageUrl, setCatImageUrl] = useState(
        "https://cdn2.thecatapi.com/images/bpc.jpg"
    );

    const handleClick = async () => {
        const image = await fetchImage();
        setCatImageUrl(image.url);
    }

    return (
        <div>
            <button onClick={handleClick}>きょうのにゃんこ🐱</button>
            <div style={{ marginTop: 8 }}>
                <img src={catImageUrl} />
            </div>
        </div>
    )
};

export default IndexPage;
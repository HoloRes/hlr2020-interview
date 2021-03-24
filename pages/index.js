import Head from 'next/head';
import {useState, useEffect} from 'react';

export default function Home() {
	const [imageHtml, setImageHtml] = useState([]);

	useEffect(() => {
		const images = [];
		for (let i = 0; i < 11; i++) {
			images.push(<img src={`/img/q${i + 1}.webp`}
							   key={i}
							   alt={`Question ${i + 1}`} />);
		}

		setImageHtml(images);
	}, [])

	return (
		<div>
			<Head>
				<title>HoloRewind 2020 - Interview</title>
				<link rel="icon" href="/favicon.ico"/>
			</Head>

			<main>
				{imageHtml}
			</main>
		</div>
	)
}

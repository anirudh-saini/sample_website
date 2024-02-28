"use client";
import React, { useState, useRef, useEffect } from "react";
import style from "./gallery_c1.module.scss";
export default function Gallery_c1() {
	const parentRef = useRef<HTMLDivElement | null>(null);
	const [selectedRadio, setSelectedRadio] = useState<number>(0);
	useEffect(() => {
		const options = {
			root: parentRef.current,
			rootMargin: "0px",
			threshold: 0.5,
		};
		const handleIntersection = (entries: IntersectionObserverEntry[]) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					const targetElement = entry.target as HTMLElement;
					const index = parseInt(
						targetElement.getAttribute("data-index") || "0",
						10
					);
					setSelectedRadio(index);
					console.log(index);
				}
			});
		};
		const observer = new IntersectionObserver(handleIntersection, options);
		const innerContentElements = document.querySelectorAll(
			`.${style.content} > div`
		);

		innerContentElements.forEach((element, index) => {
			observer.observe(element);
			element.setAttribute("data-index", index.toString());
		});

		return () => {
			observer.disconnect();
		};
	}, [parentRef.current]);

	return (
		<div className={style.gallery}>
			<p>
				Welcome to the visual oasis of Haven of Harmony. Explore our
				gallery and immerse yourself in the serene ambiance, luxurious
				amenities, and rejuvenating experiences that await you. Each
				image captures the essence of tranquility and well-being,
				inviting you to envision your own journey to relaxation and
				renewal.
			</p>
			<div className={style.img} ref={parentRef}>
				<div className={style.item1}>
					<img src="/spa/ex1.png" alt="image" />
				</div>
				<div className={style.item2}>
					<img src="/spa/ex2.png" alt="image" />
				</div>
				<div className={style.item3}>
					<img src="/spa/ex3.png" alt="image" />
				</div>
				<div className={style.item4}>
					<img src="/spa/gallery1.png" alt="image" />
				</div>
				<div className={style.item5}>
					<img src="/spa/gallery2.png" alt="image" />
				</div>
				<div className={style.item6}>
					<img src="/spa/ex4.png" alt="image" />
				</div>
				<div className={style.item7}>
					<img src="/spa/ex5.png" alt="image" />
				</div>
				<div className={style.item8}>
					<img src="/spa/ex6.png" alt="image" />
				</div>
			</div>
			{/* <div>
                <input
                    type="radio"
                    id="1"
                    // name={`contentRadio-${index}`}
                    checked={selectedRadio === 0}
                    onChange={() => {}}
                />
                <input
                    type="radio"
                    id="2"
                    // name={`contentRadio-${index}`}
                    checked={selectedRadio === 1}
                    onChange={() => {}}
                />
                <input
                    type="radio"
                    id="3"
                    // name={`contentRadio-${index}`}
                    checked={selectedRadio === 2}
                    onChange={() => {}}
                />
                <input
                    type="radio"
                    id="4"
                    // name={`contentRadio-${index}`}
                    checked={selectedRadio === 3}
                    onChange={() => {}}
                />
            </div> */}
		</div>
	);
}

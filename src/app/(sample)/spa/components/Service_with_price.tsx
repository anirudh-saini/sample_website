"use client";
import React, { useState, useRef, useEffect } from "react";
import style from "./service_with_price.module.scss";
import { service } from "../data/service";
import Link from "next/link";
interface service {
	img: string;
	no: string;
	head: string;
	para: string;
	subhead: {
		head: string;
		para: string;
		price: string;
	}[];
}

export default function Service_with_price() {
	const parentRef = useRef<HTMLDivElement | null>(null);
	const innerRef = useRef<HTMLDivElement | null>(null);
	const [selectedRadio, setSelectedRadio] = useState<number>(0);
	useEffect(() => {
		const options = {
			root: parentRef.current,
			rootMargin: "0px",
			threshold: 0.5, // Adjust threshold as needed
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

	const handlePrevClick = () => {
		if (!parentRef.current) return;
		parentRef.current.scrollLeft -= 500;
	};

	const handleNextClick = () => {
		if (!parentRef.current) return;
		parentRef.current.scrollLeft += 500;
	};

	const our_service = service.map((item: service, index: number) => {
		return (
			<div key={item.no} className={style.item}>
				{/* <div></div> */}
				<div>
					<div className={style.card}>
						<div className={style.card_img}>
							<img src={item.img} alt="service" />
						</div>
						<div className={style.card_content}>
							<div className={style.card_content_head}>
								<p>{item.no}</p>
								<p>{item.head}</p>
							</div>
							<p>{item.para}</p>
						</div>
					</div>
					<div className={style.content} ref={parentRef}>
						{item.subhead.map((subitem, subindex) => (
							<div key={subindex}>
								<div>
									<h3>{subitem.head}</h3>
								</div>
								<div className={style.content_para}>
									<p>{subitem.para}</p>
								</div>
								<div>
									<p>{subitem.price}</p>
								</div>
								<div>
									<Link href="/spa">Book now</Link>
								</div>
							</div>
						))}
					</div>
					<div className={style.radio}>
						<input
							type="radio"
							id={`radio-${index}-0`}
							name={`contentRadio-${index}`}
							checked={[0, 3, 6, 9, 12, 15].includes(
								selectedRadio
							)}
							onChange={() => {}}
						/>
						<input
							type="radio"
							id={`radio-${index}-1`}
							name={`contentRadio-${index}`}
							checked={[1, 4, 7, 10, 13, 16].includes(
								selectedRadio
							)}
							onChange={() => {}}
						/>
						<input
							type="radio"
							id={`radio-${index}-2`}
							name={`contentRadio-${index}`}
							checked={[2, 5, 8, 11, 14, 17].includes(
								selectedRadio
							)}
							onChange={() => {}}
						/>
					</div>
				</div>
				{/* <div></div> */}
			</div>
		);
	});
	return (
		<>
			<div className={style.service}>
				<div className={style.button}>
					<button onClick={handlePrevClick}> {"<"}</button>
					<button onClick={handleNextClick}>{">"} </button>
				</div>
				<div className={`${style.carousel}`} ref={parentRef}>
					{our_service}
				</div>
			</div>
		</>
	);
}

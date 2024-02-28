import React from "react";
import style from "./owner.module.scss";
import Link from "next/link";
export default function Owner() {
	return (
		<div className={style.heading}>
			<h3>owner//inkmaster</h3>
			<div className={style.owner}>
				<div className={style.content}>
					<div>
						<h4>Rohan Verma</h4>
						<p>
							The owner of the renowned shop Devil's Tattoo,
							renowned for their exceptional artistry and
							innovative designs, has cultivated a distinguished
							reputation within the global tattoo community. Their
							commitment to artistic excellence and client
							satisfaction sets them apart, making Devil's Tattoo
							a sought-after destination for ink enthusiasts
							worldwide.
						</p>
					</div>

					<div className={style.link}>
						<Link href="/tattoo">Book Today</Link>
					</div>
				</div>
				<div className={style.img}>
					<img src="/tattoo/owner.png" />
				</div>
			</div>
		</div>
	);
}

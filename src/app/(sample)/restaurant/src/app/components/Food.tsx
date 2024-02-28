import Link from "next/link";
import React from "react";

export default function Food() {
    return (
        <div>
            <div className="food_item1">
                <div className="food_item1_pic">
                    <img src="/food1.svg" alt="food" />
                </div>
                <div className="food_item1_content">
                    <h2>
                        Your Ultimate Barbeque <span>Experience</span>
                    </h2>
                    <p>
                        Indulge in the essence of Chinese barbecue, where savory
                        meats meet the sizzle of the grill for an unforgettable
                        culinary experience.
                    </p>
                    <Link href="/"> Learn More</Link>
                </div>
            </div>
            <div className="food_item2">
                <div className="food_item2_content">
                    <h2>Crafting Culinary Art</h2>
                    <p>
                        Embark on a culinary voyage through the artistry of
                        Chinese cuisine, where flavors are masterfully crafted
                        into every exquisite dish.
                    </p>
                    <Link href="/"> Learn More &rarr;</Link>
                </div>
                <div className="food_item2_pic">
                    <img src="/food2.svg" />
                </div>
            </div>
        </div>
    );
}

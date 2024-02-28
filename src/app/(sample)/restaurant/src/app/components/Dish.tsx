import React from "react";

export default function Dish() {
    return (
        <div className="dish">
            <div className="dish_heading">
                <h2>Discover our Specialities </h2>
            </div>
            <div className="dish_img">
                <div className="dish_img_arrow">
                    <p>&lt;</p>
                </div>
                <div>
                    <img src="/dish1.svg" alt="dish" />
                </div>
                <div className="dish_img_none">
                    <img src="/dish2.svg" alt="dish" />
                </div>
                <div className="dish_img_none">
                    <img src="/dish3.svg" alt="dish" />
                </div>
                <div className="dish_img_arrow">
                    <p>&gt;</p>
                </div>
            </div>
        </div>
    );
}

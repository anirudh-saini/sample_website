import React from "react";
import style from "./page.module.scss";
import Hero2 from "../components/Hero2";
import { service } from "../../data/hero";
export default function page() {
    return (
        <div>
            <Hero2 data={service} />
            <div className={style.service}>
                <div>
                    <h3>Routine Maintenance:</h3>
                    <p>
                        Providing services such as oil changes, tire rotations,
                        fluid checks, and filter replacements to keep vehicles
                        running smoothly and prevent potential issues.
                    </p>
                </div>
                <div>
                    <h3>Diagnostic Services:</h3>
                    <p>
                        Using advanced diagnostic equipment to identify and
                        diagnose problems with vehicle systems, including
                        engine, transmission, braking, electrical, and more.
                    </p>
                </div>
                <div>
                    <h3>Mechanical Repairs:</h3>
                    <p>
                        Performing repairs on various mechanical components of
                        vehicles, including engines, transmissions, brakes,
                        steering, suspension, and exhaust systems.
                    </p>
                </div>
                <div>
                    <h3>Electrical Repairs: </h3>
                    <p>
                        Troubleshooting and repairing electrical systems,
                        including wiring, batteries, alternators, starters,
                        lights, and electronic components.
                    </p>
                </div>
                <div>
                    <h3>Collision Repair:</h3>
                    <p>
                        Offering services to repair damage caused by accidents,
                        including bodywork, frame straightening, dent removal,
                        and painting.
                    </p>
                </div>
                <div>
                    <h3>Wheel and Tire Services: </h3>
                    <p>
                        Providing tire mounting, balancing, rotation, alignment,
                        and repair services, as well as wheel alignment and
                        straightening.
                    </p>
                </div>
                <div>
                    <h3>Air Conditioning and Heating Services: </h3>
                    <p>
                        Repairing and servicing air conditioning and heating
                        systems to ensure comfort and safety for occupants.
                    </p>
                </div>
                <div>
                    <h3>Fluid Services: </h3>
                    <p>
                        Performing fluid flushes and replacements for essential
                        vehicle fluids such as engine oil, transmission fluid,
                        coolant, brake fluid, and power steering fluid.
                    </p>
                </div>
                <div>
                    <h3>Performance Upgrades:</h3>
                    <p>
                        Offering performance-enhancing modifications such as
                        engine tuning, exhaust upgrades, suspension upgrades,
                        and aftermarket parts installation.
                    </p>
                </div>
                <div>
                    <h3>Vehicle Inspections:</h3>
                    <p>
                        Conducting pre-purchase inspections, safety inspections,
                        emissions inspections, and general vehicle condition
                        assessments.
                    </p>
                </div>
                <div>
                    <h3>Fleet Maintenance:</h3>
                    <p>
                        Providing maintenance and repair services for commercial
                        vehicle fleets, including scheduled maintenance programs
                        and emergency repair services.
                    </p>
                </div>
                <div>
                    <h3>Mobile Services: </h3>
                    <p>
                        Offering on-site or mobile repair and maintenance
                        services for customers who cannot bring their vehicles
                        to the shop.
                    </p>
                </div>
                <div>
                    <h3>Emergency Roadside Assistance: </h3>
                    <p>
                        Providing assistance services such as jump-starts, tire
                        changes, lockout assistance, and towing for vehicles
                        stranded on the roadside.
                    </p>
                </div>
            </div>
        </div>
    );
}

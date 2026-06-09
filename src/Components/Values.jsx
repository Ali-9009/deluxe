

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function Values() {
    const [open, setOpen] = useState(0);

    const items = [
        {
            title: "Passionate",
            content:
                "We offer Endolift treatments designed to address a variety of cosmetic concerns, including skin tightening, facial contouring, localized fat reduction, and overall skin rejuvenation.",
        },
        {
            title: "Dependable",
            content:
                "This is the second item's accordion body. It is hidden by default until expanded.",
        },
        {
            title: "People First",
            content:
                "This is the third item's accordion body. It is hidden by default until expanded.",
        },
        {
            title: "Loyalty",
            content:
                "This is the fourth item's accordion body. It is hidden by default until expanded.",
        },
    ];

    return (
        <section className="bg-white">
            <div className="bg-gray-100 py-12 rounded-b-3xl">
                <div className="max-w-7xl mx-auto px-4">
                    <h2 className="text-5xl font-bold">
                        Values
                    </h2>

                    <p className="text-xl font-medium mt-3">
                        "WE DO NOT SELL INK ON PAPER, WE SELL WAYS TO COMMUNICATE"
                    </p>

                    <div className="mt-6 bg-white rounded-xl shadow-lg overflow-hidden">
                        {items.map((item, index) => (
                            <div
                                key={index}
                                className="border-b border-gray-200 last:border-b-0"
                            >
                                <button
                                    onClick={() =>
                                        setOpen(open === index ? -1 : index)
                                    }
                                    className="w-full flex items-center justify-between px-6 py-5 font-semibold text-left"
                                >
                                    <span>{item.title}</span>

                                    <ChevronDown
                                        size={20}
                                        className={`transition-transform duration-300 ${open === index ? "rotate-180" : ""
                                            }`}
                                    />
                                </button>

                                <div
                                    className={`grid transition-all duration-300 ${open === index
                                            ? "grid-rows-[1fr]"
                                            : "grid-rows-[0fr]"
                                        }`}
                                >
                                    <div className="overflow-hidden">
                                        <div className="px-6 pb-5 text-gray-600">
                                            {item.content}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
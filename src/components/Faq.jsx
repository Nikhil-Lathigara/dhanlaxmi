import React, { useState } from "react";

function Faq() {
    const [openFaq, setOpenFaq] = useState(null);

    const toggleFaq = (index) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    return (
        <section className="text-center px-8 py-8">
            <div className="container mx-auto">
                <div className=" text-2xl font-bold text-center mb-5">
                    <h2>Frequently Asked Questions</h2>
                </div>
                <div className="max-w-3xl mx-auto space-y-6">
                    <div>
                        <h5
                            onClick={() => toggleFaq(1)}
                            className="cursor-pointer"
                        >
                            What is Dhanlaxmi? {openFaq === 1 ? '▲' : '▼'}
                        </h5>
                        {openFaq === 1 && (
                            <p className="mt-2">
                                Dhanlaxmi is a Satta Matka Gaming App where you can play games and win jackpots.
                            </p>
                        )}
                    </div>

                    <div>
                        <h5
                            onClick={() => toggleFaq(2)}
                            className="cursor-pointer"
                        >
                            What games are available on Dhanlaxmi? {openFaq === 2 ? '▲' : '▼'}
                        </h5>
                        {openFaq === 2 && (
                            <p className="mt-2">
                                Various games are available including Milan, Kalyan, Rajdhani, and Madhur.
                            </p>
                        )}
                    </div>

                    <div>
                        <h5
                            onClick={() => toggleFaq(3)}
                            className="cursor-pointer"
                        >
                            Does Dhanlaxmi have a license? {openFaq === 3 ? '▲' : '▼'}
                        </h5>
                        {openFaq === 3 && (
                            <p className="mt-2">
                                Yes, Dhanlaxmi has a valid license for legal and safe gaming.
                            </p>
                        )}
                    </div>

                    <div>
                        <h5
                            onClick={() => toggleFaq(4)}
                            className="cursor-pointer"
                        >
                            What is the minimum deposit and withdrawal? {openFaq === 4 ? '▲' : '▼'}
                        </h5>
                        {openFaq === 4 && (
                            <p className="mt-2">
                                The minimum deposit and withdrawal amounts vary based on the game and promotion.
                            </p>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Faq;

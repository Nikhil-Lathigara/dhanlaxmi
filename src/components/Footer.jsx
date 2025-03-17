import React from 'react';

function Footer() {
    return (
        <footer className="text-center py-5 bg-gray-100">
            <div className="max-w-3xl mx-auto">
                <img 
                    src="images/logo.svg" 
                    alt="Sara777 Logo" 
                    className="w-24 mx-auto mb-4"
                />
                <p className="mb-3">
                    Players need to be 18+ in order to register. Underage gambling is prohibited.
                </p>
                <div className="flex justify-center gap-4 mb-3">
                    <a href="https://www.begambleaware.org" target="_blank" rel="noopener noreferrer">
                        BeGambleAware.org
                    </a>
                    <br></br>
                    <a href="https://www.gamblingtherapy.org" target="_blank" rel="noopener noreferrer">
                        Gambling Therapy
                    </a>
                </div>
                <p className="mb-2">
                    Our website is operated by Sara International, a company established under the law of Isle of Man, 
                    with registered address at 1-10 Ballanoa Meadow IM4-2HT, Isle Of Man, and having its gaming sublicense 
                    issued by Isle of Man e-Gaming and all rights to operate the gaming software worldwide.
                </p>
                <hr></hr>
                <p>Copyright © 2024 Sara777. All Rights Reserved</p>
            </div>
        </footer>
    );
}

export default Footer;

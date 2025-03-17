import React from 'react';

function Games() {
  const games = [
    { name: 'TATA MORNING', numbers: '147-23-238', status: 'Closed' },
    { name: 'SRIDEVI DAY', numbers: '799-58-260', status: 'Closed' },
    { name: 'TIME BAZAR', numbers: '470-13-120', status: 'Closed' },
    { name: 'TATA DAY', numbers: '134-8*-***', status: 'Open' },
    { name: 'MILAN DAY', numbers: '120-3*-***', status: 'Open' },
    { name: 'TATA MORNING', numbers: '147-23-238', status: 'Closed' },
    { name: 'SRIDEVI DAY', numbers: '799-58-260', status: 'Closed' },
    { name: 'TIME BAZAR', numbers: '470-13-120', status: 'Closed' },
    { name: 'TATA DAY', numbers: '134-8*-***', status: 'Open' },
    { name: 'MILAN DAY', numbers: '120-3*-***', status: 'Open' },
    { name: 'TATA MORNING', numbers: '147-23-238', status: 'Closed' },
    { name: 'SRIDEVI DAY', numbers: '799-58-260', status: 'Closed' },
    { name: 'TIME BAZAR', numbers: '470-13-120', status: 'Closed' },
    { name: 'TATA DAY', numbers: '134-8*-***', status: 'Open' },
    { name: 'MILAN DAY', numbers: '120-3*-***', status: 'Open' },
  ];

  return (
    <>
      <div className="container my-5">
        <h2 className="text-center mb-2 font-bold text-2xl">Games</h2>
        <div className="row">
          {games.map((game, index) => (
            <div key={index} className="col-12 col-sm-6 col-md-4 col-lg-4 mb-4">
              <div className={`card h-100 mx-lg-3 ${game.status === 'Closed' ? 'bg-light' : ''}`}>
                <div className="card-body d-flex flex-column">
                  <div className="d-flex justify-content-between">
                    <h5 className="card-title">{game.name}</h5>
                    <div className="d-flex space-x-2">
                      <button className="btn btn-outline-warning btn-sm text-black">Jodi Chart</button>
                      <button className="btn btn-outline-warning btn-sm text-black">Pana Chart</button>
                    </div>
                  </div>
                  <p className="card-text">{game.numbers}</p>
                  <p className={`card-text ${game.status === 'Closed' ? 'text-danger' : 'text-success'}`}>
                    {game.status === 'Closed' ? 'Closed for today' : 'Open for today'}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Games;
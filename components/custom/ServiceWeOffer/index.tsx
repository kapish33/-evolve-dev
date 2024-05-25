import React from "react";
import "./styles.css";

export const ServicesWeOffer = (): JSX.Element => {
  return (
    <section>
      <h2 className="text-3xl text-center py-4">
        Testimonials (share stories or quotes from participants)
      </h2>
      <main className="page-content">
        <div className="card">
          <div className="content">
            <h2 className="title">Mountain View</h2>
            <p className="copy">
              Check out all of these gorgeous mountain trips with beautiful
              views of, you guessed it, the mountains
            </p>
            <button className="btn">View Trips</button>
          </div>
        </div>
        <div className="card">
          <div className="content">
            <h2 className="title">To The Beach</h2>
            <p className="copy">
              Plan your next beach trip with these fabulous destinations
            </p>
            <button className="btn">View Trips</button>
          </div>
        </div>
        <div className="card">
          <div className="content">
            <h2 className="title">Desert Destinations</h2>
            <p className="copy">It the desert you always dreamed of</p>
            <button className="btn">Book Now</button>
          </div>
        </div>
        <div className="card">
          <div className="content">
            <h2 className="title">Explore The Galaxy</h2>
            <p className="copy">
              Seriously, straight up, just blast off into outer space today
            </p>
            <button className="btn">Book Now</button>
          </div>
        </div>
      </main>
    </section>
  );
};

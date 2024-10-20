export default function Responsive() {
  return (
    <>
      {}
      <header className="header">
        <h1 className="header-title">Self Development</h1>
        <nav className="header-nav">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </nav>
      </header>
      {}
    <div className="parentContainer">
      <div className="childContainer">
        <div className="imageContainer">

          <h1 className="title">Building Confidence</h1>
          <p className="description">
            {" "}
            Learn easy strategies to boost your self-confidence and unlock your
            full potential in everyday situations.
          </p>
          <button className="readMore"> Read More</button>
        </div>
      </div>
      <div className="childContainer">
        <div className="imageContainer">
          <h1 className="title">Time Management Tips</h1>
          <p className="description">
            Master the art of time management with simple techniques to enhance
            productivity and personal growth.
          </p>
          <button className="readMore"> Read More</button>
        </div>
      </div>
      <div className="childContainer">
        <div className="imageContainer">
          <h1 className="title">The Power of Positive Thinking</h1>
          <p className="description">
            Discover how a positive mindset can transform your outlook and bring
            success in all areas of life.
          </p>
          <button className="readMore"> Read More</button>
        </div>
      </div>

      <div className="childContainer">
        <div className="imageContainer">
          <h1 className="title">Developing Resilience</h1>
          <p className="description">
            Explore practical methods to strengthen your resilience and bounce
            back from life is challenges.
          </p>
          <button className="readMore"> Read More</button>
        </div>
      </div>

      <div className="childContainer">
        <div className="imageContainer">
          <h1 className="title">Goal Setting for Beginners</h1>
          <p className="description">
            Learn how to set clear, achievable goals and take actionable steps
            toward personal success.
          </p>
          <button className="readMore"> Read More</button>
        </div>
      </div>

      <div className="childContainer">
        <div className="imageContainer">
          <h1 className="title">Daily Mindfulness Practices</h1>
          <p className="description">
            Incorporate simple mindfulness techniques into your daily routine to
            reduce stress and stay focused.
          </p>
          <button className="readMore"> Read More</button>
        </div>
      </div>
    </div>
  
   {/* Footer Section */}
   <footer className="footer">
        <p>© 2024 Syeda Um-e-Habiba Fatima All rights reserved</p>
        <nav className="footer-nav">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </nav>
      </footer>
    </>
  );
}

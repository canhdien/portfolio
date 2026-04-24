import Link from 'next/link';

export default function Home() {
  return (
    <div className="pageRoot">
      <section className="heroSection">
        <div className="heroCard">
          <h1 className="heroHeadline">Visuals define how the world operates today</h1>
          <p className="heroText">
            I’m Tin Canh Dien Nguyen — a visual designer who builds bold brand worlds, cinematic poster systems, and motion-led campaigns that feel polished and powerful.
          </p>
        </div>
      </section>

      <section className="featuredGrid">
        <article className="showcaseCard">
          <div className="imageWrapper">
            <img src="/poster-mockup3.jpg" alt="Manchester United Poster Series" />
          </div>
          <div className="cardBody">
            <span className="showcaseLabel">Poster Series</span>
            <h2 className="showcaseTitle">Manchester United</h2>
            <p className="showcaseCopy">
              A strong visual series that merges football passion with dynamic composition, bold typography, and atmosphere.
            </p>
            <Link href="/poster" className="buttonAccent">View full project</Link>
          </div>
        </article>

        <article className="showcaseCard">
          <div className="imageWrapper">
            <img src="/mockup2.png" alt="Motion Energy Brand Campaign" />
          </div>
          <div className="cardBody">
            <span className="showcaseLabel">Brand Identity</span>
            <h2 className="showcaseTitle">Motion Energy</h2>
            <p className="showcaseCopy">
              A campaign concept exploring momentum, speed, and athletic energy through refined visual systems and motion-ready branding.
            </p>
            <Link href="/brand" className="buttonAccent">View full project</Link>
          </div>
        </article>
      </section>
    </div>
  );
}
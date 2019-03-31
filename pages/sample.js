import Layout from "../components/Layout.js";

export default () => (
  <Layout>
    <div id="bg" />

    <header>
      <a href="#">ZoomZoom</a>
    </header>

    <main>
      <section id="card">
        <ul>
          <li>
            <span />
            <strong>How may I help you, bro?</strong>
          </li>
          <li>
            <span />
            <strong>I don't know if I can be helped</strong>
          </li>
          <li>
            <span />
            <strong>That's deep. Let me help.</strong>
          </li>
        </ul>
      </section>
      <section id="primary">
        <h1>Your Personal Assistant</h1>
        <p>Get help with your daily life stuff.</p>

        <a href="#">Get help already</a>
      </section>
    </main>
  </Layout>
);

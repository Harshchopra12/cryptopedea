import MoreBlogs from "./more-blogs";

export default function BlogArticle() {
  return (
    <article className="cp-blog-article">

      {/* =====================================================
          TITLE
          ===================================================== */}

      <h1 className="cp-blog-title">
        How Decagon uses AI for design system saturation
      </h1>


      {/* =====================================================
          AUTHOR + TAGS
          ===================================================== */}

      <div className="cp-blog-meta">
        <div className="cp-blog-author">
          <span>Jenny Xie</span>
          <span>Editor, Figma</span>
        </div>

        <div className="cp-blog-tags">
          <span className="cp-blog-tag">
            Maker Stories
          </span>

          <span className="cp-blog-tag">
            AI
          </span>
        </div>
      </div>


      {/* =====================================================
          HERO IMAGE
          ===================================================== */}

      <div className="cp-blog-image-wrapper cp-blog-hero">
        <img
          className="cp-blog-image"
          src="/blog/blog-hero.svg"
          alt="How Decagon uses AI for design system saturation"
        />
      </div>


      {/* =====================================================
          FIRST ARTICLE TEXT
          ===================================================== */}

      <div className="cp-blog-text">

        <p>
          At an AI-native company like Decagon, the design-to-code loop moves
          fast, but it can break down just as quickly. Coding agents need
          precise inputs to produce reliable output.
        </p>

        <p>
          But without a design system, every component comes down to a
          judgment call—and that doesn&apos;t scale. When Product Designer
          Jennifer Xu joined Decagon, there was no design system; just a
          growing product and a team moving fast enough to feel the absence
          of one.
        </p>

        <p>
          Inconsistency across the platform undermined the polish they needed
          to bring to enterprise customers, and back-and-forth revs between
          design and development cost time and effort.
        </p>

        <p>
          To build their design system, called Deco, designers and engineers
          worked hand-in-hand from the very beginning. &ldquo;We were able to
          think about a lot of the edge cases and what already exists in code
          from the start,&rdquo; says Jennifer.
        </p>

        <p>
          That meant working through questions that would&apos;ve been easy to
          defer and expensive to revisit later. What happens in focus mode?
          Which states does each component need—disabled, read-only, error,
          warning? Placeholder or no placeholder?
        </p>

        <p>
          The result is an org-wide library in Figma that now includes
          hundreds of components, styles, and variables encompassing the vast
          majority of use cases across the whole platform for multiple teams.
          According to Figma&apos;s library analytics, it logged tens of
          thousands of inserts in 30 days, a sign that people are using it.
        </p>

        <p>
          &ldquo;With a built-out library, we aren&apos;t debating styles or
          implementation,&rdquo; says Jennifer. &ldquo;Engineers have a clear
          view of which button or table should be used. It also means we have
          a shared vocabulary. As a designer, I can anchor on very similar
          primitives that an engineer does, so when we&apos;re building a
          product or thinking about a flow, it&apos;s a lot easier to
          communicate.&rdquo;
        </p>

      </div>


      {/* =====================================================
          SECOND IMAGE
          ===================================================== */}

      <div className="cp-blog-secondary-image">
        <img
          src="/blog/blog-hero.svg"
          alt="Decagon design system"
        />
      </div>


      {/* =====================================================
          SECOND ARTICLE TEXT
          ===================================================== */}

      <div className="cp-blog-text cp-blog-final-text">

        <p>
          At an AI-native company like Decagon, the design-to-code loop moves
          fast, but it can break down just as quickly. Coding agents need
          precise inputs to produce reliable output.
        </p>

        <p>
          But without a design system, every component comes down to a
          judgment call—and that doesn&apos;t scale. When Product Designer
          Jennifer Xu joined Decagon, there was no design system; just a
          growing product and a team moving fast enough to feel the absence
          of one.
        </p>

      </div>


      {/* =====================================================
          FINAL TEXT
          ===================================================== */}

      <div className="cp-blog-final-text cp-blog-text">

        <p>
          With a shared vocabulary between design and code, the team can
          move from idea to implementation without repeatedly solving the
          same problems.
        </p>

        <p>
          The result is a more consistent product, faster iteration, and a
          workflow where designers and engineers can focus on the work that
          actually requires their judgment.
        </p>

      </div>


      {/* =====================================================
          MORE BLOGS
          ===================================================== */}

      <MoreBlogs />

    </article>
  );
}
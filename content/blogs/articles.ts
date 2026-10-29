export type BlogTextPart = {
  text: string;
  emphasis?: boolean;
};

export type BlogParagraph = string | BlogTextPart[];

export type BlogSection = {
  heading: string;
  paragraphs: BlogParagraph[];
  illustration?: {
    src: string;
    alt: string;
    className?: string;
  };
};

export type BlogArticleData = {
  slug: string;
  title: string;
  summary: BlogParagraph;
  hero: { src: string; alt: string; className?: string };
  sections: BlogSection[];
  relatedConcepts: Array<{
    title: string;
    image: string;
    color: string;
    alt: string;
  }>;
  goDeeper: {
    description: string;
    label: string;
    href: string;
  };
};

export const BLOG_ARTICLES: BlogArticleData[] = [
  {
    slug: "what-gives-money-its-value",
    title: "What gives money its value?",
    hero: {
      src: "/blog/money-value-hero.png",
      alt: "A fan of banknotes illustrating money as a medium of exchange",
    },
    summary: [
      { text: "Money has value because people trust it, accept it, and believe others will accept it in return. Its value comes from a combination of " },
      { text: "trust, scarcity, usefulness, and widespread acceptance", emphasis: true },
      { text: " — not simply from what it is physically made of." },
    ],
    sections: [
      {
        heading: "The Simple Version",
        paragraphs: [
          "Think about a ₹500 note.",
          "The paper itself isn't worth ₹500. You can't use the paper to buy ₹500 worth of goods.",
          "It has value because you know that a shopkeeper will accept it, the next person will accept it, and you can use it to exchange for something you need.",
          [
            { text: "So money works because " },
            { text: "people collectively agree that it can be used to exchange value.", emphasis: true },
          ],
        ],
        illustration: {
          src: "/blog/money-value-exchange.png",
          alt: "Two people exchanging money",
          className: "exchangeIllustration",
        },
      },
      {
        heading: "How it works",
        paragraphs: [
          [{ text: "Money → Trust → Acceptance → Exchange → Value", emphasis: true }],
          "If people stop trusting or accepting something as money, its usefulness as money can quickly disappear.",
        ],
        illustration: {
          src: "/blog/money-value-flow.png",
          alt: "Money, trust, acceptance, exchange, and value shown as a connected process",
          className: "flowIllustration",
        },
      },
      {
        heading: "Real world example",
        paragraphs: [
          "Imagine you have ₹1,000 and walk into a shop.",
          "You give the shopkeeper ₹1,000 and receive goods worth ₹1,000.",
          "The shopkeeper accepts the note because they know they can use that same ₹1,000 somewhere else.",
          "The value keeps moving from person to person.",
        ],
      },
      {
        heading: "Why it Matters",
        paragraphs: [
          [
            { text: "Understanding why money has value makes it easier to understand" },
            { text: " fiat money, Bitcoin, and cryptocurrency.", emphasis: true },
          ],
          "Before asking whether Bitcoin has value, you first need to understand what gives anything the function of money in the first place.",
        ],
      },
      {
        heading: "Common Mistakes",
        paragraphs: [
          [
            { text: '"Money has value because the paper is valuable."', emphasis: true },
          ],
          "Not really.",
          "The physical material is only the medium. The value comes from the system of trust, acceptance, scarcity, and economic use surrounding it.",
        ],
      },
    ],
    relatedConcepts: [
      {
        title: "Design systems and AI: Why MCP servers are the unlock",
        image: "/blog/related-concept-one.png",
        color: "#ed7c30",
        alt: "Illustration for Design systems and AI: Why MCP servers are the unlock",
      },
      {
        title: "4 ways we’re using our MCP server at Figma",
        image: "/blog/related-concept-two.png",
        color: "#feca04",
        alt: "Illustration for 4 ways we’re using our MCP server at Figma",
      },
      {
        title: "The TL;DR on MCP: Why context matters and how to put it to work",
        image: "/blog/related-concept-three.png",
        color: "#00a64f",
        alt: "Illustration for The TL;DR on MCP: Why context matters and how to put it to work",
      },
    ],
    goDeeper: {
      description: "Want to understand how money evolved into Bitcoin?",
      label: "Explore the lesson",
      href: "/lesson/lesson-foundation-1-1",
    },
  },
  {
    slug: "what-is-fiat-money",
    title: "What is Fiat money?",
    hero: {
      src: "/blog/fiat-money-hero.png",
      alt: "Illustration of government, legal recognition, currency, and economic exchange",
    },
    summary: [
      { text: "Fiat money is government-issued money that isn't directly backed by a physical commodity such as gold. Its value comes largely from " },
      { text: "trust, legal recognition, economic activity, and people's willingness to accept it.", emphasis: true },
    ],
    sections: [
      {
        heading: "The Simple Version",
        paragraphs: [
          "The rupee, dollar, euro, and most currencies people use today are fiat money.",
          "Unlike gold-backed money, you generally can't take ₹1,000 to the government and demand a fixed amount of gold in exchange for it.",
          "Instead, you use the ₹1,000 because everyone around you recognizes it as money.",
        ],
        illustration: {
          src: "/blog/fiat-money-simple.png",
          alt: "A person offers a ₹1,000 note while the government refuses to exchange it for gold",
          className: "exchangeIllustration",
        },
      },
      {
        heading: "How it works",
        paragraphs: [
          [
            {
              text: "Government issues currency\n↓\nPeople and businesses accept it\n↓\nIt is used for buying, selling, saving & paying taxes\n↓\nEconomic activity gives it practical value",
              emphasis: true,
            },
          ],
          "Central banks also influence the money supply and interest rates, which can affect the purchasing power of fiat currency over time.",
        ],
        illustration: {
          src: "/blog/fiat-money-flow.png",
          alt: "Government-issued currency flows through people, businesses, purchases, savings, and economic activity",
          className: "fiatFlowIllustration",
        },
      },
      {
        heading: "Real world example",
        paragraphs: [
          "You earn ₹50,000 from your job.",
          "You use those rupees to pay rent, buy groceries, pay bills, and save some money.",
          "The shopkeeper accepts your rupees because they know their suppliers, employees, banks, and other businesses will also accept rupees.",
          "The same currency keeps moving through the economy.",
        ],
      },
      {
        heading: "Why it Matters",
        paragraphs: [
          "Fiat money is the system you already use every day.",
          [
            { text: "Understanding how it works helps you see " },
            { text: "what makes cryptocurrency different", emphasis: true },
            { text: " especially when it comes to decentralization, supply, and who controls the monetary system." },
          ],
        ],
      },
      {
        heading: "Common Mistakes",
        paragraphs: [
          [{ text: '"Fiat money has no value."', emphasis: true }],
          "That's too simplistic.",
          "Fiat money has purchasing power and is deeply integrated into the economy. Its value can change over time because of factors such as inflation, interest rates, economic conditions, and changes in money supply.",
        ],
      },
    ],
    relatedConcepts: [
      {
        title: "Design systems and AI: Why MCP servers are the unlock",
        image: "/blog/related-concept-one.png",
        color: "#ed7c30",
        alt: "Illustration for Design systems and AI: Why MCP servers are the unlock",
      },
      {
        title: "4 ways we’re using our MCP server at Figma",
        image: "/blog/related-concept-two.png",
        color: "#feca04",
        alt: "Illustration for 4 ways we’re using our MCP server at Figma",
      },
      {
        title: "The TL;DR on MCP: Why context matters and how to put it to work",
        image: "/blog/related-concept-three.png",
        color: "#00a64f",
        alt: "Illustration for The TL;DR on MCP: Why context matters and how to put it to work",
      },
    ],
    goDeeper: {
      description: "Want to understand how money evolved into Bitcoin?",
      label: "Explore the lesson",
      href: "/lesson/lesson-foundation-1-1",
    },
  },
  {
    slug: "what-is-cryptocurrency",
    title: "What is cryptocurrency?",
    hero: {
      src: "/blog/cryptocurrency-hero.png",
      alt: "Bitcoin and digital currency symbols on a blockchain network",
    },
    summary:
      "Cryptocurrency is a type of digital asset that uses cryptography and blockchain technology to record and secure transactions. Unlike traditional fiat currency, many cryptocurrencies operate on decentralized networks rather than being controlled by a single central authority.",
    sections: [
      {
        heading: "The Simple Version",
        paragraphs: [
          "Think of cryptocurrency as a digital asset that can be transferred between people using a blockchain network.",
          "There is no physical crypto note or coin.",
          [
            { text: "Instead, transactions are recorded on a " },
            { text: "digital ledger called a blockchain,", emphasis: true },
            { text: " which is maintained by a network of computers." },
          ],
        ],
        illustration: {
          src: "/blog/cryptocurrency-simple.png",
          alt: "A cryptocurrency network of computers connected through a blockchain",
          className: "exchangeIllustration",
        },
      },
      {
        heading: "How it works",
        paragraphs: [
          [
            {
              text: "You send crypto\n↓\nTransaction is broadcast to the network\n↓\nNetwork verifies it\n↓\nTransaction is recorded on the blockchain\n↓\nThe recipient receives the crypto",
              emphasis: true,
            },
          ],
          "Different cryptocurrencies use different technologies and network designs, so not all cryptocurrencies work exactly the same way.",
        ],
        illustration: {
          src: "/blog/cryptocurrency-flow.png",
          alt: "Steps in a cryptocurrency transaction, from sending crypto to the recipient receiving it",
          className: "cryptoFlowIllustration",
        },
      },
      {
        heading: "Real world example",
        paragraphs: [
          "Imagine you want to send Bitcoin to someone in another country.",
          "Instead of going through a traditional bank transfer, you can send Bitcoin to the person's crypto address through the Bitcoin network.",
          "The network verifies the transaction and records it on the blockchain.",
        ],
      },
      {
        heading: "Why it Matters",
        paragraphs: [
          "Cryptocurrency introduced a new way of transferring and representing value digitally.",
          "It can be used for payments, decentralized applications, financial services, digital ownership, and many other purposes — depending on the specific cryptocurrency",
        ],
      },
      {
        heading: "Common Mistakes",
        paragraphs: [
          [{ text: '"All cryptocurrencies are just digital money."', emphasis: true }],
          "Not exactly.",
          "Some cryptocurrencies are designed primarily as digital money, while others power networks, applications, or specific blockchain ecosystems.",
          [{ text: "Crypto is a broad category, not one single type of asset.", emphasis: true }],
        ],
      },
    ],
    relatedConcepts: [
      {
        title: "Design systems and AI: Why MCP servers are the unlock",
        image: "/blog/related-concept-one.png",
        color: "#ed7c30",
        alt: "Illustration for Design systems and AI: Why MCP servers are the unlock",
      },
      {
        title: "4 ways we’re using our MCP server at Figma",
        image: "/blog/related-concept-two.png",
        color: "#feca04",
        alt: "Illustration for 4 ways we’re using our MCP server at Figma",
      },
      {
        title: "The TL;DR on MCP: Why context matters and how to put it to work",
        image: "/blog/related-concept-three.png",
        color: "#00a64f",
        alt: "Illustration for The TL;DR on MCP: Why context matters and how to put it to work",
      },
    ],
    goDeeper: {
      description: "Want to understand how money evolved into Bitcoin?",
      label: "Explore the lesson",
      href: "/lesson/lesson-foundation-1-1",
    },
  },
  {
    slug: "what-is-blockchain",
    title: "What is Blockchain?",
    hero: {
      src: "/blog/blockchain-hero.png",
      alt: "Blockchain illustration from the CryptoPedea design",
      className: "blockchainHero",
    },
    summary:
      "A blockchain is a digital record of information that is shared across a network of computers.\nInstead of one central authority keeping the record, copies of the record are maintained and updated across the network.",
    sections: [
      {
        heading: "The Simple Version",
        paragraphs: [
          [
            { text: "Think of a blockchain like a " },
            { text: "shared digital notebook.", emphasis: true },
          ],
          "Imagine thousands of people have a copy of the same notebook. Whenever a new transaction is added, the network checks it and updates the copies.",
          "Once information is recorded, changing old records is designed to be extremely difficult.",
          "That's the basic idea behind a blockchain.",
        ],
        illustration: {
          src: "/blog/blockchain-simple.png",
          alt: "Illustration explaining a shared blockchain record",
          className: "exchangeIllustration",
        },
      },
      {
        heading: "How it works",
        paragraphs: [
          [
            {
              text: "Transaction happens\n↓\nTransaction is grouped with others\n↓\nA block is created\n↓\nNetwork verifies the block\n↓\nBlock is added to the blockchain\n↓\nNetwork keeps the updated record",
              emphasis: true,
            },
          ],
        ],
        illustration: {
          src: "/blog/blockchain-flow.png",
          alt: "Blockchain transaction process from a transaction happening to the network updating its record",
          className: "cryptoFlowIllustration",
        },
      },
      {
        heading: "Real world example",
        paragraphs: [
          "Imagine Alice sends 1 Bitcoin to Bob.",
          "Instead of one bank keeping a private record of the transfer, the Bitcoin network records the transaction on its blockchain.",
          "The transaction becomes part of a block, and after verification, that block becomes part of the existing chain of blocks.",
        ],
      },
      {
        heading: "Why it Matters",
        paragraphs: [
          "Blockchain allows people to maintain a shared record without relying on one central database.",
          "This idea is important not only for Bitcoin, but also for cryptocurrencies, smart contracts, DeFi, digital assets, and many other blockchain applications.",
        ],
      },
      {
        heading: "Common Mistakes",
        paragraphs: [
          [{ text: '"Blockchain and Bitcoin are the same thing."', emphasis: true }],
          [{ text: "They're not.", emphasis: true }],
          [
            {
              text: "Bitcoin is a cryptocurrency. Blockchain is the underlying type of technology that Bitcoin uses to record transactions.",
              emphasis: true,
            },
          ],
          "Think of it like:",
          [{ text: "Bitcoin → one application", emphasis: true }],
          [{ text: "Blockchain → the underlying technology", emphasis: true }],
        ],
      },
    ],
    relatedConcepts: [
      {
        title: "Design systems and AI: Why MCP servers are the unlock",
        image: "/blog/related-concept-one.png",
        color: "#ed7c30",
        alt: "Illustration for Design systems and AI: Why MCP servers are the unlock",
      },
      {
        title: "4 ways we’re using our MCP server at Figma",
        image: "/blog/related-concept-two.png",
        color: "#feca04",
        alt: "Illustration for 4 ways we’re using our MCP server at Figma",
      },
      {
        title: "The TL;DR on MCP: Why context matters and how to put it to work",
        image: "/blog/related-concept-three.png",
        color: "#00a64f",
        alt: "Illustration for The TL;DR on MCP: Why context matters and how to put it to work",
      },
    ],
    goDeeper: {
      description: "Want to understand how money evolved into Bitcoin?",
      label: "Explore the lesson",
      href: "/lesson/lesson-foundation-1-1",
    },
  },
  {
    slug: "how-does-blockchain-work",
    title: "How does Blockchain work?",
    hero: {
      src: "/blog/blockchain-work-hero.png",
      alt: "Blocks linked together on a blockchain network",
      className: "blockchainWorkHero",
    },
    summary: [
      { text: "A blockchain works by recording transactions in groups called " },
      { text: "blocks", emphasis: true },
      { text: " and having a network of computers verify those transactions. Once a block is accepted by the network, it is linked to previous blocks, creating a chain of records. " },
    ],
    sections: [
      {
        heading: "The Simple Version",
        paragraphs: [
          "Let's say you send crypto to someone.",
          "The transaction doesn't simply get written into a blockchain immediately.",
          "First, it is shared with the network. Computers called nodes check whether the transaction follows the network's rules.",
          "Valid transactions are then grouped into a block, verified through the network's consensus process, and added to the chain.",
        ],
        illustration: {
          src: "/blog/blockchain-work-simple.png",
          alt: "Network participants verifying a cryptocurrency transaction",
          className: "exchangeIllustration",
        },
      },
      {
        heading: "How it works",
        paragraphs: [
          [
            { text: "1. Transaction\n", emphasis: true },
            { text: "Someone sends crypto.\n" },
            { text: "↓\n", emphasis: true },
            { text: "2. Broadcast\n", emphasis: true },
            { text: "The transaction is shared with the network.\n" },
            { text: "↓\n", emphasis: true },
            { text: "3. Nodes verify\n", emphasis: true },
            { text: "Network participants check whether the transaction is valid.\n" },
            { text: "↓\n", emphasis: true },
            { text: "4. Block\n", emphasis: true },
            { text: "Valid transactions are grouped together into a block.\n" },
            { text: "↓\n", emphasis: true },
            { text: "5. Consensus\n", emphasis: true },
            { text: "The network reaches agreement on which valid block should be added.\n" },
            { text: "↓\n", emphasis: true },
            { text: "6. Blockchain\n", emphasis: true },
            { text: "The new block is linked to previous blocks.\n" },
            { text: "Block → Block → Block → Block", emphasis: true },
          ],
        ],
        illustration: {
          src: "/blog/blockchain-work-flow.png",
          alt: "Three steps showing a transaction, consensus, and blockchain verification",
          className: "blockchainWorkFlowIllustration",
        },
      },
      {
        heading: "Real world example",
        paragraphs: [
          "Suppose Alice sends 0.1 BTC to Bob.",
          "The transaction is broadcast across the Bitcoin network.",
          "Nodes check things such as whether Alice has enough Bitcoin and whether the transaction follows the network's rules.",
          "Once the transaction is included in a valid block and that block is accepted by the network, it becomes part of Bitcoin's blockchain history",
        ],
      },
      {
        heading: "Why it Matters",
        paragraphs: [
          "This process allows a decentralized network to maintain a shared transaction history without relying on one central database.",
          [
            { text: "It is also why understanding " },
            { text: "transactions, nodes, blocks, and verification", emphasis: true },
            { text: " is essential before learning how Bitcoin stays secure." },
          ],
        ],
      },
      {
        heading: "Common Mistakes",
        paragraphs: [
          [{ text: "\"Every computer on the blockchain does the exact same job.\"", emphasis: true }],
          "Not necessarily.",
          "Different participants can have different roles. For example, nodes can verify and relay transactions, while specific consensus participants may be responsible for helping add new blocks, depending on how that blockchain is designed.",
        ],
      },
    ],
    relatedConcepts: [
      {
        title: "Design systems and AI: Why MCP servers are the unlock",
        image: "/blog/related-concept-one.png",
        color: "#ed7c30",
        alt: "Illustration for Design systems and AI: Why MCP servers are the unlock",
      },
      {
        title: "4 ways we’re using our MCP server at Figma",
        image: "/blog/related-concept-two.png",
        color: "#feca04",
        alt: "Illustration for 4 ways we’re using our MCP server at Figma",
      },
      {
        title: "The TL;DR on MCP: Why context matters and how to put it to work",
        image: "/blog/related-concept-three.png",
        color: "#00a64f",
        alt: "Illustration for The TL;DR on MCP: Why context matters and how to put it to work",
      },
    ],
    goDeeper: {
      description: "Want to understand how money evolved into Bitcoin?",
      label: "Explore the lesson",
      href: "/lesson/lesson-foundation-1-1",
    },
  },
  ...[
    {
      slug: "what-is-bitcoin", title: "What is Bitcoin?",
      hero: { src: "/blog/bitcoin-hero.png", alt: "Bitcoin as a decentralized digital asset" },
      summary: "Bitcoin is a decentralized digital asset that allows people to transfer value over the internet without relying on a central authority such as a bank. It was introduced in 2009 by the pseudonymous creator, Satoshi Nakamoto.",
      sections: [
        { heading: "The Simple Version", paragraphs: ["Think of Bitcoin as a form of digital value that exists on a network rather than as physical cash.", "There is no Bitcoin bank or company that controls the Bitcoin network.", [{ text: "Instead, transactions are recorded on the " }, { text: "Bitcoin blockchain", emphasis: true }, { text: " and verified by participants across the network." }]], illustration: { src: "/blog/bitcoin-simple.png", alt: "Bitcoin network", className: "exchangeIllustration" } },
        { heading: "How it works", paragraphs: [[{ text: "You own Bitcoin\n↓\nYou send it to another person\n↓\nThe Bitcoin network verifies the transaction\n↓\nMiners add transactions to a block\n↓\nThe block becomes part of the blockchain", emphasis: true }], "Bitcoin was designed to allow people to transfer value without needing a central institution to approve every transaction."], illustration: { src: "/blog/bitcoin-flow.png", alt: "Bitcoin transaction flow", className: "cryptoFlowIllustration" } },
        { heading: "Real world example", paragraphs: ["Imagine you want to send money to someone in another country.", "With a traditional system, the transfer may involve banks or payment providers.", "With Bitcoin, you can send BTC directly to the recipient's Bitcoin address through the Bitcoin network.", "The network processes and records the transaction without a bank acting as the central intermediary."] },
        { heading: "Why it Matters", paragraphs: ["Bitcoin introduced a different approach to digital money:", [{ text: "No central issuer → decentralized network → transparent transaction history", emphasis: true }], "It also became the starting point for the broader cryptocurrency ecosystem that followed"] },
        { heading: "Common Mistakes", paragraphs: [[{ text: "\"Bitcoin is stored inside your wallet.\"", emphasis: true }], "Not exactly.", "The Bitcoin itself is recorded on the blockchain. Your wallet holds the keys that allow you to access and control your Bitcoin."] },
      ], relatedConcepts: [], goDeeper: { description: "Want to understand how money evolved into Bitcoin?", label: "Explore the lesson", href: "/lesson/lesson-foundation-1-1" },
    },
    {
      slug: "how-does-bitcoin-work", title: "How does Bitcoin works?",
      hero: { src: "/blog/bitcoin-work-hero.png", alt: "Bitcoin network transaction" },
      summary: [{ text: "Bitcoin works through a decentralized network that records and verifies transactions on a blockchain. " }, { text: "Transactions, nodes, miners, and consensus", emphasis: true }, { text: " work together to maintain the network without a central bank controlling it." }],
      sections: [
        { heading: "The Simple Version", paragraphs: ["Let's say Alice wants to send Bitcoin to Bob.", "She creates a transaction and broadcasts it to the Bitcoin network.", [{ text: "Nodes check whether the transaction is valid. Miners then collect valid transactions into a block and compete to add that block to the blockchain through Bitcoin's " }, { text: "Proof-of-Work", emphasis: true }, { text: " system." }], "Once accepted, the transaction becomes part of Bitcoin's public transaction history."], illustration: { src: "/blog/bitcoin-work-simple.png", alt: "Bitcoin network verification", className: "exchangeIllustration" } },
        { heading: "How it works", paragraphs: [[{ text: "Alice sends BTC to Bob\n↓\nTransaction is broadcast\n↓\nNodes verify the transaction\n↓\nMiners group transactions into a block\n↓\nProof-of-Work helps determine the next block\n↓\nBlock is added to the blockchain\n↓\nThe network updates its shared history", emphasis: true }]], illustration: { src: "/blog/bitcoin-work-flow.png", alt: "Bitcoin proof-of-work flow", className: "bitcoinWorkFlowIllustration" } },
        { heading: "Real world example", paragraphs: ["Alice owns 0.5 BTC and wants to send 0.1 BTC to Bob.", "She signs the transaction using her private key and broadcasts it to the Bitcoin network.", "Nodes check that the transaction follows Bitcoin's rules.", "Miners include valid transactions in a block and use computational work to compete to add it to the blockchain.", "After the block is accepted, Bob's transaction becomes part of Bitcoin's recorded history"] },
        { heading: "Why it Matters", paragraphs: [[{ text: "This combination of " }, { text: "cryptography, blockchain, nodes, mining, and consensus", emphasis: true }, { text: " allows Bitcoin to operate without a central authority maintaining the ledger." }], "Understanding this also explains why Bitcoin isn't simply \"money on the internet\" — there is an entire network working underneath it."] },
        { heading: "Common Mistakes", paragraphs: [[{ text: "\"Miners create Bitcoin whenever they want.\"", emphasis: true }], "No.", "Bitcoin's protocol defines how new bitcoin can be issued through the mining process, and the total supply is designed to be limited to 21 million BTC."] },
      ], relatedConcepts: [], goDeeper: { description: "Want to understand how money evolved into Bitcoin?", label: "Explore the lesson", href: "/lesson/lesson-foundation-1-1" },
    },
    {
      slug: "why-does-bitcoin-have-value", title: "Why does Bitcoin have value?",
      hero: { src: "/blog/bitcoin-value-hero.png", alt: "Bitcoin value factors" },
      summary: "Bitcoin's value comes from several factors working together, including its scarce supply, utility, network, security, and the willingness of people to buy, hold, and use it. Unlike a traditional currency, Bitcoin's value isn't based on a promise that you can exchange it for a fixed amount of gold or another commodity.",
      sections: [
        { heading: "The Simple Version", paragraphs: ["Think back to our first question:", [{ text: "What gives money its value?", emphasis: true }], "Trust. Scarcity. Utility. Acceptance.", "Bitcoin has some of these same characteristics, but in a very different system.", "Its supply is limited, it can be transferred globally through its network, and millions of people participate in the Bitcoin ecosystem.", "The more people who value and use the network, the more relevant the network can become."], illustration: { src: "/blog/bitcoin-value-simple.png", alt: "Bitcoin value network", className: "exchangeIllustration" } },
        { heading: "How it works", paragraphs: [[{ text: "Limited supply\n+\nUtility & portability\n+\nSecurity of the network\n+\nGrowing network of users & holders\n+\nMarket demand\n↓\nBitcoin's market value", emphasis: true }], "Bitcoin's price is ultimately determined by supply and demand in the market."], illustration: { src: "/blog/bitcoin-value-flow.png", alt: "Bitcoin value flow", className: "cryptoFlowIllustration" } },
        { heading: "Real world example", paragraphs: ["Imagine two digital assets.", [{ text: "Asset A:", emphasis: true }, { text: " There are billions of units, very few people use it, and there is little demand." }], [{ text: "Asset B:", emphasis: true }, { text: " Its supply is limited, a large global network supports it, people can transfer it without a traditional intermediary, and many people want to own it." }], "Even though both are digital, the second asset can command a much higher market value because people place greater value on its characteristics and network.", "Bitcoin's actual market price still changes constantly as supply and demand change."] },
        { heading: "Why it Matters", paragraphs: [[{ text: "Understanding Bitcoin's value helps separate " }, { text: "\"Bitcoin has value\"", emphasis: true }, { text: " from " }, { text: "\"Bitcoin's price will always go up.\"", emphasis: true }], "Those are completely different claims.", "Bitcoin can have properties that people value while its market price can still rise, fall, or experience extreme volatility"] },
        { heading: "Common Mistakes", paragraphs: [[{ text: "\"Bitcoin is valuable only because it's scarce.\"", emphasis: true }], "Scarcity alone doesn't create value.", "Something can be extremely rare and still be practically worthless.", "Bitcoin's scarcity is one part of the story. Demand, utility, security, network effects, and people's willingness to hold and use it also matter."] },
      ], relatedConcepts: [], goDeeper: { description: "Want to understand how money evolved into Bitcoin?", label: "Explore the lesson", href: "/lesson/lesson-foundation-1-1" },
    },
    {
      slug: "what-is-crypto-wallet", title: "What is Crypto Wallet?",
      hero: { src: "/blog/crypto-wallet-hero.png", alt: "Crypto wallet and keys" },
      summary: [{ text: "A crypto wallet is a tool that lets you " }, { text: "access, manage, and authorize transactions with your crypto. ", emphasis: true }, { text: "Your crypto itself isn't stored inside the wallet — ownership is recorded on the blockchain, while the wallet manages the keys that give you control over it." }],
      sections: [
        { heading: "The Simple Version", paragraphs: [[{ text: "Think of a crypto wallet like a " }, { text: "keychain", emphasis: true }, { text: ", not a physical wallet." }], "Your Bitcoin or other crypto exists on the blockchain. Your wallet holds the keys that let you prove you have the right to move that crypto.", [{ text: "So when you send crypto, the wallet uses your private key to " }, { text: "sign the transaction.", emphasis: true }]], illustration: { src: "/blog/crypto-wallet-simple.png", alt: "Wallet keychain", className: "exchangeIllustration" } },
        { heading: "How it works", paragraphs: [[{ text: "Crypto exists on the blockchain\n↓\nWallet manages your keys\n↓\nYou create a transaction\n↓\nPrivate key signs it\n↓\nNetwork verifies it\n↓\nBlockchain records the transaction", emphasis: true }]], illustration: { src: "/blog/crypto-wallet-flow.png", alt: "Crypto wallet transaction flow", className: "cryptoWalletFlowIllustration" } },
        { heading: "Real world example", paragraphs: ["Imagine you own 0.1 BTC.", "You don't have 0.1 BTC sitting inside an app like cash sitting inside a physical wallet. Instead, the Bitcoin blockchain records your balance.", "Your wallet gives you the tools and keys needed to access and control that Bitcoin"] },
        { heading: "Why it Matters", paragraphs: ["Your wallet is one of the most important parts of using crypto.", "If someone gets control of your private key or recovery phrase, they may be able to control your crypto.", [{ text: "That's why " }, { text: "wallet security is really about protecting your keys.", emphasis: true }]] },
        { heading: "Common Mistakes", paragraphs: [[{ text: "\"My crypto is stored inside my wallet.\"", emphasis: true }], "Not quite.", [{ text: "The " }, { text: "blockchain records the crypto,", emphasis: true }, { text: " while the wallet manages the keys that allow you to control it." }]] },
      ], relatedConcepts: [], goDeeper: { description: "Want to understand how money evolved into Bitcoin?", label: "Explore the lesson", href: "/lesson/lesson-foundation-1-1" },
    },
    {
      slug: "public-key-vs-private-key", title: "Public Key vs Private Key",
      hero: { src: "/blog/keys-hero.png", alt: "Public and private keys", className: "keysHero" },
      summary: [{ text: "A " }, { text: "public key", emphasis: true }, { text: " is used to help receive or identify crypto, while a " }, { text: "private key", emphasis: true }, { text: " is a secret that proves your authority to control the associated assets. The simplest rule to remember: " }, { text: "public information can be shared; your private key must stay private.", emphasis: true }],
      sections: [
        { heading: "The Simple Version", paragraphs: ["Think about your house.", [{ text: "Your " }, { text: "public key", emphasis: true }, { text: " is somewhat like information that helps people find or interact with your house." }], [{ text: "Your " }, { text: "private key", emphasis: true }, { text: " is like the secret key that proves you have control over it." }], "Anyone can know your public information.", "But if someone gets your private key, they may be able to control your crypto."], illustration: { src: "/blog/keys-simple.png", alt: "Public and private key house example", className: "exchangeIllustration" } },
        { heading: "How it works", paragraphs: [[{ text: "Private key\n↓\nUsed to create a digital signature\n↓\nNetwork verifies the signature using related public information\n↓\nTransaction can be accepted if it follows the network's rules", emphasis: true }], "Your public key can be used to derive a crypto address, which is the information you typically share when receiving funds"], illustration: { src: "/blog/keys-flow.png", alt: "Key signature flow", className: "keysFlowIllustration" } },
        { heading: "Real world example", paragraphs: ["Bob wants to send you Bitcoin.", "You give Bob your Bitcoin address.", "He doesn't need your private key to send you BTC.", "Later, when you want to move that Bitcoin, your wallet uses your private key to authorize the transaction.", "So:", [{ text: "Receiving crypto → share your address\nControlling/spending crypto → protect your private key", emphasis: true }]] },
        { heading: "Why it Matters", paragraphs: ["This is the foundation of crypto ownership.", "There is no bank employee you can call to approve a transaction for you. Your ability to control your assets depends heavily on keeping your private credentials secure."] },
        { heading: "Common Mistakes", paragraphs: [[{ text: "\"If someone knows my wallet address, they can steal my crypto.\"", emphasis: true }], "Knowing your address alone generally doesn't give someone the ability to spend your funds.", [{ text: "The critical secret is your " }, { text: "private key or recovery credentials.", emphasis: true }], "Never share your private key or seed phrase with anyone."] },
      ], relatedConcepts: [], goDeeper: { description: "Want to understand how money evolved into Bitcoin?", label: "Explore the lesson", href: "/lesson/lesson-foundation-1-1" },
    },
    {
      slug: "what-is-ethereum", title: "What is Ethereum?", hero: { src: "/blog/ethereum-hero.png", alt: "Ethereum blockchain" }, summary: "Ethereum is a decentralized blockchain network that allows people to transfer digital assets and run applications without relying on a central authority. Its native cryptocurrency is Ether (ETH), but Ethereum is much more than just a cryptocurrency.",
      sections: [
        { heading: "The Simple Version", paragraphs: ["Think of Bitcoin mainly as a network designed around digital value and payments.", "Ethereum takes the idea of a blockchain further.", "It provides a platform where developers can build programs that run on the blockchain. These programs are called smart contracts.", "That's why Ethereum is often described as a programmable blockchain."], illustration: { src: "/blog/ethereum-simple.png", alt: "Ethereum smart contracts", className: "exchangeIllustration" } },
        { heading: "How it works", paragraphs: [[{ text: "Ethereum blockchain\n↓\nSmart contracts run on the network\n↓\nDevelopers build applications\n↓\nUsers interact with those applications\n↓\nETH is used to pay network fees and interact with the ecosystem", emphasis: true }], "These applications can include decentralized exchanges, lending platforms, games, digital asset systems, and more."], illustration: { src: "/blog/ethereum-flow.png", alt: "Ethereum application flow", className: "cryptoFlowIllustration" } },
        { heading: "Real world example", paragraphs: ["Imagine a lending service where you normally need a bank to connect borrowers and lenders.", "On Ethereum, a smart contract can be programmed to handle certain lending rules automatically.", "Users interact with the application through the blockchain, while the smart contract executes according to its programmed conditions."] },
        { heading: "Why it Matters", paragraphs: ["Ethereum helped expand the idea of blockchain from simply transferring value to building applications on a decentralized network.", "This is the foundation for concepts such as DeFi, NFTs, DAOs, and many other Web3 applications."] },
        { heading: "Common Mistakes", paragraphs: [[{ text: "\"Ethereum and ETH are the same thing.\"", emphasis: true }], "They're related, but they're not the same.", "Ethereum is the blockchain network.", "ETH (Ether) is the native asset of that network.", "Think:", [{ text: "Ethereum = network\nETH = native asset", emphasis: true }]] },
      ], relatedConcepts: [], goDeeper: { description: "Want to understand how money evolved into Bitcoin?", label: "Explore the lesson", href: "/lesson/lesson-foundation-1-1" },
    },
    {
      slug: "what-is-defi", title: "What is DEFI?", hero: { src: "/blog/defi-hero.png", alt: "Decentralized finance" }, summary: "DeFi, short for Decentralized Finance, refers to financial services built using blockchain networks and smart contracts. The idea is to allow people to access activities such as trading, lending, and borrowing without relying entirely on traditional financial intermediaries.",
      sections: [
        { heading: "The Simple Version", paragraphs: ["Think about the financial services you already use.", "You might use a bank to save money, a lender to borrow, or an exchange to trade assets.", "DeFi tries to provide some of these functions through blockchain-based applications and smart contracts instead of traditional institutions.", "The rules are written into code and executed by the network."], illustration: { src: "/blog/defi-simple.png", alt: "DeFi applications", className: "exchangeIllustration" } },
        { heading: "How it works", paragraphs: [[{ text: "Blockchain\n↓\nSmart contracts\n↓\nDeFi application\n↓\nUser interacts with the application\n↓\nTransaction is executed according to programmed rules", emphasis: true }], "For example, a decentralized exchange can allow users to trade certain crypto assets directly through smart contracts."], illustration: { src: "/blog/defi-flow.png", alt: "DeFi transaction flow", className: "cryptoFlowIllustration" } },
        { heading: "Real world example", paragraphs: ["Imagine Alice has ETH and wants to exchange it for another crypto asset.", "Instead of placing the trade through a traditional centralized exchange, she can use a decentralized exchange built on a blockchain.", "She connects her wallet, selects the assets, confirms the transaction, and the smart contracts handle the transaction according to the protocol's rules."] },
        { heading: "Why it Matters", paragraphs: ["DeFi changes who and what performs financial functions.", "Instead of every financial service requiring a traditional intermediary, some functions can be handled by blockchain networks and smart contracts.", "It also allows financial applications to be open and programmable, although access, risks, fees, and available services vary between protocols and networks."] },
        { heading: "Common Mistakes", paragraphs: [[{ text: "\"DeFi means risk-free banking without banks.\"", emphasis: true }], "Definitely not.", "DeFi introduces different risks, including smart-contract vulnerabilities, scams, market volatility, liquidity risks, and irreversible transactions.", "Removing a traditional intermediary doesn't remove risk — it changes where the risks come from."] },
      ], relatedConcepts: [], goDeeper: { description: "Want to understand how money evolved into Bitcoin?", label: "Explore the lesson", href: "/lesson/lesson-foundation-1-1" },
    },
    {
      slug: "what-is-crypto-trading", title: "What is Crypto Trading?", hero: { src: "/blog/crypto-trading-hero.png", alt: "Crypto trading" }, summary: [{ text: "Crypto trading is the practice of buying and selling cryptocurrencies with the goal of benefiting from changes in their price. Unlike simply holding crypto as a long-term investment, trading generally focuses more on " }, { text: "shorter-term price movements and market opportunities.", emphasis: true }],
      sections: [
        { heading: "The Simple Version", paragraphs: ["Imagine Bitcoin is trading at ₹10 lakh.", "You believe the price could rise, so you buy.", "If it later reaches ₹10.5 lakh and you sell, the difference — after fees and other costs — is your potential profit.", "But the opposite can happen too.", "If Bitcoin falls to ₹9.5 lakh and you sell, you've taken a loss.", "That's the basic idea of trading:", [{ text: "Buy → Price moves → Sell", emphasis: true }], [{ text: "The difficult part is that " }, { text: "you don't know which way the price will move next.", emphasis: true }]], illustration: { src: "/blog/crypto-trading-simple.png", alt: "Crypto trading example", className: "exchangeIllustration" } },
        { heading: "How it works", paragraphs: [[{ text: "Choose an asset\n↓\nStudy the market\n↓\nCreate a trade setup\n↓\nDecide entry + stop-loss + target\n↓\nExecute the trade\n↓\nManage risk\n↓\nExit the position", emphasis: true }], "Traders may use different approaches, including technical analysis, fundamental analysis, market news, price action, and risk management."], illustration: { src: "/blog/crypto-trading-flow.png", alt: "Crypto trading process", className: "cryptoTradingFlowIllustration" } },
        { heading: "Real world example", paragraphs: ["Suppose ETH is trading at ₹2,00,000.", "You identify a setup and decide:", [{ text: "Entry", emphasis: true }, { text: ": ₹2,00,000\n" }, { text: "Target", emphasis: true }, { text: ": ₹2,10,000\n" }, { text: "Stop-loss: ", emphasis: true }, { text: "₹1,95,000" }], "If your target is reached, the trade makes a profit before fees.", "If your stop-loss is reached, you take a controlled loss.", [{ text: "The goal isn't to predict every move correctly. " }, { text: "Risk management is a core part of trading.", emphasis: true }]] },
        { heading: "Why it Matters", paragraphs: ["Crypto markets operate 24/7 and can experience large price movements.", "That creates trading opportunities, but it also creates significant risk.", [{ text: "Understanding the basics before using real money is important because " }, { text: "trading isn't the same as simply buying crypto and hoping its price rises.", emphasis: true }]] },
        { heading: "Common Mistakes", paragraphs: [[{ text: "\"Trading is just buying low and selling high.\"", emphasis: true }], "That's the simple version — but real trading involves much more.", "You need a defined setup, position sizing, risk management, an exit plan, and the discipline to follow them.", "And no strategy guarantees profits."] },
      ], relatedConcepts: [], goDeeper: { description: "Want to understand how money evolved into Bitcoin?", label: "Explore the lesson", href: "/lesson/lesson-foundation-1-1" },
    },
  ].map((article) => ({
    ...article,
    relatedConcepts: [
      { title: "Design systems and AI: Why MCP servers are the unlock", image: "/blog/related-concept-one.png", color: "#ed7c30", alt: "Illustration for Design systems and AI: Why MCP servers are the unlock" },
      { title: "4 ways we’re using our MCP server at Figma", image: "/blog/related-concept-two.png", color: "#feca04", alt: "Illustration for 4 ways we’re using our MCP server at Figma" },
      { title: "The TL;DR on MCP: Why context matters and how to put it to work", image: "/blog/related-concept-three.png", color: "#00a64f", alt: "Illustration for The TL;DR on MCP: Why context matters and how to put it to work" },
    ],
  })),
];

const RELATED_CONCEPTS_BY_SLUG: Record<string, readonly string[]> = {
  "what-gives-money-its-value": [
    "What Is Fiat Money",
    "What Is Cryptocurrency",
    "Why Does Bitcoin Have Value",
  ],
  "what-is-fiat-money": [
    "What Gives Money Its Value",
    "What Is Cryptocurrency",
    "What Is Bitcoin",
    "What Is Inflation",
  ],
  "what-is-cryptocurrency": [
    "What Is Blockchain",
    "What Is Bitcoin",
    "What Is a Crypto Wallet",
    "What Is Decentralization",
  ],
  "what-is-blockchain": [
    "How Does Blockchain Work",
    "What Is Bitcoin",
    "What Is a Cryptocurrency",
    "What Is a Node",
  ],
  "how-does-blockchain-work": [
    "What Is Blockchain",
    "What Is a Blockchain Node",
    "What Is Bitcoin Mining",
    "What Is Consensus",
  ],
  "what-is-bitcoin": [
    "How Does Bitcoin Work",
    "What Is Blockchain",
    "What Is a Crypto Wallet",
    "Why Does Bitcoin Have Value",
  ],
  "how-does-bitcoin-work": [
    "What Is Bitcoin",
    "What Is Blockchain",
    "What Is Bitcoin Mining",
    "What Is a Bitcoin Transaction",
    "What Is Proof of Work",
  ],
  "why-does-bitcoin-have-value": [
    "What Gives Money Its Value",
    "What Is Bitcoin",
    "What Is Bitcoin Mining",
    "What Is Bitcoin Halving",
    "What Is Market Cap",
  ],
  "what-is-crypto-wallet": [
    "Public Key vs Private Key",
    "What Is a Crypto Address",
    "What Is a Seed Phrase",
    "Hot Wallet vs Cold Wallet",
    "What Is Self-Custody",
  ],
  "public-key-vs-private-key": [
    "What Is a Crypto Wallet",
    "What Is a Crypto Address",
    "What Is a Seed Phrase",
    "What Is Self-Custody",
    "Hot Wallet vs Cold Wallet",
  ],
  "what-is-ethereum": [
    "What Is Blockchain",
    "What Is a Smart Contract",
    "What Is DeFi",
    "What Is ETH",
    "What Are Gas Fees",
  ],
  "what-is-defi": [
    "What Is Ethereum",
    "What Is a Smart Contract",
    "What Is a Decentralized Exchange",
    "What Is a Crypto Wallet",
    "What Are Liquidity Pools",
  ],
  "what-is-crypto-trading": [
    "What Is Technical Analysis",
    "What Are Support and Resistance",
    "What Is a Stop-Loss",
    "What Is Risk Management",
    "Trading vs Investing",
  ],
};

const RELATED_ARTICLE_ALIASES: Record<string, string> = {
  "how does bitcoin work": "how does bitcoin works",
};

function normalizeRelatedConcept(title: string) {
  return title
    .toLowerCase()
    .replace(/[?.,!]/g, "")
    .replace(/^(what is|what are|how does)\s+/, "")
    .replace(/\ba\s+/g, "")
    .trim();
}

export function getRelatedBlogArticles(article: BlogArticleData) {
  return (RELATED_CONCEPTS_BY_SLUG[article.slug] ?? [])
    .map((concept) => {
      const normalizedConcept = normalizeRelatedConcept(concept);
      const aliasedConcept = RELATED_ARTICLE_ALIASES[normalizedConcept] ?? normalizedConcept;

      return BLOG_ARTICLES.find(
        (candidate) => normalizeRelatedConcept(candidate.title) === aliasedConcept,
      );
    })
    .filter((related): related is BlogArticleData =>
      Boolean(related && related.slug !== article.slug),
    )
    .slice(0, 3);
}

export function getBlogArticle(slug: string): BlogArticleData | undefined {
  return BLOG_ARTICLES.find((article) => article.slug === slug);
}

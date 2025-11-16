class ScenarioData {
    constructor() {
        this.scenarios = [{
            // I KNOW THIS LOOKS UGLY BUT IT'S JUST DATA :(
            id: 1,
            title: "The 50/50 Split",
            situation: "You and your friend from college have been working on a project together for a couple months. You're both equally passionate and have contributed about the same in terms of workload. You're just about ready to formalize the company structure, and your friend suggests a 50/50 equity structure.",
            question: "What do you do?",
            options: [{
                text: "Accept the 50/50 split, it's only fair right?",
                healthImpact: -2.5,
                reasoning: "This is the most common mistake. A 50/50 split creates fertile ground for deadlock. When you and your co-founder disagree on critical decisions (hiring, pivoting, funding terms), there's no tiebreaker. If a duumvirate could break the Roman Empire apart, it won't spare your startup either."
            }, {
                text: "Propose a 51/49 split with the larger share going to the CEO",
                healthImpact: 0,
                reasoning: "This is the optimal choice. While it might feel uncomfortable, it solves a critical structural problem. The 51/49 split prevents deadlock while maintaining the spirit of equality. Combined with documented governance principles about who has final say in their domains, this creates a sustainable decision-making structure.",
                isCorrect: true
            }, {
                text: "Bring in a 3rd founder to split it 33/33/34",
                healthImpact: -1.0,
                reasoning: "This solves the deadlock problem but creates new issues. You've significantly diluted everyone's equity, added complexity to decision-making, and you'll need to find someone who truly adds complementary value. It's not the worst choice, but it's unnecessarily complicated."
            }, {
                text: "Suggest keeping it 50/50 but flip coins when there's a disagreement",
                healthImpact: -3.0,
                reasoning: "Major decisions should never be left to chance. You're building a company, not playing a game. This approach shows poor judgment and will frighten away serious investors. Flipping coins for decisions like hiring, pivoting, or accepting funding terms is organizational suicide."
            }]
        }, {
            id: 2,
            title: "Early Departure",
            situation: "6 months into your startup, your co-founder who owns 40% of the company gets an unbeatable offer from a Magnificent 7 company. They're burnt out and considering taking it. You've never implemented a vesting schedule because 'we all trust each other.' If they leave, they keep their full 40% equity.",
            question: "What should you have done from week one?",
            options: [{
                text: "Nothing, trust is more important than a contract. Negotiate a buyback when they leave.",
                healthImpact: -2.0,
                reasoning: "Trust doesn't pay the bills or protect equity. Buying back 40% equity is expensive and painful, potentially requiring hundreds of thousands of euros. This approach shows naivety about business fundamentals and will make future investors very nervous about your judgment."
            }, {
                text: "Implement a vesting schedule with a set cliff for all founders",
                healthImpact: 0,
                reasoning: "This is industry standard for good reason. A 4-year vesting schedule with a 1-year cliff means your co-founder earns their equity over time. If they leave at 6 months, they get nothing. After 1 year, they'd have 10% vested, then earn the rest monthly. This protects everyone and is a sign of professional management, not distrust.",
                isCorrect: true
            }, {
                text: "Make everyone sign non-compete agreements",
                healthImpact: -1.5,
                reasoning: "Non-competes address a different problem (competition) but don't solve the equity issue. Your co-founder could become a janitor or work in a different industry and still hold 40% of your company. This is overly restrictive and doesn't protect your equity structure."
            }, {
                text: "Hold all equity under your name",
                healthImpact: -2.5,
                reasoning: "This isn't legally sound, destroys trust, and is logistically difficult. No serious co-founder would accept this arrangement, and it shows fundamental misunderstanding of equity structures. You'd never attract quality talent with this approach."
            }]
        }, {
            id: 3,
            title: "Burnout Warning",
            situation: "10 months into your startup, you're working 70-80 hour weeks. You're so close to your MVP being done, but you've sacrificed exercise, proper eating, and your social life. Your partner mentioned you seem 'different lately.' You have a crucial investor meeting in 2 weeks.",
            question: "What do you do?",
            options: [{
                text: "Push through, you're almost at the end anyway. You can start relaxing after this meeting.",
                healthImpact: -1.5,
                reasoning: "This is the gambler's fallacy, there's always 'one more thing' before you can rest. Month 10 burnout kills more companies than bad ideas. You're at the exact danger point. Pushing through might get you to the meeting, but you'll crash afterwards, possibly right when you need to execute on what the investor wants."
            }, {
                text: "Take the weekend off, implement structured 'office hours' with an 8-hour daily maximum",
                healthImpact: 0,
                reasoning: "This recognizes the danger while not derailing crucial opportunities. Taking one weekend won't hurt your investor prep, and implementing sustainable work practices now will carry you through the next several years. You have no employment protections, you must self-impose discipline. This is building protections for future you.",
                isCorrect: true
            }, {
                text: "Hire a consultant to take some work off your plate",
                healthImpact: -1.0,
                reasoning: "If you're pre-revenue, this is financially impractical. Even if you have the money, hiring and managing someone while burned out is counterproductive. You'll spend mental energy onboarding them when you should be recovering. Plus, consultants can't take over your core responsibilities for an investor meeting."
            }, {
                text: "Reschedule the meeting and take the rest of the month off",
                healthImpact: -2.0,
                reasoning: "This delays a crucial opportunity and signals poor time management to the investor. It also doesn't solve the underlying problem, it creates boom-and-bust cycles of work and burnout. You'll return to the same 80-hour weeks and crash again in a few months."
            }]
        }, {
            id: 4,
            title: "Hiring Your First Developer",
            situation: "You're hiring a full-stack developer. Candidate A is your former roommate, solid dev, you work great together, would pass the 'beer test,' excited about your vision. Candidate B is someone you met at a mixer, stronger in areas where you're weak, has worked at two startups before, but they're more reserved and you're not sure about culture fit.",
            question: "Who do you hire?",
            options: [{
                text: "Candidate A, if you can trust them to keep the kitchen clean, you can trust them with your codebase. Culture matters most.",
                healthImpact: -1.0,
                reasoning: "The 'beer test' is actually a bad hiring practice, it leads to homogeneous teams. Mixing friendship with work is risky, and you're not addressing skill gaps. From an investor's perspective, they want a well-oiled machine, not a group of friends. Your first 5-10 employees determine your culture forever."
            }, {
                text: "Candidate B, their skills complement yours, they know startup life, and reserved doesn't mean bad culture fit",
                healthImpact: 0,
                reasoning: "This is the professional choice. Complementary skills mean you can focus on what you do best. Their startup experience means they understand the pressure and pace. Being 'reserved' isn't a culture problem, it might be exactly what your culture needs. Look for people who can do what you can't, not people who are like you.",
                isCorrect: true
            }, {
                text: "Neither, keep looking for the perfect candidate",
                healthImpact: -1.5,
                reasoning: "Perfectionism you can't afford. Every week without this hire means you're doing their job instead of yours. Candidate B is strong, passing them up because they're not 'perfect' is letting the perfect be the enemy of the good. Time is your most valuable resource."
            }, {
                text: "Hire both part-time and see who works better",
                healthImpact: -2.0,
                reasoning: "This is prohibitively expensive and creates uncomfortable competition. You're wasting money, creating drama, and showing poor decision-making skills. Both candidates will feel the competition and likely perform worse or leave for environments where they're valued."
            }]
        }, {
            id: 5,
            title: "The Golden Cloud Deal",
            situation: "You need cloud infrastructure. BWS offers: €300 free credit year 1, 60% off year 2, then €3k/year pay-as-you-go. 15-page contract, 90-day cancellation notice, auto-renewal. BWS is famous for surprise charges and poor customer service. Alternative: Moogle Cloud at €1500/month, reliable but limited scaling. Your architecture is portable.",
            question: "What do you do?",
            options: [{
                text: "Sign BWS, you're pre-revenue and can't turn down free infrastructure! Switch later if needed.",
                healthImpact: -1.5,
                reasoning: "Classic vendor lock-in trap. You'll barely use €300 in year 1, but usage ramps up in year 2 when credits expire. Forgetting the 90-day cancellation means another year locked in. 'Switching later' rarely happens, you'll be too busy. Bad SaaS contracts burn months of runway."
            }, {
                text: "Decline BWS, go with Moogle Cloud for reliability",
                healthImpact: -1.0,
                reasoning: "This is overly cautious and expensive (€18k/year). While avoiding the trap is smart, you're burning runway on infrastructure when better options exist. The limited scaling could become a bottleneck if you grow. There's a middle path you're missing."
            }, {
                text: "Put a lawyer on retainer, have them review and negotiate: clear exit terms, 30-day cancellation, no auto-renewal",
                healthImpact: 0,
                reasoning: "This is the professional approach. The contract's true value (€3k+/year after year 2) justifies legal review. Get clear exit terms, reduce cancellation to 30 days, remove auto-renewal, ensure portability. A lawyer costs €2-5k but protects months of runway. There's never such a thing as a free lunch.",
                isCorrect: true
            }, {
                text: "Use on-premises server infrastructure instead",
                healthImpact: -2.5,
                reasoning: "This is prohibitively expensive for a pre-revenue startup. You'd need to buy hardware, maintain it, handle security, manage backups, and have space for it. This diverts focus from your actual product to IT infrastructure. Cloud exists for a reason, use it wisely, just not recklessly."
            }]
        }, {
            id: 6,
            title: "The Technical Debt Dilemma",
            situation: "Your MVP is working but the code is messy. You have three paying customers asking for new features. Your technical co-founder wants to spend 3 weeks refactoring everything before adding features. Your business co-founder wants to ship new features immediately to keep customers happy and attract investors.",
            question: "What's your approach?",
            options: [{
                text: "Refactor everything now, clean code is critical for scaling later",
                healthImpact: -1.5,
                reasoning: "This is premature optimization. You have 3 paying customers, you're still validating product-market fit. Three weeks of refactoring while customers wait could mean losing them. Technical perfection doesn't matter if you have no customers. Refactor when technical debt actually blocks progress."
            }, {
                text: "Ship features immediately, you can always refactor later",
                healthImpact: -2.0,
                reasoning: "'Later' never comes. This creates a snowball effect where each new feature makes the codebase worse, until eventually you're building on quicksand. You'll reach a point where simple changes take weeks because everything is tangled. This is how codebases become unmaintainable."
            }, {
                text: "Spend 1 week on critical refactoring that unblocks feature development, then ship features while scheduling ongoing refactoring time (20% of each sprint)",
                healthImpact: 0,
                reasoning: "This balances short-term needs with long-term sustainability. One week of targeted refactoring removes immediate blockers without making customers wait too long. The 20% ongoing refactoring time (one day per week) prevents technical debt from accumulating. This shows mature engineering judgment.",
                isCorrect: true
            }, {
                text: "Hire another developer to handle refactoring while the current team ships features",
                healthImpact: -1.0,
                reasoning: "If you can afford it, this sounds ideal, but it's inefficient. A new developer needs weeks to understand your codebase before they can refactor it effectively. Refactoring requires deep system knowledge. You'd pay someone to learn for weeks, then refactor code they didn't write. Use your existing team smarter."
            }]
        }, {
            id: 7,
            title: "The Pivot or Persevere",
            situation: "Six months in, you have 50 users but only 3 are paying. User feedback suggests they want a completely different product than what you're building. Your technical co-founder wants to pivot immediately. You have 6 months of runway left. A potential investor said they like your current direction but won't commit without traction.",
            question: "What do you do?",
            options: [{
                text: "Pivot immediately, the market has spoken",
                healthImpact: -1.5,
                reasoning: "This is too reactive. 50 users is a tiny sample size. You're throwing away 6 months of work and market learning based on limited feedback. Pivots are expensive, they reset your progress and burn runway. You need stronger signal than 50 users before such a drastic change."
            }, {
                text: "Ignore the feedback and persevere, your vision is right, they just don't see it yet",
                healthImpact: -2.5,
                reasoning: "This is founder delusion. The market doesn't care about your vision if it doesn't solve real problems. Your 6% conversion rate (3/50) screams that something is wrong. Ignoring user feedback while burning runway is how startups die. Pride is expensive."
            }, {
                text: "Spend 2 weeks deeply interviewing your 3 paying customers and 10 non-paying users. Understand what problem they're actually trying to solve, then decide pivot vs iterate",
                healthImpact: 0,
                reasoning: "This is the Lean Startup approach. Your paying customers chose to pay, they're your gold mine of insight. Deep customer development will reveal whether you need a full pivot or just iteration. Two weeks of research could save months of wrong direction. Make data-informed decisions, not guesses.",
                isCorrect: true
            }, {
                text: "Build both products simultaneously to see which one works",
                healthImpact: -2.0,
                reasoning: "You can't serve two masters. This splits your focus, doubles your engineering effort, and confuses your market positioning. With 6 months of runway, you can't afford to dilute your efforts. Startups die from doing too many things poorly, not from focused execution on one thing."
            }]
        }, {
            id: 8,
            title: "The Salary Question",
            situation: "You've been working unpaid for 8 months. You just closed a €150k pre-seed round. Your co-founder suggests you both take €50k/year salaries and use the remaining €50k for other expenses. You could survive on €35k/year. Your runway calculations show €50k each gives you 18 months of runway.",
            question: "How do you handle salaries?",
            options: [{
                text: "Take the €50k each, you've earned it and need to live",
                healthImpact: -1.5,
                reasoning: "This shortens your runway to 18 months. Startups typically take 18-24 months to show significant traction. You're gambling that you'll raise your Series A right when your money runs out. That's optimistic and dangerous. Runway is life, extend it when you can."
            }, {
                text: "Take no salary, keep the full €150k for business expenses",
                healthImpact: -2.0,
                reasoning: "This is unsustainable. You can't work for free forever, you need to pay rent and eat. This approach leads to burnout, poor decision-making from financial stress, and potentially having to take a job mid-startup. It also signals to investors that you don't value your own work."
            }, {
                text: "Take €35k each, the minimum you need to survive. This extends runway to 26 months and gives €80k for growth",
                healthImpact: 0,
                reasoning: "This maximizes optionality. An extra 8 months of runway means more time to achieve milestones before your next raise. €80k for growth expenses (hiring, marketing, infrastructure) accelerates progress. You're paid enough to focus full-time without financial stress. This shows discipline investors respect.",
                isCorrect: true
            }, {
                text: "Pay yourself €50k but keep your co-founder at €35k since you're CEO",
                healthImpact: -3.0,
                reasoning: "This destroys trust and creates resentment. Unless there's a massive difference in experience or you agreed to this upfront, unequal salaries poison team dynamics. Your co-founder will feel undervalued and may leave or disengage. Team cohesion is more valuable than €15k."
            }]
        }, {
            id: 9,
            title: "The Investor's Conditions",
            situation: "An angel investor offers €200k for 20% equity. However, they want: board seat, veto power on major decisions (hiring execs, raising money, pivoting), and a 2x liquidation preference. They're well-connected and could open doors. You have 3 months of runway left and no other offers.",
            question: "What do you do?",
            options: [{
                text: "Accept all terms, €200k and connections are worth it",
                healthImpact: -2.5,
                reasoning: "This is a desperation move. Veto power means they control your company, you need their permission for every major decision. 2x liquidation preference means if you sell for €2M, they get €400k before anyone else. These terms are predatory. Desperate money is expensive money."
            }, {
                text: "Reject the offer and try to extend your runway by cutting costs drastically",
                healthImpact: -1.5,
                reasoning: "With 3 months left, this is risky but might work. However, if you can't find better terms quickly, you'll be even more desperate next month. This buys time but doesn't solve the fundamental problem. You need money, and you need it soon."
            }, {
                text: "Counter-offer: Accept the €200k and 20% equity, board observer seat (not voting), no veto power, 1x liquidation preference. If they decline, try to negotiate a bridge loan while seeking other investors",
                healthImpact: 0,
                reasoning: "This shows negotiation skill under pressure. Board observer gives them visibility without control. 1x liquidation preference is standard. If they decline, propose a bridge loan (converts to equity at better terms later) to buy time for better offers. Even desperate, you have some leverage, they made an offer, so they see value.",
                isCorrect: true
            }, {
                text: "Accept the money but plan to raise a larger round in 6 months to dilute their control",
                healthImpact: -2.0,
                reasoning: "This is naive and dangerous. Their veto power means they must approve your next fundraise, they could block it to maintain control. Investors talk to each other, future investors will see these terms and worry about your judgment. You can't out-maneuver bad terms with wishful thinking."
            }]
        }, {
            id: 10,
            title: "The Success Trap",
            situation: "Your product took off! You have 5,000 users and €50k MRR. A potential client wants a custom enterprise version for €500k/year but needs features that would take 4 months to build and pull engineers from your core product. Your current growth is 20% month-over-month. VCs are starting to reach out.",
            question: "What do you do?",
            options: [{
                text: "Take the enterprise deal, €500k/year is too good to pass up",
                healthImpact: -1.5,
                reasoning: "This is the 'success trap.' Four months of engineering time could slow your core product's growth from 20% MoM to single digits. By month 4, you'd have ~€200k from the enterprise client but potentially lost €400k+ from slowed core growth. You're trading momentum for a single customer. VCs invest in growth, not services."
            }, {
                text: "Reject the enterprise deal and focus on core product growth",
                healthImpact: 0,
                reasoning: "This maintains momentum during your critical growth phase. At 20% MoM growth with €50k MRR, you're approaching €150k MRR in 6 months, a strong position for Series A. VCs value growth rate over revenue. One enterprise customer doesn't validate your market; 5,000+ users do. Stay focused on what's working.",
                isCorrect: true
            }, {
                text: "Hire an enterprise team specifically for custom work",
                healthImpact: -1.0,
                reasoning: "This sounds smart but splits your focus. You're creating two products: your core platform and a services business. Each needs different sales, support, and product approaches. With VCs reaching out, they want to see focus and scalability, services work is neither. Save this for post-Series A when you have resources."
            }, {
                text: "Accept the deal but tell the client it'll take 8 months to set proper expectations",
                healthImpact: -2.0,
                reasoning: "This is the worst of both worlds. You're still pulling resources from core product (just slower), and you've likely lost the deal, enterprise clients won't wait 8 months. You look indecisive and unable to execute. Plus, you're still building a services business. Learn to say 'no' to opportunities that don't align with your strategy."
            }]
        }];
    }

    getScenario(index) {
        return index >= 0 && index < this.scenarios.length ? this.scenarios[index] : null;
    }

    getScenarioCount() {
        return this.scenarios.length;
    }
}

export default ScenarioData;


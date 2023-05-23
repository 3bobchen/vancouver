import * as React from "react";

import Layout from "../../components/layout";
import Seo from "../../components/seo";
import * as styles from "../../styles/index.module.css";

const SecondPage = () => {

  return (
    <Layout>
      <h1 style={{ textAlign: "center", margin: "5rem 0 2rem 0", fontFamily: "Unna" }}>
        Could an Artificially Intelligent Device Practise as a Barrister in NSW?</h1>
      <p style={{
        fontFamily: "serif",
        maxWidth: "100%",
        padding: "0 5rem",
        fontSize: "1.3rem",
        textAlign: "center",
        marginBottom: "3rem"
      }}>
        JARROD LI, STEPHANIE TONG, and BOB CHEN
      </p>
      <div style={{ display: "flex", flexDirection: "column", gap: "10vh", marginBottom: "10vh" }}>
        <div className={styles.pad} style={{ maxWidth: "1000px", margin: "auto", width: "100%" }}>
          <br />
          <h2 style={{ textAlign: "center", margin: "3vh 0", fontFamily: "serif", fontWeight: "normal" }}>
            I INTRODUCTION
          </h2>
          <p className={styles.reader_p}>
            Artificial Intelligence (‘AI’) has undoubtedly made great strides in the legal field over the past decade.
            Despite these technical breakthroughs, debate continues to surround the claim that AI can adequately
            replicate the various roles of counsel in Australia. A barrister’s skill does not lie solely in their
            mastery of crafting submissions and traversing law reports–instead, their role ranges anywhere from advocate
            to advisor to perhaps mediator on occasion.<a href={"#1"}>[1]</a> Additionally, NSW barristers must observe a set of
            statutorily defined prescriptions, which embody their independence, professionalism, impartiality, and
            overriding duty to the administration of justice.<a href={"#2"}>[2]</a> We argue that, at least presently, an AI device cannot
            receive a “call to the bar” because technological and cultural challenges prevent it from adequately
            embodying a barrister’s roles and values as advocates and advisors.<a href={"#3"}>[3]</a>
          </p>
          <h2 style={{ textAlign: "center", margin: "3vh 0", fontFamily: "serif", fontWeight: "normal" }}>
            II ADVOCACY
          </h2>
          <p className={styles.reader_p}>
            From a technical perspective, a barrister’s role as an advocate can feasibly be modelled as a product of
            natural language processing (‘NLP’) techniques, with data sourced from transcripts of oral arguments,
            submissions, and extralegal literature. In essence, it would be possible for an AI to model the behaviour of
            an advocate after “training” or “learning” from data that is representative of the typical legal activity of
            a barrister.<a href={"#4"}>[4]</a> However, the use of NLP in advocacy is problematic. This is because the quality of an AI
            system is heavily correlated with the quality of its training data. It necessarily follows that AI works
            best with structured and routine tasks where large amounts of high quality and consistent data is available.
            Accordingly, there has been demonstrated use of AI in the legal field in these areas–see, e.g., document
            review and discovery.<a href={"#5"}>[5]</a> That said, advocacy is far less structured and routine, raising a number of issues.
          </p>

          <p className={styles.reader_p}>
            First, the law is rapidly evolving in response to technological developments, as is clear from its frequent
            application to novel fields and modern industries. For example, consider advances in intellectual
            property,<a href={"#6"}>[6]</a> cybersecurity,<a href={"#7"}>[7]</a> and defamation,<a href={"#8"}>[8]</a> as among the fore of this cursory discussion. It is
            practically impossible for an AI device to advocate in these areas, as pre-existing data is lacking.<a href={"#9"}>[9]</a> A
            similar issue arises from the amount of unstructured and unpredictable human interaction that occurs during
            advocacy.<a href={"#10"}>[10]</a> Accordingly, those who foresee AI as a replacement for counsel are sorely misled, given
            current AI models are unable to ingest data at the frequency and breadth demanded of both human barristers
            and legal institutions.<a href={"#11"}>[11]</a>
          </p>
          <p className={styles.reader_p}>
            Second, assuming a sufficiently large machine learning model were to exist, the quality of its output is
            largely dependent on the integrity of its training data. More precisely, ingesting data marked with human
            biases can instil discrimination into the AI system.<a href={"#12"}>[12]</a> This is a well-recorded phenomenon, and often
            highlights otherwise unknown human biases–e.g., the Amazon recruitment AI trained on existing workplace data
            highlighted systemic gender bias within the company after continuously rejecting female applicants.<a href={"#13"}>[13]</a> This
            problem is of particular concern within the law, given the well documented cognitive biases that exist in
            judicial decision-making and the legal profession at large.<a href={"#14"}>[14]</a> Consider, for example, the well documented
            racial biases that exist in assessing witness credibility.<a href={"#15"}>[15]</a>
          </p>
          <h2 style={{ textAlign: "center", margin: "3vh 0", fontFamily: "serif", fontWeight: "normal" }}>
            III ADVISORY
          </h2>
          <p className={styles.reader_p}>
            Barristers also play a significant advisory role. Without oversimplifying, this role encompasses the ability
            to lead litigation with the best interests of their clients in mind.<a href={"#16"}>[16]</a> One aspect of this role inevitably
            involves advising whether their clients have a reasonable prospect of success, for which AI has seen notable
            success in accurately predicting litigation outcomes. For example, “software such as Ravel Law and Lex
            Machina have collected and analysed massive amounts of data on judges and their decisions, producing
            data-driven statistical model[s] … that are often more accurate than human prediction.”.<a href={"#17"}>[17]</a> However, this
            is only one aspect of a barrister’s advisory role.
          </p>
          <p className={styles.reader_p}>
            Other aspects of advisory are structurally underpinned by the human experience. For example, a barrister’s
            ability to formulate legal opinions is key. However, these opinions involve determining what facts should be
            given weight, what details are relevant, and what opinions are credible, all of which are dependent on human
            instinct derived from their experience in the field. It is the wide-ranging variety of these perspectives
            that prompts courts to frequently acknowledge that “two reasonable minds may differ'' on the same issue.<a href={"#18"}>[18]</a>
            Additionally, when providing advice, barristers must possess the capacity to establish close relationships
            with their clients. It has been readily demonstrated that ‘relational skills were preferred over legal
            skills’<a href={"#19"}>[19]</a> by clients when seeking representation, and forming strong relationships is key in achieving
            better legal outcomes. Accordingly, it is clear that the advisory role of barristers unavoidably relies on
            human experiences that must be modelled in any “AI barrister” for it to adequately replace a human. This is
            problematic, as it is not yet technically feasible to accurately model the inherently complex and discursive
            aspects of human experience in AI. Simply put, attempts to model human emotions, biases, and perspectives
            suffer from the “curse of dimensionality”.<a href={"#20"}>[20]</a> While AI can be reasonably trained on a single skill, each
            additional skill that needs to be modelled adds dimensions of complexity. As there are many skills required
            to model the human experience, this quickly becomes inefficient and impractical.<a href={"#21"}>[21]</a>
          </p>
          <h2 style={{ textAlign: "center", margin: "3vh 0", fontFamily: "serif", fontWeight: "normal" }}>
            IV CONCLUSION
          </h2>
          <p className={styles.reader_p}>
            In conclusion, the current state of AI is unable to replicate the complexity of a barrister’s role in the
            NSW legal system. We therefore argue that AI devices cannot practice as a barrister in NSW. Although recent
            developments have seen AI continue to accelerate in speed and capability, many fundamental issues persist in
            preventing the systemic integration of AI into our legal system. We expect the next 5-10 years to be
            characterised by massive leaps in algorithmic and computational legal development, especially as
            collaboration continues to develop between the legal and computing disciplines. Moving forward, the
            evolution of an “AI barrister” will inevitably necessitate broad inquiries into the data, reasoning
            processes, biases, and prominence of higher level thinking skills underlying each developed solution.
          </p>

          <h2 style={{ textAlign: "center", margin: "3vh 0", fontFamily: "serif", fontWeight: "normal" }}>
            V ENDNOTES
          </h2>
          <p style={{
            textAlign: "start",
            fontFamily: "serif",
            maxWidth: "100%",
            padding: "0 5rem",
            fontSize: "1.3rem"
          }}>
            <span id={"1"}>
              [1] New South Wales Bar Association, ‘Using barristers’, What is a barrister? (Web Page, 14 September 2022).
            </span>
            <br /><span id={"2"}>[2] Legal Profession Uniform Conduct (Barristers) Rules 2015 (NSW) rr 3-4 (‘Barristers Rules’).</span>
            <br /><span id={"3"}>[3] [3] For previous work on this issue, see, eg, Geoffrey Nettle, ‘Technology and the law’ (2017) 13 Judicial Review 185; Tania Sourdin, ‘Judge v Robot? Artificial Intelligence and Judicial Decision-Making’ (2018) 41(4) University of New South Wales Law Journal 1114.
            </span><br /><span id={"4"}>[4] Michael Legg, ‘Artificial Intelligence and the Legal Profession: Becoming the AI-Enhanced Lawyer’ (2019) 38(2) University of Tasmania Law Review 34, 41.
            </span><br /><span id={"5"}>[5] Dana Remus and Frank Levy, ‘Can Robots be Lawyers? Computers, Lawyers and the Practice of Law’ (2017) 30(3) Georgetown Journal of Legal Ethics 501, 504.
            </span><br /><span id={"6"}>[6] Thaler v Commissioner of Patents [2021] FCA 879.
            </span><br /><span id={"7"}>[7] Australian Securities and Investments Commission v RI Advice Group Pty Ltd (2022) 160 ACSR 204.
            </span><br /><span id={"8"}>[8] [8] Google LLC v Defteros [2022] HCA 27.
            </span><br /><span id={"9"}>[9] Remus and Levy (n 5) 526.
            </span><br /><span id={"10"}>[10] Ibid 514.
            </span><br /><span id={"11"}>[11] Ted Goertzel, ‘The path to more general artificial intelligence’ (2014) 26(3) Journal of Experimental & Theoretical Artificial Intelligence 333, 351.
            </span><br /><span id={"12"}>[12] Felicity Bell et al., ‘Ai Decision-Making and the Courts. A guide for Judges, Tribunal Members and Court Administrators’ (Report, 2022) 13.
            </span><br /><span id={"13"}>[13] Ibid.
            </span><br /><span id={"14"}>[14] See generally, Australian Law Reform Commission, Without Fear or Favour: Judicial Impartiality and the Law on Bias (Report No 138, 2022).
            </span><br /><span id={"15"}>[15] See, eg, Andrew Elliot Carpenter, ‘Chambers v. Mississippi: The Hearsay Rule and Racial Evaluations of Credibility’ (2002) 8(1) Washington and Lee Journal of Civil Rights and Social Justice 15.
            </span><br /><span id={"16"}>[16] Barristers Rules (n 2) r 35.
            </span><br /><span id={"17"}>[17] See Xiao Liu et al., ‘Everything Has a Cause: Leveraging Causal Inference in Legal Text Analysis’ (Conference Paper, Proceedings of the 2021 Conference of the North American Chapter of the Association for Computational Linguistics: Human Language Technologies, June 2021).
            </span><br /><span id={"18"}>[18] For typical usage in a variety of contexts, see, eg, Betfair Pty Ltd v Racing New South Wales (2010) 189 FCR 356, [90]; Australian Broadcasting Corporation v SAWA Pty Ltd [2018] WASCA 29, [94]; R v Campbell [2005] VSCA 225, [45].
            </span><br /><span id={"19"}>[19] Marcus T Boccaccini and Stanley L Brodsky, ‘Attorney-Client Trust among Convicted Criminal Defendants: Preliminary Examination of the Attorney-Client Trust Scale’ (2002) 20(1) Behavioral Sciences & the Law 69.
            </span><br /><span id={"20"}>[20] See Francis Bach, ‘Breaking the Curse of Dimensionality with Convex Neural Networks’ (2017) 18(1) Journal of Machine Learning Research 1, 1-2.
          </span><br /><span id={"21"}>[21] See generally, Effat Jalaeian Zaferani, Mohammad Teshnehlab and Mansour Vali, ‘Automatic Personality Traits Perception Using Asymmetric Auto-encoder’ (2021) 9 IEEE Access 68596.</span>
          </p>
          <br /><br />
        </div>
      </div>
    </Layout>
  );
};
export const Head = () => <Seo
  title="Could an Artificially Intelligent Device Practise as a Barrister in NSW?" />;

export default SecondPage;

import AestheticsServicePageHeader from "../components/AestheticsServicePageHeader";
import ProcedureContainer from "../components/ProcedureContainer";
import { vaginalRejuvenation } from "../data";
const VaginalRejuvenation = () => {
  const { price } = vaginalRejuvenation;
  return (
    <>
      <AestheticsServicePageHeader title="Vaginal Rejuvenation with Votiva" />
      <div className="aestheticsPageBody">
        <p>
          Introducing Vaginal Rejuvenation, the innovative non-surgical approach
          to to vaginal tightening and reversing vaginal dryness. Whether you've
          recently gone through pregnancy or simply want to feel rejuvenated,
          this non-surgical approach is a safe, easy way to gain back control of
          your body.
          <br />
          With Vaginal Rejuvenation, you can enjoy restored vaginal tightness
          and less vaginal dryness and pain during sex. And it's not just about
          intimacy - Vaginal Rejuvenation also helps stop bladder leaks so you
          feel more confident in your day-to-day activities.
          <br /> This unique solution has helped countless people rediscover
          their inner confidence and power. Learn more about Vaginal
          Rejuvenation today—it could be the answer you've been searching for!
        </p>
        <h2 className="pageSubTitle">What does vaginal rejuventaion treat? </h2>
        <li>Vaginal rejuvenation significantly improves:</li>
        <ul>
          <li>Vaginal dryness</li>
          <li>Vaginal tightenss</li>
          <li>Urinary incontinence</li>
          <li>Pain during sex </li>
          <li>Bladder leaks</li>
          <li>Sexual sensation for patient and partner</li>
        </ul>
        <li>Treatments typically take less than 30 minutes to perform</li>
        <li>
          Many patients notice significant improvements within 1 to 2 days after
          treatment
        </li>
        <li>Results last up to 1 year</li>
        <h2 className="pageSubTitle">How does vaginal rejuvenation work?</h2>
        <p>
          Vaginal rejuvenation is the perfect choice for anyone looking to
          improve the appearance, health, and functionality of their vagina.
          This gentle procedure uses radiofrequency energy to tighten tissue and
          stimulate the production of collagen. Through this uniform RF heating,
          Votiva achieves the desired stimulation of elastin and collagen
          production and an increase in blood flow. When those three parameters
          are stimulated, the result is increased vaginal lubrication and
          elasticity, elimination of urinary incontinence, and tightening of the
          vaginal walls.
        </p>
        <h2 className="pageSubTitle">
          What Should I Expect During Treatment?{" "}
        </h2>
        <p>
          The treatment is painless and most women report a warm sensation
          during the process and compare the feeling to that of a hot stone
          massage. Some of them mention slight discomfort comparable to an
          annual gynecological exam when the probe is inserted into the vagina.
        </p>
        <ul>
          <li>
            First, ultrasound gel is applied to the head of the FormaV wand and
            is heated to 35 C.
          </li>
          <li>
            Next, the wand is inserted into the vaginal canal to measure its
            length and ensure precise and efficient treatment.
          </li>
          <li>
            The wand is then passed over the internal tissues from proximal to
            distal and is carefully rotated during treatment to allow the heat
            to be evenly distributed and to ensure symmetrical results.
          </li>
        </ul>
        <p>
          Each treatment session typically lasts 30 minutes, but the exact
          length of a Votiva treatment will ultimately depend on the specifics
          discussed during the consultation.
        </p>
        <h2 className="pageSubTitle">How quickly will I see results? </h2>
        <p>
          Patients can typically begin to see skin tightening improvements in
          the hours following treatment with results continuing to be seen in
          the coming weeks as additional collagen fibers are gradually
          stimulated and remodeled.
        </p>
        <h2 className="pageSubTitle">How much downtime? </h2>
        <p>
          There is little to no downtime and patients may resume their daily
          activities immediately after completing a Votiva treatment. The most
          reported side effects from some patients are that they may see slight
          redness in the treated area, which will subside within a few hours. It
          is advisable that patients wait approximately 1 week before having
          intercourse to allow for optimal healing.
        </p>
        <h2 className="pageSubTitle">Is Votiva safe? </h2>
        <p>
          The FormaV applicator is the only device that monitors the vaginal
          lining temperatures and cuts off the temperature and sustains the end
          point automatically during the treatment, preventing over-heating and
          burns, but also ensuring the best possible tightening .The sustained,
          gentle, non-painful heat results in remodeling of the vaginal mucosa
          and sub-mucosal tissues with increased tightening and mucosal
          secretions.
        </p>
        <h2 className="pageSubTitle">Am I a Good Candidate?</h2>
        <p>
          Votiva is a groundbreaking form of non-surgical vaginal rejuvenation
          that can tighten loose skin, improve vaginal aesthetics, and enhance
          satisfaction during intercourse. You may want to consider that Votiva
          procedure if your vagina and the surrounding muscles have altered and
          stretched due to aging, pregnancy, or weight loss.
          <br />A consultation with our team is the best way to determine if
          this treatment is a good fit for you and your goals. As a series of
          treatments may be necessary to achieve the best results, we can also
          help you develop your customized treatment plan.
        </p>
        <h2 className="pageSubTitle">Surgery vs. Votiva </h2>
        <p>
          Votiva is the first and only FDA approved device for vaginal
          rejuvenation and it is safe and effective for feminine concerns like:
          <ul>
            <li>Stress urinary incontinence</li>
            <li>Weakened pelvic muscles </li>
            <li>Decreased sensitivity and low blood flow </li>
            <li>Vaginal dryness and pain during intercourse </li>
            <li>
              Wrinkled appearance and loss of elasticity of the vulva and labia
            </li>
          </ul>
          In the past, traditional vaginal surgery was the only solution to
          address these unwanted effects, but technological advancements have
          led to exciting and effective non-surgical vaginal rejuvenation
          options that allow patients to avoid the surgical risks and downtime
          of vaginoplasty and labiaplasty.
        </p>
        <h2 className="pageSubTitle">Schedule Your Consultation!</h2>
        <p>
          Ready to explore your options for vaginal rejuvenation? Contact us
          today and schedule your consultation to learn more about Votiva! We
          are committed to helping you achieve your goals!
        </p>
      </div>
      <ProcedureContainer
        treatmentCost={price}
        treatmentLength="30 mins"
        treatmentSchedule="1-3 Sessions"
        downtime="None"
      />
    </>
  );
};

export default VaginalRejuvenation;

import React from 'react'
import '../Membership/Membership.css'

const Membership = () => {
  return (
    <div id='MembershipPlans' className='MembershipPlans'>
      <h1 id='MembershipPlanstitle'>Membership/Plans</h1>
      <div className='MembershipStart'>
        <h2 id='MembershipPlansHeading'>1. Basic Membership</h2>
        <div className='MembershipPlansContent'>
        <p id='Description' className='MembershipPlansDetails'>
          Description:<br/>
          Perfect for beginners or occasional gym-goers, the Basic<br/>
          Membership offers essential access to our fitness center with <br/>
          flexible hours and a focus on cardio and basic strength equipment.
        </p>
        <p id='Features' className='MembershipPlansDetails'>
          Features:<br/>
          Access to the gym during non-peak hours<br/>
          Cardio machines and basic strength equipment<br/>
          Access to showers and locker facilities<br/>
          Free personal assessment once a month<br/>
          10% discount on group classes<br/>
        </p>
        <p id='Price1' className='MembershipPlansDetails'>
          Price:<br/>
          <button id='PriceButton'>$20/month</button>
        </p>
        </div>
      </div>
      <div className='MembershipStart'>
        <h2 id='MembershipPlansHeading'>2. Standard Membership</h2>
        <div className='MembershipPlansContent'>
        <p id='Description' className='MembershipPlansDetails'>
          Description:<br/>
          Ideal for those looking to commit to a regular workout schedule<br/>
          the Standard Membership provides extended access to all gym<br/>
          equipment,group classes,and more personalized fitness experience.
        </p>
        <p id='Features' className='MembershipPlansDetails'>
          Features:<br/>
          Full access to the gym during all operating hours<br/>
          Unlimited access to cardio, strength, and free weight equipment<br/>
          Access to all group fitness classes, including yoga and cycling<br/>
          Monthly one-on-one session with a personal trainer<br/>
          Complimentary towel service<br/>
          15% discount on nutrition and wellness consultations<br/>
        </p>
        <p id='Price' className='MembershipPlansDetails'>
          Price:<br/>
          <button id='PriceButton'>$50/month</button>
        </p>
        </div>
      </div>
      <div className='MembershipStart'>
        <h2 id='MembershipPlansHeading'>3. Premium Membership</h2>
        <div className='MembershipPlansContent'>
        <p id='Description' className='MembershipPlansDetails'>
          Description:<br/>
          Our Premium Membership is tailored for those committed to<br/>
          a high-level fitness journey, offering full access to <br/>
          exclusive facilities, priority booking, and customized training plans.
        </p>
        <p id='Features' className='MembershipPlansDetails'>
          Features:<br/>
          Unlimited 24/7 access to all gym facilities<br/>
          Access to exclusive equipment and wellness lounges<br/>
          Unlimited group and specialty classes, including Pilates and HIIT<br/>
          Weekly one-on-one sessions with a personal trainer<br/>
          Personalized nutrition and fitness assessment<br/>
          20% discount on spa and wellness treatments<br/>
          Free guest passes each month<br/>
        </p>
        <p id='Price' className='MembershipPlansDetails'>
          Price:<br/>
          <button id='PriceButton'>$80/month</button>
        </p>
        </div>
      </div>
      <div className='MembershipStart'>
        <h2 id='MembershipPlansHeading'>4. VIP Membership</h2>
        <div className='MembershipPlansContent'>
        <p id='Description' className='MembershipPlansDetails'>
          Description:<br/>
          For the ultimate fitness experience, our VIP Membership offers<br/>
          complete access, personalized services, and exclusive perks.<br/>
          This package is designed for members who want to make fitness a lifestyle
        </p>
        <p id='Features' className='MembershipPlansDetails'>
          Features:<br/>
          All-inclusive, 24/7 gym and facility access<br/>
          Unlimited access to group classes, personal training, and wellness programs<br/>
          Dedicated VIP locker and priority booking for classes<br/>
          Access to private training sessions and wellness retreats<br/>
          Free access to spa facilities, including massages and sauna<br/>
          Personalized workout and nutrition plans with continuous updates<br/>
          Unlimited guest passes and priority customer service<br/>
        </p>
        <p id='Price' className='MembershipPlansDetails'>
          Price:<br/>
          <button id='PriceButton'>$150/month</button>
        </p>
        </div>
      </div>
    </div>
  )
}

export default Membership
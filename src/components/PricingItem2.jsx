// import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { setSubscriptionType, setModalType } from '../../actions';
import './PricingItem.css';
import _ from 'lodash';
// import utils from '../../utils';
// import plansLogo from '../../images/plans.png';
// import rapidLogo from '../../images/rapid-logo.png';
// import rapidLogoSmall from '../../images/rapid-logo-small.png';

const utils = {}

const ComparisonSection = props => {

	return <div className="comparison-type">
		<ComparisonRow text={_.startCase(props.type)}/>
		<ComparisonRow>
			<span>$</span>
			{/*`${utils.subscriptionTypes[props.type].price}`*/}
			<span>/mo</span>
		</ComparisonRow>
		<ComparisonRowIcon text="NFL, NBA, MLB, NHL, NCAAF, NCAAB"/>
		<ComparisonRowIcon text="Full league schedules"/>
		<ComparisonRowIcon text="Real-time scores" />
		<ComparisonRowIcon
			text="Current and opening betting odds"
			isNew={false}
		/>
		<ComparisonRowIcon
			text="Full odds movement history" 
			isNew={false}
			altIcon={props.type === "basic"}
		/>
    {/*!utils.noStandings && <ComparisonRowIcon text="Conference & division standings"/>*/}
		<ComparisonRow text={`${"5000".toLocaleString()} requests / month`}/>
		<ComparisonRow text={`${"5000".toLocaleString()} requests / second`}/>
		<ComparisonButton 
			amount={100 * 100}
			description="Premium Subscription"
			type={props.type}
		/>
	</div>
}

// const PricingItemOddsBoard = props => {

//   return <div className="comparison-type">
//     <ComparisonRow text={_.startCase(props.type)}/>
//     <ComparisonRow>
//       <span>$</span>
//       {69}
//       <span>/mo</span>
//     </ComparisonRow>
//     <ComparisonRowIcon text="NFL, NBA, MLB, NHL, NCAAF, NCAAB"/>
//     <ComparisonRowIcon text="Real-time score updates" />
//     <ComparisonRowIcon text="Upcoming schedules and game odds"/>
//     <ComparisonRowIcon text="League standings and rankings" />
//     <ComparisonRowIcon text="Game odds movement history" />
//     <DemoButton history={props.history} />
//   </div>
// }

export default ComparisonSection
// export { PricingItemOddsBoard }


const ComparisonRow = props => (
  <div className="comparison-row">{props.children}{props.text}</div>
)

const ComparisonRowIcon = props => (
  <div className={"comparison-row" + (props.altIcon ? " alt" :"")}>
    <i className={`icon ${props.altIcon ? "times": "check circle outline"}`}></i>
    <span className={props.highlight ? "highlight": ""} >{props.text}</span>
    {props.isNew && <em>NEW</em>}
  </div>
)


// const mapStateToProps = state => ({
//   user: state.user
// })

// const mapActionsToProps = {
//   setSubscriptionType: setSubscriptionType,
//   setModalType: setModalType
// }



// const DemoButton = props => {

//   const userSub = props.user.subscriptionType;
//   const defaultText = utils.rapidOnly ? "Get Started": "Start Today!"
//   const attributes = (() => {
//     switch(true) {
//       // case utils.signupLocked: return {
//       //   buttonText: "Coming Soon",
//       //   class: "",
//       //   disabled: true
//       // };
//       case userSub === props.type: return {
//         buttonText: "Current Plan",
//         class: "gray",
//         disabled: true
//       };
//       case userSub && utils.subscriptionTypes[userSub].index < utils.subscriptionTypes[props.type].index: return {
//         buttonText: "UPGRADE PLAN",
//         class: "gold"
//       };
//       case !!userSub: return {
//         buttonText: "Change Plan",
//         class: ""
//       };
//       default: return {
//         buttonText: defaultText,
//         class: ""
//       };
//     }
//   })();
//   const onClick = e => {
//     if (utils.rapidOnly) {
//       goToRapid(e);
//     } else {
//       props.setSubscriptionType(props.type.toLowerCase());
//       props.setModalType(props.user.subscriptionType ? "update_plan": "signup");
//     }
    
//   }

//   return (
  
//     <div className="comparison-row">
//         <button 
//           className="comparison-button demo"
//           onClick={() => props.history.push("/odds-board-demo")}
//         >
//           View Full Demo
//         </button>
//     </div>
//   )
// }


const ComparisonButton = props => {

  const userSub = props.subscriptionType;
  const defaultText = utils.rapidOnly ? "Get Started": "Start Today!"
  const attributes = (() => {
    switch(true) {
      // case utils.signupLocked: return {
      //   buttonText: "Coming Soon",
      //   class: "",
      //   disabled: true
      // };
      case userSub === props.type: return {
        buttonText: "Current Plan",
        class: "gray",
        disabled: true
      };
      case userSub && 0 < 1: return {
        buttonText: "UPGRADE PLAN",
        class: "gold"
      };
      case !!userSub: return {
        buttonText: "Change Plan",
        class: ""
      };
      default: return {
        buttonText: defaultText,
        class: ""
      };
    }
  })();
  const onClick = e => {
    if (utils.rapidOnly) {
      goToRapid(e);
    } else {
      props.setSubscriptionType(props.type.toLowerCase());
      props.setModalType(props.user.subscriptionType ? "update_plan": "signup");
    }
    
  }

  return (
  
    <div className="comparison-row">
        {props.user && <button 
          className={`comparison-button ${attributes.class || ""}`}
          disabled={attributes.disabled} 
          onClick={onClick}
        >
          {attributes.buttonText}
          {utils.rapidOnly && <img src={rapidLogoSmall} alt="rapid api logo" />}
        </button>}
    </div>
  )
}

function goToRapid(e) {
  e.preventDefault();
  window.open("https://rapidapi.com/SportspageFeeds/api/sportspage-feeds/pricing", "_blank")
}

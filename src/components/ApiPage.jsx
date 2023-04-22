import { createRef } from 'react'
// import ComparisonItem from './PricingItem'
import './ApiPage.css'
import _ from 'lodash';

import { pages } from './static/api-details'


function SidebarItem(props) {


	console.log(props)

	function scrollToRef() {
		props.bodyRef.current.scrollIntoView({
			behavior: "smooth"
		})
	}

	return <a href="#details" onClick={scrollToRef}>{props.name}</a>
}


function Sidebar(props) {

	const refs = props.refs

	console.log(refs)

	return <div className="sidebar">
		<SidebarItem bodyRef={refs["API Details"]} name="API Details" />
		<SidebarItem bodyRef={refs["Pricing"]} name="Pricing" />
		<SidebarItem bodyRef={refs["Documentation"]} name="Documentation" />
		{/*<a ref={refs["API Details"]} href="#details">API Details</a>*/}
		{/*<a ref={refs["Pricing"]} href="#pricing">Pricing</a>*/}
		{/*<a ref={refs["Documentation"]} href="#documentation">Documentation</a>*/}
		<a href="#quick-start">Quick Start</a>
	</div>
}


function CallsItem(props) {

	console.log(props)

	const period = {
		daily: "day",
		monthly: "mo"
	}[props.period]

	const endpoints = props.endpoints[props.calls[0]];

	console.log(endpoints)

	const excluded = endpoints.map(e => props.calls[1].excluded.includes(e));

	console.log(excluded)

	return <div className="pricing-requests-item">
		<div className="pricing-requests-item-header">
			<span>{`${_.startCase(props.calls[0])} Endpoints:`}</span>
			{`${props.calls[1].calls.toLocaleString()}/${period}`}
		</div>
		<ul className="endpoint-list">
			{endpoints.map((e,i) => <li key={i}>
				<i className="material-icons" style={{color: `${excluded[i] ? "#ff3333": "#0fc733"}`}}>
					{excluded[i] ? "close": "check"}
				</i>
				<span>{e}</span>
			</li>)}
		</ul>
	</div>
}


function PricingItem(props) {

	function goToRapid(e) {
		e.preventDefault();
		window.open(props.api.rapidUrl, "_blank")
	}

	// console.log(props)

	const endpoints = props.api.endpointGroups;

	return <div className="pricing-item card">
		<div className="pricing-top">
			<div className="pricing-item-header">{props.plan}</div>
			<div className="pricing-item-price">{props.price}<span>/mo</span></div>
		</div>
		<div className="pricing-item-requests">
			<div>Requests:</div>
			{/*!Array.isArray(props.calls) ? <CallsItem period={props.period} calls={props.calls} />:*/}
			{Object.entries(props.calls).map((c,i) => <CallsItem key={i} period={props.period} calls={c} endpoints={endpoints} />)}
		</div>
		<div className="pricing-rapid-prompt" style={{background: "black"}} onClick={goToRapid}>
			<img src="https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco,dpr_1/r1otclpsq54uempa8x4v"/>
			<span>Sign up on RapidAPI!</span>
		</div>
	</div>
}


function Pricing(props) {

	const api = pages[props.name]

	// console.log(props)
	// console.log(api)

	return <div className="api-pricing">
		{api.pricing.plans.map((p,i) => <PricingItem key={i} {...p} api={api} />)}
	</div>
}


function ApiPage(props) {

	// console.log(props)

	const api = pages[props.name];

	// console.log(api)

	const sidebarItems = ["API Details","Pricing","Documentation"];
	const refs = sidebarItems.reduce((obj,i) => ({ ...obj, [i]: createRef()}), {});

	console.log(refs)

	return <div>
		<Sidebar refs={refs} />
		<div className="content">
			<div className="api-top">
				<img src={api.src} />
				<div className="api-top-detail">
					<h1>{api.name}</h1>
					<div className="api-top-summary">{api.description}</div>
				</div>
			</div>
			<div className="api-content">
				<h5 ref={refs["API Details"]}>API Details:</h5>
				<ul>
					{/*api.bullets.map((b,i) => <li key={i}>{b}</li>)*/}
					{api.bullets.map((b,i) => <li key={i}>
						<i className="material-icons">check</i>
						<div>{b}</div>
					</li>)}
				</ul>
				{!!api.url ? <>
					<h5>Website</h5>
					<a target="_blank" href={api.url}>{api.url}</a>
				</>: <></>}
				<h5 ref={refs["Pricing"]}>Pricing</h5>
				<Pricing name={props.name} />
				<h5 ref={refs["Documentation"]}>Documentation</h5>
				{!!api.url ? <a target="_blank" href={api.documentationUrl}>{api.documentationUrl}</a>:
				<span>View the full documentation here: <span>Documentation</span></span>}
				<h5>Terms and Conditions</h5>
				{!!api.url ? <a target="_blank" href={api.termsUrl}>{api.termsUrl}</a>:
				<span>View the full terms and conditions here: <span>Terms and Conditions</span></span>}
				
				
				{/*<h5>Quick Start</h5>*/}
			</div>
			
		</div>
	</div>
}


export default ApiPage
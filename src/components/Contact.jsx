
import { FormEvent, useState } from "react"
import './Contact.css'


function Contact() {

	const [submitted, updateSubmit] = useState(false);
	const [formData, setData] = useState({
		name: "",
		email: "",
		api: "",
		message: ""
	});
	function updateFields(fields) {

		console.log(fields)
		console.log(Object.keys(fields))

		if (Object.keys(fields)[0] == "name") {
			console.log("hey")
			console.log(Object.keys(fields)[0] == "name" ? 1: 2)
		}

		setData(prev => {
			const update = { ...prev, ...fields }
			console.log(update)
			return update
		});
	}

	function onSubmit(e) {
		e.preventDefault();
		// next()
		updateSubmit(true)
	}


	return <div>
		<h1 className="contact-header">Contact</h1>
		{submitted ? 
			<div className="contact-submitted">
				<i class="material-icons">check</i>
				<div>Thank you for contacting Hummingbird APIs.  We will get back to you shortly.</div>
			</div>: 
			<form className="contact-form" onSubmit={e => onSubmit(e)} method="POST">
			    <div className="form-group">
			        <label htmlFor="name">Name</label>
			        <input type="text" className="form-control" value={formData.name} onChange={e => updateFields({ name: e.target.value })} />
			    </div>
			    <div className="form-group">
			        <label htmlFor="exampleInputEmail1">Email address</label>
			        <input type="email" className="form-control" aria-describedby="emailHelp" value={formData.email} onChange={e => updateFields({ email: e.target.value })} />
			    </div>
			    <div className="form-group">
			        <label htmlFor="exampleInputEmail1">API</label>
			        <select value={formData.api} onChange={e => updateFields({ api: e.target.value })}>
						<option value="" disabled="1">Select an API</option>
						<option value="options-analyzer">Options Analyzer Pro</option>
						<option value="sportspage">Sportspage Feeds</option>
						<option value="n/a">N/A</option>
				    </select>
			    </div>
			    <div className="form-group">
			        <label htmlFor="message">Message</label>
			        <textarea className="form-control" rows="5" value={formData.message} onChange={e => updateFields({ message: e.target.value })}></textarea>
			    </div>
			    <button type="submit" className="btn btn-primary">Submit</button>
			</form>
		}
	</div>
}


export default Contact
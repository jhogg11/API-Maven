

const terms = [
	{
		type: "header",
		text: `Terms and Conditions`
	},
	{
		type: "body",
		text: ``
	},
	{
		type: "header",
		text: ``
	},
	{
		type: "body",
		text: ``
	},
	{
		type: "header",
		text: ``
	},
	{
		type: "body",
		text: ``
	},
	{
		type: "header",
		text: ``
	},
	{
		type: "body",
		text: ``
	},

]


const privacy = [
	{
		type: "header",
		text: `Privacy Policy`
	},
	{
		type: "body",
		text: ``
	},
	{
		type: "header",
		text: ``
	},
	{
		type: "body",
		text: ``
	},
	{
		type: "header",
		text: ``
	},
	{
		type: "body",
		text: ``
	},
	{
		type: "header",
		text: ``
	},
	{
		type: "body",
		text: ``
	},

]



function Terms(props) {

	const body = props.type === "privacy-policy" ? privacy: terms;

	console.log(body)

	return <div>
		{body.map((b,i) => {
			console.log(b)
			if (b.type === "header") {
				return <h4 key={i}>{b.text}</h4>
			} else {
				return <div key={i}>{b.text}</div>
			}
		})}
	</div>
}


export default Terms

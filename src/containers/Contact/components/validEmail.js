export const validateEmail = async (email) => {
	const re =
		/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	const res = await fetch('https://email-validator-0.herokuapp.com/email-verify', {
		method: 'POST',
		body: JSON.stringify({ email: email }),
		mode: 'cors',
		headers: {
			'Access-Control-Allow-Origin': '*',
			'content-type': 'application/json',
		},
	});
	console.log(res);
	const json = await res.json();
	console.log(json.status);
	console.log(re.test(String(email).toLowerCase()));
	console.log(re.test(String(email).toLowerCase()) && json.status);
	return re.test(String(email).toLowerCase()) && json.status;
};

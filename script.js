const options = {
	kataHourActivities: ['converted my birth date into an array of Roman numerals and back', 'calculated the sum of all Prime Numbers under 3', 'busily ignored the katas and chatted to my tutor', 'stared at a blank vscode window whilst drinking my coffee', 'had to map an array without using map or arrays', 'had to make a FizzBuzz which outputted Fizz whenever it was a multiple of 3 and outputted Buzz on the heat death of the universe', 'had to make a FizzBuzz using only regular expressions', 'had to figure out how to exit vim'],
	lectureDescriptors: ['a wacky', 'a fascinating', 'a 3 hour long', 'an hilarious', 'an unprecedented'],
	lecturers: ['Alex', 'David', 'Jim', 'Sam', 'Haz', 'Izzy', 'Liam'],
	lecturerDescriptors: ['wore a hat even though it was 28 degrees', 'lost their mind when someone took an audible screenshot', 'came in full fancy dress', 'reminds me of a puppy', 'I think might have been in Backstreet Boyz'],
	lectureTopics: ['react', 'knex', 'http', 'SQL', 'postgres', 'css', 'html'],
	lectureTopicDescriptors: ['revolutionise the internet', 'take over the world like Skynet', 'be deathly dull', 'be a walk in the park', 'be my new favourite thing', 'be the new COBOL', 'usher in the age of linux desktop', 'take us back to the stone age', 'make America great again'],
	pairDescriptors: ['challenging', 'fun', 'entertaining', 'a struggle', 'awful', 'bliss'],
	pairPartners: ['was a rubber duck', 'was Hal from 2001: A Space Odyssey', 'only spoke in binary', 'was a reflection of myself in the mirror', 'said they’d never met a coding genius like me', 'was on a road trip the entire time', 'was having broadband issues and had to communicate in semaphore', 'spent two hours stuck in vim', 'lost control of their motion-activated standing desk']
}


const randomOption = (array) => {
	const length = array.length;
	const index = Math.floor(Math.random() * length)
	return array[index];	
}

const getRandomBlog = () => {
	const kataHourActivity = randomOption(options.kataHourActivities);
	const lectureDescriptor = randomOption(options.lectureDescriptors);
	const lecturer = randomOption(options.lecturers);
	const lecturerDescriptor = randomOption(options.lecturerDescriptors);
	const lectureTopic = randomOption(options.lectureTopics);
	const lectureTopicDescriptor = randomOption(options.lectureTopicDescriptors);
	const pairDescriptor = randomOption(options.pairDescriptors);
	const pairPartner = randomOption(options.pairPartners);

	const paragraphs = [
		`What a day at Northcoders! We started, as ususal with kata hour where I ${kataHourActivity}.`,
		`I then had ${lectureDescriptor} lecture by ${lecturer} who ${lecturerDescriptor}. It was on ${lectureTopic} - a technology I’ve never encountered before. It seems like it’s going to ${lectureTopicDescriptor} and I can’t wait to learn more!`,
		`In the afternoon we were pairing which was ${pairDescriptor} because my pair ${pairPartner}. We almost finished the sprint, but not quite.`,
		'It’s always an adventure at Northcoders. I can’t wait to do it all again tomorrow!'
	];
	return paragraphs;
}

let date = Date.now()

for (let i = 0; i < 20; i++) {
	const paragraphs = getRandomBlog();
	const post = document.createElement('article')
	const title = document.createElement('h2')
	date -= 86400e3
	if(new Date(date).getDay() === 0){
		date -= 2*86400e3
	}
	title.textContent = new Date(date).toLocaleDateString('en-GB', {weekday: 'long', day: 'numeric', month: 'long'});
	post.append(title);
	paragraphs.forEach((para) => {
		const p = document.createElement('p')
		p.textContent = para
		post.append(p);
	})
	document.getElementById('container').append(post)
}

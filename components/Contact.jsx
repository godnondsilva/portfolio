import {
	Anchor,
	ButtonContainer,
	ContactContainer,
	Form,
	Input,
	Text,
	TextArea,
	Title,
} from '../styles/Contact.styles';
import Button, { BUTTON_TYPES } from './Button';
import { useState } from 'react';
import { Fade } from 'react-awesome-reveal';
import { socials } from '../data/socials';
import { toast } from 'react-hot-toast';
import {
	validateEmail,
	validateMessage,
	validateName,
	validateSubject,
} from '../utils/validation';

const Contact = () => {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		subject: '',
		message: '',
	});

	const [errors, setErrors] = useState({
		name: false,
		email: false,
		subject: false,
		message: false,
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setErrors({
			...errors,
			[name]: false,
		});
		setFormData({
			...formData,
			[name]: value,
		});
	};

	const submit = (e) => {
		e.preventDefault();
		if (!validateName(formData.name)) {
			setErrors({
				...errors,
				name: true,
			});
			return toast.error('Please enter a valid name');
		}
		if (!validateEmail(formData.email)) {
			setErrors({
				...errors,
				email: true,
			});
			return toast.error('Please enter a valid email');
		}
		if (!validateSubject(formData.subject)) {
			setErrors({
				...errors,
				subject: true,
			});
			return toast.error('Please enter a subject');
		}
		if (!validateMessage(formData.message)) {
			setErrors({
				...errors,
				message: true,
			});
			return toast.error('Please enter a message');
		}

		toast.promise(
			fetch('/api/sendgrid', {
				body: JSON.stringify(formData),
				headers: {
					'Content-Type': 'application/json',
				},
				method: 'POST',
			}),
			{
				loading: 'Sending...',
				success: () => {
					setFormData({
						name: '',
						email: '',
						subject: '',
						message: '',
					});
					return "Thanks for reaching out! I'll get back to you soon!";
				},
				error: () => {
					return 'Could not send message, please try again later or email me instead.';
				},
			},
		);
	};

	return (
		<ContactContainer id='contact'>
			<Fade triggerOnce direction='up' cascade damping={0.1}>
				<Title>/ contact me</Title>
				<Text>
					Want to discuss a project, an idea, or an opportunity? Just fill this
					form up or write me an email!
				</Text>
			</Fade>
			<Form onSubmit={submit} noValidate>
				<Fade triggerOnce direction='up' cascade damping={0.1}>
					<Input
						type='text'
						name='name'
						value={formData.name}
						error={errors.name}
						onChange={handleChange}
						placeholder='Enter your name'
					/>
					<Input
						type='email'
						name='email'
						value={formData.email}
						error={errors.email}
						onChange={handleChange}
						placeholder='Enter your email'
					/>
					<Input
						type='text'
						name='subject'
						value={formData.subject}
						error={errors.subject}
						onChange={handleChange}
						placeholder='Enter a subject'
					/>
					<TextArea
						name='message'
						value={formData.message}
						error={errors.message}
						onChange={handleChange}
						placeholder='Enter a message'
					/>
					<ButtonContainer>
						<Button type='submit' btype={BUTTON_TYPES.PRIMARY}>
							Send
						</Button>
						<Anchor href={socials.mail}>
							<Button type='button' btype={BUTTON_TYPES.SECONDARY}>
								Send via mail
							</Button>
						</Anchor>
					</ButtonContainer>
				</Fade>
			</Form>
		</ContactContainer>
	);
};

export default Contact;

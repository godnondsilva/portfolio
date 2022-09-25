import { PrimaryButton, SecondaryButton } from '../styles/Button.styles.jsx';

export const BUTTON_TYPES = {
	PRIMARY: 'primary',
	SECONDARY: 'secondary',
};

const getButtonFromType = (btype) => {
	switch (btype) {
		case BUTTON_TYPES.PRIMARY:
			return PrimaryButton;
		case BUTTON_TYPES.SECONDARY:
			return SecondaryButton;
		default:
			return PrimaryButton;
	}
};

const Button = ({ as = 'button', type = 'submit', btype, children }) => {
	const ButtonType = getButtonFromType(btype);
	return (
		<ButtonType type={type} as={as}>
			{children}
		</ButtonType>
	);
};

export default Button;

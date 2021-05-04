import React from 'react';
interface BasicInputProps {
	id: string;
	type: string,
	disabled?: boolean
}


class BasicInput extends React.Component<BasicInputProps, {}> {

	constructor(props: BasicInputProps) {
		super(props);
	}

	public render(): JSX.Element {
		const { id, type, disabled } = this.props;

		return (
			<input id={id} type={type} className="inputBox" disabled={disabled} />
		);
	}

}

export default BasicInput;

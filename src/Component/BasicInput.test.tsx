import { mount, shallow } from "../setupTests";
import BasicInput from "./BasicInput";
import MockData from "./mockData.json";
import APICalls from "./ApiCalls";
import renderer from 'react-test-renderer';
import CheckboxWithLabel from "./CheckBox";

describe('Testing sum', () => {
	function sum(a: any, b: any) {
		return a + b;
	}
	it('Should equal 4', () => {
		expect(sum(2, 2)).toBe(4);
	})
});

describe('Test cases for Input Control', () => {
	const inputProps = {
		id: 'name',
		disabled: false,
		type: 'text'
	}
	it('Should render Input Control', () => {
		const wrapper = shallow(<BasicInput {...inputProps} />);
		expect(wrapper).toBeTruthy()
	});

	it('Render Two Input Control inside div', () => {
		const wrapper = mount(<div><BasicInput {...inputProps} /><BasicInput {...inputProps} /></div>);
		expect(wrapper.find('.inputBox')).toHaveLength(2);
	})
})

describe('Test cases for Mock Data', () => {

	it('Mockdata should have legth 3', () => {
		expect(MockData.data).toHaveLength(3)
	});

	it("Mockdata's second item name should be 'Floyd'", () => {
		expect(MockData.data[1].name).toEqual('Floyd')
	});
})

describe('Test cases for Asynchronous API call', () => {

	test('API response count should be equal aa 6', async () => {
		const data = await APICalls.fetchData();
		expect(data.data).toHaveLength(6);
	});

	test('API response data should be equal as expected', async () => {
		const data = await APICalls.fetchData();
		expect(data.data[0].last_name).toBe('Bluth');

		// await expect(fetchData()).resolves.toBe('peanut butter');
	});

})

describe('Snapshot Testing', () => {
	const inputProps = {
		id: 'name',
		disabled: false,
		type: 'text'
	}
	it('renders correctly', () => {
		const tree = renderer.create(<BasicInput {...inputProps} />).toJSON();
		expect(tree).toMatchSnapshot();
	});
})

describe('DOM Testing', () => {
	test('CheckboxWithLabel changes the text after click', () => {
		const checkbox = mount(<CheckboxWithLabel  />);

		expect(checkbox.text()).toEqual('labelOff');

		checkbox.find('input').simulate('change');

		expect(checkbox.text()).toEqual('labelOff');
	});
})
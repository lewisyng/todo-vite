// import { expect, test } from 'vitest';
import { render, screen, getByText } from '@testing-library/react';
import Button from './Button';

const renderText = 'Test';
const btnRender = () => render(<Button>{renderText}</Button>);

describe('Button test', () => {
    it('should display the text passed into it', () => {
        btnRender();
        expect(screen.getByText(renderText)).toBeDefined();
    });

    it('should have the correct background color', () => {
        render(<Button className="asdasd" form="outlined">Test</Button>);

        const btn = screen.getByRole('button');
        let style = window.getComputedStyle(btn!);
        console.log('btn', btn);
        console.log('style', style);
        expect(btn).toHaveClass('asdasd');
        expect(style.border).toBe('1px solid black');
        // expect(button).toHaveStyle("background: red")
    });
});
// test('loads and displays button', async () => {
//     const {container, getByText} = render(<Button>Test</Button>);

//     expect(getByText('Test')).toBeInTheDocument();
//     expect(container.firstChild).toMatchInlineSnapshot(`
//         <Button>Test</Button>
//     `)
// });

// test('Button displays correct text', () => {
//     const testText = 'Example text';
//     const component = renderer.create(<Button>Example text</Button>);
//     const tree = component.toJSON();

//     expect(tree).toMatchSnapshot();
//     expect(tree).toHaveProperty('type');

//     expect(tree.children).toBe('Example text');

// expect(tree).toMatchSnapshot({
//     children: 'Example text',
// });
// });

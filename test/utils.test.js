// IMPORT MODULES under test here:
import { getP, renderGoblin } from "../utils.js";

const test = QUnit.test;

test('test getP', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = `<p>Hello world</p>`;

    //Act
    // Call the function you're testing and set the result to a const
    const actual = getP('Hello world');

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});

test('test renderGoblin alive', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = `<div class="goblin"><p>Gorlog</p><p>😈</p><p>4</p></div>`;

    //Act
    // Call the function you're testing and set the result to a const
    const actual = renderGoblin({
        name: 'Gorlog',
        hp: 4,
    });

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});

test('test renderGoblin dead', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = `<div class="goblin"><p>Gorlog</p><p>💀</p><p>0</p></div>`
    //Act
    // Call the function you're testing and set the result to a const
    const actual = renderGoblin({
        name: 'Gorlog',
        hp: 0,
    });

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});

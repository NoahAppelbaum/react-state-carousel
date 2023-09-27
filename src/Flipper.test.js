import Flipper from "./Flipper";
import { render, fireEvent } from "@testing-library/react";

Math.random = jest.fn();

it("renders without crashing", function () {
  render(<Flipper />);
});

it("should match snapshot no coin", function () {
  const { container, debug } =
    render(<Flipper />);

  expect(container).toMatchSnapshot();
});

it("should match snapshot, heads coin", function () {
  Math.random.mockReturnValue(.9);
  const { container, debug } =
    render(<Flipper />);

  const button = container.querySelector("button");
  fireEvent.click(button);

  expect(container).toMatchSnapshot();
});

it("should count totals and display correct images", function () {
  Math.random
    .mockReturnValueOnce(0.25)
    .mockReturnValueOnce(0.75);

  const { container, debug } = render(<Flipper />);

  expect(container).toContainHTML(
    "Out of 0 flips, there have been 0 heads and 0 tails."
  );

  const button = container.querySelector("button");
  fireEvent.click(button);

  expect(container).toContainHTML(
    "Out of 1 flips, there have been 0 heads and 1 tails."
  );
  expect(
    container.querySelector('img[alt="tails"]')
  ).toBeInTheDocument();


  fireEvent.click(button);

  expect(container).toContainHTML(
    "Out of 2 flips, there have been 1 heads and 1 tails."
  );
  expect(
    container.querySelector('img[alt="heads"]')
  ).toBeInTheDocument();

});

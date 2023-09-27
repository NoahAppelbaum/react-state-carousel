import Coin from "./Coin";
import { render } from "@testing-library/react";

it("renders without crashing", function () {
  render(<Coin />);
});

it("should match snapshot", function () {
  const { container, debug } =
    render(<Coin
      isHeads={true} />);

  expect(container).toMatchSnapshot();
});

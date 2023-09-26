import { render } from "@testing-library/react";
import Card from "./Card.js";
import TEST_IMAGES from "./_testCommon.js";
const TEST_IMG = TEST_IMAGES[0];

it("renders without crashing", function() {
  render(<Card
    caption={TEST_IMG.caption}
    src={TEST_IMG.src}
    currNum={1}
    totalNum={3} />)
});

it("should match snapshot", function() {
  const { container, debug } =
    render(<Card
      caption={TEST_IMG.caption}
      src={TEST_IMG.src}
      currNum={1}
      totalNum={3} />)

    expect(container).toMatchSnapshot();
});

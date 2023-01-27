import renderer from "react-test-renderer";
import { Footer } from ".";

describe("/Footer", () => {
  it("should render component correctly", () => {
    const result = renderer.create(<Footer />);
    expect(result).toMatchSnapshot();
  });
});

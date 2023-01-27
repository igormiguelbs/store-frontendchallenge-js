import renderer from "react-test-renderer";
import { Header } from ".";

describe("/Header", () => {
  it("should render component correctly", () => {
    const result = renderer.create(<Header />);
    expect(result).toMatchSnapshot();
  });
});

// @flow
// setup file
import "core-js/es6/map"
import "core-js/es6/set"
import { configure } from "enzyme"
import Adapter from "enzyme-adapter-react-16"

configure({ adapter: new Adapter() })

global.requestAnimationFrame = (callback) => {
  setTimeout(callback, 0)
}

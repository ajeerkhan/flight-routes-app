const Adapter = require('enzyme-adapter-react-17-updated')
/**
 * Setup enzyme adapter class for testing env setup.
 */
require('enzyme').configure({adapter: new Adapter()})